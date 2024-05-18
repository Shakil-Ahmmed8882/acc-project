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
    image: lifestyle1,
  },
  {
    id: 2,
    title: "Ignite Your Senses",
    description: "Enjoy the world's most exclusive cigar with ACC.",
    image: lifestyle2,
  },
  {
    id: 3,
    title: "Unwind in Style",
    description:
      "Elevate your relaxation to a sophisticated experience with ACC.",
    image: lifestyle3,
  },
];

const AccLifestyle = () => {
  const containerClass = "bg-black text-white py-16 px-4";
  const headerClass = "text-center text-3xl font-bold mb-8";
  const subHeaderClass = "text-center text-lg mb-16";
  const gridClass =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1220px] mx-auto";
  const cardClass = "flex flex-col overflow-hidden";
  const imageContainerClass = "relative overflow-hidden gap-6";
  const imageClass =
    "w-full h-64 object-cover hover-grow hover:opacity-50 transition duration-300";
  const cardContentClass = "border-l-2 border-[#FAFAFA99] p-4";
  const titleClass = "text-xl font-semibold mb-2";

  return (
    <div className={containerClass}>
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
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccLifestyle;
