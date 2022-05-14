import React, { useState, useEffect } from "react";
import { GetAllReviews } from "../services/PostService";
import { useNavigate } from "react-router-dom";
import DeleteReviewBtn from "../components/DeleteReviewBtn";
import SignInAgain from "../components/SignInAgain";

const Profile = ({ user, authenticated }) => {
  const [reviews, setReviews] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    const handleReview = async () => {
      const data = await GetAllReviews();
      setReviews(data);
    };
    handleReview();
    console.log(reviews);
  }, []);

  return user && authenticated ? (
    <div className="profile-page">
      {reviews.map((review) =>
        review.userId === user.id ? (
          <div className="review-profile" key={review.id}>
            <h3>{review.title}</h3>
            <h3>{review.company}</h3>
            <h3>{review.jobTitle}</h3>
            <p>{review.body}</p>
            <button>{review.helpful}Helpful</button>
            <button>{review.unhelpful}Not Helpful</button>
            <div className="delete-review-btn">
              <DeleteReviewBtn id={review.id} />
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
