import { ChevronDown } from "lucide-react";
import Link from "next/link";

const MenuItem = ({ path, label, isBrand, isBrandHover }) => {
  return (
    <Link className="relative flex gap-1 text-[#cacaca] group text-[14px] hover:text-hover-txt-clr hover:smooth-transition before:content-[''] before:bg-hover-txt-clr before:w-0 before:h-1 before:mt-11 before:absolute before:transition-all before:duration-300 before:ease-linear hover:before:w-full" href={path}>
      {label}
      {/* arrow icon next to brands */}
      {isBrand && <ChevronDown className={` ${isBrandHover && ' rotate-180 text-hover-txt-clr '} transition-all duration-300`} />}
    </Link>
  );
};

export default MenuItem;
