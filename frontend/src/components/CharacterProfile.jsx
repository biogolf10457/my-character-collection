import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import noImage from "../assets/noImage.jpg";

const CharacterProfile = () => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState({
    name: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    information: "",
    image: "",
  });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `http://localhost:3000/api/characterprofile/${id}`,
        { method: "GET" }
      );
      const data = await res.json();
      setCharacterData({
        name: data.data.name,
        gender: data.data.gender,
        age: data.data.age,
        height: data.data.height,
        weight: data.data.weight,
        information: data.data.information,
        image: data.data.image,
      });
    }
    fetchData();
  }, []);
  return (
    <div className="min-h-screen px-4 py-6 sm:px-8 lg:px-12 lg:py-10 bg-linear-to-b from-amber-100 to-amber-200">
      <div className="flex pr-2 pb-2 justify-end space-x-4">
        <Link to={`/characterprofile/${id}/edit`}>
          <button
            type="button"
            className="pl-2.5 pr-2 pt-1 pb-2 bg-slate-200 rounded-lg hover:bg-slate-300 hover:cursor-pointer inset-shadow-2xs"
          >
            <FaEdit className="inline-block align-middle" />
            <span className="pl-1 align-middle">Edit</span>
          </button>
        </Link>
        <button
          type="button"
          className="pl-2.5 pr-2 pt-1 pb-2 bg-red-400 rounded-lg hover:bg-red-500 hover:cursor-pointer inset-shadow-2xs"
        >
          <MdDeleteForever className="text-lg inline-block align-middle" />
          <span className="pl-1 align-middle">Delete</span>
        </button>
      </div>
      <div className="relative min-h-[70vh] px-4 py-8 bg-orange-300 rounded-2xl shadow-lg">
        <div className="w-full flex">
          <div className="w-1/3 flex flex-col items-center justify-center">
            <div className="w-1/2 aspect-square bg-white rounded-full border-amber-900 border-4 overflow-hidden">
              <img
                className="w-full h-full object-contain"
                src={characterData.image === "" ? noImage : characterData.image}
                alt="character image"
              />
            </div>
            <div className="pt-6 text-2xl font-chewy">{characterData.name}</div>
            <div className="pt-6 w-2/3 grid grid-cols-2 gap-y-2 text-lg font-roboto">
              <div>Gender : </div>
              <div>
                {characterData.gender === "" ? "-" : `${characterData.gender}`}
              </div>
              <div>Age : </div>
              <div>
                {characterData.age === "" ? "-" : `${characterData.age} years`}
              </div>
              <div>Height : </div>
              <div>
                {characterData.height === ""
                  ? "-"
                  : `${characterData.height} cm`}
              </div>
              <div>Weight : </div>
              <div>
                {characterData.weight === ""
                  ? "-"
                  : `${characterData.weight} kg`}
              </div>
            </div>
          </div>
          <div className="w-2/3 whitespace-pre-line break-words">
            {characterData.information === ""
              ? "No information."
              : characterData.information}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterProfile;
