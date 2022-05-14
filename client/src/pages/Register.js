import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../services/Auth";
import "../styles/register.css";

const Register = () => {
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    first_name: "",
    last_name: "",
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await RegisterUser({
      email: formValues.email,
      firstName: formValues.first_name,
      lastName: formValues.last_name,
      userName: formValues.username,
      pass: formValues.password,
    });
    console.log(RegisterUser);
    setFormValues({
      email: "",
      first_name: "",
      last_name: "",
      username: "",
      password: "",
    });
    navigate("/signin");
  };

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
            value={formValues.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formValues.first_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formValues.last_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password (Minimum 8 Characters)"
            value={formValues.password}
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
