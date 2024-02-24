import React from "react";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/dashboard">login</Link>
    </div>
  );
};

export default login;
