"use client";
import React, { useState } from "react";
import Container from "../container/Container";
import { toast } from "sonner";

const Newsletter = () => {
  return (
    <section className="bg-[#121212] pb-20">
      <Container>
        <h3 className="text-sm text-light-text uppercase border-b-2 border-light-text md:max-w-fit pb-4 md:pb-8 font-riviera">
          newsletter
        </h3>
        <div className="lg:flex space-y-6 md:space-y-0 justify-between items-center gap-20 mt-8">
          <div className="max-w-[620px]">
            <p className="text-xl md:text-2xl text-center md:text-left text-light-text leading-8 font-riviera">
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
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Signed up successfully!");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 relative max-w-[490px] ml-auto"
    >
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full py-3 px-8 text-light-text border border-light-text rounded-full outline-none bg-inherit focus:bg-inherit focus:border-standard-gold"
      />
      <button
        type="submit"
        className="absolute inset-y-0 text-center pt-1 h-full right-0 uppercase rounded-full px-6 font-medium font-riviera text-nowrap my-auto transition duration-500 leading-7 text-white hover:text-deep-gold hover:bg-white cursor-pointer md:text-lg"
      >
        Sign up
      </button>
    </form>
  );
};
