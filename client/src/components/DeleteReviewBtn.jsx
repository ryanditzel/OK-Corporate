import { useNavigate } from "react-router-dom";
import { DeleteReview } from "../services/PostService";
import "../styles/deletereviewbtn.css";

const DeleteReviewBtn = ({ id }) => {
  let navigate = useNavigate();

  const handleDelete = async () => {
    await DeleteReview(id);
    navigate("/profile");
    alert("Are you sure you want to delete this review?");
    window.location.reload();
  };

  return (
    <div>
      <button className="delete-review-btn" onClick={handleDelete}>
        Delete Review
      </button>
    </div>
  );
};

export default DeleteReviewBtn;
