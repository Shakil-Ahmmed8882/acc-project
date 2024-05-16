

import { useState } from "react";
import MenuItem from "./MenuItem";
import Brands from "./brands/Brands";

const MenuContents = ({ isMenuOpen }) => {

  // brands hover state 



  return (
    <article className={`${isMenuOpen ? 'visible opacity-100 pt-2' : 'invisible opacity-0'} transition-all duration-700 text-white bottom w-full`}>
      <ul className="flex gap-20 justify-center">
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