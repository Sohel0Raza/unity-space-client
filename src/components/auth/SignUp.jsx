import { Link, useNavigate } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import { checkInputType, HTTP_METHOD, notify } from "../../services/utils";
import logo from "./../../../public/logo.png";
import { HttpStatusCode } from "axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../hooks/useAuth";

const SignUp = () => {

  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (useAuth()) {
      navigate("/", { replace: true });
    }
  }, [useAuth()]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let otp = "";

    const signupForm = event.target;

    const url = import.meta.env.VITE_OTP_URL;
    const ApiKey = import.meta.env.VITE_OTP_API_KEY;
    const SenderId = import.meta.env.VITE_OTP_SENDER_ID;

    const type = checkInputType(input);

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
        const phoneNumber = input;
        const randomNum = Math.random() * 9000;
        otp = Math.floor(1000 + randomNum);

        // const content = {
        //   api_key: ApiKey,
        //   type: "text",
        //   number: phoneNumber,
        //   senderid: SenderId,
        //   message: `Unity Space: ${otp} is your OTP code. Please use within 5 mins.`,
        // };

        // const otpSendRes = await useHttp(url, HTTP_METHOD.POST, content);

        // if (
        //   otpSendRes.status !== HttpStatusCode.Ok ||
        //   otpSendRes.data.response_code !== HttpStatusCode.Accepted
        // ) {
        //   notify("Failed to send OTP");
        //   return;
        // }
      } catch (error) {
        notify(error.message);
        return;
      }
    }

    try {
      const user = {
        firstName: signupForm.firstName.value,
        lastName: signupForm.lastName.value,
        phoneOrEmail: input,
        password: signupForm.password.value,
        gender: "male",
        otp: otp,
      };

      const response = await useHttp(
        "http://localhost:5001/api/auth/signup",
        HTTP_METHOD.POST,
        user
      );
      console.log('✌️response --->', response);

      const data = response.data;

      if (response.status !== HttpStatusCode.Ok || !data.success) {
        notify("Failed to sign up:");
        return;
      }

      navigate(`/signup-conform/${data.result._id}`, { replace: true });
    } catch (error) {
      notify(error?.response?.data?.message ?? error.message);
    }
  };

  return (
    <div className=" min-h-screen ">
    <ToastContainer stacked />
      <div>
        <div className="w-[300px] mx-auto flex justify-center items-center py-5">
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
              <div className="pl-9 pt-2">
                <h2 className="text-2xl font-bold text-[#2d545e]">Sign Up</h2>
                <p>It is esay and secure</p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="card-body w-full space-y-4"
              >
                <div className="md:grid md:grid-cols-2 md:gap-x-2 w-full space-y-4 md:space-y-0">
                  <div className="form-control">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      className="myInput"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      className="myInput"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="phoneOrEmail"
                    placeholder="Mobile number or email address"
                    className="myInput"
                    value={input}
                    onChange={handleChange}
                  />
                  {/* {error && (
                    <p
                      className="text-white text-sm p-2 mt-2 md:mt-0
                     bg-[#6e2c2c] md:absolute md:top-[163px] md:-left-[320px] "
                    >
                      {error}
                    </p>
                  )} */}
                </div>
                <div className="form-control">
                  <input
                    type="password"
                    name="password"
                    placeholder="New Password"
                    className="myInput"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign Up"
                    className=" btn-primary"
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
