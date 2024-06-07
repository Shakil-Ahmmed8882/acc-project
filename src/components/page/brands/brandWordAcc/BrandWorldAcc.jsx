import Image from "next/image";
import { worldAccImages } from "./BrandImages";
import Container from "@/components/shared/container/Container";

const BrandWorldAcc = () => {
  return (
    <Container>
      <div className="my-16">
        <h3 className="text-2xl md:text-3xl font-normal font-riviera text-light-text  uppercase border-b-2 border-light-text md:max-w-fit  pb-4 md:pb-8 text-center">
          THE WORLD OF ACC
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="lg:col-span-2 mb-6 lg:mb-0">
            <Image
              width={764}
              className="object-cover h-full lg:h-max w-full lg:max-w-fit"
              height={413}
              alt="ACC Retail Showrooms"
              src={worldAccImages.showroom}
            />
            <p className="md:text-xl mt-4 lg:mt-8 font-medium font-riviera text-light-text z-50 uppercase">
              ACC Retail Showrooms
            </p>
          </div>
          <div className="">
            <Image
              width={764}
              className="object-cover h-full lg:h-max w-full lg:max-w-fit"
              height={413}
              alt="ACC Retail Showrooms"
              src={worldAccImages.airCraft}
            />
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <Image
              width={764}
              className="object-cover h-full lg:h-max w-full lg:max-w-fit"
              height={413}
              alt="ACC Retail Showrooms"
              src={worldAccImages.luxuryAccess}
            />
            <p className="md:text-xl mt-4 lg:mt-8 font-medium font-riviera text-light-text  uppercase">
              Luxury Accessories
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default BrandWorldAcc;

function NewButton() {
  return (
    <button className="group  cursor-pointer py-[13px] px-10 bg-transparent  rounded-[60px] box-border flex flex-row items-center justify-center max-w-full border-[2px] border-solid border-pale-gold hover:bg-pale-gold/10 hover:box-border hover:border-[2px] hover:border-solid hover:border-pale-gold/70">
      <div className="relative text-xl leading-[140%] font-medium font-riviera text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f9f295,_#e0aa3e_29.47%,_#faf398_67.57%,_#b88a44_89.34%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left sm:text-base sm:leading-[22px]">
        SEE OUR PRODUCTS
      </div>
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden ml-4 group-hover:block  top-0 left-0 transition-all duration-1000"
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
    </button>
  );
}
