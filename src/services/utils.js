import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const HTTP_METHOD = Object.freeze({
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
});

const JWT_TOKEN_KEY = "token";

const notify = (message) => toast.error(message,{ theme: "colored"});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(?:\+88|88)?01[3-9]\d{8}$/;
const checkInputType = (input) => {
  if (emailRegex.test(input)) {
    return "email";
  } else if (phoneRegex.test(input)) {
    return "phone";
  } else {
    return "invalid";
  }
};
export { HTTP_METHOD, JWT_TOKEN_KEY ,notify,checkInputType};
