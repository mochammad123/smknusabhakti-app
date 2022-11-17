import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateComponent = ({ children, loginOnly = true }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token && loginOnly) {
      navigate("/login");
    }

    if (token && !loginOnly) {
      navigate("/dashboard");
    }
  }, []);

  return children ? children : <>Loading</>;
};

export default PrivateComponent;
