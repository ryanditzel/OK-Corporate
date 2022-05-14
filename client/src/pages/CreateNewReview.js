import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateReview } from "../services/PostService";
import "../styles/createpost.css";

const CreateNewReview = ({ user, authenticated }) => {
  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    userId: user.id,
    company: "",
    title: "",
    jobtitle: "",
    body: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await CreateReview(formValues);
    setFormValues({
      company: "",
      title: "",
      jobtitle: "",
      body: "",
    });
    navigate("/feed");
  };

  return user && authenticated ? (
    <div className="createpost">
      <div className="createpost_content">
        <h3>Tell us your thoughts below!</h3>
      </div>
      <div className="create-wrapper">
        <form className="col-1" onSubmit={handleSubmit}>
          <div className="create-wrapper">
            <label>Let’s begin with the company's name</label>
            <input
              className="create-input"
              onChange={handleChange}
              name="title"
              type="text"
              placeholder="Company Name"
              value={formValues.title}
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
              value={formValues.image}
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
              value={formValues.jobTitle}
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
              value={formValues.body}
              required
            />
          </div>
          <button className="postButton">Post Review</button>
        </form>
      </div>
    </div>
  ) : (
    <div
      className="must-signin"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "200px",
      }}
    >
      <h3 style={{ fontSize: "36px" }} className="signin-header">
        Oops, please log in!{" "}
      </h3>
      <button
        style={{ margin: "10px 0" }}
        className="landingbutton"
        onClick={() => navigate("/signin")}
      >
        {" "}
        Sign in
      </button>
      <button className="landingbuttonSignin" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default CreateNewReview;
