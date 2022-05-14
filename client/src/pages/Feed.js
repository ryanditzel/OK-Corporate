import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GetAllReviews, GetReviewByID } from "../services/PostService";
import SignInAgain from "../components/SignInAgain";

const Feed = ({ user, authenticated }) => {
  const [review, setReview] = useState([]);
  // const [reviewId, setReviewId] = useState([]);

  let { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    const handleReview = async () => {
      const data = await GetAllReviews();
      setReview(data);
    };
    // const handleReviewById = async () => {
    //   const data = await GetReviewByID();
    //   setReviewId(data);
    // };
    handleReview();
    // handleReviewById();
  }, []);

  return user && authenticated ? (
    <div className="feed-page">
      <div className="feed-title">
        <h1>Review Feed</h1>
      </div>
      <div className="feed-wrapper">
        {review.map((review) => (
          <div className="feed-content" key={review.id}>
            <h2 id="review-title">{review.title}</h2>
            <h4 id="review-jobtitle">{review.jobTitle}</h4>
            <p id="feed-body"> {review.body}</p>
            <p id="review-author">{review.user}</p>
            {/* <button
              onClick={() => navigate(`/companydetail/${review.company.id}`)}
            >
              More
            </button> */}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <SignInAgain />
  );
};

export default Feed;
