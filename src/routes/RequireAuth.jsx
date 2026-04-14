import React, { useEffect, useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RequireAuth = ({ children }) => {
  const { isLogin, loading } = useAuth();
  const location = useLocation();
  const alerted = useRef(false);

  useEffect(() => {
    if (!loading && !isLogin && !alerted.current) {
      alerted.current = true;
      alert("로그인 후 이용해 주세요.");
    }
  }, [loading, isLogin]);

  if (loading) return null;

  if (!isLogin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
