import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  console.log(rest);
  return (
    <Route
      {...rest}
      component={() =>
        auth.isAuthenticated == false ? <Component /> : <Redirect to="/" />
      }
    />
  );
};

export default PublicRoute;
