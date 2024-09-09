"use client";
import BrandWorldAcc from "@/components/page/brands/brandWordAcc/BrandWorldAcc";
import AccLifestyle from "@/components/page/home/lifeStyle/LifeStyle";
import Newsletter from "@/components/shared/newsletter/Newsletter";

import BrandBanner from "@/components/page/brands/brandBanner/BrandBanner";


// images
import acc_brands from "@/assets/img/brands/banner/accBrands.png";
import cigar_collection from "@/assets/img/brands/banner/cigar-collection.jpg";
import spirits from "@/assets/img/brands/banner/sprits.png";
import accessories from "@/assets/img/brands/banner/accessories.jpg";
import luxury_storage from "@/assets/img/brands/banner/luxury-storage.jpeg";
import Tabs from "@/components/page/brands/Tabs";


const BrandsPage = () => {
 

  const brandBanners = [
    {
      image: acc_brands,
      id: "brands",
      title: "ACC BRANDS",
      // className: "md:-mt-52",
      className: "",
      bgColor: "bg-[#00000066]",
    },
    {
      image: cigar_collection,
      id: "cigar",
      title: "Cigar Collection",
      description:
        "Crafted with the utmost care and expertise, each cigar in our collection offers a unique blend of flavors and aromas, perfect for aficionados.",
      path: "/product/cigar",
      bgColor: "bg-[#00000080]",
    },
    {
      image: spirits,
      id: "spirits",
      title: "Spirits Collection",
      description:
        "From smooth whiskies to rich cognacs and everything in between,  every ACC crystal masterpiece embodies the artistry and tradition of its craft, promising an unparalleled tasting journey for discerning connoisseurs.",
      path: "/product/spirits",
      bgColor: "bg-[#00000034]",
    },
    {
      image: accessories,
      id: "accessories",
      title: "ACCESSORIES",
      description:
        "From elegant cutters and lighters to luxurious humidors and ashtrays, each item in our collection combines functionality with timeless style, making it an essential companion for any aficionado.",
      path: "/product/accessories",
      bgColor: "bg-[#00000080]",
    },
    {
      image: luxury_storage,
      id: "luxury-storage",
      title: "Luxury Storage",
      description:
        "From handcrafted humidors to sleek cabinets, ACC's luxury storage options offer the perfect balance of form and function, ensuring your treasures are protected and displayed with sophistication.",
      path: "/product/luxury-storage",
      bgColor: "bg-[#00000080]",
    },
  ];

  return (
    <div>
      {brandBanners.map((banner, index) => (
        <div key={index}>
          <BrandBanner
            image={banner?.image}
            id={banner?.id}
            title={banner?.title}
            className={banner?.className}
            description={banner?.description}
            path={banner?.path}
            bgColor={banner?.bgColor}
            index={index}
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

export default BrandsPage;
