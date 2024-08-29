import { Link, useNavigate } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import { HTTP_METHOD } from "../../services/utils";
import logo from "./../../../public/logo.png";
import { HttpStatusCode } from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const signupForm = event.target;

    const user = {
      firstName: signupForm.firstName.value,
      lastName: signupForm.lastName.value,
      phoneOrEmail: signupForm.phoneOrEmail.value,
      password: signupForm.password.value,
      gender: "male",
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useHttp(
      "http://localhost:5001/api/auth/signup",
      HTTP_METHOD.POST,
      user
    );

    const data = response.data;

    if (response.status != HttpStatusCode.Ok || !data.success) return;

    // const url = process.env.OTP_URL || "https://bulksmsbd.net/api/smsapi";
    // const ApiKey = process.env.OTP_API_KEY ?? "9c2A8z1cAuUcAuBi3ito";
    // const SenderId = process.env.OTP_SENDER_ID ?? "8809617618737";

    const url = "https://bulksmsbd.net/api/smsapi";
    const ApiKey = "9c2A8z1cAuUcAuBi3ito";
    const SenderId = "8809617618737";

    const phoneNumber = data.result.phoneOrEmail;

    const randomNum = Math.random() * 9000;
    const otp = Math.floor(1000 + randomNum);

    const content = {
      api_key: ApiKey,
      type: "text",
      number: phoneNumber,
      senderid: SenderId,
      message: `Pai2Pai: ${otp} is your OTP code. Please use within 5 mins.\n{otpRequest.Signature}`,
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const otpSendRes = await useHttp(url, HTTP_METHOD.POST, content);

    // if (
    //   otpSendRes.status != HttpStatusCode.Ok ||
    //   otpSendRes.data.response_code !== HttpStatusCode.Accepted
    // )
    //   return;

    navigate("/signup-conform", { replace: true });
  };

  return (
    <div className="bg-[#F2F4F7] min-h-screen">
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
            <div className="card w-full">
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
                  />
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
