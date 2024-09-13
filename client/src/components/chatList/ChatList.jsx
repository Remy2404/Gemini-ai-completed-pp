import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Home, MessageSquare, Info, ChevronRight } from "lucide-react";

export default function ChatList({ isOpen }) {
  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  return (
    <aside className={`fixed inset-y-0 left-0 z-20 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out`}>
      <nav className="h-full flex flex-col">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-700">DASHBOARD</h2>
          <div className="mt-4 space-y-2">
            <Link to="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Home className="w-5 h-5" />
              <span>Create a new Chat</span>
            </Link>
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <MessageSquare className="w-5 h-5" />
              <span>Explore Gemini AI</span>
            </Link>
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Info className="w-5 h-5" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
        <hr className="border-gray-200" />
        <div className="p-4 flex-grow overflow-y-auto">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">RECENT CHATS</h2>
          <div className="space-y-1">
            {isPending ? (
              <p className="text-gray-500">Loading...</p>
            ) : error ? (
              <p className="text-red-500">Something went wrong!</p>
            ) : (
              data?.map((chat) => (
                <Link
                  to={`/dashboard/chats/${chat._id}`}
                  key={chat._id}
                  className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  {chat.title}
                </Link>
              ))
            )}
          </div>
        </div>
        <div className="p-4 bg-gray-50">
          <div className="flex items-center space-x-3">
            <img src="/logo_app.png" alt="logo" className="w-10 h-10" />
            <div className="flex-grow">
              <p className="text-sm font-medium text-gray-900">Upgrade to Gemini AI Pro</p>
              <p className="text-xs text-gray-500">Get unlimited access to all features</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </nav>
    </aside>
  );
}