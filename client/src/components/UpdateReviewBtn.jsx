import { useNavigate } from "react-router-dom";
import { EditReview } from "../services/PostService";
import { useState } from "react";
import "../styles/updatereviewform.css";

const UpdateReviewBtn = (props) => {
  let navigate = useNavigate();
  console.log(props);
  const [update, setUpdate] = useState(false);
  const [formValues, setFormValues] = useState({
    title: props.title,
    jobTitle: props.jobTitle,
    body: props.body,
    id: props.id,
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await EditReview(props.id, formValues);
    console.log(props.id, formValues);
    navigate("/profile");
    window.location.reload();
  };

  return (
    <div className="update-form">
      {update ? (
        <form className="col-2" onSubmit={handleSubmit}>
          <div className="update-close-button">
            <button
              className="close-update-button"
              onClick={() => setUpdate(false)}
            >
              &times;
            </button>
          </div>
          <input
            className="create-input"
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Company Name"
            value={formValues.title}
            required
          />
          <input
            className="create-update-title"
            onChange={handleChange}
            name="jobTitle"
            type="text"
            placeholder="Job Title"
            value={formValues.jobTitle}
            required
          ></input>
          <textarea
            className="create-update"
            onChange={handleChange}
            name="body"
            type="textarea"
            placeholder="Project Details(255 words limited)"
            value={formValues.body}
            required
          ></textarea>
          <div className="update-close-button">
            <button
              className="submit-button"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Submit Changes
            </button>
          </div>
        </form>
      ) : (
        <button className="update-button" onClick={() => setUpdate(true)}>
          Edit Your Project
        </button>
      )}
    </div>
  );
};

export default UpdateReviewBtn;
