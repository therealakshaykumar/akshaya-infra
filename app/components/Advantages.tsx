"use client";
import { m } from 'framer-motion';
import Image from 'next/image';
import { Shield, Headphones, Star, Settings, Truck } from 'lucide-react';

const advantages = [
  { 
    icon: Shield, 
    title: "Reliability", 
    desc: "Consistent on-time delivery and dependable product quality." 
  },
  { 
    icon: Headphones, 
    title: "Customer Service", 
    desc: "Dedicated support team providing responsive care." 
  },
  { 
    icon: Star, 
    title: "Top Quality\nProducts Only", 
    desc: "Premium bitumen meeting strict specifications." 
  },
  { 
    icon: Settings, 
    title: "Technical\nSupport", 
    desc: "Expert consultation for product selection and application." 
  },
  { 
    icon: Truck, 
    title: "Efficient\nSupply Chain", 
    desc: "Modern fleet ensuring seamless delivery across India." 
  }
];

export default function Advantages() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden py-16 flex flex-col w-full">
      
      {/* Faint Background Watermark Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.07] transform-gpu">
        <Image 
          src="/bg_new.png" // Replace with your pouring bitumen / lab equipment image
          alt="Background Watermark" 
          fill 
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col flex-grow">
        
        {/* Top Right Logo */}
        <m.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="absolute right-6 md:right-12 top-0 hidden md:block transform-gpu"
        >
          <Image 
            src="/logo.png" 
            alt="Akshaya Infra Logo" 
            width={140} 
            height={140} 
            sizes="(max-width: 768px) 80px, 140px"
            className="w-24 md:w-32 drop-shadow-sm" 
          />
        </m.div>

        {/* Main Headers */}
        <m.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="mt-4 md:mt-8 mb-16 md:w-[75%]"
        >
          <h2 className="text-5xl md:text-[3.5rem] font-extrabold text-[#0F2A55] tracking-tight mb-3">
            What Sets Us Apart
          </h2>
          <p className="text-2xl md:text-[1.75rem] text-gray-600 font-light tracking-wide">
            Our Key Competitive Advantages
          </p>
        </m.div>

        {/* 5-Column Grid Layout with Staggered Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 flex-grow items-start">
          {advantages.map((adv, idx) => (
            <m.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
              style={{ willChange: "transform, opacity" }}
              className="flex flex-col items-center text-center px-2 transform-gpu"
            >
              
              {/* Double-Ring Icon Design */}
              <div className="relative w-32 h-32 rounded-full border-[3px] border-[#0F2A55] p-1.5 mb-6 shadow-sm hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#0F2A55] rounded-full flex items-center justify-center">
                  <adv.icon className="w-12 h-12 text-white stroke-[2]" />
                </div>
              </div>
              
              {/* Card Title */}
              <h3 className="text-xl md:text-[1.35rem] font-bold text-[#0F2A55] mb-3 leading-tight whitespace-pre-line">
                {adv.title}
              </h3>
              
              {/* Card Description */}
              <p className="text-base md:text-lg text-gray-800 leading-snug px-1">
                {adv.desc}
              </p>
              
            </m.div>
          ))}
        </div>

        {/* Bottom Footer Border & Branding */}
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="mt-20 border-t-2 border-gray-500/60 w-full pt-6 pb-2"
        >
          <p className="text-lg md:text-xl text-[#0F2A55] font-extrabold tracking-wide">
            AKSHAYA INFRA <span className="font-light text-gray-600 ml-1">Premium Bitumen & Emulsion Solutions</span>
          </p>
        </m.div>

      </div>
    </section>
  );
}