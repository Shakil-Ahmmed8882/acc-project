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
  return (
    <div className="bg-black text-white py-16 px-4">
      <h2 className="text-center text-3xl font-bold mb-8">
        Explore ACC Lifestyle
      </h2>
      <p className="text-center text-lg mb-16">Continue Your Journey</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1220px] mx-auto">
        {accLifestyleContent.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center">
            <Image
              width={500}
              height={500}
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccLifestyle;
