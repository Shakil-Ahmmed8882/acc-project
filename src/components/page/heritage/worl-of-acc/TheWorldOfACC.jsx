import Container from "@/components/shared/container/Container";
import Button from "@/components/shared/parallax/Button";
import img1 from '@/assets/img/heritage/world-of-acc/img1.png'
import img2 from '@/assets/img/heritage/world-of-acc/img2.png'
import img3 from '@/assets/img/heritage/world-of-acc/img3.png'
import img4 from '@/assets/img/heritage/world-of-acc/img4.png'
import img5 from '@/assets/img/heritage/world-of-acc/img5.png'


const TheWorldOfACC= () => {
  return (

    <Container>
    <section className="text-white grid grid-rows-3 grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 mt-32">
        <div className="  grid md:grid-cols-2 gap-8 space-y-2"> 
        <div className=" h-full p-8 md:mt-16 rounded-lg text-center text-3xl"><img className="w-full h-full" src={img1} alt="" /></div>
        <div className="bg-[red] h-full p-8 md:-mt-16 rounded-lg text-center text-3xl">2</div>
        </div>
        <div className="bg-[black] md:row-span-2 p-8 rounded-lg text-center text-3xl">3</div>
        <div className="bg-[black] md:row-span-2 p-8 rounded-lg text-center text-3xl">4</div>
        <div className="bg-[black] p-8 rounded-lg text-center text-3xl">5</div>
    </section>
        <div className="flex justify-center mt-32 w-[50%] mx-auto"><Button/></div>
    </Container>
  );
};

export default TheWorldOfACC; 