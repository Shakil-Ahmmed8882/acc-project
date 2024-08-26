import logo from "@/assets/img/shared/navbar/logo.png";
import acclogo from "@/assets/img/shared/navbar/acc.png";
import Image from "next/image";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = ({ width = 100, height = 100 }) => {
  const direction = useScrollDirection();
  const scrollUp = direction === "up";
  const isHomepage = usePathname() === "/";

  return (
    <Link
      href="/"
      className={`relative  flex justify-center  transition-all duration-700 ${
        scrollUp ? "h-[105px]" : " h-[95px] md:h-[90px]"
      }`}
    >
      <Image
        className={`absolute  min-w-11 top-4 sm:top-3 md:top-1  lg:top-auto  w-28 md:w-32 lg:w-40 transition-all duration-1000 ${
           scrollUp ? "opacity-100 transform" : `${ isHomepage && 'opacity-0 transform'}`
        }`}
        // width={width}
        // height={height}
        src={logo}
        alt="logo"
      />
      {isHomepage && (
        <Image
          className={`absolute min-w-11 top-10 sm:top-8 md:top-9   lg:top-10 w-28 lg:w-36 transition-all duration-1000 ${
            scrollUp ? "opacity-0" : "opacity-100"
          }`}
          // width={width}
          // height={height}
          src={acclogo}
          alt="acc logo"
        />
      )}
    </Link>
  );
};

export default Logo;

// import logo from "@/assets/img/shared/navbar/logo.png";
// import acclogo from "@/assets/img/shared/navbar/acc.png";
// import Image from "next/image";
// import { useScrollDirection } from "@/hooks/useScrollDirection";
// import Link from "next/link";

// const Logo = ({ width = 100, height = 100 }) => {
//   const direction = useScrollDirection();
//   const scrollUp = direction === "up";

//   return (
//    <div className="text-white flex justify-center">logo</div>
//   );
// };

// export default Logo;
