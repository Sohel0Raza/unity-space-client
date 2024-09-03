import { jwtDecode } from "jwt-decode";
import { JWT_TOKEN_KEY } from "../services/utils";

export const useAuth = () => {
  const token = localStorage.getItem(JWT_TOKEN_KEY);
  const decodedToken = token ? jwtDecode(token) : false;
  return decodedToken?.userId ? true : false;
};
