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

  useEffect(() => {
    const { exp } = jwtDecode(token);
    const expirationTime = exp * 1000 - 60000;
    if (Date.now() >= expirationTime) {
      localStorage.clear();
      navigate("/login");
    }
  }, []);

  return children ? children : <>Loading</>;
};

export default PrivateComponent;
