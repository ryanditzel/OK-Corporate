import React, { useContext, useEffect, useState } from "react";
import "../styles/companydetail.css";
import { useNavigate, useParams } from "react-router-dom";

const CompanyDetail = (props) => {
  const [company, setCompany] = useState([]);
  const [review, setReview] = useState([]);
  const { id } = useParams();

  // const getReviews = async (id) => {
  //   const reviewList = await AxiosInstance.get(`reviews/${id}`);
  //   console.log(reviewList);
  //   setReview(reviewList.data);
  // };

  useEffect(() => {
    // getCompany();
    // getReviews();
  }, []);

  // console.log({ company });

  return (
    <div key={company.id} className="company-content">
      <div className="company-header">
        <h4 id="company-name">Company Name:{company.name}</h4>
        <h4 id="company-location">Company Location:{company.location}</h4>
        <h4 id="company-review">Company Review: {company.review}</h4>
        <h4 id="company-title">Company Title: {company.title}</h4>
        <h4 id="company-body">Company body: {company.body}</h4>
      </div>
    </div>
  );
};

export default CompanyDetail;
