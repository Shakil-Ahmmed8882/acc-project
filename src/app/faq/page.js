import Banner from "@/components/Banner/Banner";
import img from "@/assets/img/footerPage/faq.jpg";

import Container from "@/components/shared/container/Container";
import Question from "@/components/faq/Questions";

import FaqInfo from "@/components/faq/FaqInfo";
const page = () => {
  return (
    <div className="bg-black">
      <Banner title={"Faq"} imageUrl={img} />
      <Container className={"sm:px-10 lg:px-36 2xl:px-80 font-riviera mt-20 pb-20"}>
        <Question
          des={
            "Welcome to the Achievement Cigar Company FAQ page! Here, we’ve compiled answers to some of the most common questions our customers ask. If you don’t find what you’re looking for, feel free to contact us directly."
          }
        />
        <FaqInfo/>
      </Container>
    </div>
  );
};

export default page;
