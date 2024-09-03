import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import SignUp from "../components/auth//SignUp";
import { App } from "../App";
import Main from "../components/layout/Main";
import SignupConform from "../components/auth/SignupConform";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Main />
          </PrivateRoute>
        ),
      },
      {
        path: "/signup-conform/:id",
        element: (
          <PrivateRoute>
            <SignupConform />,
          </PrivateRoute>
        ),
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
