import Container from "@/components/shared/container/Container";
import Image from "next/image";
import React from "react";
import lifestyle1 from "@/assets/img/home/lifestyle/lifestyle1.png";
import lifestyle2 from "@/assets/img/home/lifestyle/lifestyle2.png";
import lifestyle3 from "@/assets/img/home/lifestyle/lifestyle3.png";

const accLifestyleContent = [
  {
    id: 1,
    title: "Unparalleled Luxury",
    description:
      "Indulge in the world's finest luxury spirits in hand crafted crystal with ACC Spirits.",
    image: lifestyle3,
  },
  {
    id: 2,
    title: "Ignite Your Senses",
    description: "Enjoy the world's most exclusive cigar with ACC.",
    image: lifestyle1,
  },
  {
    id: 3,
    title: "Unwind in Style",
    description:
      "Elevate your relaxation to a sophisticated experience with ACC.",
    image: lifestyle2,
  },
];

const AccLifestyle = () => {
  return (
    <div className="bg-black w-full">
      <Container className=" text-white py-16 px-4">
        <h2 className="text-center text-[28px] font-riviera leading-[140%] uppercase mb-4 tracking-[.3rem]">
          Explore ACC Lifestyle
        </h2>
        <p className="text-center text-lg mb-16 font-riviera leading-[140%] uppercase tracking-[.3rem]">
          Continue Your Journey
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {accLifestyleContent.map(({ id, title, description, image }) => (
            <div key={id} className="flex flex-col overflow-hidden">
              <div className="relative overflow-hidden gap-6">
                <Image
                  width={600}
                  height={600}
                  src={image}
                  alt={title}
                  className="object-cover hover:opacity-50 hover-grow transition duration-300 smooth-transition size-[400px] w-full lg:size-[500px]"
                />
              </div>
              <div className="border-l-2 border-[#FAFAFA99] px-6 pt-6 pb-14">
                <h3 className="text-2xl mb-6 tracking-[.3rem] uppercase font-medium leading-[140%] font-riviera">
                  {title}
                </h3>
                <p className="text-[#FAFAFA99] leading-[140%] font-normal text-xl font-riviera">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AccLifestyle;
