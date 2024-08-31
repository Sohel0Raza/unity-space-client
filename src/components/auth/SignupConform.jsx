/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import { HTTP_METHOD, JWT_TOKEN_KEY } from "../../services/utils";
import { HttpStatusCode } from "axios";
import { useData } from "../../hooks/useData";

const SignupConform = () => {
  const [users, setUsers] = useState();
  const navigate = useNavigate();

  const { id } = useParams();

  const nameRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await useData("http://localhost:5001/api/auth/users");
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const handelVerifyOtp = async () => {
    const otp = nameRef.current.value;

    const response = await useHttp(
      "http://localhost:5001/api/auth/otpVerify",
      HTTP_METHOD.POST,
      {
        userId: id,
        otp,
      }
    );

    if (response.status != HttpStatusCode.Ok || !response.data.success) return;

    localStorage.setItem(JWT_TOKEN_KEY, response.data.token);

    navigate("/", { replace: true });
  };

  return (
    <div className="bg-[#F2F4F7]">
      <div className="h-screen flex justify-center items-center">
        <div className="card bg-white w-5/12 shadow-xl rounded">
          <div className="card-body">
            <h2 className="card-title pb-2">Enter the code from your Phone!</h2>
            <p className="pb-1">
              Let us know that this email address belongs to you. Enter the code
              from sent to .
            </p>
            <input
              type="text"
              ref={nameRef}
              className=" border-[1px] border-gray-200 outline-0 px-2 py-4 focus:border-[1px] focus:border-gray-500 focus:shadow-none rounded-sm focus:bg-slate-100 w-28"
              placeholder="V-code"
            />
            <button className="text-start text-[#2d545e] font-bold">
              Resend code
            </button>
            <div className="card-actions justify-end">
              <button className=" btn-primary px-4" onClick={handelVerifyOtp}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupConform;
