import {createBrowserRouter,RouterProvider} from "react-router";

import {createRoot} from "react-dom/client";
import { StrictMode } from "react";
import Layout from "./Layout";
import { Home } from "./components";
import About from "./components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);