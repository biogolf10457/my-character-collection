import React from "react";
import { useParams } from "react-router-dom";

const CharacterProfile = () => {
  const { id } = useParams();
  return (
    <div className="min-h-screen px-4 py-6 sm:px-8 lg:px-12 lg:py-10 bg-linear-to-b from-amber-100 to-amber-200">
      <div className="relative min-h-[70vh] px-4 py-8 bg-orange-300 rounded-2xl shadow-lg">
        <div className="w-full flex">
          <div className="w-1/3 flex flex-col items-center justify-center">
            <div className="w-1/2 aspect-square bg-amber-300 rounded-full inset-shadow-sm"></div>
            <div className="pt-6 text-2xl font-chewy">Name</div>
            <div className="pt-6 w-1/2 grid grid-cols-2 gap-y-2 text-lg font-roboto">
              <div>Gender : </div>
              <div>Male</div>
              <div>Age : </div>
              <div>22 years</div>
              <div>Height : </div>
              <div>168 cm</div>
              <div>Weight : </div>
              <div>59 kg</div>
            </div>
          </div>
          <div className="w-2/3"></div>
        </div>
      </div>
    </div>
  );
};

export default CharacterProfile;
