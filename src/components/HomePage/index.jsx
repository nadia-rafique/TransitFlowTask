import React from "react";
import Navbar from "../Navbar";

const HomePage = () => {
  return (
    <div className="w-full h-[85vh]">
      <Navbar />
      <div className="heroSection w-full h-full">
        <div className="flex flex-col text-white gap-4 absolute top-64 left-[7.5rem] mainWrapper">
          <span className="w-fit text-sm p-2 bg-customgray-225 border-l-4 border-solid sectionHeading">Logistics & Supply Chain Solutions</span>
          <h2 className="font-semibold text-6xl leading-[71px]">Your Gateway</h2>
          <h2 className="font-semibold text-6xl leading-[71px]">to any Destination</h2>
          <h2 className="font-semibold text-6xl leading-[71px]">in the World</h2>
          <span className="text-base font-medium w-2/4">In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus.</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
