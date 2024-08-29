import { Link } from "react-router-dom";
import logo from "./../../../public/logo.png";
const Login = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
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
          <div className="card md:w-2/5 shadow-2xl">
            <div className="px-9 pt-5">
              <h2 className="text-2xl font-bold text-[#2d545e]">Welcome Back</h2>
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
