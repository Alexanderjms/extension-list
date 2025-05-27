import React, { useState } from "react";

interface CardProps {
  id: string; // Add id prop
  imageUrl: string;
  title: string;
  description: string;
  status: string; // Add status prop
  onStatusChange: (id: string, newStatus: string) => void; // Add onStatusChange prop
}

const ExtensionCard: React.FC<CardProps> = ({
  id,
  imageUrl,
  title,
  description,
  status,
  onStatusChange,
}) => {
  const [isChecked, setIsChecked] = useState(status === "active");

  const handleCheckboxChange = () => {
    const newStatus = isChecked ? "inactive" : "active";
    setIsChecked(!isChecked);
    onStatusChange(id, newStatus);
  };

  return (
    <div className="bg-gray-800 rounded-lg borderExt p-4 flex flex-col Card transition-colors duration-300 font-noto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[22rem] xl:max-w-[23.7rem] min-w-[16rem] mx-2 my-2">
      <div className="flex items-start">
        <img src={imageUrl} alt={title} className="w-12 h-12 flex-shrink-0" />
        <div className="ml-4 flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-white font-noto">
            {title}
          </h3>
          <p className="text-gray-400 text-sm mt-1 font-noto">{description}</p>
        </div>
      </div>
      <div className="mt-9 flex items-center justify-between">
        <button className="bg-transparent border border-gray-500 hover:bg-blue-950 focus:outline-none text-white px-4 py-2 rounded-2xl font-noto text-xs transition-colors duration-300">
          Remove
        </button>
        <label className="ml-20 inline-flex relative items-center cursor-pointer font-noto">
          <input
            type="checkbox"
            className="sr-only peer focus:outline-none"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <div className="w-11 h-6 bg-gray-600 focus:outline-none rounded-full peer peer-checked:bg-red-500 transition-colors duration-300"></div>
          <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
        </label>
      </div>
    </div>
  );
};

export default ExtensionCard;
