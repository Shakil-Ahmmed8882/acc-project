import Image from "next/image";
import { worldAccImages } from "./BrandImages";
import Container from "@/components/shared/container/Container";

const BrandWorldAcc = () => {
  return (
    <Container bgClr="bg-black">
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
