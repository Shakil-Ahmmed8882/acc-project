import { MoveRight } from "lucide-react";

const Button = ({openModal}) => {
  return (
    <button
      onClick={openModal}
      className={`group hover:px-[75px] hover:bg-[#dfdfdf] mt-8 text-[16px] flex justify-center items-center gap-2 border border-[#ffee8e84] hover:border-none text-[#c8b33b] rounded-full
       transition-all duration-700 py-3 px-16 relative hover:text-[#c6af2f]`}
    >
      <span className="group-hover:-translate-x-2 transition-all duration-1000">
        CONTACT ACC{" "}
      </span>
      <MoveRight
        className={`group-hover:visible group-hover:opacity-100 absolute right-2/4 top-[25%] group-hover:right-[20%] opacity-0 invisible transition-all duration-700 `}
      />
    </button>
  );
};

export default Button;
