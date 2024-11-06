import React from "react";
import { useLocation } from "react-router-dom";
import Banner from "../../assets/banner.jpg";
const HomeBanner = () => {
  const { pathname } = useLocation();
  return (
    <div className=" mx-9  relative h-screen mb-20">
      <div
        className={`flex flex-col items-center text-center space-y-6 bg-[#9538E2] h-[650px] ${
          pathname == "/" ? "rounded-b-2xl" : "rounded-2xl"
        }`}
      >
        <h1 className="text-5xl font-bold text-white w-[1100px] mt-14">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="text-white w-[790px]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="bg-white p-3 rounded-full text-[#9538E2] font-bold">
          Shop Now
        </button>
      </div>
      <div className="absolute bottom-24 left-0 right-0 border-2 border-white p-3 md:w-[1072px] mx-auto rounded-xl">
        <img
          src={Banner}
          alt=""
          className="h-[500px] md:w-[1062px] mx-auto rounded-xl"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
