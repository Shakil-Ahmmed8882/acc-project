import useGlobalContext from "@/hooks/useGlobalContext";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const MenuItem = ({ path, label, isBrand, isBrandHover}) => {
  const {setIsMenuOpen} = useGlobalContext()

  const handleClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Link 
      onClick={handleClick} 

      
      className="mt-7 md:mt-0 relative z-40 flex gap-1 text-[#cacaca] group text-[14px] hover:text-hover-txt-clr hover:smooth-transition before:content-[''] before:bg-hover-txt-clr before:w-0 before:h-1 before:my-8 md:before:mt-11 before:absolute before:transition-all before:duration-300 before:ease-linear hover:before:w-[100px] md:hover:before:w-full" href={path}>
      {label}
      {/* arrow icon next to brands */}
      {isBrand && <ChevronDown className={` ${isBrandHover && ' rotate-180 text-hover-txt-clr '} transition-all duration-300`} />}
    </Link>
  );
};

export default MenuItem;
