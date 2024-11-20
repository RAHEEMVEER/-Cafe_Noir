import React from "react";
import "../style.css";

export default function Footer() {
  return (
    <footer>
      <div className="copyright-text"><p>&copy; 2024 Café Noire</p></div>
      <div className="social-links">
        <a href="#"><i className="bx bxl-facebook"></i></a>
        <a href="#"><i className="bx bxl-whatsapp"></i></a>
        <a href="#"><i className="bx bxl-instagram"></i></a>
        <a href="#"><i className="bx bxl-twitter"></i></a>
      </div>

      <div className="policy-text">
        <a href="#">Privacy policy</a>
        <span className="seperator">&bull;</span>
        <a href="#">Refund policy</a>
      </div>
    </footer>
  );
}
