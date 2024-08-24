import useGlobalContext from "@/hooks/useGlobalContext";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = ({ path, label, isBrand, className }) => {
  const router = usePathname();
  const { setIsMenuOpen } = useGlobalContext();
  const { isBrandHover, setIsBrandsHover } = useGlobalContext();
 
  


  return (
    <Link
      onClick={()=>{
        setIsBrandsHover(false);
        setIsMenuOpen(false);
        (true)
      }}
      className={`
        
        ${
        className ? `${className}` : "text-[#cccccc]"
      } mt-7 md:mt-0 relative z-40 flex gap-1 group text-[14px]

      ${router === path? `text-white hover:text-standard-gold before:content-['']`:''}

       hover:text-standard-gold before:content-['']
        hover:before:bg-standard-gold transition-all duration-200
         before:h-[2px] before:mt-[30px] md:before:mt-[49px] before:absolute before:transition-all before:duration-300 before:ease-linear
       hover:before:w-[100px] md:hover:before:w-full smooth-transition font-riviera`}
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
