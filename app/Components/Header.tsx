"use client";

import React, { useState } from "react";
import "../style.css";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Sidebar from "../Components/Sidebar";

import Link from "next/link";

export default function Header() {
  const [isSidebar, setisSidebar] = useState(false);

  function toggleSidebar() {
    setisSidebar(!isSidebar);
  }

  function closeSidebar() {
    setisSidebar(false);
  }

  return (
    <header>
      <a href="#" className="logo"><Image src={logo} alt="Cafe_Noire Logo" /></a>

      <nav>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="signMenuBar">
        <div className="signin-btn"><Link href="/Signin">Sign In</Link></div>
        <div className="menu-icon"><i className="bx bx-menu-alt-right" onClick={toggleSidebar}></i></div>
      </div>
      
      {isSidebar && <Sidebar onClose={closeSidebar} isActive={isSidebar}/>}
    </header>
  );
}
