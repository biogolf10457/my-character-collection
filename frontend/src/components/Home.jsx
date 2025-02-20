import React from "react";
import mascot from "../assets/mcc.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[100vh] px-4 py-6 sm:px-8 lg:px-12 lg:py-10 bg-linear-to-b from-amber-100 to-amber-200">
      <div className="flex flex-col lg:flex-row items-center justify-around space-y-10 lg:space-y-0">
        <div className="w-[55%] lg:w-[35%]">
          <img src={mascot} className="w-full object-contain" />
        </div>
        <div className="w-[75%] lg:w-[40%]">
          <h2 className="font-chewy  text-2xl lg:text-4xl">Welcome to</h2>
          <h1 className="mt-2 font-chewy text-3xl lg:text-5xl text-amber-500 uppercase">
            My Character Collection
          </h1>
          <p className="mt-6 font-roboto text-sm lg:text-lg">
            Did you forget your original characters information? Let's try My
            Character Collection! Inform your original characters information
            and collect in your profile. Easy to see and organize your
            characters.
          </p>
          <Link to="/register">
            <button className="button mt-6">GET STARTED</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
