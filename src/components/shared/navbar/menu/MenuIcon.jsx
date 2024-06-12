import { useContext } from "react";
import { navbarContext } from "../Navbar";

const MenuIcon = ({label}) => {

    const { setIsMenuOpen, isMenuOpen} = useContext(navbarContext)

    return (
        <div className="flex-1">
            <button className={`${label && 'flex gap-3 items-center'} `} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg className={`${isMenuOpen?'rotate-180':'rotate-0'} smooth-transition`} xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                    <path d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447716 2 0 1.55228 0 1ZM0 8C0 7.44772 0.447715 7 1 7H11C11.5523 7 12 7.44772 12 8C12 8.55228 11.5523 9 11 9H1C0.447715 9 0 8.55228 0 8ZM0 15C0 14.4477 0.447715 14 1 14H17C17.5523 14 18 14.4477 18 15C18 15.5523 17.5523 16 17 16H1C0.447716 16 0 15.5523 0 15Z" fill="#FAFAFA" />
                </svg>
                <span style={{letterSpacing:3}} 
                className="text-white uppercase font-riviera">{label} </span>
            </button>
        </div>
    );
};

export default MenuIcon; 