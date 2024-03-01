import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { auth } from "../firebase";

const ProtectedRoute = () => {
  //   let auth = { token: false };
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
