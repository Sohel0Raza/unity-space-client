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
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (useAuth()) {
      navigate("/", { replace: true });
    }
  }, [useAuth()]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const phoneOrEmail = data.phoneOrEmail;
      const password = data.password;

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
              onSubmit={handleSubmit(onSubmit)}
              className="card-body space-y-4 "
            >
              <div className="form-control relative">
                <input
                  type="text"
                  {...register("phoneOrEmail", {
                    required: true,
                  })}
                  placeholder="Mobile number or email address"
                  className={`myInput ${
                    errors.phoneOrEmail ? "border-warning" : "border-gray-200"
                  }`}
                />
                {errors.phoneOrEmail && (
                  <>
                    <i className="icon-exclamation-circle text-warning absolute top-1/2 right-2 -translate-y-1/2"></i>
                  </>
                )}
              </div>
              <div className="form-control relative">
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                  })}
                  placeholder="Inter your password"
                  className={`myInput ${
                    errors.password ? "border-warning" : "border-gray-200"
                  }`}
                />
                {errors.password && (
                  <>
                    <i className="icon-exclamation-circle text-warning absolute top-1/2 right-2 -translate-y-1/2"></i>
                  </>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className=" btn-primary cursor-pointer"
                />
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
