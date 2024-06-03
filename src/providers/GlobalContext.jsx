'use client'


import { useScrollDirection } from "@/hooks/useScrollDirection";
import { createContext, useEffect, useState } from "react";
export const globalContext = createContext(null)
const GlobalContext= ({children}) => {


// ================== Menubar =====================
const direction = useScrollDirection()
const [isMenuOpen, setIsMenuOpen] = useState(false);




// ================== parallax =====================
const [isScrollBeyondParallax, setIsScrollBeyondParallax] = useState(false);
const [activeSectionIndex, setActiveSectionIndex] = useState(0);
const [isSecondParallaxInView, setIsSecondParallaxInView] = useState(false);


// ================== Products =====================
const [showProducts,setShowProducts] = useState('best-seller');
const [isSeeMore, setIsSeeMore] = useState(showProducts === "all");


// ========== Spread data across the app ==========
const contextData = {
  
  // navbar
    isMenuOpen,
    setIsMenuOpen,
    setIsScrollBeyondParallax,
    isScrollBeyondParallax,

    // parallax 
    setIsSecondParallaxInView,
    isSecondParallaxInView,
    activeSectionIndex,
    setActiveSectionIndex,

    // products 
    showProducts,
    setShowProducts,
    isSeeMore, 
    setIsSeeMore
}

  return (
    <globalContext.Provider value={contextData}>
    {children}
    </globalContext.Provider>
  );
};

export default GlobalContext; 