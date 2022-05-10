import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/OK_logo.png";

const Nav = () => {
  return (
    <header>
      <div className="logo-wrapper">
        <Link to="/">
          <img id="logo" src={logo} alt="logo" />
        </Link>
      </div>
    </header>
  );
};

export default Nav;
