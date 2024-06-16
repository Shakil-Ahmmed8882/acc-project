"use client";

import AskQuestion from "@/components/page/contact/AskQuestion";
import LuxurySection from "@/components/page/contact/luxury";
import Hero from "@/components/shared/hero/Hero";
import hero1 from "@/assets/img/contact/hero.png";
import SmoothScroll from "@/providers/SmoothScroll";

const page = () => {
  return (
    <SmoothScroll>
    <section className="">
      <Hero title={"Contact ACC"} imagesArray={[hero1]} noOverlay={true} />
      <AskQuestion />
      <LuxurySection />
    </section>
    </SmoothScroll>
  );
};

export default page;
