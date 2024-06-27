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
      className={`relative ml-24 md:ml-20 flex-1 justify-center w-32 transition-all duration-700 ${
        scrollUp ? "h-[105px]" : "h-[95px] md:h-[95px]"
      }`}
    >
      <Image
        className={`absolute  min-w-11 w-16 sm:w-20  top-8 lg:top-3 md:w-28 lg:w-36 transition-all duration-1000 ${
          scrollUp ? "opacity-100 transform" : "opacity-0 transform"
        }`}
        width={width}
        height={height}
        src={logo}
        alt="logo"
      />
      <Image
        className={`absolute  min-w-11 w-16 sm:w-20 top-10 lg:top-9 md:w-28 lg:w-36 transition-all duration-1000 ${
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