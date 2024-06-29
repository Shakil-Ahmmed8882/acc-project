"use client";
import Image from "next/image";
import hero1 from "@/assets/img/contact/hero.png";

const ContactBanner = ({ title, description, noOverlay = true }) => {
  return (
    <div className="md:h-screen overflow-hidden relative">
      <Image
        src={hero1}
        className={` h-full object-cover
       transition-all duration-1000 mix `}
        alt="hero section"
      />

      {/* Overlay div for styling */}
      {noOverlay ? (
        ""
      ) : (
        <div
          className="absolute inset-0  bg-[#00000086] mix-blend-darken
        transition-all duration-1000 ease-in "
        ></div>
      )}

      {/* Hero title & desc */}
      <ContactBannerContent />
    </div>
  );
};

export default ContactBanner;

const ContactBannerContent = () => {
  return (
    <div className="absolute inset-0 top-1/2 text-white uppercase text-center">
      <h1
        className="text-3xl
         md:text-4xl lg:text-5xl text-white font-riviera tracking-[3.84px] font-normal "
      >
        CONTACT ACC
      </h1>
    </div>
  );
};
