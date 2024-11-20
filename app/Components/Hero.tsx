import React from "react";
import Image from "next/image";
import homePic from "../../public/images1/coffee-hero-section.png";
import "../style.css";

export default function Hero() {
  return (
    <section className="Home" id="home">
      <div className="home-text">
        <h5>#Coffee for hot days</h5>
        <h3>Best Coffee</h3>
        <h1 id="brand_name">- Café Noire</h1>
        <p>"Café Noire offers a unique blend of bold, rich coffee flavors, creating the perfect spot for true coffee lovers to enjoy."</p>
        <div className="home-text2">
          <div className="order-button"><a href="#contact">Order Now</a></div>
          <h1>$15.78<sub><span id="showCase">Popular Price</span></sub></h1>
        </div>
      </div>
      <div className="home-image"><Image src={homePic} alt="coffee pic" /></div>
    </section>
  );
}
