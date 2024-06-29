import MenuItem from "./MenuItem";
import Brands from "./brands/Brands";


const MenuContents = ({ isMenuOpen }) => {
  return (
    <article
      style={{ zIndex: -999999 }}
      className={`${
        isMenuOpen
          ? " pt-4 visible opacity-100 absolute md:static bg-[#0000006c] md:bg-transparent pl-16 py-7  left-0 backdrop-blur-[1px]"
          : "hidden md:flex invisible opacity-0"
      }
     transition-all duration-700 text-white bottom w-full md:flex justify-center`}
    >
      <ul className=" md:flex gap-20 justify-center">
        <MenuItem path={"/"} label={"HOME"} />
        <MenuItem path={"/heritage"} label={"HERITAGE"} />
        <MenuItem path={"/craftsmanship"} label={"CRAFTSMANSHIP"} />

        {/* Brands hover and unhover */}
        <Brands />
        <MenuItem path={"/contact"} label={"CONTACT"} />
      </ul>
    </article>
  );
};

export default MenuContents;
