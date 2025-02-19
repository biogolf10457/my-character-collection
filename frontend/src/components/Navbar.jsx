import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-full px-2 py-4 sm:px-6 lg:px-8 bg-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">Icon</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
