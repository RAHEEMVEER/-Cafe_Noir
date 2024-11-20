import React from "react";
import "../style.css";

export default function Contact() {
  return (
    <section className="Contact" id="contact">
      <div className="section-heading">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-box">
        <div className="box-1">
            <p><i className='bx bx-envelope'></i><span>CaféNoire572@gmail.com</span></p>
            <p><i className='bx bx-phone'></i><span>123-456-789345</span></p>
            <p><i className='bx bx-time-five'></i><span>Monday - Friday 9:00AM - 5:00PM</span></p>
            <p><i className='bx bx-time-five'></i><span>Saturday: 10:00AM - 4:00PM</span></p>
            <p><i className='bx bx-time-five'></i><span>Sunday: Closed</span></p>
            <p><i className='bx bx-globe'></i><span>www.codewithraheem.com</span></p>
            <p><i className="bx bx-location-plus"></i><span>123 Campsite Avenue CA 52461, USA California.</span></p>
        </div>
        
        <form className="box-2">
          <input type="text" id="username" placeholder="Name" required/>
          <input type="number" id="userphone" placeholder="Phone" required/>
          <input type="email" placeholder="Email Address" required/>
          <textarea name="customer-msg" placeholder="Message" required></textarea>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
}
