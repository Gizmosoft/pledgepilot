import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserState } from "../store/UserSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

// This component checks if the user is authenticated or not
// If yes, then redirects them to the desired page
// Else, navogates them to the login page
const ProtectedRoutes = () => {
  const isAuthenticated = sessionStorage.getItem("user") !== null;
  const loggedInUser: UserState = useSelector(
    (state: RootState) => state.user as UserState
  );
  return isAuthenticated || loggedInUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
