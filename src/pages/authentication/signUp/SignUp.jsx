import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="card w-full shadow-2xl">
            <div className="px-9 pt-5">
              <h2 className="text-2xl font-bold text-[#dd903f]">Sign Up</h2>
              <p>It is esay and secure</p>
            </div>
            <form className="card-body space-y-4">
              <div className="md:flex md:space-x-5 space-y-4 md:space-y-0">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="First name"
                    className="myInput"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Last name"
                    className="myInput"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Mobile number or email address"
                  className="myInput"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="New Password"
                  className="myInput"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className=" btn-primary">Sign Up</button>
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
