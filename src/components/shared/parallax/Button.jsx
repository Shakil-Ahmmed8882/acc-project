import { MoveRight } from "lucide-react";


const Button = ({text,customStyle,clickHandler}) => {
  return (
    <button
      onClick={clickHandler}
      className={`${customStyle? 'border-[#ebebeb] text-white':'border-[#ffee8e84]'}
       group  hover:px-[75px]  hover:bg-[#dfdfdf] mt-8 text-[16px]
      flex justify-center items-center gap-2 border  hover:border-none  
      rounded-full transition-all duration-500 py-3 px-16
      relative hover:text-black`}
    >
      <span className="
      group-hover:-translate-x-2 
      transition-all duration-500">
        {text || 'Discover Now'}
      </span>

      <MoveRight
        className={`group-hover:visible group-hover:opacity-100 absolute
         right-6 top-[25%] group-hover:right-14 opacity-0
        invisible transition-all duration-500 `}
      />
    </button>
  );
};

export default Button;
