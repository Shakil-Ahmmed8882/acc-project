"use client";

import { useEffect } from "react";
import Tabs from "@/components/page/brands/Tabs";
import BrandWorldAcc from "@/components/page/brands/brandWordAcc/BrandWorldAcc";
import Banner from "@/components/page/home/banner/Banner";
import AccLifestyle from "@/components/page/home/lifeStyle/LifeStyle";
import Newsletter from "@/components/shared/newsletter/Newsletter";
import img1 from "@/assets/img/shared/parallax/p1bg1.jpg";
import img2 from "@/assets/img/shared/parallax/p2bg2.jpg";
import parallaxImg1 from "@/assets/img/home/parallax/parallax1.png";
import parallaxImg2 from "@/assets/img/home/parallax/parallax2.png";
import parallaxImg3 from "@/assets/img/home/parallax/parallax3.png";
import BrandBanner from "@/components/page/brands/brandBanner/BrandBanner";
import Lenis from "lenis";

const Brands = () => {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Cleanup function to avoid memory leaks
    return () => {
      lenis.destroy();
    };
  }, []);

  const brandBanners = [
    {
      image: parallaxImg1,
      id: "brands",
      title: "ACC BRANDS",
      className: "-mt-44",
    },
    { image: parallaxImg1, id: "cigar", title: "Cigar Collection" },
    { image: parallaxImg1, id: "liquor", title: "Spirits Collection" },
    { image: parallaxImg1, id: "accessories", title: "ACCESSORIES" },
    { image: parallaxImg1, id: "luxury-storage", title: "Luxury Storage" },
  ];

  return (
    <div>
      {brandBanners.map((banner, index) => (
        <div key={index}>
          <BrandBanner
            image={banner.image}
            id={banner.id}
            title={banner.title}
            className={banner.className}
          />
          {index === 0 && <Tabs />}
        </div>
      ))}
      <AccLifestyle />
      <BrandWorldAcc />
      <Newsletter />
    </div>
  );
};

export default Brands;
