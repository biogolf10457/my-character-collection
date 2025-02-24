import React from "react";
import noImage from "../assets/noImage.jpg";

const CharacterCard = ({ name, image }) => {
  return (
    <div className="relative px-4 py-3 bg-orange-100 rounded-xl shadow-md hover:scale-105 hover:-rotate-1 transition-all">
      <div className="inline-block w-1/3 aspect-square bg-white rounded-full border-amber-900 border-4 overflow-hidden align-middle">
        <img
          className="w-full h-full object-contain"
          src={image === "" ? noImage : image}
          alt="character image"
        />
      </div>
      <div className="inline-block w-2/3 pl-4 text-2xl font-chewy align-middle">
        {name}
      </div>
    </div>
  );
};

export default CharacterCard;
