import { useState } from 'react'
import { Send, Paperclip } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ChatInterface() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }])
      setInput('')
      // Here you would typically send the message to your AI backend
      // and then add the response to the messages array
    }
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-50 p-6">
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg p-3 ${
              message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'
            }`}>
              {message.text}
            </div>
          </motion.div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex items-center space-x-2">
        <button type="button" className="p-2 text-gray-500 hover:text-gray-700">
          <Paperclip className="w-5 h-5" />
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  )
}

