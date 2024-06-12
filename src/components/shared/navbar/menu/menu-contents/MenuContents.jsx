
import MenuItem from "./MenuItem";
import Brands from "./brands/Brands";
import SearchBar from "../../search/SearchBar";

const MenuContents = ({ isMenuOpen }) => {



  return (
    <article
    style={{zIndex:-999999}}
    className={`${isMenuOpen ? 'pt-4  visible opacity-100 ' : 'invisible opacity-0'}
     transition-all absolute duration-700 text-white bottom w-full`}>
      <ul className=" md:flex gap-20 justify-center">
        <div className="md:hidden -ml-12 flex"><SearchBar/></div>
        <MenuItem path={'/'} label={'HOME'} />
        <MenuItem path={'/heritage'} label={'HERITAGE'} />
        <MenuItem path={'/craftsmanship'} label={'CRAFTSMANSHIP'} />

        {/* Brands hover and unhover */}
        <Brands/>
        <MenuItem path={'/contact'} label={'CONTACT'} />
      </ul>
    </article>
  );
};

export default MenuContents; 