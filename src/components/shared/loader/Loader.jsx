import { Loader2 } from "lucide-react";

const Loader= () => {
  return (
    <section className="h-screen w-full grid text-center  absolute top-0 justify-center items-center">
        <Loader2 className="text-white animate-spin mx-auto w-11 h-11"/>
        </section>
  );
};

export default Loader; 