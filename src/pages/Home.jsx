import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Home/header";
import Sidebar from "../components/sidebar";
import "../styles/HomeSection/home.css";
export default function Home() {
    return (
        <div className="home-page">
            <Header />
            <Sidebar />
          

        </div>
    );
}