import Container from "@/components/shared/container/Container";
import Button from "@/components/shared/parallax/Button";
// C:\Users\shakil\OneDrive\Documents\project\Acc-Project\src\
import img1 from "@/assets/img/heritage/world-of-acc/img1.png";
import img2 from "@/assets/img/heritage/world-of-acc/img2.png";
import img3 from "@/assets/img/heritage/world-of-acc/img3.png";
import img4 from "@/assets/img/heritage/world-of-acc/img4.png";
import img5 from "@/assets/img/heritage/world-of-acc/img5.png";
import Image from "next/image";
import Link from "next/link";

const TheWorldOfACC = () => {
  return (
    <section className="pt-9 bg-[#121212]">
    <Container>
      <Link href={'/stories'} className="border-b pb-2 border-[#bfbfbf]  text-2xl text-white font-thin">STORIES</Link>
      <h1 className="text-3xl pt-11 text-white">THE WORLD OF ACC</h1>
      <section className="text-white  grid   grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div className=" flex flex-col  md:flex-row gap-8">
          <div className="  rounded-lg text-center ">
            <Image className=" w-full object-top object-cover" src={img1} alt="" />
          </div>
          <div className="  md:mt-24 overflow-hidden rounded-lg text-center ">
            <Image className=" w-full object-top object-cover " src={img2} alt="" />
          </div>
        </div>
        <div className="bg-[black] h-[80vh] md:h-full md:row-span-2  rounded-lg text-center ">
          <Image className=" object-top w-full h-full object-cover " src={img3} alt="" />
        </div>
        <div className="bg-[black]  md:row-span-2  rounded-lg text-center ">
          <Image className=" object-top object-cover" src={img4} alt="" />
        </div>
        <div className="bg-[black]  rounded-lg text-center ">
          <Image className=" object-top object-cover" src={img5} alt="" />
        </div>
      </section>
      <div className="flex justify-center mt-32 w-[50%] mx-auto">
        <Button />
      </div>
    </Container>
    </section>
  );
};

export default TheWorldOfACC;
