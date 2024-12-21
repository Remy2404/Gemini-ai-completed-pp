import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Home, MessageSquare, Info, ChevronRight, Plus } from 'lucide-react';
import { motion } from "framer-motion";

export default function ChatList({ isOpen }) {
  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  return (
    <aside className="w-64 bg-white shadow-lg h-full overflow-y-auto">
      <nav className="h-full flex flex-col">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-700">DASHBOARD</h2>
          <div className="mt-4 space-y-2">
            <Link to="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link to="/dashboard/new-chat" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Plus className="w-5 h-5" />
              <span>New Chat</span>
            </Link>
            <Link to="/explore" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <MessageSquare className="w-5 h-5" />
              <span>Explore AI</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Info className="w-5 h-5" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
        <hr className="border-gray-200" />
        <div className="p-4 flex-grow">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">RECENT CHATS</h2>
          <div className="space-y-1">
            {isPending ? (
              <p className="text-gray-500">Loading...</p>
            ) : error ? (
              <p className="text-red-500">Something went wrong!</p>
            ) : (
              data?.map((chat) => (
                <motion.div
                  key={chat._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={`/dashboard/chats/${chat._id}`}
                    className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors duration-200"
                  >
                    {chat.title}
                  </Link>
                </motion.div>
              ))
            )}
          </div>
        </div>
        <div className="p-4 bg-gray-50">
          <Link to="/upgrade" className="flex items-center space-x-3 hover:bg-gray-100 rounded-md p-2 transition-colors duration-200">
            <img src="/logo_app.png" alt="logo" className="w-10 h-10" />
            <div className="flex-grow">
              <p className="text-sm font-medium text-gray-900">Upgrade to Pro</p>
              <p className="text-xs text-gray-500">Get unlimited access</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>
        </div>
      </nav>
    </aside>
  );
}
