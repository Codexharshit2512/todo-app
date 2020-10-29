import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      component={() =>
        auth.isAuthenticated == true ? <Component /> : <Redirect to="/signin" />
      }
    />
  );
};

export default PrivateRoute;
