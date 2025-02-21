import React from "react";

const CharacterCard = ({ name }) => {
  return (
    <div className="relative px-4 py-3 bg-orange-100 rounded-xl shadow-md hover:scale-105 hover:-rotate-2 transition-all">
      <div className="inline-block w-1/3 aspect-square bg-amber-300 rounded-full inset-shadow-sm align-middle"></div>
      <div className="inline-block w-2/3 pl-4 text-2xl font-chewy align-middle">
        {name}
      </div>
    </div>
  );
};

export default CharacterCard;
