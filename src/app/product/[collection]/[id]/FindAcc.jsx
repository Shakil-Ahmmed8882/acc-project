import React from "react";

const FindAcc = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center space-y-6 pb-28">
      <h3
        style={{ letterSpacing: 2 }}
        className="text-white py-3 text-3xl md:text-4xl lg:text-5xl mt-6 md:mt-4 md:mb-9 inline-block font-riviera"
      >
        FIND ACC NEAR YOU
      </h3>
      <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2">
          <input
            type="text"
            placeholder="ZIP CODE"
            className="bg-gray-800 text-yellow-500 rounded-full px-4 py-2 placeholder-yellow-500 focus:outline-none"
          />
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600 focus:outline-none">
            FIND A STORE
          </button>
        </div>

        <div className="text-gray-400">OR</div>

        {/* Use Current Location Button */}
        <button className="bg-gray-800 text-yellow-500 px-4 py-2 rounded-full hover:bg-gray-700 focus:outline-none">
          USE CURRENT LOCATION
        </button>

        {/* Divider for large screens */}
        <div className="border-l border-gray-600 h-8 hidden lg:block"></div>

        {/* Select Online Store and Search Now Button */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2">
          <select className="bg-gray-800 text-yellow-500 rounded-full px-4 py-2 focus:outline-none">
            <option>Select Online Store</option>
            <option>Store 1</option>
            <option>Store 2</option>
            <option>Store 3</option>
          </select>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600 focus:outline-none">
            SEARCH NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindAcc;
