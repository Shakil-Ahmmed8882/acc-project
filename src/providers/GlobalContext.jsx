'use client'


import { createContext, useState } from "react";
export const globalContext = createContext(null)
const GlobalContext= ({children}) => {


// ================== Menubar =====================
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isScrollBeyondParallax, setIsScrollBeyondParallax] = useState(false);


// ========== Spread data across the app ==========

const contextData = {
    isMenuOpen,
    setIsMenuOpen,
    setIsScrollBeyondParallax,
    isScrollBeyondParallax
}

  return (
    <globalContext.Provider value={contextData}>
    {children}
    </globalContext.Provider>
  );
};

export default GlobalContext; 