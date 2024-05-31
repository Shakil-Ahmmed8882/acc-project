import field from "@/assets/img/craftsmanship/imgGallery/craftsmanship1.png";
import seeding from "@/assets/img/craftsmanship/imgGallery/craftsmanship2.png";
import dryingLeaves from "@/assets/img/craftsmanship/imgGallery/craftsmanship3.png";
import composting from "@/assets/img/craftsmanship/imgGallery/craftsmanship4.png";
import cigarMaking from "@/assets/img/craftsmanship/imgGallery/craftsmanship5.png";
import cigarStorage from "@/assets/img/craftsmanship/imgGallery/craftsmanship6.png";

export const imgData = [
  {
    id: 1,
    img1: field,
    img2: seeding,
    width1: "60%",
    width2: "40%",
    hiddenContent: { 
      title: "Field Preparation",
      description: "The initial stage where the soil is prepared for seeding"
    },
  },
  {
    id: 2,
    img1: dryingLeaves,
    img2: composting,
    width1: "40%",
    width2: "60%",
    hiddenContent: { 
      title: "Drying Leaves & Composting",
      description: "Leaves are dried to reduce moisture content, while composting helps in recycling organic "
    },
  },
  {
    id: 3,
    img1: cigarMaking,
    img2: cigarStorage,
    width1: "60%",
    width2: "40%",
    hiddenContent: { 
      title: "Cigar Making & Storage",
      description: "The intricate process of hand-rolling cigars, followed by proper storage"
    },
  },
];