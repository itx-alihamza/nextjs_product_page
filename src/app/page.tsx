'use client';

import Image from "next/image";

export default function Home() {

  return (
    <div className="font-sans flex flex-col bg-white min-w-screen min-h-screen ">
      <section className="relative flex flex-col bg-[#3B3844] min-w-screen h-[80vh] sm:min-h-screen">
        <div className="w-full overflow-hidden h-[75%] sm:h-full">
          <picture>
            <source media="(min-width: 640px)" srcSet="/assets/firSecPic.png" />
            <img
              className="w-[120vw] h-[60vh] sm:h-full sm:w-full object-cover object-center"
              alt="main Image"
              src="/assets/firSecMob.png"
              width={1000}
              height={400}
            />
          </picture>
        </div>
        <div className="sm:absolute w-full sm:w-auto h-[25%] flex flex-col gap-4 justify-center items-center top-1/2 left-20 sm:left-25 md:left-30 lg:40 sm:-translate-y-1/2 z-20 text-4xl text-white">
          <div className="flex flex-col gap-4" style={
            { fontSize: 'clamp(1.8rem, 2.5vw + 1rem, 16rem' }
          }>
            <p>
              Protection Meets
              <span className=" sm:hidden"> Intelligence</span>
            </p>
            <h1 className="hidden sm:block sm:font-extrabold">Intelligence</h1>
          </div>
          <button className="flex justify-center items-center bg-white text-black text-sm px-12 py-4 sm:py-3 sm:px-6 sm:mr-24 md:px-8 md:py-3 lg:px-12 lg:py-4 border-4 border-white hover:border-[#16B6BB] focus:border-[#16B6BB] rounded-full ">
            Order Now
          </button>
        </div>
      </section>
      <section className="font-sans flex flex-col gap-4 pt-4 sm:py-12 sm:px-6 md:px-12 items-center bg-white min-w-screen min-h-screen overflow-x-hidden"
        style={
          { fontSize: 'clamp(1rem, 2.5vw + 1rem, 16rem' }
        }
      >
        <div className="flex flex-col justify-center items-center w-full">
          <h3 className="font-extrabold">Introduction</h3>
          <p className="text-lg"
            style={
              { fontSize: 'clamp(1rem, 2.5vw + 1rem, 16rem' }
            }
          >SMART HELMET - NOVA Series</p>
        </div>
        <div className="flex flex-col md:flex-row h-full justify-center items-center">
          <div className="h-[310px] md:min-w-[400px]  mt-4 mb-2">
            <picture>
              <source media="(min-width: 640px)" src="/assets/helmentWind.png" />
              <Image
                className="w-full h-full"
                alt="Helmet Picture"
                src={`/assets/helmentMobi.png`}
                width={400}
                height={400}
              />
            </picture>
          </div>
          <div className="text-black flex flex-col justify-center text-center md:text-left">
            <p className="font-extrabold md:text-2xl ">Ride Smarter. Ride Safer.</p>
            <p className="text-lg px-12 md:px-0 sm:text-[10px]"
              style={
                { fontSize: 'clamp(0.5rem, 1vw + 1rem, 16rem' }
              }
            >Meet the Nova Series, the next evolution in motorcycle safety. Designed with cutting-edge technology and engineered for maximum protection, the Nova Series Smart Helmet isn’t just a helmet — it’s your intelligent riding companion.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
