import field from "@/assets/img/craftsmanship/imgGallery/craftsmanship1.png";
import seeding from "@/assets/img/craftsmanship/imgGallery/craftsmanship2.png";
import dryingLeaves from "@/assets/img/craftsmanship/imgGallery/craftsmanship3.png";
import composting from "@/assets/img/craftsmanship/imgGallery/craftsmanship4.png";
import cigarMaking from "@/assets/img/craftsmanship/imgGallery/craftsmanship5.png";
import cigarStorage from "@/assets/img/craftsmanship/imgGallery/craftsmanship6.png";
import truck from "@/assets/img/craftsmanship/imgGallery/craftsmanship7.png";

export const imgData = [
  {
    id:1,
    img1: field,
    img2: seeding,
    widh1: "60%",
    width2: "40%",
    hiddenContent: { title: "I am title1", description: "i am description2" },
  },
  {
    id:2,
    img1: dryingLeaves,
    img2: composting,
    widh1: "40%",
    width2: "60%",
    hiddenContent: { title: "I am titl3", description: "i am descriptio3" },
  },
  {
    id:3,
    img1: cigarMaking,
    img2: cigarStorage,
    widh1: "60%",
    width2: "40%",
    hiddenContent: { title: "I am titl4", description: "i am description4" },
  },
];
