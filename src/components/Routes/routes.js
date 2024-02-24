import Login from "components/Login/login";
import Layout from "components/Layout/Layout";
import About from "components/About/About";
import Settings from "components/Settings/settings";
import Dashboard from "components/Dashboard/Dashboard";
import UserForm from "components/UserForm/userForm";

export const routesArr = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
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
        path: "userform",
        element: <UserForm />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/logout",
    element: <Login />,
  },
];
