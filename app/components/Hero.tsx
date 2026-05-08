"use client";
import { m } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-[#081e3a]">
      <div className="absolute inset-0 z-0 transform-gpu">
        <Image 
          src="/bg.jpg" 
          alt="Road Infrastructure Background" 
          fill 
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-[#11325a]/80 to-[#081e3a]"></div>
      </div>

      <m.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ willChange: "transform, opacity" }}
        className="absolute top-6 right-6 md:top-12 md:right-16 z-20 transform-gpu"
      >
        <Image 
          src="/logo.png" 
          alt="Akshaya Infra Logo" 
          width={180} 
          height={180} 
          sizes="(max-width: 768px) 80px, 180px"
          className="w-20 md:w-36 drop-shadow-2xl" 
          priority
        />
      </m.div>

      <div className="relative z-10 flex-grow flex flex-col justify-center items-center w-full pt-28 pb-10 md:pt-32 landscape:pt-20">
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="flex flex-col items-center text-center w-full max-w-6xl px-4"
        >
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-white/40 blur-2xl md:blur-[30px] rounded-[100%] scale-110 pointer-events-none z-0 transform-gpu"></div>
            
            <h1 
              className="relative z-10 text-5xl md:text-8xl lg:text-[7rem] font-extrabold text-[#0c2447] tracking-tight"
              style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.3)' }}
            >
              AKSHAYA INFRA
            </h1>
          </div>
          
          <p 
            className="relative z-10 text-xl md:text-[2.5rem] text-white font-medium leading-snug mb-10 md:mb-16 landscape:mb-6"
            style={{ textShadow: '0px 2px 5px rgba(0,0,0,0.8)' }}
          >
            Premium Bitumen & Emulsion Solutions <br className="hidden md:block" /> 
            for Road Infrastructure
          </p>
        </m.div>
      </div>

      <m.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        style={{ willChange: "transform, opacity" }}
        className="relative z-20 w-full flex flex-col items-center px-4 pb-8 md:pb-12 mt-auto"
      >
        <div className="w-[80%] max-w-[600px] h-[2px] bg-white mb-4 opacity-80 shadow-[0_1px_3px_rgba(0,0,0,0.5)]"></div>

        <p 
          className="text-base md:text-2xl text-white font-normal tracking-wide"
          style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.6)' }}
        >
          Bengaluru, India | +91 9108169453 | +91 9606379772
        </p>
      </m.div>
    </section>
  );
}
