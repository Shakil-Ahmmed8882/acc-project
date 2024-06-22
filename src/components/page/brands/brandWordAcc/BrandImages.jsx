// BrandImages.js
import showroom from "@/assets/img/brands/showroom.png";
import airCraft from "@/assets/img/brands/aircarft.png";
import luxuryAccess from "@/assets/img/brands/luxury-access.png";

// Define an array of image objects with additional properties
export const worldAccImages = [
  {
    src: showroom,
    alt: "ACC Retail Showrooms",
    description: "ACC Retail Showrooms",
    span: "double", // This image spans two columns
  },
  {
    src: airCraft,
    alt: "ACC Air Craft",
    span: "single", // This image spans one column
  },
  {
    src: luxuryAccess,
    alt: "Luxury Accessories",
    description: "Luxury Accessories",
    span: "single-wide", // This image spans a single column but is wider
  },
];
