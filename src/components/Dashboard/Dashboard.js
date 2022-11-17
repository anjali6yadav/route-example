import SideBar from "components/Layout/SideBar/SideBar";
import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Hello World</h1>
      {/*  <SideBar /> */}
      <Link to="/about">About Us</Link>
    </div>
  );
}

export default Dashboard;
