import { usePathname } from "next/navigation";

const Tabs = ({ isMenuOpen }) => {
  const router = usePathname();

  return (
    <section
      className={`
      ${router == '/brands'?'block':'hidden'}
      ${  
        isMenuOpen ? "invisible opacity-0 text-[#c2c2c200] " : "text-[#c2c2c2]"
      }  duration-700 transition-all`}
    >
      <ul
        className="flex 
         gap-16 py-3 items-center"
      >
        <li className="text-white">CIGAR</li>
        <li>LIQUOR</li>
        <li>ACCESSORIES</li>
        <li>LUXURY STORAGE</li>
      </ul>
    </section>
  );
};

export default Tabs;
