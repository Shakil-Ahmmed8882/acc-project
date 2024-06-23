import { useState } from "react";
import SearchIcon from "./SearchIcon";
import SearchInput from "./SearchInput";

// Main component that combines SearchIcon and SearchInput with state management
const SearchBar = () => {
  const [isSwap, setIsSwap] = useState(false);

  return (
    <div>
      <div
        className={`text-[#ffffffda] ml-auto  cursor-pointer
     grid grid-cols-2 w-32  items-center gap-x-2 md:gap-x-4 `}
      >
        <SearchIcon isSwap={isSwap} onClick={() => setIsSwap(!isSwap)} />
        <span
          onClick={() => setIsSwap(!isSwap)}
          style={{ letterSpacing: 3 }}
          className={`
          text-white uppercase text-[13px] md:text-[16px] font-riviera underline 
          ${
            isSwap
              ? " -translate-x-32 opacity-0 pl-8 invisible"
              : "translate-x-3  md:-translate-x-1 visible opacity-100"
          } transition-all duration-1000 justify-self-end text-md md:text-[13px]`}
        >
          Search
        </span>
        <SearchInput isSwap={isSwap} />
      </div>
    </div>
  );
};

export default SearchBar;
