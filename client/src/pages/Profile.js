import React, { useState, useEffect } from "react";
import { GetAllReviews } from "../services/PostService";
import DeleteReviewBtn from "../components/DeleteReviewBtn";
import SignInAgain from "../components/SignInAgain";
import UpdateReviewBtn from "../components/UpdateReviewBtn";
import "../styles/profile.css";

const Profile = ({ user, authenticated }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const handleReview = async () => {
      const data = await GetAllReviews();
      setReviews(data);
      // console.log(data);
    };
    handleReview();
  }, []);

  return user && authenticated && reviews[0] ? (
    <div className="profile-page">
      {reviews.map((review) =>
        review.userId === user.id ? (
          <div className="review-profile" key={review.id}>
            <h3 id="review-title">{review.title}</h3>
            <h3 id="review-jobtitle">{review.jobTitle}</h3>
            <p id="feed-body">{review.body}</p>
            <div className="delete-review-btn-container">
              <DeleteReviewBtn id={review.id} />
            </div>
            <div className="update-review-btn">
              <UpdateReviewBtn
                id={review.id}
                title={review.title}
                jobTitle={review.jobTitle}
                body={review.body}
              />
            </div>
          </div>
        ) : (
          <div></div>
        )
      )}
    </div>
  ) : (
    <SignInAgain />
  );
};

export default Profile;
