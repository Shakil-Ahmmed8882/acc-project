"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation"; // Import navigation styles
// import "./styles.css";
// import required modules
import { Pagination, Navigation, FreeMode } from "swiper/modules";
import Image from "next/image";

export default function Fslider2() {
  //Add a state that will force a re-render
  const [_, setInit] = useState();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
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
        className="mySwiper"
      >
        {Array.from({ length: 20 }).map((image, index) => (
          <SwiperSlide key={image}>
            <SlideItem index={index} />
          </SwiperSlide>
        ))}
        <div className="text-white flex justify-between mx-40">
          <button
            ref={prevRef}
            className="swiper-button-prev bg-red-400 p-3 text-white"
          >
            Prev
          </button>
          <button
            ref={nextRef}
            className="swiper-button-next bg-red-400 p-3 text-white"
          >
            Next
          </button>
        </div>
      </Swiper>
    </>
  );
}

const SlideItem = ({ index }) => {
  return (
    <div className="max-w-60">
      <Image
        src={`https://source.unsplash.com/random/${index}`}
        className=" object-cover h-[300px] w-[240xp]"
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
