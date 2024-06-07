import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <div className="p-4 bg-[#262626] rounded-lg">
      <Skeleton height={200} />
      <Skeleton count={3} />
    </div>
  );
};

export default SkeletonCard;
