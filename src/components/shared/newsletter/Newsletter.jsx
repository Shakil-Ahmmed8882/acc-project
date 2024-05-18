import React from "react";
import Container from "../container/Container";





const Newsletter = () => {
  return (
    <section className="bg-[#121212] py-20">
      <Container className="items-center mt-12  gap-4 md:flex justify-between  xl:gap-12">
        <div className="w-1/2 space-y-3">
          <h3 className="text-sm text-light-white-clr  uppercase border-b-2 border-light-white-clr max-w-fit pb-8">
            newsletter
          </h3>
          <p className="text-2xl text-light-white-clr leading-8">
            Sign up to stay updated with ACC and receive our latest news.
          </p>
        </div>
        <div className="mt-10 w-1/2 ">
          <form
            // onSubmit={(e) => e.preventDefault()}
            className="flex items-center justify-center bg-black rounded-full border-2 overflow-hidden  sm:max-w-md sm:mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="text-light-white-clr font-medium bg-inherit w-full p-2 outline-none"
            />
            <button className="uppercase text-nowrap p-2 px-3 rounded-r-full md:text-xl font-medium text-white bg-inherit hover:bg-blue-500 active:bg-blue-700 duration-150 outline-none shadow-md focus:shadow-none sm:px-4">
              Sing up
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};


export default Newsletter