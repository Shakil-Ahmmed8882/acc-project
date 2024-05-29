"use client";
import React, { useState } from "react";
import Container from "@/components/shared/container/Container";

// Images
import HoverImage from "./HoverImage";
import ExpandingImgContainer from "./content-container/ExpandingImgContainer";
import Image from "next/image";
import HiddenContent from "./content-container/HiddenContent";
import Img from "./content-container/Img";
import { imgData } from "./content-container/data";

const ImageGallery = () => {
  return (
    <>
      <Container>
        <div className="border-b h-screen pb-2 border-[#bfbfbf] text-2xl text-white w-fit">
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
        {imgData?.map((data) => (
          <ExpandingImgContainer
            key={data.id}
            src1={data.img1}
            src2={data.img2}
            width1={data.widh1}
            width2={data.width2}
            hiddenContent={data.hiddenContent}
          />
        ))}
        {/*       
      <ExpandingImgContainer src1={field} src2={seedling} width1={'40%'} width2={'60%'}/>
      <ExpandingImgContainer src1={field} src2={seedling} width1={'60%'} width2={'40%'}/> */}
      </Container>
    </>
  );
};

export default ImageGallery;
