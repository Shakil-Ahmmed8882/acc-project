import { MoveRight } from "lucide-react";

const Button = () => {
  return (
    <button
      className={`group  hover:px-[75px]  hover:bg-[#fafafa] mt-8 text-[16px] flex justify-center items-center gap-2 border hover:border-none rounded-full
       transition-all duration-700 py-3 px-16 relative w-full rounded-gold-border border-gold2 font-riviera font-semibold`}
    >
      <span className="group-hover:-translate-x-2 transition-all duration-1000 gradient-text-gold text-transparent bg-clip-text bg-gradient-to-t from-gold2 via-mediumGold to-darkGoldBorder">
        LEARN MORE{" "}
      </span>
      <MoveRight
        className={`group-hover:visible group-hover:opacity-100 absolute right-2/4 top-[25%] group-hover:right-[30%] lg:group-hover:right-[35%] opacity-0 invisible transition-all duration-700 text-[#e0aa3e]`}
      />
    </button>
  );
};

export default Button;
