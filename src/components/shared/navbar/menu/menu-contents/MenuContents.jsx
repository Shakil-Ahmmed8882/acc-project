

import { useState } from "react";
import MenuItem from "./MenuItem";
import Brands from "./brands/Brands";
import SearchBar from "../../search/SearchBar";

const MenuContents = ({ isMenuOpen }) => {



  return (
    <article className={`${isMenuOpen ? 'pt-4  visible opacity-100 ' : 'invisible opacity-0'} transition-all duration-700 text-white bottom w-full`}>
      <ul className=" space-y-8  md:space-y-0 md:flex gap-20 justify-center">
        <div className="md:hidden -pl-6 flex"><SearchBar/></div>
        <MenuItem path={'/'} label={'HOME'} />
        <MenuItem path={'/'} label={'HERITAGE'} />
        <MenuItem path={'/'} label={'CRAFTSMANSHIP'} />

        {/* Brands hover and unhover */}
        <Brands/>
        <MenuItem path={'/'} label={'CONTACT'} />
      </ul>
    </article>
  );
};

export default MenuContents; 