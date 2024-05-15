'use client'

import Logo from "./Logo";
import MenuIcon from "./menu/MenuIcon";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Container from "../container/Container";


const Navbar = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const style = 'flex justify-between items-center px-8'

    return (
        <header className="bg-[#1c1a52d3] py-11">
            <Container {...{style}}>
                <MenuIcon {...{setIsMenuOpen}} label={"menu"}/>
                <Logo />
                <SearchBar />
            </Container>
        </header>

    );
};

export default Navbar; 