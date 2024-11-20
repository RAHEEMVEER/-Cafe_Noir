import React from "react";
import "../style.css";
import Image from "next/image";
import gallery1 from "../../public/images1/gallery-1.jpg";
import gallery2 from "../../public/images1/gallery-2.jpg";
import gallery3 from "../../public/images1/gallery-3.jpg";
import gallery4 from "../../public/images1/gallery-4.jpg";
import gallery5 from "../../public/images1/gallery-5.jpg";
import gallery6 from "../../public/images1/gallery-6.jpg";


export default function Gallery() {
  return (
    <section className="Gallery" id="gallery">
      <div className="section-heading"><h1>Gallery</h1></div>

      <div className="gallery-box">
        <div className="gallery-img-box"><Image src={gallery1} alt="cafe noir gallery"/></div>
        <div className="gallery-img-box"><Image src={gallery2} alt="cafe noir gallery"/></div>
        <div className="gallery-img-box"><Image src={gallery3} alt="cafe noir gallery"/></div>
        <div className="gallery-img-box"><Image src={gallery4} alt="cafe noir gallery"/></div>
        <div className="gallery-img-box"><Image src={gallery5} alt="cafe noir gallery"/></div>
        <div className="gallery-img-box"><Image src={gallery6} alt="cafe noir gallery"/></div>
      </div>
    </section>
  );
}
