import Container from "@/components/shared/container/Container";
import useGlobalContext from "@/hooks/useGlobalContext";

const Pagination = () => {
  const { isMenuOpen } = useGlobalContext();
  return (
    // if menu open hide parallax pagination dot
    <Container className={'relative hidden'}>
    <div
      className={`${
        isMenuOpen ? " invisible opacity-0" : "invisible md:visible opacity-100"
      } smooth-transition fixed  space-y-6 top-1/2 z-50 left-[2%]`}
    >
    
      <div className="size-6 flex justify-center items-center rounded-full p-2"><span className="pagination-dot smooth-transition  p-[4px] relative bg-[white]  rounded-full"></span></div>
      <div className="size-6 flex justify-center items-center rounded-full p-2"><span className="pagination-dot smooth-transition  p-[4px] relative bg-[white]  rounded-full"></span></div>
      <div className="size-6 flex justify-center items-center rounded-full p-2"><span className="pagination-dot smooth-transition  p-[4px] relative bg-[white]  rounded-full"></span></div>
    
    </div>

    </Container>


  );
};

export default Pagination;
