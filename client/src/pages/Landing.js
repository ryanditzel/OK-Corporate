import React from "react";
import "../styles/landing.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  let navigate = useNavigate();

  return (
    <main className="landing-container">
      <div className="landing-leftside"></div>
      <div className="landing-rightside">
        <div className="landing-content">
          <h3 className="landing-header">
            Review and discover companies at
            <br />
            <span id="OK">OK Corporate</span>
          </h3>
          <p className="landing-description">
            Join today to create and explore real reviews of companies that are
            written by real employees.
          </p>
        </div>
        <div className="landing-button-wrapper">
          <div className="signupbutton">
            <button
              className="landingbutton"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
          <div className="signinbutton">
            <button
              className="landingbuttonSignin"
              onClick={() => navigate("/signin")}
            >
              Sign in
            </button>
            <p className="backto-Signin">Already have an account?</p>
          </div>
        </div>
        <div className="counter"></div>
      </div>
    </main>
  );
};

export default Landing;
