import { createBrowserRouter, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Settings from "../pages/settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <h1>404 – Page Not Found</h1>,
  },
]);
