import React from "react";
import Container from "../container/Container";

const Newsletter = () => {
  return (
    <section className="bg-[#121212] pb-20">
      <Container>
        <h3 className="text-sm text-light-white-clr  uppercase border-b-2 border-light-white-clr md:max-w-fit  pb-4 md:pb-8 text-center">
          newsletter
        </h3>
        <div className="md:flex space-y-6 md:space-y-0 justify-between items-center gap-8  mt-8 ">
          <div className="flex-1">
            <p className="text-xl md:text-2xl text-center md:text-left text-light-white-clr leading-8 ">
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
      className="flex-1 relative"
    >
      <button className="absolute inset-y-0 text-center pt-1 h-full right-0 uppercase rounded-full px-12 text-white font-medium font-riviera text-nowrap my-auto transition duration-500 leading-7   hover:bg-white cursor-pointer hover:text-black md:text-lg">
        Sign up
      </button>
      <input
        type="text"
        placeholder="Enter your email address"
        className="w-full py-3 px-8 text-light-white-clr border border-light-white-clr rounded-full outline-none bg-inherit focus:bg-inherit focus:border-gold"
      />
    </form>
  );
};
