import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/OK_logo.png";

const Nav = ({ authenticated, user, handleLogOut }) => {
  const [showLinks, setShowLinks] = useState(false);

  let authenticatedOptions;
  // console.log(user, loginStatus);
  if (user) {
    authenticatedOptions = (
      <nav>
        <div className="creatreview">
          <Link to="/createreview">
            <button className="creatreviewbtn">Create A Review</button>
          </Link>
        </div>

        <div className="rightside" id={showLinks ? "hidden" : ""}>
          {/* <Link className="rightsideLink" to="/credits">
            Credits
          </Link> */}
          <Link className="rightsideLink" to="/feed">
            Feed
          </Link>
          <Link className="rightsideLink" to="/profile">
            Profile
          </Link>
          <Link className="rightsideLink" onClick={handleLogOut} to="/">
            Sign Out
          </Link>
        </div>

        <div className="hidden-menu">
          <button onClick={() => setShowLinks(!showLinks)}></button>
        </div>
      </nav>
    );
  }

  const publicOptions = (
    <nav className="signin-page">
      <Link to="/signin">Sign In</Link>
    </nav>
  );

  return (
    <header>
      <div className="logo-wrapper">
        <Link to="/feed">
          {/* <img id="nav-logo" src={logo} alt="logo" /> */}
          OK Corporate
        </Link>
        {authenticated && user ? authenticatedOptions : publicOptions}
      </div>
    </header>
  );
};

export default Nav;
