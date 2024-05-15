
const Container= ({children,style}) => {
  return (
    <section className={`${style} max-w-[1220px] mx-auto`}>
     {children}
    </section>
  );
};

export default Container; 