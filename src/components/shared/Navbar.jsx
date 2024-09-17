import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoMdSettings } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { CiHome, CiUser, CiVideoOn } from "react-icons/ci";
import { PiMessengerLogoThin } from "react-icons/pi";
import { RiLogoutBoxRFill } from "react-icons/ri";

const Navbar = () => {
  const navItem = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? "active" : "default"} tooltip tooltip-bottom tooltip-secondary`
        }
        data-tip="Home"
      >
        <CiHome className="2xl" />
      </NavLink>

      <NavLink
        to="/friend"
        className={({ isActive }) =>
          `${isActive ? "active" : "default"} tooltip tooltip-bottom tooltip-secondary`
        }
        data-tip="Friend"
      >
        <CiUser />
      </NavLink>

      <NavLink
        to="/video"
        className={({ isActive }) =>
          `${isActive ? "active" : "default"} tooltip tooltip-bottom tooltip-secondary`
        }
        data-tip="Video"
      >
        <CiVideoOn />
      </NavLink>

      <NavLink
        to="/messenger"
        className={({ isActive }) =>
          `${isActive ? "active" : "default"} tooltip tooltip-bottom tooltip-secondary`
        }
        data-tip="Messenger"
      >
        <PiMessengerLogoThin />
      </NavLink>
    </>
  );
  return (
    <div className="navbar fixed z-40 p-0 bg-[#fff] shadow-lg">
      <div className="navbar-start">
        <div className="flex items-center pl-2 md:pl-5">
          <div className="h-14 w-14">
            <img className="h-full w-full" src={logo} alt="logo" />
          </div>
          <h2 className="text-xl font-bold text-[#2d545e] uppercase ">
            Unity Space
          </h2>
        </div>
      </div>
      <div className="navbar-center lg:flex">
        <ul className="menu menu-horizontal items-center px-1 text-xl md:text-3xl space-x-7 md:space-x-20">
          {navItem}
        </ul>
      </div>
      <div className="navbar-end pr-2 md:pr-5">
        <div className="dropdown dropdown-end">
          <div className="tooltip tooltip-bottom tooltip-secondary" data-tip="Account">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co/sPZPKk0/416098441-1568179284017697-8516683293212790037-n.jpg"
                />
              </div>
            </div>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-md z-[1] mt-3 w-80 p-2 shadow"
          >
            <div className="p-4 flex items-center space-x-3 shadow-[0_0_5px_rgba(0,0,0,0.25)] rounded-md">
              <div className="w-10 h-10">
                <img
                  className="rounded-full"
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co/sPZPKk0/416098441-1568179284017697-8516683293212790037-n.jpg"
                />
              </div>
              <h2 className="text-xl font-semibold">Sohel</h2>
            </div>
            <Link>
              <div className="p-3 flex items-center space-x-4 hover:bg-info mt-2">
                <IoMdSettings className="text-3xl p-1 bg-slate-300 rounded-full" />
                <h4 className="text-lg">Settings & privacy</h4>
              </div>
            </Link>
            <Link>
              <div className="p-3 flex items-center space-x-4 hover:bg-info mt-2">
                <FaMoon className="text-3xl p-1 bg-slate-300 rounded-full" />
                <h4 className="text-lg">Display Dark Mood</h4>
              </div>
            </Link>
            <Link>
              <div className="p-3 flex items-center text-center space-x-4 hover:bg-info mt-2">
                <RiLogoutBoxRFill className="text-3xl p-1 bg-slate-300 rounded-full" />
                <h4 className="text-lg">Logout</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
