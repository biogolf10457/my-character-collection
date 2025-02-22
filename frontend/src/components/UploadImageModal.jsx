import React, { useState, useEffect } from "react";
import Avatar from "react-avatar-edit";
import { IoMdClose } from "react-icons/io";

const UploadImageModal = ({ imageChange, closeModal }) => {
  const [src, setSrc] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCrop = (view) => {
    setCroppedImage(view);
  };

  const onClose = () => {
    setCroppedImage(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed w-full h-screen inset-0 bg-gray-500/30 backdrop-blur-[4px] z-10">
      <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+2rem)] bg-slate-50 rounded-lg">
        <Avatar
          width={(windowWidth * 3) / 4}
          height={(windowHeight * 3) / 4}
          onCrop={onCrop}
          onClose={onClose}
          src={src}
        />
      </div>
      <button className="absolute top-2 right-2" onClick={closeModal}>
        <IoMdClose className="text-4xl hover:text-amber-50 cursor-pointer" />
      </button>
      {croppedImage && (
        <button
          className="button absolute bottom-8 left-1/2 -translate-x-1/2 disabled:bg-gray-500"
          onClick={() => {
            imageChange(croppedImage);
            closeModal();
          }}
        >
          Confirm
        </button>
      )}
    </div>
  );
};

export default UploadImageModal;
