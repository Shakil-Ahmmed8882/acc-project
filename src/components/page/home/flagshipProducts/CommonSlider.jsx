"use client";

// React and Next.js imports
import React from "react";
import Image from "next/image";

// Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper modules
import { Pagination, Navigation, FreeMode, Autoplay } from "swiper/modules";

/**
 * CommonSlider Component
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - The slides to display in the slider
 * @param {number} [props.slidesPerView=3] - Number of slides to show per view
 * @param {number} [props.spaceBetween=10] - Space between slides
 * @param {number} [props.slidesPerGroup] - Number of slides to group together for navigation
 * @param {boolean} [props.pagination=true] - Whether to show pagination
 * @param {boolean} [props.loop=true] - Whether to loop the slides
 * @param {string} [props.className=""] - Additional custom classes for the swiper
 * @param {string} props.sliderId - Unique identifier for the slider
 * @param {boolean} [props.freeMode=false] - Whether to enable free mode
 * @param {boolean} [props.autoplay=false] - Whether to enable autoplay
 * @param {boolean} [props.grabCursor=false] - Whether to enable grab cursor
 * @param {Function} [props.setSwiperState] - Callback to set swiper state
 * @param {Object} [props.breakpoints] - Custom breakpoints for responsiveness
 */
const CommonSlider = ({
  children,
  slidesPerView = 4,
  spaceBetween = 10,
  slidesPerGroup,
  loop = false,
  className = "",
  sliderId,
  speed=800,
  freeMode = false,
  autoplay = false,
  grabCursor = false,
  setSwiperState,
  ...props
}) => {
  const modules = [Pagination, Navigation, FreeMode, Autoplay];

  const breakpoints = {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: slidesPerView,
      spaceBetween: 30,
    },
  };

  return (
    <div className={`my-2.5 ${className}`}>
      <Swiper
        slidesPerGroup={slidesPerGroup}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        onSlideChange={(swiper) => {
          if (setSwiperState) {
            setSwiperState({
              isBeginning: swiper.isBeginning,
              isEnd: swiper.isEnd,
            });
          }
        }}
        loop={loop}
        speed={speed}
        freeMode={freeMode}
        autoplay={autoplay}
        grabCursor={grabCursor}
        navigation={{
          nextEl: `.common-swiper-button-next-${sliderId}`,
          prevEl: `.common-swiper-button-prev-${sliderId}`,
        }}
        modules={modules}
        pagination={{
          el: `.common-swiper-pagination-${sliderId}`,
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} w-3 h-3 bg-primary rounded-full mx-1"></span>`,
        }}
        className={`swiper-container commonSwiper ${className}`}
        {...props}
        watchOverflow={true}
        breakpoints={breakpoints}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommonSlider;
