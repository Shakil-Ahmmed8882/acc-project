import { ChevronDown } from 'lucide-react';

import MenuItem from "./MenuItem";

const MenuContents= ({isMenuOpen}) => {
  return (
    <article className={`${isMenuOpen?'visible opacity-100 pt-2':'invisible opacity-0'} transition-all duration-700 text-white bottom w-full`}>

        <ul className="flex gap-20 justify-center">
            <MenuItem path={'/'} label={'HOME'}/>
            <MenuItem path={'/'} label={'HERITAGE'}/>
            <MenuItem path={'/'} label={'CRAFTSMANSHIP'}/>
            <article className='flex gap-1'>
            <MenuItem path={'/'} label={'BRANDS'}/>
            <ChevronDown/>
            </article>
            <MenuItem path={'/'} label={'CONTACT'}/>
        </ul>
    </article>
  );
};

export default MenuContents; 