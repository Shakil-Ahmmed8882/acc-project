"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 
// import "./styles.css";
// import required modules
import { Pagination, Navigation, FreeMode } from "swiper/modules";
import Image from "next/image";
import Button from "@/components/shared/button/Button";
import SectionTitle from "@/components/shared/sectionTitle/SectionTitle";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import Container from "@/components/shared/container/Container";
import AnimatedVideo from "@/components/shared/animation/animated-video/AnimatedVideo";

export default function ProductSlider() {
  //Add a state that will force a re-render
  const [_, setInit] = useState();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="flex gap-16  py-40  justify-between mx-[180px] max-w-[1740px]">
      <SlideLeft />

      <div className="w-full max-w-[960px]">
        <Swiper
          slidesPerView={1}
          //   spaceBetween={10}
          navigation={{
            prevEl: ".products-swiper-button-prev",
            nextEl: ".products-swiper-button-next",
          }}
          freeMode={true}
          grabCursor={true}
          loop={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          /*update state on swiper initialization*/
          onInit={() => setInit(true)}
          modules={[Pagination, Navigation, FreeMode]}
          className="mySwiper relative"
        >
          {Array.from({ length: 20 }).map((image, index) => (
            <SwiperSlide key={image}>
              <SlideItem index={index} />
            </SwiperSlide>
          ))}
        <div className="flex justify-between absolute bottom-[150px] z-[99999] gap-[870px]">
          <button ref={prevRef} className="products-swiper-button-prev ">
            <CircleChevronLeft size={40} fill="white" color="#1c1c1c" />
          </button>
          <button ref={nextRef} className="products-swiper-button-next ">
            <CircleChevronRight size={40} fill="white" color="#1c1c1c" />
          </button>
        </div>
        </Swiper>
      </div>
    </div>
  );
}

const SlideItem = ({ index }) => {
  return (
    <div className="max-w-60">
      <Image
        src={`https://source.unsplash.com/random/${index}`}
        className=" object-cover h-[260px] w-[240xp]"
        width={240}
        height={300}
        alt="image"
      />
      <div>
        <h5 className="text-base text-light-white-clr font-semibold mt-4">
          Vintage Cigar
        </h5>
        <p className="text-[#999999] text-xs mt-3">
          Elevate your evenings with the perfect pairing of our curated cigars
        </p>
      </div>
    </div>
  );
};

const SlideLeft = () => {
  return (
    <Container className={'flex-1  max-w-[528px] w-full mt-[74px]'}>
      <SectionTitle
        className="text-[50px]  font-normal uppercase"
        title="Explore ACc's Flagship products"
      />
      <AnimatedVideo/>
      <Button variant="primary" size="lg">
        DISCOVER
      </Button>
    </Container>
  );
};
