'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from '@/components/Sidebar'
import ChatInterface from '@/components/ChatInterface'
import Header from '@/components/Header'

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <motion.main
        className="flex-1 flex flex-col"
        initial={false}
        animate={{ marginLeft: isSidebarOpen ? '16rem' : '0' }}
        transition={{ duration: 0.3 }}
      >
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <ChatInterface />
      </motion.main>
    </div>
  )
}

