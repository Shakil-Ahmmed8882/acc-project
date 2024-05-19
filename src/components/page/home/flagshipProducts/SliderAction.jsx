import classNames from "classnames";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * SliderAction Component
 * @param {Object} props - Component properties
 * @param {boolean} props.pagination - Whether to display pagination
 * @param {string} props.sliderId - Unique identifier for the slider
 * @param {string} [props.variant='square'] - Button variant (circle or square)
 * @param {string} [props.className] - Additional custom classes for buttons
 * @param {boolean} [props.wrapperBorder=true] - Whether to display border around the wrapper
 */
const SliderAction = ({
  pagination,
  sliderId,
  variant = "square",
  className,
  wrapperBorder = true,
}) => {
  // Define variant specific classes
  const variantClasses = {
    circle: "bg-[#1A1A1A] p-[14px] rounded-full border-2 border-[#1F1F1F]",
    square: "bg-[#141414] p-[14px] rounded-[8px] border-2 border-[#262626]",
  };

  // Combine common and variant specific classes
  const buttonClasses = classNames(
    "transition-colors duration-200 font-semibold",
    variantClasses[variant],
    className
  );

  return (
    <div
      className={classNames(
        "flex items-center justify-center",
        wrapperBorder && "border border-[#1F1F1F] rounded-xl p-4 mr-10"
      )}
    >
      {/* Previous Button */}
      <div className={`common-swiper-button-prev-${sliderId} ${buttonClasses}`}>
        <ArrowLeft size={28} className="text-white cursor-pointer" />
      </div>

      {/* Pagination */}
      {pagination && (
        <div
          className={`common-swiper-pagination-${sliderId} mb-1 md:block hidden`}
        ></div>
      )}

      {/* Next Button */}
      <div className={`common-swiper-button-next-${sliderId} ${buttonClasses}`}>
        <ArrowRight size={28} className="text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default SliderAction;
