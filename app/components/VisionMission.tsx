"use client";
import { m } from 'framer-motion';
import Image from 'next/image';

export default function VisionMission() {
  return (
    <section className="relative py-16 bg-[#f4f6f9] overflow-hidden mt-15">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="relative flex justify-center items-center mb-12 w-full">
          <m.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ willChange: "transform, opacity" }}
            className="text-4xl md:text-5xl font-bold text-[#0F2A55] tracking-wide text-center"
          >
            VISION & MISSION
          </m.h2>
          
          <m.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ willChange: "transform, opacity" }}
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block"
          >
            <Image 
              src="/logo.png" 
              alt="Akshaya Infra Logo" 
              width={120} 
              height={120} 
              className="w-24 md:w-32 drop-shadow-md transform-gpu" 
            />
          </m.div>
        </div>

        <div className="flex flex-col">

          <div className="relative flex items-center min-h-[350px] py-10">
            <m.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              style={{ willChange: "transform, opacity" }}
              transition={{ duration: 1 }}
              className="absolute inset-y-0 right-[-24px] w-full md:w-[55%] z-0 pointer-events-none hidden md:block"
            >
               <div 
                 className="relative w-full h-full transform-gpu" 
                 style={{ 
                   WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 60%)', 
                   maskImage: 'linear-gradient(to right, transparent 0%, black 60%)' 
                 }}
               >
                  <Image 
                    src="/compass.jpg" 
                    alt="Compass on Road" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-right mix-blend-multiply opacity-70"
                  />
               </div>
            </m.div>

            <m.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              style={{ willChange: "transform, opacity" }}
              className="relative z-10 md:w-[65%] flex flex-col justify-center"
            >
              <h3 className="text-4xl md:text-6xl font-extrabold text-[#0F2A55] mb-6 tracking-tight">
                OUR VISION
              </h3>
              <p className="text-xl md:text-[1.35rem] text-gray-800 leading-relaxed mb-8 pr-8">
                To be an indispensable player in the nation&apos;s infrastructure sector, dedicated to instilling the highest standards of business values and ethics. We aim to deliver exceptional results, earn stakeholder trust, and contribute to the nation&apos;s progress.
              </p>
              
              <div className="flex items-center w-[90%] md:w-[85%]">
                <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-[#B31B1B] to-[#B31B1B]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#B31B1B]"></div>
              </div>
            </m.div>
          </div>

          <div className="relative flex items-center min-h-[350px] py-10">
            <m.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              style={{ willChange: "transform, opacity" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute inset-y-0 right-[-24px] w-full md:w-[55%] z-0 pointer-events-none hidden md:block"
            >
               <div 
                 className="relative w-full h-full transform-gpu" 
                 style={{ 
                   WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 60%)', 
                   maskImage: 'linear-gradient(to right, transparent 0%, black 60%)' 
                 }}
               >
                  <Image 
                    src="/gears.jpg" 
                    alt="Industrial Gears" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-right mix-blend-multiply opacity-70"
                  />
               </div>
            </m.div>

            <m.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              style={{ willChange: "transform, opacity" }}
              transition={{ delay: 0.2 }}
              className="relative z-10 md:w-[65%] flex flex-col justify-center"
            >
              <h3 className="text-4xl md:text-6xl font-extrabold text-[#0F2A55] mb-6 tracking-tight">
                OUR MISSION
              </h3>
              <p className="text-xl md:text-[1.35rem] text-gray-800 leading-relaxed mb-8 pr-8">
                Having consolidated our position in the Bitumen sector, we aim to provide durable solutions that minimize recurring repairs and maintenance costs, ensuring long-lasting infrastructure.
              </p>
              
              <div className="flex items-center w-[90%] md:w-[85%]">
                <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-[#B31B1B] to-[#B31B1B]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#B31B1B]"></div>
              </div>
            </m.div>
          </div>

        </div>
      </div>
    </section>
  );
}
