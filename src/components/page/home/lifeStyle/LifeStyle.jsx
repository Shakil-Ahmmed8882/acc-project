import Container from "@/components/shared/container/Container";
import Image from "next/image";
import React from "react";

const accLifestyleContent = [
  {
    id: 1,
    title: "Unparalleled Luxury",
    description:
      "Indulge in the world's finest luxury spirits in hand crafted crystal with ACC Spirits.",
    image: "/Rectangle1.png",
  },
  {
    id: 2,
    title: "Ignite Your Senses",
    description: "Enjoy the world's most exclusive cigar with ACC.",
    image: "/Rectangle3.png",
  },
  {
    id: 3,
    title: "Unwind in Style",
    description:
      "Elevate your relaxation to a sophisticated experience with ACC.",
    image: "/Rectangle2.png",
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
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>

    </div>
  );
};

export default AccLifestyle;
