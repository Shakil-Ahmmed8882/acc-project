import React from "react";
import classNames from "classnames";

const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  className,
  ...props
}) => {
  const titleClasses = classNames(
    "text-4xl font-bold mb-2 text-white",
    centered ? "text-center" : "text-left"
  );

  const subtitleClasses = classNames(
    "text-lg text-gray-500",
    centered ? "text-center" : "text-left"
  );

  return (
    <div className={`mb-8 ${className}`} {...props}>
      <h2 className={titleClasses}>{title}</h2>
      {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
