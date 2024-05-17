import { ChevronDown } from "lucide-react";
import MenuItem from "../../MenuItem";

const SmBrandLink = ({setIsClicked,isClicked}) => {
    return (
        <button onClick={()=> setIsClicked(!isClicked)} className="md:hidden flex gap-1  items-center">
            <MenuItem path={'/'} label={'BRANDS'} />
            <ChevronDown className={` ${isClicked && ' rotate-180 text-hover-txt-clr '} transition-all duration-300`} />
        </button>
    );
};

export default SmBrandLink; 