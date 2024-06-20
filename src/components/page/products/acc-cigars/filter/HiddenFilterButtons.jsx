"use client";

const HiddenFilterButtons = ({ openFilter, isSeeMoreAll, setIsSeeMoreAll }) => {
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
        style={{ zIndex: 999999 }}
        onClick={() => setIsSeeMoreAll(true)}
        className={`${
          isSeeMoreAll ? "text-white" : "text-[gray]"
        }  hover:text-white outline outline-[1px] py-2 px-5 text-sm rounded-full smooth-transition`}
      >
        ALL
      </button>
      <button
        style={{ zIndex: 999999 }}
        onClick={() => setIsSeeMoreAll(false)}
        className={`${
          !isSeeMoreAll ? "text-white" : "text-[gray]"
        }  hover:text-white outline outline-[1px] py-2 px-5 text-sm rounded-full smooth-transition`}
      >
        BEST SELLER
      </button>
    </section>
  );
};

export default HiddenFilterButtons;
