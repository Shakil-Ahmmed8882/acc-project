import React from "react";

const FindAcc = () => {
  return (
    <div
      id="find"
      className="text-white flex flex-col items-center justify-center space-y-6 pb-28"
    >
      <h3
        style={{ letterSpacing: 2 }}
        className="text-white py-3 text-3xl md:text-4xl lg:text-5xl mt-6 md:mt-4 md:mb-9 inline-block font-riviera"
      >
        FIND ACC NEAR YOU
      </h3>
      <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4">
        {/* Grouping ZIP CODE input and FIND A STORE button */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2">
          <div className="flex items-center border border-yellow-500 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="ZIP CODE"
              className="px-4 py-2 bg-black focus:outline-none  rounded-l-full"
            />
            <button className="text-[#FAFAFA] font-riviera px-4 py-2 focus:outline-none rounded-r-full">
              FIND A STORE
            </button>
          </div>
        </div>

        <div className="text-[#FAFAFA] font-riviera">OR</div>

        {/* Use Current Location Button */}
        <button className="bg-black font-riviera border border-yellow-500 px-4 py-2 rounded-full focus:outline-none text-[#FAFAFA]">
          USE CURRENT LOCATION
        </button>

        {/* Divider for large screens */}
        <div className="border-l border-yellow-500 h-8 hidden lg:block"></div>

        {/* Grouping Select Online Store and SEARCH NOW button */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2">
          <div className="flex items-center border border-yellow-500 rounded-full overflow-hidden">
            <select className="bg-black text-[#FAFAFA] font-riviera px-4 py-2 focus:outline-none">
              <option>Select Online Store</option>
              <option>Store 1</option>
              <option>Store 2</option>
              <option>Store 3</option>
            </select>
            <button
              size="large"
              className="bg-black text-[#FAFAFA] font-riviera px-4 py-2 focus:outline-none rounded-none"
            >
              SEARCH NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindAcc;
