import React from "react";

const Container = ({ children,isNavbar, className, ...props }) => {
  const containerClasses = `
  
   max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8
    ${className || ""}
  `;

  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  );
};

export default Container;
