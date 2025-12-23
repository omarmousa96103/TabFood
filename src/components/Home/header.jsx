import React from "react";
import { useNavigate } from "react-router-dom";
import SettingsIcon from "../../assets/settings.png";
import "../../styles/HomeSection/header.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className="title">TabFood</h1>

      <img
        className="settings-button"
        src={SettingsIcon}
        alt="Settings"
        role="button"
        tabIndex={0}
        onClick={() => navigate("/settings")}
        onKeyDown={(e) => e.key === "Enter" && navigate("/settings")}
      />
    </header>
  );
}
