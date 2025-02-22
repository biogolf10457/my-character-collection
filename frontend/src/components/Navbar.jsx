import React from "react";
import { Link, useNavigate } from "react-router-dom";
import mascotIcon from "../assets/mccIcon.png";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="max-w-full px-2 py-4 sm:px-6 lg:px-8 bg-amber-500">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">
            <div className="h-6 lg:h-10 flex items-center space-x-3">
              <img src={mascotIcon} className="h-full" />
              <div className="font-chewy text-lg lg:text-xl text-amber-50 uppercase">
                My Character Collection
              </div>
            </div>
          </Link>
        </div>
        <div className="flex space-x-6 lg:space-x-10">
          <Link to="/login">
            <span className="navMenuItem">Login</span>
          </Link>
          <Link to="/register">
            <span className="navMenuItem">Register</span>
          </Link>
          <Link to="/profile">
            <span className="navMenuItem">Profile</span>
          </Link>
          <button
            className="text-2xl hover:text-amber-50 transition-all cursor-pointer"
            onClick={handleLogout}
          >
            <MdLogout />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
