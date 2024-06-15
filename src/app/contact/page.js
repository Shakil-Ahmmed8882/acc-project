"use client";

import AskQuestion from "@/components/page/contact/AskQuestion";
import LuxurySection from "@/components/page/contact/luxury";
import Hero from "@/components/shared/hero/Hero";
import hero1 from "@/assets/img/contact/hero.png";

const page = () => {
  return (
    <section className="">
      <Hero title={"Contact ACC"} imagesArray={[hero1]} noOverlay={true} />
      <AskQuestion />
      <LuxurySection />
    </section>
  );
};

export default page;
