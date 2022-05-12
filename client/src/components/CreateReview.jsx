import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../Axios/AxiosInstance";
import "../styles/createpost.css";

const CreateReview = () => {
  const username = localStorage.getItem("username");

  const initialState = {
    user: username,
    company: "",
    title: "",
    jobtitle: "",
    body: "",
  };

  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    await AxiosInstance.post("review/create", {
      user: form.user,
      company: form.company,
      title: form.title,
      jobtitle: form.jobtitle,
      body: form.body,
    }).then((res) => {
      navigate("/review/success");
      console.log(res);
      return res.data;
    });
  }

  return (
    <div className="createpost">
      <div className="createpost_content">
        <h3>Tell us your thoughts below!</h3>
      </div>
      <div>
        <form className="col-1" onSubmit={handleSubmit}>
          <div className="create-wrapper">
            <label>Let’s begin with the company's name</label>
            <input
              className="create-input"
              onChange={handleChange}
              name="title"
              type="text"
              placeholder="Company Name"
              value={form.title}
              required
            />
          </div>
          <div className="create-wrapper">
            <label>What would you like to title this review?</label>
            <input
              className="create-input"
              onChange={handleChange}
              type="text"
              name="review"
              placeholder="Review Title"
              value={form.image}
              required
            />
          </div>
          <div className="create-wrapper">
            <label>What was your job title?</label>
            <input
              className="create-input"
              onChange={handleChange}
              name="role"
              type="text"
              placeholder="Job Title"
              value={form.title}
              required
            />
          </div>
          <div className="create-wrapper">
            <label id="lable-3">Tell everyone your thoughts!</label>
            <textarea
              className="create-input-textarea"
              onChange={handleChange}
              name="body"
              type="textarea"
              placeholder="Project Details(255 words limited)"
              value={form.body}
              required
            />
          </div>
          <button className="postButton">Post My Project</button>
        </form>
      </div>
    </div>
  );
};

export default CreateReview;
