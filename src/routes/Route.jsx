import { createBrowserRouter } from "react-router-dom";
import { Main } from "../layout/Main";
import Login from "../pages/authentication/login/Login";
import SignUp from "../pages/authentication/signUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
