import React from "react";
import { useNavigate } from "react-router-dom";

import homeIcon from "../assets/sidebar/home.png";
import searchIcon from "../assets/sidebar/search.png";
import chatbotIcon from "../assets/sidebar/chatbot.png";
import postIcon from "../assets/sidebar/post.png";
import messagesIcon from "../assets/sidebar/Chat.png";
import notificationIcon from "../assets/sidebar/Notifications.png";

import "../styles/sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  const items = [
    { icon: homeIcon, label: "Home", path: "/home" },
    { icon: searchIcon, label: "Search", path: "/search" },
    { icon: chatbotIcon, label: "Chatbot", path: "/chatbot" },
    { icon: messagesIcon, label: "Messages", path: "/messages" },
    { icon: postIcon, label: "Post", path: "/post" },
    { icon: notificationIcon, label: "Notifications", path: "/notifications" },
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {items.map((item) => (
          <button
            key={item.path}
            className="sidebar-item"
            onClick={() => navigate(item.path)}
            aria-label={item.label}
            type="button"
          >
            <img className="sidebar-icon" src={item.icon} alt={item.label} />
          </button>
        ))}
      </nav>
    </aside>
  );
}
