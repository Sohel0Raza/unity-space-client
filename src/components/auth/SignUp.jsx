import { Link } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import { HTTP_METHOD } from "../../services/utils";

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
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="card w-full shadow-2xl">
            <div className="px-9 pt-5">
              <h2 className="text-2xl font-bold text-[#dd903f]">Sign Up</h2>
              <p>It is esay and secure</p>
            </div>
            <form onSubmit={handleSubmit} className="card-body space-y-4">
              <div className="md:flex md:space-x-5 space-y-4 md:space-y-0">
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
                <input type="submit" value="Sign Up" className=" btn-primary" />
              </div>
              <div>
                <p>
                  Do have an account?
                  <Link to="/login">
                    <span className="text-[#dd903f] font-semibold ml-2">
                      Login
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
export default SignUp;
