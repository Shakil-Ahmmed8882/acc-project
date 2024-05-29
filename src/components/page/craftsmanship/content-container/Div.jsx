const Div = ({ children, width }) => {
  return (
    <section
      className={`relative w-[${width}] overflow-hidden ease-linear
    cursor-pointer hover:w-[100%] group h-[400px] transition-all duration-500`}
    >
      {children}
    </section>
  );
};

export default Div;
