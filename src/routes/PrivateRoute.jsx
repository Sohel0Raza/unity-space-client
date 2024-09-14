import { jwtDecode } from "jwt-decode";
import { Navigate, useLocation } from "react-router-dom";
import { JWT_TOKEN_KEY } from "../services/utils";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const token = localStorage.getItem(JWT_TOKEN_KEY);

  if (!token)
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;

  const decodedToken = jwtDecode(token);
  
  if (decodedToken.userId) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
