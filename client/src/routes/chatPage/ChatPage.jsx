import React, { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import gfm from 'remark-gfm';
import math from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import NewPrompt from "../../components/newPrompt/NewPrompt";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";
import { IKImage } from "imagekitio-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowRight, Copy, Edit3, Loader2, ThumbsUp, ThumbsDown, RotateCcw } from "lucide-react";

export default function ChatPage() {
  const path = useLocation().pathname;
  const chatId = path.split("/").pop();
  const [editingMessageId, setEditingMessageId] = useState(null);

  const { isPending, error, data } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  const handleCopy = () => {
    alert("Content copied!");
  };

  const handleRewrite = (messageId) => {
    setEditingMessageId(messageId);
    // Implement rewrite logic here
  };

  const handleLike = (messageId) => {
    // Implement like logic here
  };

  const handleDislike = (messageId) => {
    // Implement dislike logic here
  };

  return (
    <div className="flex flex-col items-center w-full p-4 sm:p-6 min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col gap-6 p-4 sm:p-6 bg-white shadow-lg rounded-lg">
          <button 
            className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Write Code"
          >
            <Edit3 className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Write Code <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {isPending ? (
            <div className="flex justify-center items-center text-black">
              <Loader2 className="animate-spin mr-2 h-5 w-5" />
              Loading...
            </div>
          ) : error ? (
            <div className="text-red-500 text-center font-semibold">Something went wrong. Please try again later.</div>
          ) : (
            data?.history?.map((message, i) => (
              <div key={i} className={`flex flex-col gap-4 ${message.role === "user" ? "items-end" : "items-start"}`}>
                {message.img && (
                  <div className="relative">
                    <IKImage
                      urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                      path={message.img}
                      height="300"
                      width="400"
                      transformation={[{ height: 300, width: 500 }]}
                      loading="lazy"
                      lqip={{ active: true, quality: 20 }}
                      className="rounded-lg shadow-md"
                      alt="User uploaded image"
                    />
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <CopyToClipboard text={message.img} onCopy={handleCopy}>
                        <button className="p-1 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors">
                          <Copy className="h-4 w-4" />
                        </button>
                      </CopyToClipboard>
                      <button 
                        className="p-1 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
                        onClick={() => handleRewrite(i)}
                      >
                        <Edit3 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}
                <div
                  className={`p-4 sm:p-6 rounded-lg shadow-sm max-w-[90%] sm:max-w-[75%] ${
                    message.role === "user"
                      ? "bg-blue-500 text-black"
                      : "bg-gray-700 text-black"
                  }`}
                  
                >
                  {message.parts && message.parts[0]?.text ? (
                    message.parts[0].text.startsWith("```") ? (
                      <div className="relative bg-gray-800 text-white rounded-md p-3">
                        <CopyToClipboard text={message.parts[0].text.replace(/```/g, '')} onCopy={handleCopy}>
                          <button 
                            className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-700 transition-colors"
                            aria-label="Copy code"
                          >
                            <Copy className="text-gray-300 hover:text-white h-4 w-4 sm:h-5 sm:w-5" />
                          </button>
                        </CopyToClipboard>
                        <SyntaxHighlighter 
                          language="javascript" 
                          style={vscDarkPlus} 
                          className="rounded-md text-xs sm:text-sm overflow-auto max-h-96"
                        >
                          {message.parts[0].text.replace(/```/g, '')}
                        </SyntaxHighlighter>
                      </div>
                    ) : (
                      <Markdown
                        children={message.parts[0].text}
                        remarkPlugins={[gfm, math]}
                        rehypePlugins={[rehypeKatex]}
                        className="prose prose-lg sm:prose-base prose-blue max-w-none dark:prose-invert"
                        components={{
                          h1: ({node, ...props}) => <h1 className="text-2xl font-bold mb-4" {...props} />,
                          h2: ({node, ...props}) => <h2 className="text-xl font-bold mb-3" {...props} />,
                          h3: ({node, ...props}) => <h3 className="text-lg font-bold mb-2" {...props} />,
                          ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
                          ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                          li: ({node, ...props}) => <li className="text-black dark:text-white mb-2" {...props} />,
                          code: ({node, inline, ...props}) => 
                            inline ? (
                              <code className="bg-gray-200 rounded px-1 py-0.5" {...props} />
                            ) : (
                              <SyntaxHighlighter
                                style={vscDarkPlus}
                                language="javascript"
                                PreTag="div"
                                className="rounded-md p-4 my-4"
                                {...props}
                              />
                            )
                        }}
                      />
                    )
                  ) : (
                    <div className="text-red-500 text-sm sm:text-base">No message content available.</div>
                  )}
                </div>
                <div className="flex space-x-2 mt-2">
                  <CopyToClipboard text={message.parts[0].text} onCopy={handleCopy}>
                    <button className="p-1 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors">
                      <Copy className="h-4 w-4" />
                    </button>
                  </CopyToClipboard>
                  <button 
                    className="p-1 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors"
                    onClick={() => handleRewrite(i)}
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                  <button 
                    className="p-1 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors"
                    onClick={() => handleLike(i)}
                  >
                    <ThumbsUp className="h-4 w-4" />
                  </button>
                  <button 
                    className="p-1 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors"
                    onClick={() => handleDislike(i)}
                  >
                    <ThumbsDown className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))
          )}

          {data && <NewPrompt data={data} />}
        </div>
      </div>
    </div>
  );
}
