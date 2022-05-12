import "./styles/App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import LoginContext from "./ContextFiles/LoginContext";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import SignOut from "./components/SignOut";
import Feed from "./pages/Feed";
import CreateReview from "./components/CreateReview";
import CompanyDetail from "./pages/CompanyDetail";

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
            <Route
              path="/signin"
              element={<SignIn loginStatus={loginStatus} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/feed" element={<Feed loginStatus={loginStatus} />} />
            <Route
              path="/company/:id"
              element={<CompanyDetail loginStatus={loginStatus} />}
            />
            <Route
              path="/createreview"
              element={<CreateReview loginStatus={loginStatus} />}
            />
            <Route path="/logout" element={<SignOut />} />
          </Routes>
        </main>
      </LoginContext.Provider>
    </div>
  );
};

export default App;
