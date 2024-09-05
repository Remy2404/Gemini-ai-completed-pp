import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./dashboardLayout.css";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import ChatList from "../../components/chatList/ChatList";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return "Loading...";

  return (
    <div className="dashboardLayout">
      <ChatList isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`content ${isSidebarOpen ? '' : 'fullWidth'}`}>
        <Outlet context={{ isSidebarOpen }} />
      </div>
    </div>
  );
};

export default DashboardLayout;
