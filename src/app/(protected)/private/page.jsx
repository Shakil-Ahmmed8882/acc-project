"use client"
import { useLayoutEffect } from "react";

const Page =  () => {
// const user =

    useLayoutEffect(()=>{
console.log("ok");
    },[])
    return (
        <div className="text-8xl text-white h-screen flex items-center justify-center">
            <p>HELLO I AM Private page</p>
        </div>
    );
};
export default Page;