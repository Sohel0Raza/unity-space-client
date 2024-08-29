import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/shared/Navbar";

export const App = () => {
  const location = useLocation();
  const noheader =
    location.pathname.includes("login") || location.pathname.includes("signUp");
  return (
    <>
      <div>
        {noheader || <Navbar />}
        <Outlet />
      </div>
    </>
  );
};
