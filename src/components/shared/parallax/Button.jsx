import { MoveRight } from "lucide-react";
import Link from "next/link";

const Button = ({ text, customStyle, clickHandler }) => {
  return (
    <Link href={"/product/cigar"}>
      <button
        onClick={clickHandler}
        className={`${
          customStyle ? "border-[#ebebeb] text-white" : "border-[#ffee8e84]"
        }
       group  hover:px-[75px]  
       
       
      
       

       
       hover:bg-[#dfdfdf] mt-8 text-[16px]
      flex justify-center items-center gap-2   hover:border-none  
      !rounded-full transition-all duration-700 py-3 px-16
      button-gradient-border
      relative `}
      >
        <div
          className="
      group-hover:-translate-x-2
       
      transition-all duration-500 font-riviera"
        >
          <span className=" group-hover:text-deep-gold transition-all duration-1000">
            {text || "Discover Now"}
          </span>
        </div>

        <MoveRight
          className={`group-hover:visible group-hover:text-deep-gold group-hover:opacity-100 absolute
         right-0 top-[7px]  group-hover:right-14 opacity-0
         
        invisible transition-all duration-500 `}
        />
      </button>
    </Link>
  );
};

export default Button;
