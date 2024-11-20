import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Testimonials from "./Components/Testimonials";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";

export default function MainPage() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <Gallery />
      <Contact />
    </>
  );
}
