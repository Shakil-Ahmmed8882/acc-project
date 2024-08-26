import React from "react";

const Container = ({ children, isNavbar, className, bgClr, ...props }) => {
  const containerClasses = `
  
  ${isNavbar ? "py-0" : "pt-6 md:pt-10 lg:pt-24"}
    mx-auto px-4 sm:px-6 md:px-10 lg:px-28 2xl:px-32
    ${className || ""}
  
    `;

  return (
    <div className={`${bgClr} w-full`}>
      <div className={`${containerClasses} max-w-[1920px] mx-auto`} {...props}>
        {children}
      </div>
    </div>
  );
};

export default Container;
