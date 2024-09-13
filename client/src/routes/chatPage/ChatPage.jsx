import React, { useState, useReducer } from "react";
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

const feedbackReducer = (state, action) => {
  switch (action.type) {
    case 'LIKE':
      return { ...state, [action.messageId]: 'liked' };
    case 'DISLIKE':
      return { ...state, [action.messageId]: 'disliked' };
    case 'LOADING':
      return { ...state, [action.messageId]: 'loading' };
    case 'FEEDBACK_SENT':
      return { ...state, [action.messageId]: 'sent' };
    default:
      return state;
  }
};

const useDebouncedFeedback = (callback, delay) => {
  const [timeoutId, setTimeoutId] = useState(null);

  const debouncedCallback = (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    const id = setTimeout(() => {
      callback(...args);
    }, delay);
    setTimeoutId(id);
  };

  return debouncedCallback;
};

export default function ChatPage() {
  const path = useLocation().pathname;
  const chatId = path.split("/").pop();
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [feedbackState, dispatchFeedback] = useReducer(feedbackReducer, {});

  const { isPending, error, data } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  const handleCopy = () => alert("Content copied!");

  const handleRewrite = (messageId) => {
    setEditingMessageId(messageId);
    // Implement rewrite logic here
    alert("Rewrite functionality to be implemented.");
  };

  const debouncedLike = useDebouncedFeedback((messageId) => {
    if (feedbackState[messageId] !== 'loading') {
      dispatchFeedback({ type: 'LIKE', messageId });
      dispatchFeedback({ type: 'FEEDBACK_SENT', messageId });
      // API call to register "like"
    }
  }, 500);

  const debouncedDislike = useDebouncedFeedback((messageId) => {
    if (feedbackState[messageId] !== 'loading') {
      dispatchFeedback({ type: 'DISLIKE', messageId });
      dispatchFeedback({ type: 'FEEDBACK_SENT', messageId });
      // API call to register "dislike"
    }
  }, 500);

  const handleLike = (messageId) => {
    if (feedbackState[messageId] !== 'sent') {
      dispatchFeedback({ type: 'LOADING', messageId });
      debouncedLike(messageId);
    }
  };

  const handleDislike = (messageId) => {
    if (feedbackState[messageId] !== 'sent') {
      dispatchFeedback({ type: 'LOADING', messageId });
      debouncedDislike(messageId);
    }
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
            <div className="flex justify-center items-center text-gray-600">
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
                        <button className="p-1 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors" aria-label="Copy image URL">
                          <Copy className="h-4 w-4" />
                        </button>
                      </CopyToClipboard>
                      <button 
                        className="p-1 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
                        onClick={() => handleRewrite(i)}
                        aria-label="Rewrite message"
                      >
                        <Edit3 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}
                <div
                  className={`p-4 sm:p-6 rounded-lg shadow-sm max-w-[90%] sm:max-w-[75%] ${
                    message.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
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
                        className="prose prose-sm sm:prose-base prose-blue max-w-none dark:prose-invert tex-base"
                        components={{
                          h1: ({node, ...props}) => <h1 className="text-2xl font-bold mb-4" {...props} />,
                          h2: ({node, ...props}) => <h2 className="text-xl font-bold mb-3" {...props} />,
                          h3: ({node, ...props}) => <h3 className="text-lg font-bold mb-2" {...props} />,
                          h4: ({node, ...props}) => <h4 className="text-md font-bold mb-1" {...props} />,
                          p: ({node, ...props}) => <p className="mb-2 text-base text-black" {...props} />,
                          a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} />,
                          ul: ({node, ...props}) => <ul className="list-disc list-inside mb-2" {...props} />,
                          ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-2" {...props} />,
                          strong: ({node, ...props}) => <strong className="font-bold text-base text-black" {...props} />,
                          text:({node, ...props}) => <span className="text-gray-600" {...props} />,
                          em: ({node, ...props}) => <em className="font-italic text-base text-gray-600" {...props} />,
                          inlineCode: ({node, ...props}) => (
                            <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-600 font-mono" {...props} />
                          ),
                          
                          code: ({node, ...props}) => (
                            <code className="bg-gray-100 px-1 py-0.5 rounded text-red-500 font-mono" {...props} />
                          )
                        }}
                      />
                    )
                  ) : (
                    <p>No content</p>
                  )}
                </div>
                <div className="flex gap-2 mt-2">
                  <CopyToClipboard text={message.parts[0]?.text} onCopy={handleCopy}>
                    <button className="p-1 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors" aria-label="Copy message">
                      <Copy className="h-4 w-4" />
                    </button>
                  </CopyToClipboard>
                  <button 
                    className={`p-1 rounded-full ${feedbackState[i] === 'liked' ? 'bg-green-200 text-green-600' : 'bg-gray-200 text-gray-600'} hover:bg-green-300 transition-colors`}
                    onClick={() => handleLike(i)}
                    aria-label="Like message"
                  >
                    {feedbackState[i] === 'loading' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <ThumbsUp className="h-4 w-4" />
                    )}
                  </button>
                  <button 
                    className={`p-1 rounded-full ${feedbackState[i] === 'disliked' ? 'bg-red-200 text-red-600' : 'bg-gray-200 text-gray-600'} hover:bg-red-300 transition-colors`}
                    onClick={() => handleDislike(i)}
                    aria-label="Dislike message"
                  >
                    {feedbackState[i] === 'loading' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <ThumbsDown className="h-4 w-4" />
                    )}
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
