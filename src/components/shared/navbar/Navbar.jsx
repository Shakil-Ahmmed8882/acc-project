"use client";
import { motion } from "framer-motion";
import Logo from "./Logo";
import MenuIcon from "./menu/MenuIcon";
import { createContext, useEffect, useState } from "react";
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

const isClient = () => typeof window !== "undefined";

const Navbar = () => {
  const {
    isScrollBeyondParallax,
    isSecondParallaxInView,
    isMenuOpen,
    setIsMenuOpen,
    isBrandHover,
  } = useGlobalContext();
  const pathname = usePathname();
  const isAdminRoute =
    pathname.startsWith("/admin") || pathname.startsWith("/sign-in");
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === "up";
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (!isClient()) return;

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const getClassNames = () => {
    if (isMenuOpen) {
      return "  bg-[#0000006c]";
    } else if (hasScrolled) {
      return isScrollingUp ? " md:bg-[#0000006c]" : "bg-transparent";
    } else {
      return "bg-transparent";
    }
  };

  const navInfo = {
    setIsMenuOpen,
    isMenuOpen,
  };

  return (
    <navbarContext.Provider value={navInfo}>
      <motion.header
        style={{ zIndex: 99 }}
        className={`
          ${isAdminRoute ? "hidden" : "block"}
          ${getClassNames()}
          fixed w-full right-0 top-0  transition-all duration-700
        `}
        initial="initial"
        animate={getHeaderVariant()}
        variants={headerVariants}
        transition={{ duration: 0.1 }}
      >




          <div className="max-w-[1920px] mx-auto">

          <BgOverlay isTrue={isBrandHover} />
        <Container
          isNavbar={true}
          className="flex justify-between gap-0 items-center px-8"
        >
          <MenuIcon label={"MENU"} />
          <Logo isSecondParallaxInView={isSecondParallaxInView} />
          <div className="hidden -pl-6 md:flex">
            <SearchBar />
          </div>
        </Container>
        <Container isNavbar={true}>
          <HorizontalLine classNames={"mt-8"} />
          <MenuContents isMenuOpen={isMenuOpen} />
          <Tabs />
        </Container>

          </div>



       
      </motion.header>
    </navbarContext.Provider>
  );
};

export default Navbar;
