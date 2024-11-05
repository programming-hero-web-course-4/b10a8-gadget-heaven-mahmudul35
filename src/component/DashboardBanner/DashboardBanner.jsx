import React from "react";
import { useLocation } from "react-router-dom";
const DashboardBanner = ({ handleToggle, toggle }) => {
  const { pathname } = useLocation();

  return (
    <div className=" mx-9  relative  mb-16">
      <div className="flex flex-col items-center text-center space-y-6 bg-[#9538E2] h-[350px] rounded-2xl">
        <h1 className="text-5xl font-bold text-white w-[1100px] mt-14">
          Product Details
        </h1>
        <p className="text-white w-[790px]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        {pathname === "/dashboard" && (
          <div className="flex gap-8">
            <button
              onClick={() => handleToggle("cart")}
              className="btn  w-32 rounded-full bg-white text-[#9538E2] font-bold"
            >
              Cart
            </button>
            <button
              onClick={handleToggle}
              className="btn btn-secondary w-32 rounded-full"
            >
              WishList
            </button>
          </div>
        )}
      </div>
      {/* <div className="absolute bottom-24 left-0 right-0 border-2 border-white p-3 md:w-[1072px] mx-auto rounded-xl">
       <img
          src={Banner}
          alt=""
          className="h-[500px] md:w-[1062px] mx-auto rounded-xl"
        /> 
      </div> */}
    </div>
  );
};

export default DashboardBanner;
