import React from "react";

const Card = ({ title,image,category, key }) => {
  return (
    <div key={key} className="w-[364px] flex flex-col rounded overflow-hidden shadow-lg mb-4">
      <img className="w-full" src={image} alt="Sunset in the mountains" />
      <div className="px-3 pt-6 pb-4 flex gap-2 flex-col text-white bg-customgray-850">
        <h2 className="font-medium text-[20px] leading-6">{title}</h2>
        <span className="text-base">{category}</span>
      </div>
    </div>
  );
};
export default Card;
