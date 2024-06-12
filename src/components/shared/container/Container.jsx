import React from "react";

const Container = ({ children, isNavbar, className, bgClr, ...props }) => {
  const containerClasses = `
  
  ${isNavbar ? "py-0" : "pt-6 md:pt-10 lg:pt-24"}
    mx-auto px-4 sm:mx-6 md:mx-10 lg:mx-28 2xl:mx-32 
    ${className || ""}
  
    `;

  return (
    <div className={bgClr}>
      <div className={containerClasses} {...props}>
        {children}
      </div>
    </div>
  );
};

export default Container;
