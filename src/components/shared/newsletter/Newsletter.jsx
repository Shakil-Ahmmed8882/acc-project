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
          {/* <NewsletterSubmit /> */}
          <NewsletterSubmit2 />
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;

// const NewsletterSubmit = () => {
//   return (
//     <div className="flex-1 relative">
//       <input
//         id="id-s03"
//         type="search"
//         name="id-s03"
//         placeholder="Search here"
//         aria-label="Search content"
//         className="py-4 px-8  pr-36 text-base transition-all border rounded-full outline-none focus-visible:outline-none peer bg-inherit border-[#fafafa] text-light-white-clr autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-gold focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
//       />

//       <button className="absolute inset-y-4 right-10 cursor-pointer peer-disabled:cursor-not-allowed uppercase md:text-xl font-medium bg-white text-white bg-inherit ">
//         Sing up
//       </button>
//     </div>
//   );
// };

const NewsletterSubmit2 = () => {
  return (
    <form
      // onSubmit={(e) => e.preventDefault()}
      className="flex-1 relative"
    >

        <button className="absolute top-0 bottom-0 right-0 rounded-full px-6 text-white font-medium font-riviera text-nowrap my-auto transition duration-500    hover:bg-white cursor-pointer hover:text-black md:text-xl">
          Sing up
        </button>
        <input
          type="text"
          placeholder="Enter your email address"
          className="w-full py-3 pr-12 pl-4 text-light-white-clr border border-light-white-clr rounded-full outline-none bg-inherit focus:bg-inherit focus:border-gold"
        />
    </form>
  );
};
