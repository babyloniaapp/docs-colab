import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { isUserAuthenticated } from "./components/Helpers/GlobalMethods";
import { useSelector } from "react-redux";
const ProtectedRoutes = ({ children }) => {
  let location = useLocation();
  let currentUser = useSelector((state) => state.user.currentUser);
  // if (!currentUser) {
  //   return <Navigate to="/" state={{ from: location }} replace />;
  // } else {
  //   console.log(currentUser);
  //   return children;

  // }

  return (
    <>
      {currentUser ? (
        <>{children}</>
      ) : (
        <Navigate to="/" state={{ from: location }} replace />
      )}
    </>
  );
};
export default ProtectedRoutes;
