import React from "react";
import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="max-w-full px-2 py-4 sm:px-6 lg:px-8 bg-amber-700 text-amber-100">
      <div className="flex items-center justify-between">
        <p className="w-2/3 md:w-auto text-sm">
          &copy; Copyright 2025 Passakorn Nuchitkachornwut. All right Reserved
        </p>
        <Link to="https://github.com/biogolf10457/my-character-collection">
          <IoLogoGithub className="text-3xl" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
