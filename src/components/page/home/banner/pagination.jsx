import useGlobalContext from "@/hooks/useGlobalContext";


const Pagination = () => {

  const {isMenuOpen} = useGlobalContext()
  return (
    // if menu open hide parallax pagination dot
    <div className={`${isMenuOpen?'invisible':'visible'} fixed space-y-3 top-1/2 z-50 left-6`}>
      <div className="pagination-dot transition-all duration-500 p-[4px] relative  flex justify-center items-center rounded-full"></div>
      <div className="pagination-dot transition-all duration-500 p-[4px] relative  flex justify-center items-center rounded-full"></div>
      <div className="pagination-dot transition-all duration-500 p-[4px] relative  flex justify-center items-center rounded-full"></div>
    </div>
  );
};

export default Pagination;
