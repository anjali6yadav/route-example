import Login from "components/Login/login";
import Layout from "components/Layout/Layout";
import About from "components/About/About";
import Dashboard from "components/Dashboard/Dashboard";

const childArr = [
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "settings",
    element: <div>settings</div>,
  },
];

export const routesArr = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    /*  element: <Layout childArr={childArr} />, */
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "settings",
        element: <div>settings</div>,
      },
    ],
  },
  {
    path: "/logout",
    element: <Login />,
  },
];
