import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-full px-2 py-4 sm:px-6 lg:px-8 bg-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">Icon</Link>
        </div>
        <div className="flex space-x-10">
          <Link className="font-chewy text-lg" to="/login">
            Login
          </Link>
          <Link className="font-chewy text-lg" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
