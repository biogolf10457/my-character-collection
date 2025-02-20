import React from "react";
import { Link } from "react-router-dom";
import mascotIcon from "../assets/mccIcon.png";

const Navbar = () => {
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
          <Link className="font-chewy text-lg" to="/login">
            Login
          </Link>
          <Link className="font-chewy text-lg" to="/register">
            Register
          </Link>
          <Link className="font-chewy text-lg" to="/profile">
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
