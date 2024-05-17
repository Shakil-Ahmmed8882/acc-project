'use client'

import Logo from "./Logo";
import MenuIcon from "./menu/MenuIcon";
import { createContext, useState } from "react";
import Container from "../container/Container";
import MenuContents from "./menu/menu-contents/MenuContents";
import SearchBar from "./search/SearchBar";
export const navbarContext = createContext(null)

const Navbar = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false)
    // container styls
    const style = 'flex justify-between gap-0 items-center px-8'

    // brands state 
    const [isBrandHover, setIsBrandsHover] = useState(false)


    const navInfo = {
        setIsMenuOpen,
        isMenuOpen,

        // brands state
        setIsBrandsHover,
        isBrandHover,

    }

    
    return (
        <navbarContext.Provider value={navInfo}>
            {/* // increase paddiing bottom once menu reveals */}
            <header className={`${isMenuOpen ? 'py-11 min-h-screen md:min-h-32 lg:h-64' : 'pt-3 h-36 lg:h-40 '} 
        bg-[#00000086]  relative z-50 transition-all duration-700`}>


                {/* bg blur overlay : hover on brands */}
                <div className={`fixed -z-10 top-0 right-0 bottom-0 left-0 w-full h-full ${isBrandHover ? 'backdrop-blur-[5px] bg-[#0a09035f]' : 'hidden'} transition-all  duration-700`}></div>
                {/* hambargar menu, logo and searchbar */}
                <Container className={style}>
                    <MenuIcon label={"menu"} />
                    <Logo />
                    <div className="hidden -pl-6 md:flex"><SearchBar/></div>
                </Container>

                {/* hidden menu */}
                <Container>
                    <span className="border-t mt-6 border-[#f2f2f27c] block w-full pt-3 "></span>
                    <MenuContents {...{ isMenuOpen }} />
                </Container>

            </header>
        </navbarContext.Provider>

    );
};

export default Navbar; 