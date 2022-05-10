import "./styles/App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import LoginContext from "./ContextFiles/LoginContext";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import SignOut from "./components/SignOut";

const App = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <div className="App">
      <LoginContext.Provider value={{ loginStatus, setLoginStatus }}>
        <header className="nav">
          <Nav />
        </header>
        <main className="Routes">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/logout" element={<SignOut />} />
          </Routes>
        </main>
      </LoginContext.Provider>
    </div>
  );
};

export default App;
