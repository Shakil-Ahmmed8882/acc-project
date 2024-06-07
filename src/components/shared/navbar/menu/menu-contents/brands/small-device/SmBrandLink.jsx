import { ChevronDown } from "lucide-react";
import MenuItem from "../../MenuItem";

const SmBrandLink = ({ setIsClicked, isClicked }) => {
  return (
    <button
      onClick={() => setIsClicked(!isClicked)}
      className="md:hidden flex gap-1  items-center "
    >
      <MenuItem path={"/"} label={"BRANDS"} />
      <ChevronDown
        className={` mt-7 ${
          isClicked && " rotate-180 text-standard-gold "
        } transition-all duration-300 mt-7`}
      />
    </button>
  );
};

export default SmBrandLink;
