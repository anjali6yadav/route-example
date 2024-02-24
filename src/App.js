import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routesArr } from "components/Routes/routes";

const router = createBrowserRouter(routesArr);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
