import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);
  const user = currentUser?.user;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
