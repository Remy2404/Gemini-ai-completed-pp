import { motion } from 'framer-motion'
import { Home, MessageSquare, Settings, User, PlusCircle } from 'lucide-react'
import Link from 'next/link'

const menuItems = [
  { icon: Home, text: 'Home', href: '/dashboard' },
  { icon: MessageSquare, text: 'Chat History', href: '/dashboard/history' },
  { icon: Settings, text: 'Settings', href: '/dashboard/settings' },
  { icon: User, text: 'Profile', href: '/dashboard/profile' },
]

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <motion.aside
      className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-20"
      initial={false}
      animate={{ x: isOpen ? 0 : '-100%' }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-full">
        <div className="p-5">
          <h2 className="text-2xl font-bold text-gray-800">ChatGPT</h2>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2 p-5">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-2 transition-colors duration-200">
                  <item.icon className="w-5 h-5" />
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-5">
          <button className="w-full flex items-center justify-center space-x-2 bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition-colors duration-200">
            <PlusCircle className="w-5 h-5" />
            <span>New Chat</span>
          </button>
        </div>
      </div>
    </motion.aside>
  )
}

