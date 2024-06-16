"use client";
import BrandWorldAcc from "@/components/page/brands/brandWordAcc/BrandWorldAcc";
import AccLifestyle from "@/components/page/home/lifeStyle/LifeStyle";
import Newsletter from "@/components/shared/newsletter/Newsletter";
import parallaxImg1 from "@/assets/img/home/parallax/cigar1.jpg";
import BrandBanner from "@/components/page/brands/brandBanner/BrandBanner";


// images
import cigar_collection from "@/assets/img/brands/cigar-collection.jpg";
import accessories from "@/assets/img/brands/accessories.jpg";
import luxury_storage from "@/assets/img/brands/luxury-storage.png";
import liqure from "@/assets/img/brands/accessories.jpg";


const BrandsPage = () => {
 

  const brandBanners = [
    {
      image: parallaxImg1,
      id: "brands",
      title: "ACC BRANDS",
      // className: "md:-mt-52",
      className: "",
    },
    {
      image: cigar_collection,
      id: "cigar",
      title: "Cigar Collection",
      description:
        "Crafted with the utmost care and expertise, each cigar in our collection offers a unique blend of flavors and aromas, perfect for aficionados.",
      path: "/product/cigar",
    },
    {
      image: liqure,
      id: "spirits",
      title: "Spirits Collection",
      description:
        "From smooth whiskies to rich cognacs and everything in between,  every ACC crystal masterpiece embodies the artistry and tradition of its craft, promising an unparalleled tasting journey for discerning connoisseurs.",
      path: "/product/spirits",
    },
    {
      image: accessories,
      id: "accessories",
      title: "ACCESSORIES",
      description:
        "From elegant cutters and lighters to luxurious humidors and ashtrays, each item in our collection combines functionality with timeless style, making it an essential companion for any aficionado.",
      path: "/product/accessories",
    },
    {
      image: luxury_storage,
      id: "luxury-storage",
      title: "Luxury Storage",
      description:
        "From handcrafted humidors to sleek cabinets, ACC's luxury storage options offer the perfect balance of form and function, ensuring your treasures are protected and displayed with sophistication.",
      path: "/product/luxury-storage",
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
            index={index}
          />

        </div>
      ))}
      <AccLifestyle />
      <BrandWorldAcc />
      <Newsletter />
    </div>
    
  );
};

export default BrandsPage;
