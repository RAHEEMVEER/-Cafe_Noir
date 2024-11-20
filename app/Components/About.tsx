import React from "react";
import "../style.css";
import Image from "next/image";
import AboutPic from "../../public/images/about-pic.jpg";

export default function About() {
  return (
    <section className="About" id="about">
      <div className="about-image"><Image src={AboutPic} alt="about-img" /></div>
      <div className="about-content">
        <div className="section-heading"><h1>About Us</h1></div>
        <p>
          "Café Noire is your go-to destination for expertly crafted coffee. We
          take pride in sourcing the finest beans, roasting them to perfection,
          and serving rich, bold flavors in every cup. Whether you're seeking a
          morning boost or an afternoon escape, Café Noire promises a memorable
          coffee experience."
        </p>
        <div className="social-container">
          <a href="#"><i className="bx bxl-facebook"></i></a>
          <a href="#"><i className="bx bxl-whatsapp"></i></a>
          <a href="#"><i className="bx bxl-instagram"></i></a>
          <a href="#"><i className="bx bxl-twitter"></i></a>
        </div>
      </div>
    </section>
  );
}
