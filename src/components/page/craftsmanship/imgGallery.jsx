"use client";
import Container from "@/components/shared/container/Container";
import ExpandingImgContainer from "./content-container/ExpandingImgContainer";
import { imgData } from "./content-container/data";
import Div from "./content-container/Div";
import Img from "./content-container/Img";
import truck from "@/assets/img/craftsmanship/imgGallery/craftsmanship7.png";
import HiddenContent from "./content-container/HiddenContent";
import Link from "next/link";
import Button2 from "@/components/shared/button/Button2";

const ImageGallery = () => {
  return (
    <>
      <Container bgClr="bg-black">
        <div className="border-b pb-2 border-[#bfbfbf] text-2xl text-white w-fit leading-[140%] font-normal font-riviera">
          CRAFTING PROCESS
        </div>
        <h1 className="pt-6 font-riviera text-[#bfbfbf]">
          At ACC we age and ferment the tobacco for years, a rare practice even
          among the most well-known brands. We then roll the cigars in our own
          factory and age them again. This process takes many years and is very
          difficult for producers of mass-produced well-known brands. As a true
          cigar aficionado knows, a cigar&apos;s best friend is slow natural
          tobacco fermentation combined with ageing, compared to chamber, or
          boxed-room heating. Our tobacco vintages range from 3 12 years and
          more.
        </h1>
        <div>
          {imgData?.map((data) => (
            <ExpandingImgContainer
              key={data.id}
              src1={data.img1}
              src2={data.img2}
              width1={data.width1}
              width2={data.width2}
              hiddenContent={data.hiddenContent}
            />
          ))}
          <div className="flex justify-center mt-11">
            <Div width={"80%"}>
              {(isHovered) => (
                <>
                  <Img src={truck} />
                  <HiddenContent
                    hiddenContent={{ title: "", description: "" }}
                    isHovered={isHovered}
                  />
                </>
              )}
            </Div>
          </div>
        </div>
        <Link
          href={"/brands"}
          className="w-full flex justify-center py-12"
        >
          <Button2 className={"w-5/6 lg:w-2/6"}>SEE OUR PRODUCTS</Button2>
        </Link>
      </Container>
    </>
  );
};

export default ImageGallery;
