"use client";
import React, { useState } from "react";
import Container from "@/components/shared/container/Container";

// Images
import field from "@/assets/img/craftsmanship/imgGallery/craftsmanship1.png";
import seedling from "@/assets/img/craftsmanship/imgGallery/craftsmanship2.png";
import dryingLeaves from "@/assets/img/craftsmanship/imgGallery/craftsmanship3.png";
import composting from "@/assets/img/craftsmanship/imgGallery/craftsmanship4.png";
import cigarMaking from "@/assets/img/craftsmanship/imgGallery/craftsmanship5.png";
import cigarStorage from "@/assets/img/craftsmanship/imgGallery/craftsmanship6.png";
import truck from "@/assets/img/craftsmanship/imgGallery/craftsmanship7.png";
import HoverImage from "./HoverImage";

const ImageGallery = () => {
  const [hoveredFirstRow, setHoveredFirstRow] = useState(null);
  const [hoveredSecondRow, setHoveredSecondRow] = useState(null);
  const [hoveredThirdRow, setHoveredThirdRow] = useState(null);
  const [hoveredFourthRow, setHoveredFourthRow] = useState(null);

  return (
    <>
      <Container>
        <div className="border-b pb-2 border-[#bfbfbf] text-2xl text-white w-fit">
          CRAFTING PROCESS
        </div>
        <h1 className="py-6 riviera text-[#bfbfbf]">
          At ACC we age and ferment the tobacco for years, a rare practice even
          among the most well-known brands. We then roll the cigars in our own
          factory and age them again. This process takes many years and is very
          difficult for producers of mass-produced well-known brands. As a true
          cigar aficionado knows, a cigar&apos;s best friend is slow natural
          tobacco fermentation combined with ageing, compared to chamber, or
          boxed-room heating. Our tobacco vintages range from 3 12 years and
          more.
        </h1>
        <div className="space-y-6">
          <div className="flex justify-between gap-6">
            <HoverImage
              src={field}
              alt="Field"
              hovered={hoveredFirstRow}
              setHovered={setHoveredFirstRow}
              hoverKey="first"
              initialWidth="66.66%" // 8/12
              hoverWidth="83.33%" // 10/12
            />
            <HoverImage
              src={seedling}
              alt="Seedling"
              hovered={hoveredFirstRow}
              setHovered={setHoveredFirstRow}
              hoverKey="second"
              initialWidth="33.33%" // 4/12
              hoverWidth="50%" // 6/12
            />
          </div>
          <div className="flex justify-between gap-6">
            <HoverImage
              src={dryingLeaves}
              alt="Drying Leaves"
              hovered={hoveredSecondRow}
              setHovered={setHoveredSecondRow}
              hoverKey="third"
              initialWidth="33.33%" // 4/12
              hoverWidth="50%" // 6/12
            />
            <HoverImage
              src={composting}
              alt="Composting"
              hovered={hoveredSecondRow}
              setHovered={setHoveredSecondRow}
              hoverKey="fourth"
              initialWidth="66.66%" // 8/12
              hoverWidth="83.33%" // 10/12
            />
          </div>
          <div className="flex justify-between gap-6">
            <HoverImage
              src={cigarMaking}
              alt="Cigar Making"
              hovered={hoveredThirdRow}
              setHovered={setHoveredThirdRow}
              hoverKey="fifth"
              initialWidth="66.66%" // 8/12
              hoverWidth="83.33%" // 10/12
            />
            <HoverImage
              src={cigarStorage}
              alt="Cigar Storage"
              hovered={hoveredThirdRow}
              setHovered={setHoveredThirdRow}
              hoverKey="sixth"
              initialWidth="33.33%" // 4/12
              hoverWidth="50%" // 6/12
            />
          </div>
          <div className="flex justify-center">
            <HoverImage
              src={truck}
              alt="Truck on Road"
              hovered={hoveredFourthRow}
              setHovered={setHoveredFourthRow}
              hoverKey="seventh"
              initialWidth="70%"
              hoverWidth="80%"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ImageGallery;
