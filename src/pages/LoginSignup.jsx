import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="container">
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <form action="#">
            <div class="field">
              <input type="text" required />
              <label>Email Address</label>
            </div>
            <div class="field">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div class="field">
              <input type="submit" value="Sign Up" />
            </div>
            <div class="signup-link">
              Already a member? <a href="#">Login Here</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
