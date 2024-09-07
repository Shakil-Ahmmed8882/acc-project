"use client";

import Achievement from "@/components/page/heritage/achievement/achievement";
import Crafting from "@/components/page/heritage/crafting/Crafting";
import TheWorldOfACC from "@/components/page/heritage/worl-of-acc/TheWorldOfACC";
import Hero from "@/components/shared/hero/Hero";
import hero1 from "@/assets/img/heritage/hero/hero1.png";
import HeritageVideo from "@/components/page/heritage/video/HeritageVideo";

const Heritage = () => {
  return (
    <section>
      <Hero title={"ACC Heritage"} imagesArray={[hero1]} noOverlay={true} />
      <Crafting />
      <Achievement />
      <HeritageVideo/>
      <TheWorldOfACC />
    </section>
  );
};

export default Heritage;
