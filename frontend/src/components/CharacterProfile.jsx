import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import noImage from "../assets/noImage.jpg";
import baseUrl from "../../config";

const CharacterProfile = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const navigate = useNavigate();
  const [characterData, setCharacterData] = useState({
    name: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    information: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${baseUrl}/api/characterprofile/${id}/delete`, {
        method: "DELETE",
        headers: { "x-auth-token": token },
      });

      const data = await res.json();
      if (!data.success) {
        alert(data.message);
      } else {
        navigate("/profile");
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch(`${baseUrl}/api/characterprofile/${id}`, {
          method: "GET",
        });
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
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen px-4 py-6 sm:px-8 lg:px-12 lg:py-10 bg-linear-to-b from-amber-100 to-amber-200">
      <div className="flex pr-2 pb-2 justify-end space-x-4">
        <Link to={`/characterprofile/${id}/edit`}>
          <button
            type="button"
            className="pl-2.5 pr-2 pt-1 pb-2 bg-slate-200 rounded-lg inset-shadow-2xs hover:bg-slate-300 hover:cursor-pointer disabled:bg-gray-500 disabled:text-slate-100 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading-spin inline-block align-middle max-w-4 max-h-4 mr-1"></div>
            ) : (
              <FaEdit className="inline-block align-middle" />
            )}
            <span className="pl-1 align-middle">Edit</span>
          </button>
        </Link>
        <button
          type="button"
          className="pl-2.5 pr-2 pt-1 pb-2 bg-red-400 rounded-lg inset-shadow-2xs hover:bg-red-500 hover:cursor-pointer disabled:bg-gray-600 disabled:text-slate-100 disabled:cursor-not-allowed"
          onClick={handleDelete}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="loading-spin inline-block align-middle max-w-4 max-h-4 mr-1"></div>
          ) : (
            <MdDeleteForever className="text-lg inline-block align-middle" />
          )}
          <span className="pl-1 align-middle">Delete</span>
        </button>
      </div>
      <div className="relative min-h-[70vh] px-4 py-8 bg-orange-300 rounded-2xl shadow-lg">
        <div className="w-full flex flex-col lg:flex-row items-start space-y-10 lg:space-y-0">
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center">
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
          <div className="w-full lg:w-2/3 whitespace-pre-line break-words">
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
