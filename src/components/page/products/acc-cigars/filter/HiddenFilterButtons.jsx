"use client";

import useGlobalContext from "@/hooks/useGlobalContext";

const HiddenFilterButtons = ({ openFilter }) => {
  const { showProducts, setShowProducts } = useGlobalContext();
  return (
    <section
      className={`${
        openFilter ? "visible opacity-100 h-20" : "invisible opacity-0 h-0"
      }

     smooth-transition
     absolute w-[100%]
     flex justify-center items-center
     gap-5
     `}
    >
      <button
      style={{zIndex:999999}}
        onClick={() => setShowProducts("all")}
        className={`${
          showProducts === "all" ? "text-white" : "text-[gray]"
        }  hover:text-white outline outline-[1px] py-2 px-5 text-sm rounded-full smooth-transition`}
      >
        ALL
      </button>
      <button
      style={{zIndex:999999}}
        onClick={() => setShowProducts("best-seller")}
        className={`${
          showProducts === "best-seller" ? "text-white" : "text-[gray]"
        }  hover:text-white outline outline-[1px] py-2 px-5 text-sm rounded-full smooth-transition`}
      >
        BEST SELLER
      </button>
    </section>
  );
};

export default HiddenFilterButtons;
