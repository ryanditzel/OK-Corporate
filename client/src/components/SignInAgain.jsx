import React from "react";
import { useNavigate } from "react-router-dom";

const SignInAgain = () => {
  let navigate = useNavigate();

  return (
    <div
      className="must-signin"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "200px",
      }}
    >
      <h3 style={{ fontSize: "36px" }} className="signin-header">
        Oops! Please log in
      </h3>
      <button
        style={{ margin: "10px 0" }}
        className="landingbutton"
        onClick={() => navigate("/signin")}
      >
        Sign in
      </button>
      <button className="landingbuttonSignin" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default SignInAgain;
