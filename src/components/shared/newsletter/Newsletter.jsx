import React from "react";
import Container from "../container/Container";

const Newsletter = () => {
  return (
    <section className="bg-[#121212] pb-20">
      <Container>
        <h3 className="text-sm text-light-text  uppercase border-b-2 border-light-text md:max-w-fit  pb-4 md:pb-8 text-center">
          newsletter
        </h3>
        <div className="md:flex space-y-6 md:space-y-0 justify-between items-center gap-20  mt-8 ">
          <div className="max-w-[620px] mx-auto">
            <p className="text-xl md:text-2xl text-center md:text-left text-light-text leading-8 ">
              Sign up to stay updated with ACC and receive our latest news.
            </p>
          </div>
          <NewsletterSubmit />
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;

const NewsletterSubmit = () => {
  return (
    <form
      // onSubmit={(e) => e.preventDefault()}
      className="flex-1 relative max-w-[390px] mx-auto"
    >
      <button className="absolute inset-y-0 text-center pt-1 h-full right-0 uppercase rounded-full px-6 font-medium font-riviera text-nowrap my-auto transition duration-500 leading-7 text-white hover:text-deep-gold  hover:bg-white cursor-pointer  md:text-lg">
        Sign up
      </button>
      {/* <GradientText/> */}
      <input
        type="text"
        placeholder="Enter your email address"
        className="w-full py-3 px-8 text-light-text border border-light-text rounded-full outline-none bg-inherit focus:bg-inherit focus:border-standard-gold "
      />
    </form>
  );
};
const GradientText = () => {
  return (
    <div className="bg-[#fafafa] rounded-[35px] pt-4 pr-14 pb-4 pl-14 flex flex-row gap-2.5 items-center justify-center relative">
      <div className="text-left font-['RivieraNightsTrial-Medium',_sans-serif] text-xl leading-[140%] font-medium relative gradient-gold">
        SIGN UP
      </div>
    </div>
  );
};