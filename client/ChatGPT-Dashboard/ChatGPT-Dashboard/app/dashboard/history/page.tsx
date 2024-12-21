'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Trash2 } from 'lucide-react'

const mockChatHistory = [
  { id: 1, title: 'AI Basics Discussion', date: '2023-06-01' },
  { id: 2, title: 'Machine Learning Project', date: '2023-06-03' },
  { id: 3, title: 'Neural Networks Explained', date: '2023-06-05' },
]

export default function ChatHistory() {
  const [chatHistory, setChatHistory] = useState(mockChatHistory)

  const deleteChat = (id) => {
    setChatHistory(chatHistory.filter(chat => chat.id !== id))
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Chat History</h1>
      <div className="space-y-4">
        {chatHistory.map((chat) => (
          <motion.div
            key={chat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <MessageSquare className="w-6 h-6 text-blue-500" />
              <div>
                <h2 className="text-lg font-semibold">{chat.title}</h2>
                <p className="text-sm text-gray-500">{chat.date}</p>
              </div>
            </div>
            <button
              onClick={() => deleteChat(chat.id)}
              className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors duration-200"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

