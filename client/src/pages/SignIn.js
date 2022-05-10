import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../Axios/AxiosInstance";
import { LoginContext } from "../ContextFiles/LoginContext";

function SignIn() {
  const navigate = useNavigate();

  const { setLoginStatus } = useContext(LoginContext);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    await AxiosInstance.post("token/obtain/", {
      username: login.username,
      password: login.password,
    })
      .then((res) => {
        if (res.status === 200) {
          AxiosInstance.defaults.headers[
            "Authorization"
          ] = `JWT ${res.data.access}`;
          localStorage.setItem("access_token", res.data.access);
          localStorage.setItem("refresh_token", res.data.refresh);
        } else {
          return res;
        }
      })
      .then((res) => {
        AxiosInstance.get(`users/${login.username}`).then((res) => {
          localStorage.setItem("user_id", res.data.id);
          localStorage.setItem("username", login.username);
          setLoginStatus(true);
          navigate("/");
        });
      })
      .catch((error) => console.error);
  }

  return (
    <div className="form login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={login.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password (Minimum 8 Characters)"
          value={login.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      <div className="form-footer">
        <p>Don't have an account yet?</p>
        <a href="/register/">Register</a>
      </div>
    </div>
  );
}

export default SignIn;
