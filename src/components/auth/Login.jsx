import { useNavigate } from "react-router-dom";
import logo from "./../../../public/logo.png";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content w-full md:w-8/12 flex-col md:flex-row justify-around">
          <div className="md:w-1/2 text-center">
            <div className="h-40 w-40 mx-auto">
              <img className="h-full w-full" src={logo} alt="" />
            </div>
            <h2 className="text-3xl -mt-5 font-bold text-[#dd443f]">
              Unity Space
            </h2>
            <p>It is enjoy and fun time.</p>
          </div>
          <div className="card md:w-2/5 shadow-2xl">
            <div className="px-9 pt-5">
              <h2 className="text-2xl font-bold text-[#dd903f]">
                Welcome Back
              </h2>
            </div>
            <form className="card-body space-y-4 ">
              <div className="form-control">
                <input
                  type="email"
                  placeholder="email"
                  className="myInput"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="password"
                  className="myInput"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className=" btn-primary">Login</button>
              </div>
            </form>

            <div className="ml-9 pb-5">
              <p>
                Do not have an account?
                <button
                  onClick={() => navigate("/signup")}
                >
                  <span className="text-[#dd903f] font-semibold ml-2">
                    Sign Up
                  </span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;


{/* <dialog id="my_modal_3" className="modal">
<div className="modal-box">
  <form method="dialog">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
      ✕
    </button>
  </form>
  <div className="hero">
    <div className="hero-content w-full flex-col lg:flex-row-reverse ">
      <div className="card w-full">
        <div className="pl-9 pt-5">
          <h2 className="text-2xl font-bold text-[#dd903f]">
            Sign Up
          </h2>
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
</dialog> */}