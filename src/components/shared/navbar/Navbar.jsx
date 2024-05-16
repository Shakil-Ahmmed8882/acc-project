'use client'

import Logo from "./Logo";
import MenuIcon from "./menu/MenuIcon";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Container from "../container/Container";
import MenuContents from "./menu/menu-contents/MenuContents";


const Navbar = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const style = 'flex justify-between gap-0 items-center px-8'

    return (
        // increase paddiing bottom once menu reveals
        <header className={`${isMenuOpen?'py-11':'pt-11'} bg-[#00000086] bg-blend-screen  relative z-40 transition-all duration-700`}>
            <Container {...{style}}>
                <MenuIcon {...{setIsMenuOpen,isMenuOpen}} label={"menu"}/>
                <Logo />
                <SearchBar />
            </Container>

            {/* hidden menu */}
            <Container>
                <span className="border-t mt-6 border-[#f2f2f27c] block w-full pt-3 "></span>    
                <MenuContents {...{isMenuOpen}}/>
            </Container>

            
        </header>

    );
};

export default Navbar; 