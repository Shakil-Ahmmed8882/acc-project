import { ArrowIconLeft, ArrowIconRight } from "@/components/icons/Icons";
import classNames from "classnames";
import { ArrowLeft, ArrowRight, CircleChevronLeft } from "lucide-react";

const SliderAction = ({
  pagination,
  sliderId,
  isBeginning,
  isEnd,
  wrapperBorder = false,
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
        className={`common-swiper-button-prev-${sliderId} ${
          isBeginning && "hidden"
        } absolute bottom-[200px] 3xl:bottom-44 z-10 left-2`}
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
        className={`common-swiper-button-next-${sliderId} ${
          isEnd && "hidden"
        } absolute bottom-[200px] 3xl:bottom-44 z-10 right-2`}
      >
        <ArrowIconRight />
      </div>
    </div>
  );
};

export default SliderAction;
