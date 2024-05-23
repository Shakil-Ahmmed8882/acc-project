import Achievement from "@/components/page/heritage/achievement/achievement";
import Crafting from "@/components/page/heritage/crafting/Crafting";
import TheWorldOfACC from "@/components/page/heritage/worl-of-acc/TheWorldOfACC";
import HeroSection from "@/components/shared/hero/Hero";






const Heritage = () => {
  return (
    <section>
      <HeroSection title={'ACC Heritage'}/>
      <Crafting />
      <Achievement />
      <TheWorldOfACC />
    </section>
  );
};

export default Heritage;
