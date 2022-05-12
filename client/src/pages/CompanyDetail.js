import React, { useContext, useEffect, useState } from "react";
import "../styles/companydetail.css";
import { useNavigate, useParams } from "react-router-dom";
import AxiosInstance from "../Axios/AxiosInstance";
import { LoginContext } from "../ContextFiles/LoginContext";

const CompanyDetail = (props) => {
  const { loginStatus, setLoginStatus } = useContext(LoginContext);
  const [company, setCompany] = useState([]);
  const { id } = useParams();

  async function checkLogin() {
    try {
      setLoginStatus(true);
    } catch {}
  }

  const getCompany = async () => {
    const companyList = await AxiosInstance.get(`company/${id}`);
    setCompany(companyList.data);
    console.log(company);
  };

  useEffect(() => {
    getCompany();
  }, []);

  return (
    <div key={company.id} className="company-content">
      {company.map((company) => (
        <div className="company-header">
          <h3 id="company-name">Company Name:{company.name}</h3>
          <h4 id="company-location">Company Location:{company.location}</h4>
        </div>
      ))}
    </div>
  );
};

export default CompanyDetail;
