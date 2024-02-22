import React from "react";
import data from "./data.json";
import Card from "./Card";
import image1 from '../../assets/images/Jessca.png';
import image2 from '../../assets/images/Kathleen.png';
import image3 from '../../assets/images/Rebecca.png';

const images = {
  image1,image2,image3
}

const Transporting = () => {
  return (
    <div className="relative">
      <div className="w-full mt-[32rem] flex flex-col gap-16">
        <div className="flex items-center justify-center">
          <div className="flex border-t border-r border-customgray-350 p-10 items-center gap-4 text-customgray-850">
            <h2 className="text-[50px] leading-[59px] font-semibold">1294</h2>
            <span>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  width="17"
                  height="17"
                  fill="url(#paint0_linear_1_1387)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_1387"
                    x1="0.0180415"
                    y1="3.68333"
                    x2="21.4042"
                    y2="5.20206"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFB629" />
                    <stop offset="0.507189" stop-color="#FFDA56" />
                    <stop offset="1" stop-color="#FFD7A6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="text-[20px] leading-[18px]">Delivered Packages</span>
          </div>
          <div className="flex border-t border-customgray-350 p-10 items-center gap-4 text-customgray-850">
            <h2 className="text-[50px] leading-[59px] font-semibold">3594</h2>
            <span>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  width="17"
                  height="17"
                  fill="url(#paint0_linear_1_1387)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_1387"
                    x1="0.0180415"
                    y1="3.68333"
                    x2="21.4042"
                    y2="5.20206"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFB629" />
                    <stop offset="0.507189" stop-color="#FFDA56" />
                    <stop offset="1" stop-color="#FFD7A6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="text-[20px] leading-[18px]">Satisfied Clients</span>
          </div>
        </div>
        <div className="mainWrapper flex flex-col justify-center gap-10">
          <div className="flex flex-col items-center text-customgray-850 gap-4 w-full">
            <span className="w-fit text-sm p-2 bg-customgray-225 border-l-4 border-solid sectionHeading">The Transporters</span>
            <h2 className="text-4xl font-semibold leading-[42px]">Meet Expert Team</h2>
          </div>
          <div className="flex gap-4 justify-center">
            {data.map(({ title, category, image }, key) => (
              <Card title={title} image={images[image]} category={category} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Transporting;