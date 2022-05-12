import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/OK_logo.png";
import LoginContext from "../ContextFiles/LoginContext";

const Nav = ({ handleLogOut }) => {
  const { loginStatus } = useContext(LoginContext);

  const [showLinks, setShowLinks] = useState(false);

  let authenticatedOptions;
  if (loginStatus) {
    authenticatedOptions = (
      <nav>
        {/* <div className="creatpost">
          <Link to="/createpost">
            <button className="creatpostbtn">Create A Review</button>
          </Link>
        </div> */}

        <div className="rightside" id={showLinks ? "hidden" : ""}>
          <Link className="rightsideLink" to="/credits">
            Credits
          </Link>
          <Link className="rightsideLink" to="/feed">
            Feed
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
        <Link to="/">
          {/* <img id="logo" src={logo} alt="logo" /> */}
          OK Corporate
        </Link>
        {loginStatus ? authenticatedOptions : publicOptions}
      </div>
    </header>
  );
};

export default Nav;
