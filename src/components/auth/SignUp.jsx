import { HttpStatusCode } from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useHttp } from "../../hooks/useHttp";
import { checkInputType, HTTP_METHOD, notify } from "../../services/utils";
import logo from "./../../../public/logo.png";

import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../hooks/useAuth";

const SignUp = () => {
  const navigate = useNavigate();
  const [visibleErrors, setVisibleErrors] = useState(null);

  // Toggle error message visibility for the clicked field
  const toggleErrorMessage = (inputName) => {
    setVisibleErrors((prevField) =>
      prevField === inputName ? null : inputName
    );
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Redirect to homepage if user is authenticated
  useEffect(() => {
    if (useAuth()) {
      navigate("/", { replace: true });
    }
  }, [useAuth(), navigate]);

  const onSubmit = async (data) => {
    console.log("data: ", data);
    let otp = "";

    const url = import.meta.env.VITE_OTP_URL;
    const ApiKey = import.meta.env.VITE_OTP_API_KEY;
    const SenderId = import.meta.env.VITE_OTP_SENDER_ID;

    const type = checkInputType(data.phoneOrEmail);
    console.log("type: ", type);

    if (type === "invalid") {
      notify("Please enter a valid email address or phone number");
      return;
    }

    if (type === "email") {
      console.log("Email submission is currently not handled.");
      return;
    }

    if (type === "phone") {
      try {
        otp = Math.floor(1000 + Math.random() * 9000); 

        const content = {
          api_key: ApiKey,
          type: "text",
          number: data.phoneOrEmail,
          senderid: SenderId,
          message: `Unity Space: ${otp} is your OTP code. Please use within 5 mins.`,
        };

        const otpSendRes = await useHttp(url, HTTP_METHOD.POST, content);

        if (
          otpSendRes.status !== HttpStatusCode.Ok ||
          otpSendRes.data.response_code !== HttpStatusCode.Accepted
        ) {
          notify("Failed to send OTP");
          return;
        }
      } catch (error) {
        notify(error.message);
        return;
      }
    }

    try {
      const user = {
        firstName: data.firstName,
        lastName: data.lastName,
        phoneOrEmail: data.password,
        password: data.password,
        gender: "male",
        otp,
      };

      const response = await useHttp(
        "http://localhost:5001/api/auth/signup",
        HTTP_METHOD.POST,
        user
      );

      const userData = response.data;

      if (response.status !== HttpStatusCode.Ok || !userData.success) {
        notify("Failed to sign up:");
        return;
      }

      navigate(`/signup-conform/${userData.result._id}`, { replace: true });
    } catch (error) {
      notify(error?.response?.userData?.message ?? error.message);
    }
  };

  return (
    <div className="min-h-screen">
      <ToastContainer stacked />
      <div className="mx-5">
        <div className="md:w-[300px] mx-auto flex justify-center items-center py-5">
          <div className="h-20 w-20 -ml-5">
            <img className="h-full w-full" src={logo} alt="" />
          </div>
          <div className="">
            <h2 className="text-2xl font-bold text-[#2d545e] uppercase">
              Unity Space
            </h2>
            <p>Create new account with signup.</p>
          </div>
        </div>
        <div className="hero">
          <div className="hero-content bg-[#FFFFFF] shadow-2xl w-full md:w-2/6 flex-col lg:flex-row-reverse rounded">
            <div className="card w-full relative">
              <div className="pl-3 pt-2">
                <h2 className="text-2xl font-bold text-[#2d545e]">Sign Up</h2>
                <p>It is esay and secure</p>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body p-3 w-full space-y-4"
              >
                <div className="md:grid md:grid-cols-2 md:gap-x-2 w-full space-y-4 md:space-y-0">
                  <div className="form-control relative">
                    <input
                      type="text"
                      {...register("firstName", {
                        required: "What is your name?",
                      })}
                      placeholder="First name"
                      className={`myInput ${
                        errors.firstName ? "border-warning" : "border-gray-200"
                      }`}
                    />
                    {errors.firstName && (
                      <>
                        <i
                          className="icon-exclamation-circle text-warning absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                          onClick={() => toggleErrorMessage("firstName")}
                        ></i>

                        {visibleErrors === "firstName" && (
                          <p
                            className="text-white text-sm p-2 mt-2 rounded md:mt-0
                     bg-warning md:absolute md:-left-[167px] talkbubble"
                          >
                            {errors.firstName.message}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                  <div className="form-control relative">
                    <input
                      type="text"
                      {...register("lastName", {
                        required: "What is your Last name?",
                      })}
                      placeholder="Last name"
                      className={`myInput ${
                        errors.lastName ? "border-warning" : "border-gray-200"
                      }`}
                    />
                    {errors.lastName && (
                      <>
                        <i
                          className="icon-exclamation-circle text-warning absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                          onClick={() => toggleErrorMessage("lastName")}
                        ></i>

                        {visibleErrors === "lastName" && (
                          <p
                            className="text-white text-sm p-2 mt-2 rounded md:mt-0
                     bg-warning md:absolute md:-right-[190px] talkbubble1"
                          >
                            {errors.lastName.message}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>
                <div className="form-control relative">
                  <input
                    type="text"
                    {...register("phoneOrEmail", {
                      required: "Mobile number or email address is required",
                    })}
                    placeholder="Mobile number or email address"
                    className={`myInput ${
                      errors.phoneOrEmail ? "border-warning" : "border-gray-200"
                    }`}
                  />
                  {errors.phoneOrEmail && (
                    <>
                      <i
                        className="icon-exclamation-circle text-warning absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                        onClick={() => toggleErrorMessage("phoneOrEmail")}
                      ></i>

                      {visibleErrors === "phoneOrEmail" && (
                        <p
                          className="text-white text-sm p-2 mt-2 rounded md:mt-0
                     bg-warning md:absolute md:-left-[312px] talkbubble"
                        >
                          {errors.phoneOrEmail.message}
                        </p>
                      )}
                    </>
                  )}
                </div>
                <div className="form-control relative">
                  <input
                    type="password"
                    {...register("password", {
                      required: "Inter a combination password",
                    })}
                    placeholder="New Password"
                    className={`myInput ${
                      errors.password ? "border-warning" : "border-gray-200"
                    }`}
                  />
                  {errors.password && (
                    <>
                      <i
                        className="icon-exclamation-circle text-warning absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                        onClick={() => toggleErrorMessage("password")}
                      ></i>

                      {visibleErrors === "password" && (
                        <p
                          className="text-white text-sm p-2 mt-2 rounded md:mt-0
                     bg-warning md:absolute md:-left-[225px] talkbubble"
                        >
                          {errors.password.message}
                        </p>
                      )}
                    </>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign Up"
                    className=" btn-primary cursor-pointer"
                  />
                </div>
                <div>
                  <p>
                    Do have an account?
                    <Link to="/login">
                      <span className="text-[#2d545e] font-semibold ml-2">
                        Login
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
