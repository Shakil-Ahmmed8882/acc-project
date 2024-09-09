import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const BrandBanner = ({
  title,
  image,
  id,
  className,
  description,
  path,
  index,
  bgColor,
}) => {
  const router = useRouter();

  const handleDiscoverNow = useCallback(() => {
    router.push(path);
  }, [router, path]);

  return (
    <div
      id={id}
      className={`${className} max-h-screen relative overflow-hidden`}
    >
      <div className="relative">
        <Image
          src={image}
          width={10000}
          height={10000}
          className="object-cover w-full h-screen relative"
          alt="banner"
        />
        {index === 0 && <VerticalAnimatedProgressbar />}
      </div>
      <div className="">
        <div className={`${bgColor} max-h-screen absolute inset-0`}></div>
        <div className="absolute flex items-center justify-center flex-col inset-0 text-white  mx-auto text-center">
          <h1
            className="text-3xl md:text-5xl xl:text-7xl font-normal
          uppercase font-cailyne tracking-[0.08em] leading-[60px]
          md:leading-[134px] max-w-[1920px]"
          >
            {title}
          </h1>
          {id !== "brands" && (
            <>
              <p className="text-white opacity-[80%] font-riviera text-[10px] md:text-[17px] lg:text-xl font-medium md:pt-4 max-w-[1440px]">
                {description || ""}
              </p>
              <button
                onClick={handleDiscoverNow}
                className="group text-[#8C4C24] mt-6 md:mt-12 bg-pale-gold hover:bg-[#F6DF65]  transition-all duration-500 text-sm md:text-base   py-2 md:py-4 px-8  lg:px-20 rounded-full border"
              >
                <span className="transition-all duration-500 font-riviera">
                  DISCOVER NOW
                  {/* <ButtonRightArrow /> */}
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const VerticalAnimatedProgressbar = ({ className }) => {
  return (
    <div className="absolute inset-x-0 hidden md:block md:bottom-28">
      <div className={`${className} w-[2px] bg-[#8d8d8d] left-1/2 relative `}>
        <div className="w-[2px] bottom-0 bg-[#d1d1d1] max-h-[1920px] animate-progress absolute !z-50"></div>
      </div>
    </div>
  );
};

const ButtonRightArrow = () => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="-translate-x-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-x-2  top-0 left-0 transition-all duration-500"
  >
    <path
      d="M15.6716 7.00005L11.0147 2.34314C10.6242 1.95262 10.6242 1.31946 11.0147 0.928941C11.4052 0.538417 12.0384 0.538416 12.4289 0.92894L19.5 8.00005L12.4289 15.0711C12.0384 15.4616 11.4052 15.4616 11.0147 15.0711C10.6242 14.6805 10.6242 14.0474 11.0147 13.6569L15.6716 9.00005H1.5C0.947715 9.00005 0.5 8.55234 0.5 8.00005C0.5 7.44777 0.947715 7.00005 1.5 7.00005H15.6716Z"
      fill="url(#paint0_linear_17_451)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_17_451"
        x1="10"
        y1="-9.82076"
        x2="10"
        y2="15.3639"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD700" />
        <stop offset="1" stopColor="#AC7C00" />
      </linearGradient>
    </defs>
  </svg>
);

export default BrandBanner;
