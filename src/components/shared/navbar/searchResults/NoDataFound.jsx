// components/NoDataFound.js

import ImageWithAlt from "./ImageWithAlt";
import noDataFound from "@/assets/img/shared/not-found/not-found.png";

const NoDataFound = () => {
  return (
    <div className="flex items-center h-[50vh] justify-center w-full">
      <h1 className="text-3xl text-[#686868] text-center">
        No items match <br /> your search
      </h1>
      <ImageWithAlt
        width={500}
        height={500}
        src={noDataFound}
        alt="No data found"
        className="absolute w-64 mix-blend-multiply scroll-smooth top-24 right-0 left-[30%] flex justify-center opacity-15 object-cover"
      />
    </div>
  );
};

export default NoDataFound;
