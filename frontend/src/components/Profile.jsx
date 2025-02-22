import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import { PiPersonArmsSpreadDuotone } from "react-icons/pi";

const Profile = () => {
  const [name, setName] = useState("");
  const [characters, setCharacters] = useState([""]);
  const [loaded, setLoaded] = useState(true);

  return (
    <div className="min-h-screen px-4 py-6 sm:px-8 lg:px-12 lg:py-10 bg-linear-to-b from-amber-100 to-amber-200">
      <div className="flex items-center justify-center">
        <div className="w-6xl">
          <h1 className="mb-10 text-6xl font-chewy">{name}'s collection</h1>
          <div className="flex justify-end pr-2 pb-2">
            <button className="pl-2.5 pr-2 pt-1 pb-2 bg-slate-200 rounded-lg hover:bg-slate-300 hover:cursor-pointer">
              <PiPersonArmsSpreadDuotone className="inline-block align-middle" />
              <span className="pl-1 align-middle">Create</span>
            </button>
          </div>
          <div className="relative min-h-[70vh] px-6 py-4 bg-orange-300 rounded-2xl shadow-lg">
            {!loaded && (
              <div className="absolute top-1/2 left-1/2 -translate-1/2">
                <div className="loading-spin"></div>
              </div>
            )}
            {loaded && !characters.length && (
              <div className="absolute top-1/2 left-1/2 -translate-1/2">
                No characters in the collection.{" "}
                <span className="text-blue-600 underline">
                  <Link to="/createcharacter">Create character</Link>
                </span>
              </div>
            )}
            {loaded && characters.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/characterprofile/testid">
                  <CharacterCard name="Name Surname" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
