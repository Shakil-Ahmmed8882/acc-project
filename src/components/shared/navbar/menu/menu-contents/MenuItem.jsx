import useGlobalContext from "@/hooks/useGlobalContext";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const MenuItem = ({ path, label, isBrand, className }) => {
  const { setIsMenuOpen } = useGlobalContext();
  const { isBrandHover, setIsBrandsHover } = useGlobalContext();
  const handleClick = () => {
    setIsMenuOpen(false);
    setIsBrandsHover(false);
  };

  return (
    <Link
      onClick={handleClick}
      className={`${
        className ? `${className}` : "text-[#cacaca]"
      } mt-7 md:mt-0 relative z-40 flex gap-1 group text-[14px]
       hover:text-standard-gold before:content-['']
        hover:before:bg-standard-gold transition-all duration-200
         before:h-[2px] before:my-8 md:before:mt-6 before:absolute before:transition-all before:duration-300 before:ease-linear
       hover:before:w-[100px] md:hover:before:w-full smooth-transition`}
      href={path}
    >
      {label}
      {/* arrow icon next to brands */}
      {isBrand && (
        <ChevronDown
          className={` ${
            isBrandHover && " rotate-180 text-standard-gold "
          } transition-all duration-300`}
        />
      )}
    </Link>
  );
};

export default MenuItem;
