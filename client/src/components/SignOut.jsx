import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../ContextFiles/LoginContext";

import AxiosInstance from "../Axios/AxiosInstance";

const SignOut = (props) => {
  const { setLoginStatus } = useContext(LoginContext);

  const logout = async () => {
    await AxiosInstance.post("users/logout", {
      refresh_token: localStorage.getItem("refresh_token"),
    })
      .then((res) => {
        if (res.status) {
          setLoginStatus(false);
          return res;
        } else {
          return res;
        }
      })
      .catch((error) => {
        return console.error;
      });
  };

  useEffect(() => {
    logout();
    setLoginStatus(false);
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("access_token");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("user_id");
  }, []);

  return <div>You have logged out!</div>;
};

export default SignOut;
