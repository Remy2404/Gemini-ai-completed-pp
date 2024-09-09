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
import fs from 'fs';

dotenv.config();

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

// Rewrite rule
app.use((req, res, next) => {
  const newPath = req.path.replace("/api", "");
  req.url = newPath;
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.get("/api/upload", (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.get("/api/userchats", async (req, res) => {
  const userId = req.auth.userId;

  if (!userId) {
    console.log("Unauthenticated request to /api/userchats");
    return res.status(401).send("Unauthenticated!");
  }

  console.log(`Fetching chats for user: ${userId}`);

  try {
    const userChats = await UserChats.find({ userId });
    console.log(`Found ${userChats.length} user chat documents`);
    
    if (userChats.length > 0) {
      console.log(`Returning ${userChats[0].chats.length} chats`);
      res.status(200).send(userChats[0].chats || []);
    } else {
      console.log("No user chats found, returning empty array");
      res.status(200).send([]);
    }
  } catch (err) {
    console.error("Error fetching user chats:", err);
    res.status(500).json({ error: "Error fetching user chats", details: err.message });
  }
});

// Add this new route after the existing /api/userchats route

app.get("/api/chats", async (req, res) => {
  const userId = req.auth.userId;

  if (!userId) {
    console.log("Unauthenticated request to /api/chats");
    return res.status(401).send("Unauthenticated!");
  }

  console.log(`Fetching all chats for user: ${userId}`);

  try {
    const chats = await Chat.find({ userId });
    console.log(`Found ${chats.length} chats`);
    res.status(200).send(chats);
  } catch (err) {
    console.error("Error fetching chats:", err);
    res.status(500).json({ error: "Error fetching chats", details: err.message });
  }
});

// Other routes...

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
const clientPath = path.join(__dirname, "../client/dist");
console.log("Client path:", clientPath);

// Check if the client directory exists
if (!fs.existsSync(clientPath)) {
  console.error(`Client directory not found: ${clientPath}`);
}

app.use(express.static(clientPath));

app.get("*", (req, res) => {
  const indexPath = path.join(clientPath, "index.html");
  console.log("Index path:", indexPath);
  
  // Check if the index.html file exists
  if (!fs.existsSync(indexPath)) {
    console.error(`index.html not found: ${indexPath}`);
    return res.status(404).send("Page not found");
  }
  
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(500).send("Error loading page");
    }
  });
});

// Start the server
app.listen(port, () => {
  connect();
  console.log(`Server running on port ${port}`);
});