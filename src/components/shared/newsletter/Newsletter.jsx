import React from "react";
import Container from "../container/Container";

const Newsletter = () => {
  return (
    <section className="bg-[#121212] py-10 md:py-20">
      <Container className="mt-6 md:mt-12 ">

        <h3 className="text-sm text-light-white-clr  uppercase border-b-2 border-light-white-clr md:max-w-fit  pb-4 md:pb-8 text-center">
          newsletter
        </h3>
        <div className="md:flex justify-between items-center flex-wrap gap-8  mt-8">
          <p className="text-xl md:text-2xl text-center md:text-left text-light-white-clr leading-8">
            Sign up to stay updated with ACC and receive our latest news.
          </p>
          
          <NewsletterSubmit />
        </div>
        
      </Container>
    </section>
  );
};

export default Newsletter;

const NewsletterSubmit = () => {
  return (
    <div className="relative my-6 ">
      <input
        id="id-s03"
        type="search"
        name="id-s03"
        placeholder="Search here"
        aria-label="Search content"
        className="relative w-full  md:w-[560px] lg:w-[660px]  py-4 px-8  pr-36 text-base transition-all border rounded-full outline-none focus-visible:outline-none peer bg-inherit border-[#fafafa] text-light-white-clr autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-gold focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
      />

      <button className="absolute inset-y-4 right-10 cursor-pointer peer-disabled:cursor-not-allowed uppercase md:text-xl font-medium text-white bg-inherit ">
        Sing up
      </button>
    </div>
  );
};
