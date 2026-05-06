"use client";
import { m } from 'framer-motion';
import Image from 'next/image';
import { Ship, Truck, Droplets, Handshake } from 'lucide-react';

const features = [
  { icon: Ship, title: "Strong Network", desc: "Access to reputable suppliers and modern fleet of bitumen vessels." },
  { icon: Truck, title: "Superior Logistics", desc: "On-time delivery at correct temperature anywhere in the country." },
  { icon: Droplets, title: "High Quality Products", desc: "Premium bitumen (VG-30, VG-40) and emulsions matching diverse demands." },
  { icon: Handshake, title: "Technical Expertise", desc: "Expert collaboration for optimal technical solutions and quality outcomes." },
];

export default function Features() {
  return (
    <section className="flex flex-col w-full bg-[#f4f6f9] overflow-hidden mb-[0.9px]">
      
      {/* Top Header Bar */}
      <div className="relative bg-[#0F2A55]/90 w-full py-12 px-6 flex justify-center items-center overflow-hidden shadow-md transform-gpu">
        {/* Subtle background image overlay for the header */}
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
          <Image 
            src="/bg.jpg" 
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
              className="flex w-full overflow-hidden rounded-2xl border-2 border-[#0F2A55] bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 transform-gpu"
            >
              {/* Left Side: Image Area */}
              <div className="flex w-[35%] items-center justify-center bg-white p-4 md:p-6">
                <feat.icon className="w-20 h-20 md:w-28 md:h-28 text-slate-300" strokeWidth={1.2} />
              </div>

              {/* Right Side: Content Area */}
              <div className="flex w-[65%] flex-col bg-[#f8f9fb]">
                
                {/* Blue Header - Flush to the edges of the right column */}
                <div className="bg-[#0F2A55] px-6 py-3.5 text-xl md:text-2xl font-bold tracking-wide text-white -mr-5">
                  {feat.title}
                </div>
                
                {/* Text Body - Flex grow keeps it anchored nicely if cards stretch */}
                <div className="bg-slate-100 grow px-6 py-4 md:py-6 text-lg md:text-[1.3rem] leading-snug text-gray-800 flex items-center">
                  {feat.desc}
                </div>
                
              </div>
            </m.div>
          ))}
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-[#0F2A55] w-full py-4 flex justify-center items-center shadow-inner mt-auto transform-gpu">
        <p className="text-white text-lg md:text-xl tracking-wide font-light">
          Bengaluru, India | +91 9108169453
        </p>
      </div>

    </section>
  );
}
