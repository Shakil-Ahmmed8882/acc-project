import logo from "@/assets/img/shared/navbar/logo.png";
import acclogo from "@/assets/img/shared/navbar/acc.png";
import Image from "next/image";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import Link from "next/link";

const Logo = ({ width = 100, height = 100 }) => {
  const direction = useScrollDirection();
  const scrollUp = direction === "up";

  return (
    <Link
      href="/"
      className={`relative flex-1 w-32 transition-all duration-700 ${
        scrollUp ? "h-[105px]" : "h-[95px] md:h-[95px]"
      }`}
    >
      <Image
        className={`absolute w-14 sm:w-16 top-3 md:w-24 lg:w-36 transition-all duration-1000 ${
          scrollUp ? "opacity-100 transform " : "opacity-0 transform "
        }`}
  
        width={width}
        height={height}
        src={logo}
        alt="logo"
      />
      <Image
        className={`absolute w-16 sm:w-20 top-9 md:w-24 lg:w-36 transition-all duration-1000 ${
          scrollUp ? "opacity-0" : "opacity-100"
        }`}
        
        width={width}
        height={height}
        src={acclogo}
        alt="acc logo"
      />
    </Link>
  );
};

export default Logo;