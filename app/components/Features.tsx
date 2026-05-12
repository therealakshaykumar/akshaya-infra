"use client";
import { m } from 'framer-motion';
import Image from 'next/image';

const features = [
  { title: "Strong Network", desc: "Access to reputable suppliers and modern fleet of bitumen vessels.", img: "/ship.png" },
  { title: "Superior Logistics", desc: "On-time delivery at correct temperature anywhere in the country.", img: "/truck.png" },
  { title: "High Quality Products", desc: "Premium bitumen (VG-30, VG-40) and emulsions matching diverse demands.", img: "/droplets.png" },
  { title: "Technical Expertise", desc: "Expert collaboration for optimal technical solutions and quality outcomes.", img: "/handshake.png" },
];

export default function Features() {
  return (
    <section className="flex flex-col w-full bg-[#f4f6f9] overflow-hidden mb-[0.9px]">
      
      {/* Top Header Bar */}
      <div className="relative bg-[#0F2A55]/90 w-full py-12 px-6 flex justify-center items-center overflow-hidden shadow-md transform-gpu">
        {/* Subtle background image overlay for the header */}
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
          <Image 
            src="/bg_new.png" 
            alt="Header Background" 
            fill 
            sizes="100vw"
            className="object-cover object-center" 
            quality={60}
          />
        </div>
        
        <m.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ willChange: "transform, opacity", textShadow: '0px 2px 8px rgba(0,0,0,0.6)' }}
          className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide text-center transform-gpu"
        >
          Why Choose Akshaya Infra
        </m.h2>
        
        {/* Logo Top Right */}
        <m.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ willChange: "transform, opacity" }}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-10 hidden md:block"
        >
          <Image 
            src="/logo.png" 
            alt="Akshaya Infra Logo" 
            width={120} 
            height={120} 
            className="w-24 md:w-28 drop-shadow-xl transform-gpu" 
          />
        </m.div>
      </div>

      {/* Main Grid Area */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full grow">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feat, idx) => (
            <m.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              style={{ willChange: "transform, opacity" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex w-full overflow-hidden rounded-2xl border-2 border-[#0F2A55] bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform-gpu group"
            >
              {/* Left Side: Image Area */}
              <div className="relative w-[40%] overflow-hidden bg-white">
                <Image 
                  src={feat.img} 
                  alt={feat.title} 
                  fill
                  sizes="(max-width: 768px) 40vw, 20vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
                {/* Subtle overlay for image consistency */}
                <div className="absolute inset-0 bg-[#0F2A55]/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Right Side: Content Area */}
              <div className="flex w-[60%] flex-col bg-[#f8f9fb]">
                
                {/* Blue Header - Flush to the edges of the right column */}
                <div className="bg-[#0F2A55] px-6 py-4 text-xl md:text-2xl font-bold tracking-wide text-white">
                  {feat.title}
                </div>
                
                {/* Text Body - Flex grow keeps it anchored nicely if cards stretch */}
                <div className="bg-slate-50 grow px-6 py-4 md:py-6 text-lg md:text-[1.2rem] leading-snug text-gray-800 flex items-center border-l-4 border-slate-200">
                  {feat.desc}
                </div>
                
              </div>
            </m.div>
          ))}
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-[#0F2A55] w-full py-6 md:py-4 px-6 flex justify-center items-center shadow-inner mt-auto transform-gpu">
        <p className="text-white text-base md:text-xl tracking-wide font-light flex flex-col md:flex-row items-center gap-2 md:gap-0">
          <span>Bengaluru, India</span>
          <span className="hidden md:inline mx-3">|</span>
          <span className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
            <span>+91 9108169453</span>
            <span className="hidden md:inline">|</span>
            <span>+91 9606379772</span>
          </span>
        </p>
      </div>

    </section>
  );
}
