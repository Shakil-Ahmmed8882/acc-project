"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";
import MenuIcon from "./menu/MenuIcon";
import { createContext, useState } from "react";
import Container from "../container/Container";
import MenuContents from "./menu/menu-contents/MenuContents";
import SearchBar from "./search/SearchBar";
import useGlobalContext from "@/hooks/useGlobalContext";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import HorizontalLine from "@/components/ui/visuals/HorizontalLine";
import Tabs from "@/components/page/products/acc-cigars/tabs/Tabs";
import { usePathname } from "next/navigation";
import BgOverlay from "@/components/ui/bg-blur/BgOverlay";

export const navbarContext = createContext(null);

const Navbar = () => {
  const { isScrollBeyondParallax, isSecondParallaxInView } = useGlobalContext();
  const { isMenuOpen, setIsMenuOpen } = useGlobalContext();
  const pathname = usePathname();
  const {isBrandHover} = useGlobalContext()

  const isAdminRoute = pathname.startsWith("/admin") || pathname.startsWith("/sign-in");
  const style = "flex justify-between gap-0 items-center px-8";

  
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === "up";
  
  const headerVariants = {
    initial: { opacity: 1, translateY: 0 },
    scrollingDown: { opacity: 0, translateY: -32 },
    scrollingUp: { opacity: 1, translateY: 0 },
  };
  
  const getHeaderVariant = () => {
    if (isScrollBeyondParallax) {
      return isScrollingUp ? "scrollingUp" : "scrollingDown";
    }
    return "initial";
  };


  const navInfo = {
    setIsMenuOpen,
    isMenuOpen,
   
  };
  
  return (
    <navbarContext.Provider value={navInfo}>
      <motion.header
        style={{ zIndex: 9999 }}
        className={`
          ${isAdminRoute ? "hidden" : "block"}
          ${isMenuOpen ? "min-h-screen md:min-h-32 lg:h-52" : isScrollingUp ? "h-28 lg:h-32" : "h-32 lg:h-28"}
          bg-[#0000006c]
          fixed left-0 right-0 top-0 transition-all duration-700
        `}
        initial="initial"
        animate={getHeaderVariant()}
        variants={headerVariants}
        transition={{ duration: 0.7 }}
      >
        <BgOverlay isTrue={isBrandHover} />
        <Container isNavbar={true} className={style}>
          <MenuIcon label={"menu"} />
          <Logo {...{ isSecondParallaxInView }} />
          <div className="hidden -pl-6 md:flex">
            <SearchBar />
        </div>
        </Container>
        <Container isNavbar={true}>
          <HorizontalLine />
          <MenuContents {...{ isMenuOpen }} />
          {/* conditaional tabs */}
          <Tabs/>
        </Container>
      </motion.header>
    </navbarContext.Provider>
  );
};

export default Navbar;