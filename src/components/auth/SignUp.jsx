import { Link } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import { HTTP_METHOD } from "../../services/utils";
import logo from "./../../../public/logo.png";

const SignUp = () => {
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
    const respose = await useHttp(
      "http://localhost:5001/api/auth/signup",
      HTTP_METHOD.POST,
      user
    );
  };

  return (
    <div className="bg-base-200 min-h-screen">
      <div>
        <div className="w-[300px] mx-auto flex justify-center items-center pt-5">
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
          <div className="hero-content shadow-2xl w-full md:w-2/6 flex-col lg:flex-row-reverse rounded">
            <div className="card w-full">
              <div className="pl-9 pt-5">
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
