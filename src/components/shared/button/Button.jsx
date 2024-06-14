import React from "react";
import classNames from "classnames";

// Button component
const Button = ({
  children,
  size = "large",
  variant = "primary",
  className,
  ...props
}) => {
  // Size classes for different button sizes
  const sizeClasses = {
    small: "py-2 px-4  text-sm",
    medium: "py-4 px-8 text-base",
    large: "py-1 px-16 text-base",
    eLarge: "py-3 text-[15px] md:py-3 px-11 md:px-16 md:text-base",
  };

  // Variant classes for different button styles
  const variantClasses = {
    primary: `rounded-gold-border
     border-pale-gold font-riviera font-semibold`,
  };

  // Gradient text classes for primary variant
  const gradientTextClasses = {
    primary:
      `gradient-text-gold text-transparent bg-clip-text 
      bg-gradient-to-r from-pale-gold via-rich-gold to-deep-gold 
      Border transition-all duration-1000
      group-hover:bg-gradient-to-b group-hover:from-gold
      group-hover:to-deep-gold`,
  };

  return (
    <button
      className={classNames(
        `group uppercase inline-flex justify-center items-center 
        gap-2 rounded-full border relative overflow-hidden 
        hover:bg-[#fafafa] px-8 hover:md:px-20
        transition-all duration-500 py-2`,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <span className={classNames(gradientTextClasses[variant], "")}>
        {children}
      </span>
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-translate-x-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 
        group-hover:translate-x-3 absolute  right-16 transition-all duration-500"
      >
        <path
          d="M15.6716 7.00005L11.0147 2.34314C10.6242 1.95262 10.6242 1.31946 11.0147 0.928941C11.4052 0.538417 12.0384 0.538416 12.4289 0.92894L19.5 8.00005L12.4289 15.0711C12.0384 15.4616 11.4052 15.4616 11.0147 15.0711C10.6242 14.6805 10.6242 14.0474 11.0147 13.6569L15.6716 9.00005H1.5C0.947715 9.00005 0.5 8.55234 0.5 8.00005C0.5 7.44777 0.947715 7.00005 1.5 7.00005H15.6716Z"
          fill="url(#paint0_linear_17_451)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_17_451"
            x1="10"
            y1="-9.82076"
            x2="10"
            y2="15.3639"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD700" />
            <stop offset="1" stopColor="#AC7C00" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
};

export default Button;
