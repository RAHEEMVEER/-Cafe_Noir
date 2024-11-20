"use client";

import React from "react";
import "../style.css";
import Image from "next/image";
import logo from "../../public/images/logo.png";

export default function Sidebar({
  isActive,
  onClose,
}: {
  isActive: boolean;
  onClose: () => void;
}) {
  return (
    <div className={`sidebar-container ${isActive ? "open" : "close"}`}>
      <div className="sidebar-box1">
        <a href="#" className="logo"><Image src={logo} alt="Cafe_Noire Logo" /></a>
        <i className="bx bx-x" onClick={onClose}></i>
      </div>
      <div className="sidebar-box2">
        <nav onClick={onClose}>
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  );
}
