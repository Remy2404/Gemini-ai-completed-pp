import React, { useEffect, useRef, useState } from "react";
import { IKImage } from "imagekitio-react";
import Markdown from "react-markdown";
import Upload from "../../components/upload/Upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Send, Upload as UploadIcon } from "lucide-react";
import model from "../../lib/gemini";

export default function NewPrompt({ data }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: { filePath: "" },
    aiData: {},
  });

  const chat = model.startChat({
    history: data?.history?.map(({ role, parts }) => ({
      role,
      parts: [{ text: parts[0].text }],
    })) || [],
    generationConfig: {},
  });

  const endRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [data, question, answer, img.dbData]);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return fetch(`${import.meta.env.VITE_API_URL}/api/chats/${data._id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question.length ? question : undefined,
          answer,
          img: img.dbData?.filePath || undefined,
        }),
      }).then((res) => res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chat", data._id] }).then(() => {
        formRef.current?.reset();
        setQuestion("");
        setAnswer("");
        setImg({
          isLoading: false,
          error: "",
          dbData: { filePath: "" },
          aiData: {},
        });
      });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const add = async (text, isInitial) => {
    if (!isInitial) setQuestion(text);

    try {
      const result = await chat.sendMessageStream(
        Object.entries(img.aiData).length ? [img.aiData, text] : [text]
      );
      let accumulatedText = "";
      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        console.log(chunkText);
        accumulatedText += chunkText;
        setAnswer(accumulatedText);
      }

      mutation.mutate();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get("text");
    if (!text) return;
    add(text, false);
  };

  const hasRun = useRef(false);

  useEffect(() => {
    if (!hasRun.current) {
      if (data?.history?.length === 1) {
        add(data.history[0].parts[0].text, true);
      }
    }
    hasRun.current = true;
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      {img.isLoading && (
        <div className="text-center text-gray-500">Loading...</div>
      )}
      {img.dbData?.filePath && (
        <div className="flex justify-center">
          <IKImage
            urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
            path={img.dbData.filePath}
            width="300"
            height="300"
            transformation={[{ width: 300, height: 300, cropMode: 'maintain_ratio' }]}
            className="rounded-lg shadow-md border-2 border-gray-300 object-cover"
          />
        </div>
      )}
      {question && (
        <div className="bg-blue-100 p-4 rounded-lg text-blue-800 shadow-sm">
          {question}
        </div>
      )}
      {answer && (
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <Markdown className="prose prose-sm sm:prose-base max-w-none">
            {answer}
          </Markdown>
        </div>
      )}
      <div ref={endRef}></div>
      <form
        className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-sm"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <label
          htmlFor="file"
          className="cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <UploadIcon className="w-6 h-6 text-gray-500" />
        </label>
        <input 
          id="file" 
          type="file" 
          multiple={false} 
          hidden 
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onloadend = () => {
                setImg({
                  ...img,
                  isLoading: true,
                  aiData: {
                    inlineData: {
                      data: reader.result.split(",")[1],
                      mimeType: file.type,
                    },
                  },
                });
              };
              reader.readAsDataURL(file);
            }
          }}
        />
        <input
          type="text"
          name="text"
          placeholder="Ask anything..."
          className="flex-grow p-2 text-gray-800 bg-transparent focus:outline-none"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
