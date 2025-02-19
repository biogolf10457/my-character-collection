import React from "react";

const Home = () => {
  return (
    <div className="min-h-[100vh] px-4 sm:px-8 lg:px-12 bg-amber-200">
      <div className="flex flex-col lg:flex-row items-center justify-around">
        <div className="w-[85%] lg:w-[40%] bg-amber-900">Image</div>
        <div className="w-[85%] lg:w-[40%] bg-amber-900">
          <h1 className="font-chewy text-2xl lg:text-3xl text-center">
            Welcome to{" "}
            <span className="text-nowrap">My Character Collection</span>
          </h1>
          <p className="mt-4 font-roboto text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
            id. Hic minima delectus et natus voluptas culpa, fugit sunt
            voluptates sapiente molestias dolores ad temporibus possimus qui,
            architecto, exercitationem eius!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
