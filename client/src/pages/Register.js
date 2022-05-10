import React, { useState, useContext } from "react";
import AxiosInstance from "../Axios/AxiosInstance";
import { LoginContext } from "../ContextFiles/LoginContext";
import "../styles/register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Submit form
  async function handleSubmit(event) {
    event.preventDefault();
    await AxiosInstance.post("/users/create", {
      email: formData.email,
      first_name: formData.first_name,
      last_name: formData.last_name,
      username: formData.username,
      password: formData.password,
    })
      // Then, log the newly made user in
      .then((res) => {
        localStorage.setItem("username", formData.username);
        localStorage.setItem("user_id", res.data.id);
        AxiosInstance.post("token/obtain/", {
          username: formData.username,
          password: formData.password,
        }).then((res) => {
          AxiosInstance.defaults.headers[
            "Authorization"
          ] = `JWT ${res.data.access}`;
          localStorage.setItem("access_token", res.data.access);
          localStorage.setItem("refresh_token", res.data.refresh);
          return res;
        });
      })
      .catch((error) => console.error);
  }

  return (
    <div className="register-page">
      <h1>Register</h1>
      <div className="screen__content">
        <div>
          <h3 className="register-description">START FOR FREE</h3>
          <h1 className="register-header">Sign up</h1>
        </div>
        <form className="col-3" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password (Minimum 8 Characters)"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Register</button>
          <div className="form-footer">
            <p className="register-rules">
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </p>
            <a href="/login/">Sign In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
