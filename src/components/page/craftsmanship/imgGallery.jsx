import React from "react";

// Images
import field from "@/assets/img/craftsmanship/imgGallery/craftsmanship1.png";
import seedling from "@/assets/img/craftsmanship/imgGallery/craftsmanship2.png";
import dryingLeaves from "@/assets/img/craftsmanship/imgGallery/craftsmanship3.png";
import composting from "@/assets/img/craftsmanship/imgGallery/craftsmanship4.png";
import cigarMaking from "@/assets/img/craftsmanship/imgGallery/craftsmanship5.png";
import cigarStorage from "@/assets/img/craftsmanship/imgGallery/craftsmanship6.png";
import truck from "@/assets/img/craftsmanship/imgGallery/craftsmanship7.png";
import Image from "next/image";
import Container from "@/components/shared/container/Container";

const ImageGallery = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="relative group col-span-full lg:col-span-2">
          <Image
            width={600}
            height={600}
            src={field}
            alt="Field"
            className="w-full group-hover:scale-x-125 h-auto object-cover col-span-2 transition-all duration-200"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg">Field</span>
          </div>
        </div>
        <div className="relative group">
          <Image
            width={600}
            height={600}
            src={seedling}
            alt="Seedling"
            className="w-full h-auto object-cover group-hover:scale-x-125 transition-all duration-200"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg">Seedling</span>
          </div>
        </div>
        <div className="relative group">
          <Image
            width={600}
            height={600}
            src={dryingLeaves}
            alt="Drying Leaves"
            className="w-full h-auto object-cover group-hover:scale-x-125 transition-all duration-200"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg">Drying Leaves</span>
          </div>
        </div>
        <div className="relative group col-span-2">
          <Image
            width={600}
            height={600}
            src={composting}
            alt="Composting"
            className="w-full h-auto object-cover col-span-2 group-hover:scale-x-125 transition-all duration-200"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg">Composting</span>
          </div>
        </div>
        <div className="relative group col-span-2">
          <Image
            width={600}
            height={600}
            src={cigarMaking}
            alt="Cigar Making"
            className="w-full h-auto object-cover col-span-2 group-hover:scale-x-125 transition-all duration-200"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg">Cigar Making</span>
          </div>
        </div>
        <div className="relative group">
          <Image
            width={600}
            height={600}
            src={cigarStorage}
            alt="Cigar Storage"
            className="w-full h-auto object-cover group-hover:scale-x-125 transition-all duration-200"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg">Cigar Storage</span>
          </div>
        </div>
        <div className="relative group col-span-3 flex justify-center ">
          <Image
            width={600}
            height={600}
            src={truck}
            alt="Truck on Road"
            className="w-2/3 group-hover:scale-x-125 h-auto object-cover transition-all duration-200"
          />
          <div className="absolute w-auto duration-200 inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg">Truck on Road</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ImageGallery;
