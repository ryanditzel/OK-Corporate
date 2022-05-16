import "./styles/App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import CreateReview from "./pages/CreateNewReview";
import CompanyDetail from "./pages/CompanyDetail";
import Profile from "./pages/Profile";
import { CheckSession } from "./services/Auth";
import Footer from "./components/Footer";

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogOut = () => {
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken();
    }
  }, []);

  return (
    <div className="App">
      <header className="nav">
        <Nav
          user={user}
          authenticated={authenticated}
          handleLogOut={handleLogOut}
        />
      </header>
      <main className="Routes">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/signin"
            element={
              <SignIn
                setUser={setUser}
                authenticated={authenticated}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/feed"
            element={<Feed user={user} authenticated={authenticated} />}
          />
          <Route
            path="/companydetail/:id"
            element={
              <CompanyDetail user={user} authenticated={authenticated} />
            }
          />
          <Route
            path="/profile"
            element={<Profile user={user} authenticated={authenticated} />}
          />
          <Route
            path="/createreview"
            element={<CreateReview user={user} authenticated={authenticated} />}
          />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;
