import { Menu, Bell, User } from 'lucide-react'

export default function Header({ toggleSidebar }) {
  return (
    <header className="bg-white shadow-sm p-4 flex items-center justify-between">
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <Menu className="w-6 h-6" />
      </button>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
          <Bell className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
          <User className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}

