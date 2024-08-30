import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import { HTTP_METHOD, JWT_TOKEN_KEY } from "../../services/utils";
import { HttpStatusCode } from "axios";

const SignupConform = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log("✌️params --->", id);

  const nameRef = useRef(null);
console.log('✌️nameRef --->', nameRef);

  const handelVerifyOtp = async () => {
    
    const otp = nameRef.current.value;
console.log('✌️otp --->', otp);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useHttp(
      "http://localhost:5001/api/auth/otpVerify",
      HTTP_METHOD.POST,
      {
        userId: id,
        otp,
      }
    );
    console.log("✌️response --->", response);

    if (response.status != HttpStatusCode.Ok|| !response.data.success)
      return;

    localStorage.setItem(JWT_TOKEN_KEY, response.data.token);

    navigate("/", {replace: true});
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#F2F4F7]">
      <div className="card bg-base-100 w-96 shadow-xl rounded">
        <div className="card-body">
          <h2 className="card-title pb-2">Enter the code from your Phone!</h2>
          <p className="pb-1">
            Let us know that this email address belongs to you. Enter the code
            from the email sent to gmaa@gmail.com.
          </p>
          <input
            type="text"
            ref={nameRef}
            className="myInput w-28 py-6"
            placeholder="V-code"
          />
          <div className="card-actions justify-end">
            <button className=" btn-primary px-4" onClick={handelVerifyOtp}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupConform;
