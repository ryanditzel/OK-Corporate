import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AxiosInstance from "../Axios/AxiosInstance";
import { LoginContext } from "../ContextFiles/LoginContext";

const Feed = (props) => {
  const [review, setReview] = useState([]);
  const { loginStatus, setLoginStatus } = useContext(LoginContext);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  async function checkLogin() {
    try {
      setLoginStatus(true);
    } catch {}
  }

  const getReviews = async (id) => {
    const reviewList = await AxiosInstance.get(`reviews/`);
    console.log(reviewList);
    setReview(reviewList.data);
  };

  useEffect(() => {
    getReviews();
  }, [id]);

  if (review) {
    const feed = review.reverse().map((review) => {
      return (
        <div key={review.id} className="feed-content">
          <div className="feed-header">
            <h3 id="review-company">REVIEWED COMPANY: {review.company.name}</h3>
            <h3 id="review-title">TITLE: {review.title}</h3>
            <h3 id="review-author">USERNAME: {review.user.username}</h3>
            <button
              onClick={() => navigate(`/companydetail/${review.company.id}`)}
            >
              More
            </button>
          </div>
        </div>
      );
    });
    return (
      <div className="feed-container">
        <button>
          <Link to="/createreview">Create Reviews</Link>
          {feed}
        </button>
      </div>
    );
  } else {
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
        Oops
      </h3>
      <button
        style={{ margin: "10px 0" }}
        className="landingbutton"
        onClick={() => navigate("/signin")}
      >
        Sign in
      </button>
      <button className="landingbuttonSignin" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>;
  }
};

export default Feed;
