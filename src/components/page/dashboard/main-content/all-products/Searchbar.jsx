const Searchbar = ({ setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="pl-9 md:pl-0 flex items-center mb-4 sm:mb-0">
      <form className="sm:pr-3" action="#" method="GET">
        <label htmlFor="products-search" className="sr-only">
          Search
        </label>
        <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
          <input
            type="text"
            onChange={handleSearch}
            name="search"
            id="products-search"
            className="bg-[#262626] placeholder:text-[16px]
            focus-within:border-0
            focus-within:outline-none
            placeholder:text-[#d2d2d2]  text-white sm:text-sm rounded-lg w-full p-2.5 "
            placeholder="Search for products"
          />
        </div>
      </form>
    </section>
  );
};

export default Searchbar;
