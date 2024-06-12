import Container from "@/components/shared/container/Container";
import Image from "next/image";
import React from "react";
import lifestyle1 from "@/assets/img/home/lifestyle/lifestyle1.png";
import lifestyle2 from "@/assets/img/home/lifestyle/lifestyle2.png";
import lifestyle3 from "@/assets/img/home/lifestyle/lifestyle3.jpg";
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
  const containerClass = "bg-black text-white py-16 px-4";
  const headerClass =
    "text-center text-[28px] font-riviera leading-[140%] uppercase mb-4 tracking-[.3rem]";
  const subHeaderClass =
    "text-center text-lg mb-16 font-riviera leading-[140%] uppercase tracking-[.3rem]";
  const gridClass =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto";
  const cardClass = "flex flex-col overflow-hidden";
  const imageContainerClass = "relative overflow-hidden gap-6";
  const imageClass =
    "object-cover  hover:opacity-50 hover-grow transition duration-300 smooth-transition size-[400px] lg:size-[500px]";
  const cardContentClass = "border-l-2 border-[#FAFAFA99] px-6 pt-6 pb-14";
  const titleClass =
    "text-2xl font- mb-6 text-2xl tracking-[.3rem] uppercase font-medium leading-[140%] font-riviera";
  const paragraph =
    "text-[#FAFAFA99] leading-[140%] font-normal text-xl font-riviera";

  return (
    <div className="bg-black w-full">
      <Container className={containerClass}>
        <h2 className={headerClass}>Explore ACC Lifestyle</h2>
        <p className={subHeaderClass}>Continue Your Journey</p>
        <div className={gridClass}>
          {accLifestyleContent.map((item) => (
            <div key={item.id} className={cardClass}>
              <div className={imageContainerClass}>
                <Image
                  width={600}
                  height={600}
                  src={item.image}
                  alt={item.title}
                  className={imageClass}
                />
              </div>
              <div className={cardContentClass}>
                <h3 className={titleClass}>{item.title}</h3>
                <p className={paragraph}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AccLifestyle;
