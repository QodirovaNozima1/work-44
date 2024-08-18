import React from "react";
import { BsEmojiFrown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto mt-6">
      <div className="flex mr-auto flex-col gap-6 items-center mb-4">
        <h2 className="text-[68px] font-[600]">404</h2>
        <p>Sahifa topilmadi</p>
        <BsEmojiFrown className="text-[38px] text-[#dbdb38]" />
        <div className="mb-9">
          <button
            onClick={() => navigate("/")}
            className="p-3 bg-gray-300 mx-2 rounded-lg cursor-pointer"
          >
            Goo Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="p-3 bg-gray-300 mx-2 rounded-lg cursor-pointer"
          >
            Goo Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error