import React from "react";
import classNames from "classnames";

const SectionTitle = ({
  title,
  subtitle,
  className,
  titleStyle = "text-4xl", 
  subtitleStyle = "text-lg", 
  ...props
}) => {
  const titleClasses = classNames(titleStyle, "font-bold mb-2 text-white");

  const subtitleClasses = classNames(subtitleStyle, "text-gray-500");

  return (
    <div className={classNames("mb-8", className)} {...props}>
      <h2 className={titleClasses}>{title}</h2>
      {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
