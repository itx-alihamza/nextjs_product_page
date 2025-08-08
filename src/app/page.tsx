'use client';

import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isMobile = useMediaQuery({ query: '(min-width: 640px)' })

  console.log("debug", isMobile, window.innerHeight);
  return (
    <div className="font-sans flex flex-col bg-white min-w-screen min-h-screen ">
      <section className="relative flex flex-col bg-[#3B3844] min-w-screen h-[80vh] sm:min-h-screen">
        <div className="w-full overflow-hidden h-[75%] sm:h-full">
          <Image
            className="w-[120vw] h-[60vh] sm:h-full sm:w-full object-cover object-center"
            alt="main Image"
            src={isMobile ? '/assets/firSecPic.png' : '/assets/firSecMob.png'}
            // src={'/assets/firSecMob.png'}
            width={1000}
            height={400}
          />
        </div>
        <div className="sm:absolute w-full sm:w-auto h-[25%] flex flex-col gap-4 justify-center items-center top-1/2 left-20 md:left-40 lg:40 sm:-translate-y-1/2 z-20 text-4xl text-white">
          <div className="flex flex-col gap-4" style={
            { fontSize: 'clamp(1.8rem, 2.5vw + 1rem, 16rem' }
          }>
            <p >Protection Meets {!isMobile && 'Intelligence'}</p>
            {isMobile && (<h1 className="sm:font-extrabold">Intelligence</h1>)}
          </div>
          <button className="flex justify-center items-center bg-white text-black text-sm px-12 py-4 sm:py-4 md:5 border-4 border-white hover:border-[#16B6BB] focus:border-[#16B6BB] rounded-full ">
            Order Now
          </button>
        </div>
      </section>
      <section className="font-sans flex felx-col gap-4 bg-white min-w-screen min-h-screen">
        <div className="flex flex-col justify-center items-center w-full">
          <p className="">Introduction</p>
          <p className="">SMART HELMET - NOVA Series</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full">

        </div>
      </section>
    </div>
  );
}
