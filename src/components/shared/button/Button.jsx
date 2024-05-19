import React from "react";
import classNames from "classnames";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  ...props
}) => {
  const variantClasses = {
    primary: "gradient-text-gold rounded-gold-border",
  };

  const sizeClasses = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg",
  };

  const buttonClasses = classNames(
    "rounded-md transition-colors duration-200 font-semibold",
    variantClasses[variant],
    sizeClasses[size],
    disabled ? "opacity-50 cursor-not-allowed" : "",
    className
  );

  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
