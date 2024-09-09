import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import ImageKit from "imagekit";
import mongoose from "mongoose";
import Chat from "./models/chat.js";
import UserChats from "./models/userChats.js";
import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node"; 
import dotenv from "dotenv";

dotenv.config();
// Updated import for Clerk

const port = process.env.PORT || 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS options
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

// Initialize ImageKit
const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

// Use Clerk middleware for authentication
app.use(ClerkExpressWithAuth());

// Upload image middleware
app.post("/api/upload", (req, res) => {
  const { signature, expire, token } = req.body;
  res.send({ signature, expire, token });
});
//rewrite rule 
app.use((req, res, next) => {
  const newPath = req.path.replace("/api", "");
  req.url = newPath;
  next();
  // Continue to the next middleware or route handler:
  const filePath = path.join(__dirname, "client", "build", newPath);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    next();
  }

  // For example, you could redirect to a login page if the user is not authenticated
});

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.get("/api/upload", (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.post("/api/chats", async (req, res) => {
  const userId = req.auth.userId; // Ensure userId is retrieved from Clerk
  const { text } = req.body;

  if (!userId) {
    return res.status(401).send("Unauthenticated!"); // Handle unauthenticated access
  }

  try {
    // CREATE A NEW CHAT
    const newChat = new Chat({
      userId: userId,
      history: [{ role: "user", parts: [{ text }] }],
    });

    const savedChat = await newChat.save();

    // CHECK IF THE USERCHATS EXISTS
    const userChats = await UserChats.find({ userId: userId });

    // IF DOESN'T EXIST CREATE A NEW ONE AND ADD THE CHAT IN THE CHATS ARRAY
    if (!userChats.length) {
      const newUserChats = new UserChats({
        userId: userId,
        chats: [
          {
            _id: savedChat._id,
            title: text.substring(0, 40),
          },
        ],
      });

      await newUserChats.save();
    } else {
      // IF EXISTS, PUSH THE CHAT TO THE EXISTING ARRAY
      await UserChats.updateOne(
        { userId: userId },
        {
          $push: {
            chats: {
              _id: savedChat._id,
              title: text.substring(0, 40),
            },
          },
        }
      );
    }
    res.status(201).send(newChat._id);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating chat!");
  }
});

// Other routes with Clerk authentication
app.get("/api/userchats", async (req, res) => {
  const userId = req.auth.userId;

  if (!userId) {
    return res.status(401).send("Unauthenticated!");
  }

  try {
    const userChats = await UserChats.find({ userId });
    res.status(200).send(userChats[0]?.chats || []);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching user chats!");
  }
});

app.get("/api/chats/:id", async (req, res) => {
  const userId = req.auth.userId;

  if (!userId) {
    return res.status(401).send("Unauthenticated!");
  }

  try {
    const chat = await Chat.findOne({ _id: req.params.id, userId });
    res.status(200).send(chat);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching chat!");
  }
});

app.put("/api/chats/:id", async (req, res) => {
  const userId = req.auth.userId;

  if (!userId) {
    return res.status(401).send("Unauthenticated!");
  }

  const { question, answer, img } = req.body;

  const newItems = [
    ...(question ? [{ role: "user", parts: [{ text: question }], ...(img && { img }) }] : []),
    { role: "model", parts: [{ text: answer }] },
  ];

  try {
    const updatedChat = await Chat.updateOne(
      { _id: req.params.id, userId },
      {
        $push: {
          history: {
            $each: newItems,
          },
        },
      }
    );
    res.status(200).send(updatedChat);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding conversation!");
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error!");
});

// Serve static files in production
app.use(express.static(path.join(__dirname, "./client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist", "index.html"));
});

// Start the server
app.listen(port, () => {
  connect();
  console.log(`Server running on port ${port}`);
});