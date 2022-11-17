import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routesArr } from "components/Routes/routes";

// const router = createBrowserRouter(routesArr);

const Body = ({ router }) => {
  console.log("router::::::::", router);
  return (
    <>
      body
      {/*  <RouterProvider router={router} />; */}
    </>
  );
};

export default Body;
