"use client"; // Ensure this is included for client-side execution
import { motion } from "framer-motion";
import Logo from "./Logo";
import MenuIcon from "./menu/MenuIcon";
import { createContext, useRef, useState } from "react";
import Container from "../container/Container";
import MenuContents from "./menu/menu-contents/MenuContents";
import SearchBar from "./search/SearchBar";
import useGlobalContext from "@/hooks/useGlobalContext";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import HorizontalLine from "@/components/ui/visuals/HorizontalLine";
import Tabs from "@/components/page/products/acc-cigars/tabs/Tabs";
import { usePathname, useRouter } from "next/navigation";
import { useGetSearchedProducts } from "@/hooks/useGetSearchedProducts";
import useKeydown from "@/hooks/useKeydown";
import SearchResults from "./searchResults/SearchResults";
import { headerVariants } from "./animation";

export const navbarContext = createContext(null);

const Navbar = () => {
  const { isScrollBeyondParallax, isMenuOpen, setIsMenuOpen } = useGlobalContext();
  const pathname = usePathname();
  const homeRoute = pathname.startsWith("/");
  const isAdminRoute = pathname.startsWith("/admin") ||
    pathname.startsWith("/sign-in") ||
    pathname.startsWith("/sign-up") ||
    pathname.startsWith("/search") ||
    pathname.startsWith("/forgot-password");
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === "up";
  const [hasScrolled, setHasScrolled] = useState(false);
  const router = useRouter();
  const [trigger, setTrigger] = useState("");
  const [isSwap, setIsSwap] = useState(false);
  const inputRef = useRef(null);

  // Define keydown handlers
  const handleSearchRedirect = () => {
    if (isSwap) {
      router.push(`/search?type=${trigger}`);
      setIsSwap(false);
    }
  };

  const keydownHandlers = [
    { key: 'Enter', action: handleSearchRedirect },
    { key: 'm', ctrlKey: true, action: () => setIsSwap(true) },
    { key: 'Escape', ctrlKey: false, action: () => setIsSwap(false) }
  ];

  // Call useKeydown hook unconditionally
  useKeydown(keydownHandlers, [isSwap, router, trigger]);

  const getHeaderVariant = () => {
    const isHomePage = pathname === "/";
    if (isHomePage) {
      if (isScrollBeyondParallax) {
        return isScrollingUp ? "scrollingUp" : "scrollingDown";
      }
      return "initial";
    } else {
      return isScrollingUp ? "scrollingUp" : "scrollingDown";
    }
  };

  const getClassNames = () => {
    if (isMenuOpen) {
      return "bg-[#0000006c]";
    } else if (hasScrolled) {
      return isScrollingUp ? "md:bg-[#0000006c]" : "bg-transparent";
    } else {
      return "bg-transparent";
    }
  };

  const navInfo = {
    setIsMenuOpen,
    isMenuOpen,
  };

  const { products } = useGetSearchedProducts(trigger);

  const handleSearch = (value) => {
    setTrigger(value);
  };

  

  return (
    <navbarContext.Provider value={navInfo}>
      <motion.header
        style={{ zIndex: 99 }}
        className={`
          ${isAdminRoute ? "hidden" : "block"}
          ${getClassNames()}
          fixed w-full right-0 top-0 transition-all duration-700
          `}
        initial="initial"
        animate={getHeaderVariant()}
        variants={headerVariants}
        transition={{ duration: 0.1 }}
      >
        <div
          className={`max-w-[1920px] mx-auto ${
            isMenuOpen && "bg-[#0e0e0e33] backdropShadow z-50"
          }`}
        >
          <Container isNavbar={true} isBrand={true} className="">
            <div className="grid grid-cols-3 justify-center items-center h-32 lg:h-auto lg:py-12 relative">
              <MenuIcon label={"MENU"} />
              <Logo />
              <SearchBar {...{ handleSearch, isSwap, setIsSwap, inputRef, trigger }} />
              <SearchResults
                {...{ products, setIsSwap, trigger }}
                isSearch={isSwap}
              />
            </div>
          </Container>
          <Container isNavbar={true} isBrand={true}>
            <HorizontalLine classNames={"mt-2"} />
            <MenuContents isMenuOpen={isMenuOpen}/>
            <Tabs />
          </Container>
        </div>
      </motion.header>
    </navbarContext.Provider>
  );
};

export default Navbar;