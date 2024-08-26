import { X } from "lucide-react";
import searchicon from "@/assets/img/shared/navbar/searchicon.png";
import Image from "next/image";

// Component for the Search icon with transition and click handler
const SearchIcon = ({ isSwap, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer z-30">
      {isSwap ? (
        <X
          size={20}
          className="text-white transition-transform duration-1000 p-[3px] md:p-0 md:translate-x-16"
        />
      ) : (
        <Image
          src={searchicon}
          className={`
            md:w-[20px] cursor-pointer
            ${
              isSwap
                ? "-translate-x-2 md:translate-x-16"
                : "-translate-x-0 md:-translate-x-7"
            } 
            transition-all duration-1000 p-[3px] md:p-0`}
          alt=""
        />
      )}
    </div>
  );
};

export default SearchIcon;
