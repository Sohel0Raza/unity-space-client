import { Link, replace, useNavigate } from "react-router-dom";
import logo from "./../../../public/logo.png";
import {
  checkInputType,
  HTTP_METHOD,
  JWT_TOKEN_KEY,
  notify,
} from "../../services/utils";
import { useEffect, useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import { HttpStatusCode } from "axios";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  //const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
       if (useAuth()) {
      navigate("/", { replace: true });
    }
  }, [useAuth()]);

  // const handleChange = (e) => {
  //   const phoneOrEmail = e.target.value;
  //   setPhoneOrEmail(phoneOrEmail);
  // };

  const handleLoginFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const loginForm = e.target;
      const phoneOrEmail = loginForm.phoneOrEmail.value;
      const password = loginForm.password.value;

      //const type = checkInputType(phoneOrEmail);
      const loginRequest = {
        phoneOrEmail,
        password,
      };

      const response = await useHttp(
        "http://localhost:5001/api/auth/login",
        HTTP_METHOD.POST,
        loginRequest
      );
      if (response.status !== HttpStatusCode.Ok || !response.data.success) {
        notify(response?.data?.message ?? "Login failed");
        return;
      }

      localStorage.setItem(JWT_TOKEN_KEY, response.data.token);
      navigate("/", { replace: true });
    } catch (error) {
      console.log("✌️error --->", error);
      notify(error?.response?.data?.message ?? error.message);
    }
  };
  return (
    <>
      <div className="hero min-h-screen">
        <ToastContainer stacked />

        <div className="hero-content w-full md:w-8/12 flex-col md:flex-row justify-around">
          <div className="md:w-1/2 text-center">
            <div className="h-40 w-40 mx-auto">
              <img className="h-full w-full" src={logo} alt="" />
            </div>
            <h2 className="text-3xl -mt-5 font-bold text-[#2d545e] uppercase">
              Unity Space
            </h2>
            <p>It is enjoy and fun time.</p>
          </div>
          <div className="card bg-[#FFFFFF] md:w-3/6 shadow-2xl rounded">
            <div className="px-9 pt-5">
              <h2 className="text-2xl font-bold text-[#2d545e]">
                Welcome Back
              </h2>
            </div>
            <form
              onSubmit={handleLoginFormSubmit}
              className="card-body space-y-4 "
            >
              <div className="form-control">
                <input
                  // onChange={handleChange}
                  type="text"
                  name="phoneOrEmail"
                  placeholder=" phone or email"
                  className="myInput"
                />
              </div>
              <div className="form-control">
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="myInput"
                />
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Login" className=" btn-primary cursor-pointer" />
              </div>
              <div>
                <p>
                  Do not have an account?
                  <Link to="/signUp">
                    <span className="text-[#2d545e] font-semibold ml-2">
                      Sign Up
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
