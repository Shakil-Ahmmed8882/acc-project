import { ArrowIconLeft, ArrowIconRight } from "@/components/icons/Icons";
import classNames from "classnames";
import { ArrowLeft, ArrowRight, CircleChevronLeft } from "lucide-react";

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
  wrapperBorder = true,
}) => {



  return (
    <div
      className={classNames(
        "flex items-center justify-between",
        wrapperBorder && "border border-[#1F1F1F] rounded-xl p-4 mr-10"
      )}
    >
      {/* Previous Button */}
      <div
        className={`common-swiper-button-prev-${sliderId}  absolute bottom-56 z-10 left-0`}
      >
        <ArrowIconLeft />
      </div>

      {/* Pagination */}
      {pagination && (
        <div
          className={`common-swiper-pagination-${sliderId} mb-1 md:block hidden`}
        ></div>
      )}

      {/* Next Button */}
      <div
        className={`common-swiper-button-next-${sliderId} absolute bottom-56 z-10 right-0`}
      >
        <ArrowIconRight />
      </div>
    </div>
  );
};

export default SliderAction;
