import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import SignUp from "../components/auth//SignUp";
import { App } from "../App";
import Main from "../components/layout/Main";
import SignupConform from "../components/auth/SignupConform";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/signup-conform",
        element: <SignupConform />,
      },
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
