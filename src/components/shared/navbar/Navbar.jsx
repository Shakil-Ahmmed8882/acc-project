"use client"; // Ensure this is included for client-side execution
import { motion } from "framer-motion";
import Logo from "./Logo";
import MenuIcon from "./menu/MenuIcon";
import { createContext, useEffect, useRef, useState } from "react";
import Container from "../container/Container";
import MenuContents from "./menu/menu-contents/MenuContents";
import SearchBar from "./search/SearchBar";
import useGlobalContext from "@/hooks/useGlobalContext";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import HorizontalLine from "@/components/ui/visuals/HorizontalLine";
import Tabs from "@/components/page/products/acc-cigars/tabs/Tabs";
import { usePathname, useRouter } from "next/navigation";
import SearchResults from "./SearchResults";
import { useGetSearchedProducts } from "@/hooks/useGetSearchedProducts";
import useKeydown from "@/hooks/useKeydown";

export const navbarContext = createContext(null);

const isClient = () => typeof window !== "undefined";

const Navbar = () => {
  const { isScrollBeyondParallax, isMenuOpen, setIsMenuOpen } = useGlobalContext();
  const pathname = usePathname();
  const isAdminRoute =
    pathname.startsWith("/admin") ||
    pathname.startsWith("/sign-in") ||
    pathname.startsWith("/sign-up") ||
    pathname.startsWith("/search") ||
    pathname.startsWith("/forgot-password");
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === "up";
  const [hasScrolled, setHasScrolled] = useState(false);

  const router = useRouter(); // Ensure useRouter is correctly imported from next/navigation

  const [trigger, setTrigger] = useState("");
  const [isSwap, setIsSwap] = useState(false); 
  const inputRef = useRef(null);


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

  

  const { products } = useGetSearchedProducts(trigger);

  const handleSearch = (value) => {
    setTrigger(value);
  };


  
    // Define the keydown handler
    const handleKeyDown = () => {
      if (isSwap) {
        router.push(`/search?type=${trigger}`);
        setIsSwap(false);
      }
    };
  
    // Use the custom hook for keydown event
    useKeydown(handleKeyDown, [isSwap, router, trigger]);
  

  return (
    <navbarContext.Provider value={navInfo}>
      <motion.header
        style={{ zIndex: 99 }}
        className={`
          ${isAdminRoute ? "hidden" : "block"}
          ${getClassNames()}
          fixed w-full right-0   top-0 transition-all duration-700
          `}
        initial="initial"
        animate={getHeaderVariant()}
        variants={headerVariants}
        transition={{ duration: 0.1 }}
      >
        <div
          className={`max-w-[1920px] mx-auto ${
            isMenuOpen && "bg-[#0e0e0e33] backdropShadow"
          }`}
        >
          <Container isNavbar={true} className="">
            <div className="grid  grid-cols-3 justify-center items-center h-32 lg:h-auto lg:py-12 relative">
              <MenuIcon label={"MENU"} />
              <Logo />
              <SearchBar {...{ handleSearch, isSwap, setIsSwap, inputRef }} />

              <SearchResults {...{ products, setIsSwap, trigger }} isSearch={isSwap} />
            </div>
          </Container>
          <Container isNavbar={true}>
            <HorizontalLine classNames={"mt-2"} />
            <MenuContents isMenuOpen={isMenuOpen} />
            <Tabs />
          </Container>
        </div>
      </motion.header>
    </navbarContext.Provider>
  );
};

export default Navbar;
