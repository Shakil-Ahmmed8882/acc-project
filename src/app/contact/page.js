import AskQuestion from "@/components/page/contact/AskQuestion";
import LuxurySection from "@/components/page/contact/luxury";
import HeroSection from "@/components/shared/hero/Hero";

const page = () => {
  return (
    <section>
      <HeroSection />
      <AskQuestion />
      <LuxurySection />
    </section>
  );
};

export default page;
