import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const CharacterProfile = () => {
  const { id } = useParams();
  return (
    <div className="min-h-screen px-4 py-6 sm:px-8 lg:px-12 lg:py-10 bg-linear-to-b from-amber-100 to-amber-200">
      <div className="flex justify-end pr-2 pb-2">
        <Link to="/characterprofile/testid/edit">
          <button className="pl-2.5 pr-2 pt-1 pb-2 bg-slate-200 rounded-lg hover:bg-slate-300 hover:cursor-pointer">
            <FaEdit className="inline-block align-middle" />
            <span className="pl-1 align-middle">Edit</span>
          </button>
        </Link>
      </div>
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
          <div className="w-2/3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              laboriosam quo facilis adipisci dolorum alias dicta repellat saepe
              quos, voluptas facere itaque quibusdam numquam ratione
              necessitatibus! Et ut temporibus atque! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Voluptatem tenetur error,
              quisquam sequi consequatur magni, doloremque nulla hic, inventore
              harum vitae nesciunt praesentium sapiente consequuntur est
              mollitia autem nemo placeat?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterProfile;
