import { useEffect } from "react";
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

    const response = await useHttp(
      "http://localhost:5001/api/auth/signup",
      HTTP_METHOD.POST,
      user
    );
  };

  useEffect(() => {
    document.getElementById("my_modal_3").showModal();
  }, []);

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <Link to="/login">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </Link>
          </form>
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse ">
              <div className="card w-full">
                <div className="pl-9 pt-5">
                  <h2 className="text-2xl font-bold text-[#dd903f]">Sign Up</h2>
                  <p>It is easy and secure</p>
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
                      Do you have an account?
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
        </div>
      </dialog>
    </>
  );
};

export default SignUp;
