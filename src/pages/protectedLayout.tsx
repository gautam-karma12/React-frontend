import { Outlet, Navigate } from "react-router-dom";

const ProtectedLayout = () => {
  const token = localStorage.getItem("token");

  // If token exists, render child routes, otherwise redirect to login
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedLayout;
