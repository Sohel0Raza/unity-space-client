import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import SignUp from "../components/auth//SignUp";
import { App } from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <></>,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);
