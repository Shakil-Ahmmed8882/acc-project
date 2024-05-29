"use client";

import Logo from "./Logo";
import MenuIcon from "./menu/MenuIcon";
import { createContext, useState } from "react";
import Container from "../container/Container";
import MenuContents from "./menu/menu-contents/MenuContents";
import SearchBar from "./search/SearchBar";
import useGlobalContext from "@/hooks/useGlobalContext";
import BgBlur from "@/components/ui/bg-blur/BgBlur";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import HorizontalLine from "@/components/ui/visuals/HorizontalLine";
import Tabs from "@/components/page/products/acc-cigars/tabs/Tabs";
export const navbarContext = createContext(null);

const Navbar = () => {
  // state management
  const { isScrollBeyondParallax, isSecondParallaxInView } = useGlobalContext();
  const [isBrandHover, setIsBrandsHover] = useState(false);
  const { isMenuOpen, setIsMenuOpen } = useGlobalContext();

  // container styls
  const style = "flex justify-between gap-0 items-center px-8";

  const navInfo = {
    setIsMenuOpen,
    isMenuOpen,

    // brands state
    setIsBrandsHover,
    isBrandHover,
  };

  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === "up";

  return (
    <navbarContext.Provider value={navInfo}>
      {/* // increase paddiing bottom once menu reveals */}

      <header
        className={`${
          isMenuOpen
          ? "min-h-screen md:min-h-32 lg:h-60"
          : isScrollingUp
          ? "h-28 lg:h-32" 
          : "h-32 lg:h-28" 
      } 



        bg-[#0000006c]
        
        ${!isScrollBeyondParallax && "visible opacity-100 translate-y-0"}
        
        ${
          isScrollBeyondParallax
            ? isScrollingUp
              ? "visible opacity-100 translate-y-0 "
              : "invisible opacity-0 -translate-y-8"
            : "visible opacity-100 translate-y-0"
        }  
          fixed left-0 right-0 top-0  z-50 transition-all duration-700`}
      >
        {/* bg blur overlay : hover on brands */}
        <BgBlur isTrue={isBrandHover} />
        {/* hambargar menu, logo and searchbar */}
        <Container isNavbar={true} className={style}>
          <MenuIcon label={"menu"} />
          <Logo {...{isSecondParallaxInView}} /> 

          <div className="hidden -pl-6 md:flex">
            <SearchBar />
          </div>
        </Container>

        {/* hidden menu */}
        <Container isNavbar={true}>
          <HorizontalLine />
          <MenuContents {...{ isMenuOpen }} />
          <Tabs {...{ isMenuOpen }} />
        </Container>
      </header>
    </navbarContext.Provider>
  );
};

export default Navbar;
