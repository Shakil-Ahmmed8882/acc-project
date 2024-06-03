import { MoveRight } from "lucide-react";

const Button = ({ text, customStyle, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className={`${
        customStyle ? "border-[#ebebeb] text-white" : "border-[#ffee8e84]"
      }
       group  hover:px-[75px]  hover:bg-[#dfdfdf] mt-8 text-[16px]
      flex justify-center items-center gap-2 border  hover:border-none  
      rounded-full transition-all duration-700 py-3 px-16
      relative `}
    >
      <div
        className="
      group-hover:-translate-x-2 
      transition-all duration-500 font-riviera"
      >
        <span className="group-hover:text-black transition-all duration-1000">
          {text || "Discover Now"}
        </span>
      </div>

      <MoveRight
        className={`group-hover:visible group-hover:text-black group-hover:opacity-100 absolute
         right-0  group-hover:right-14 opacity-0
         flex items-center
        invisible transition-all duration-500 `}
      />
    </button>
  );
};

export default Button;
