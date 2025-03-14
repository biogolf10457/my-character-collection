import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import noImage from "../assets/noImage.jpg";
import UploadImageModal from "./UploadImageModal";
import { useNavigate, useParams } from "react-router-dom";
import baseUrl from "../../config";

const CharacterProfileEdit = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    information: "",
    image: "",
  });
  const [newImage, setNewImage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNumberChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setFormData({
      ...formData,
      [e.target.name]: String(numericValue === "" ? "" : Number(numericValue)),
    });
  };

  const imageChange = (changedImage) => {
    setNewImage(changedImage);
  };

  const dataURItoBlob = (dataURI) => {
    const blobBin = atob(dataURI.split(",")[1]);
    const array = [];
    for (var i = 0; i < blobBin.length; i++) {
      array.push(blobBin.charCodeAt(i));
    }
    const file = new Blob([new Uint8Array(array)], { type: "image/png" });
    return file;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      var uploadImageURL = formData.image;
      if (newImage !== "") {
        const imageFile = dataURItoBlob(newImage);
        const imageData = new FormData();
        imageData.append("file", imageFile);
        imageData.append("upload_preset", "my-character-collection");
        imageData.append("cloud_name", "dr1uw5i4v");

        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dr1uw5i4v/image/upload",
          {
            method: "POST",
            body: imageData,
          }
        );

        const uploadImage = await res.json();
        uploadImageURL = uploadImage.url;
      }

      const submitData = {
        name: formData.name,
        gender: formData.gender,
        age: formData.age,
        height: formData.height,
        weight: formData.weight,
        image: uploadImageURL,
        information: formData.information,
      };

      const updateCharacterRes = await fetch(
        `${baseUrl}/api/characterprofile/${id}/edit`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
          body: JSON.stringify(submitData),
        }
      );
      const updateCharacterData = await updateCharacterRes.json();
      if (!updateCharacterData.success) {
        alert(updateCharacterData.message);
      } else {
        navigate(`/characterprofile/${id}`);
      }
    } catch (error) {
      console.error(error.message);
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
        setFormData({
          name: data.data.name,
          gender: data.data.gender,
          age: data.data.age,
          height: data.data.height,
          weight: data.data.weight,
          information: data.data.information,
          image: data.data.image,
        });
      } catch (error) {
        console.error("Error: ", error);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="relative min-h-screen px-4 py-6 sm:px-8 lg:px-12 lg:py-10 bg-linear-to-b from-amber-100 to-amber-200">
      <form onSubmit={handleSubmit}>
        {modalOpen && (
          <UploadImageModal
            imageChange={imageChange}
            closeModal={() => setModalOpen(false)}
          />
        )}
        <div className="flex items-center justify-center mb-6">
          <h1 className="font-chewy text-3xl">Edit Character Profile</h1>
        </div>
        <div className="relative px-4 py-8 bg-orange-300 rounded-2xl shadow-lg">
          <div className="w-full flex flex-col lg:flex-row items-start space-y-10 lg:space-y-0">
            <div className="w-full lg:w-1/3 flex flex-col items-center justify-center">
              <div className="relative w-1/2 aspect-square ">
                <div className="w-full h-full bg-white rounded-full border-amber-900 border-4 overflow-hidden">
                  <img
                    className="w-full h-full object-contain"
                    src={
                      newImage === ""
                        ? formData.image === ""
                          ? noImage
                          : formData.image
                        : newImage
                    }
                    alt="character image"
                  />
                </div>
                <button
                  type="button"
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 p-1 bg-slate-200  hover:bg-slate-300 rounded-full border-2 border-slate-400  hover:cursor-pointer"
                  onClick={() => setModalOpen(true)}
                >
                  <MdEdit />
                </button>
              </div>
              <div className="pt-6 text-2xl font-chewy">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Character Name"
                  onChange={handleChange}
                  className="bg-white rounded-md text-center"
                />
              </div>
              <div className="pt-6 w-3/4 grid grid-cols-2 gap-y-2 text-lg font-roboto">
                <label htmlFor="gender">Gender : </label>
                <select
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="bg-white rounded-md"
                >
                  <option disabled value="">
                    {" "}
                    - select gender -{" "}
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <label htmlFor="age">Age : </label>
                <div className="flex">
                  <input
                    type="text"
                    name="age"
                    id="age"
                    value={formData.age}
                    placeholder="years"
                    className="w-2/3 bg-white rounded-md"
                    onChange={handleNumberChange}
                  />
                  <div className="pl-1 w-1/3">years</div>
                </div>
                <label htmlFor="height">Height : </label>
                <div className="flex">
                  <input
                    type="text"
                    name="height"
                    id="height"
                    value={formData.height}
                    placeholder="cm"
                    className="w-2/3 bg-white rounded-md"
                    onChange={handleNumberChange}
                  />
                  <div className="pl-1 w-1/3">cm</div>
                </div>
                <label htmlFor="weight">Weight : </label>
                <div className="flex">
                  <input
                    type="text"
                    name="weight"
                    id="weight"
                    value={formData.weight}
                    placeholder="kg"
                    className="w-2/3 bg-white rounded-md"
                    onChange={handleNumberChange}
                  />
                  <div className="pl-1 w-1/3">kg</div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <textarea
                name="information"
                value={formData.information}
                placeholder="character information"
                onChange={handleChange}
                className="w-full min-h-[70vh] p-2 bg-white rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <button type="submit" className="button" disabled={isLoading}>
            {isLoading && (
              <div className="loading-spin inline-flex align-middle max-w-6 max-h-6 mr-2"></div>
            )}
            <div className="inline-flex align-middle">Confirm</div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CharacterProfileEdit;
