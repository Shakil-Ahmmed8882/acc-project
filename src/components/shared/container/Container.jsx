
const Container= ({children,className}) => {
  return (
    <section className={`${className} max-w-[1220px] px-8 mx-auto`}>
     {children}
    </section>
  );
};

export default Container; 