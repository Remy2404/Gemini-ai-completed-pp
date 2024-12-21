import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, X, File } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Upload from '../upload/Upload';

export default function ResponsiveChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState([]);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 100)}px`;
    }
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() || files.length > 0) {
      onSendMessage(message, files);
      setMessage('');
      setFiles([]);
    }
  };

  const handleFileChange = (newFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 sm:p-4">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence>
          {files.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mb-2 flex flex-wrap gap-2 max-h-24 overflow-y-auto"
            >
              {files.map((file, index) => (
                <div key={index} className="bg-gray-100 rounded-full py-1 px-3 flex items-center text-sm">
                  <File size={14} className="text-gray-500 mr-1" />
                  <span className="truncate max-w-[100px]">{file.name}</span>
                  <button
                    onClick={() => removeFile(index)}
                    className="ml-1 text-gray-500 hover:text-red-500 focus:outline-none"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <form onSubmit={handleSubmit} className="flex items-end space-x-2">
          <Upload onFileSelect={handleFileChange}>
            <button
              type="button"
              className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Paperclip size={20} />
            </button>
          </Upload>
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask a question..."
            className="flex-grow p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            rows={1}
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!message.trim() && files.length === 0}
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

