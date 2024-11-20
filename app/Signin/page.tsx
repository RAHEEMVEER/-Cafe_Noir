import React from "react";
import "./style.css";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function SignIn() {
  return (
    <div className="signin-container">
      <form>
        <h1>Sign-In</h1>
        <div className="input-box">
          <div className="input-field"><i className="bx bxl-gmail"></i><input type="email" placeholder="Email" /></div>
          <div className="input-field"><i className="bx bxs-lock"></i><input type="password" placeholder="Password" /></div>
        </div>

        <div className="platforms">
          <div className="fb-platform"><a href="/"><i className='bx bxl-facebook'></i><span>Continue with facebook</span></a></div>
          <div className="gog-platform"><a href="/"><i><FaGoogle /></i><span>Continue with google</span></a></div>
        </div>
        
        <div className="signbtn-div"><button>Sign In</button></div>
      </form>
    </div>
  );
}
