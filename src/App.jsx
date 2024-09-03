import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/shared/Navbar";

export const App = () => {
  const location = useLocation();
  const noheader =
    location.pathname.includes("login") || location.pathname.includes("signUp") || location.pathname.includes("signup-conform");
  return (
    <div className="bg-[#F0F2F5]">
      <div>
        {noheader || <Navbar />}
        <Outlet />
      </div>
    </div>
  );
};
