import Client from "./api";

export const GetAllReviews = async () => {
  try {
    const res = await Client.get("/api/reviews");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetReviewByID = async () => {
  try {
    const res = await Client.get("/api/reviews/user/:review_id");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetReviewByUserID = async () => {
  try {
    const res = await Client.get("/api/reviews/user/:review_id");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const CreateReview = async (data) => {
  try {
    const res = await Client.post("/api/reviews/create", data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const EditReview = async (reviewId, data) => {
  try {
    const res = await Client.put(`/api/reviews/update/${reviewId}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const DeleteReview = async (reviewId, data) => {
  try {
    const res = await Client.delete(`/api/reviews/delete/${reviewId}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
