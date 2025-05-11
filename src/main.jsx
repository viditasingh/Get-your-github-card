import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router";

import {createRoot} from "react-dom/client";
import { StrictMode } from "react";
import Layout from "./Layout";
import {About, Home, Usercard, Contact} from './components/index.js'
import { githubInfo } from "./components/Usercard/Usercard.jsx";

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
      },
      {
        path: "contact-us",
        element: <Contact/>
      },
      {
        path: "usercard/:username",
        element: <Usercard/>,
        loader: githubInfo
      }
    ]
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);