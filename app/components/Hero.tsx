// app/components/Hero.tsx
"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-[#081e3a]">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/bg.jpg" 
          alt="Road Infrastructure Background" 
          fill 
          className="object-cover object-center"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-[#11325a]/80 to-[#081e3a]"></div>
      </div>

      {/* Top Right Logo */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-8 right-8 md:top-12 md:right-16 z-20"
      >
        <Image 
          src="/logo.png" 
          alt="Akshaya Infra Logo" 
          width={180} 
          height={180} 
          className="w-24 md:w-36 drop-shadow-2xl" 
        />
      </motion.div>

      {/* Center Aligned Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center w-full max-w-6xl px-4 mt-10 md:mt-16"
      >
        {/* Main Heading Container: inline-block ensures the glow ONLY wraps this specific text */}
        <div className="relative inline-block mb-4">
          {/* The glowing backdrop for the WHOLE text block (not individual characters) */}
          <div className="absolute inset-0 bg-white/40 blur-2xl md:blur-[30px] rounded-[100%] scale-110 pointer-events-none z-0"></div>
          
          <h1 
            className="relative z-10 text-6xl md:text-8xl lg:text-[7rem] font-extrabold text-[#0c2447] tracking-tight"
            style={{ 
              textShadow: '0px 2px 4px rgba(0,0,0,0.3)' // Subtle dark edge so the navy text stays sharp against the white glow
            }}
          >
            AKSHAYA INFRA
          </h1>
        </div>
        
        {/* Subheading: Completely unaffected by the glow above */}
        <p 
          className="relative z-10 text-2xl md:text-[2.5rem] text-white font-medium leading-snug mb-16"
          style={{
            textShadow: '0px 2px 5px rgba(0,0,0,0.8)'
          }}
        >
          Premium Bitumen & Emulsion Solutions <br className="hidden md:block" /> 
          for Roads Infrastructure
        </p>
      </motion.div>

      {/* Bottom Contact Info */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="absolute bottom-10 md:bottom-12 w-full flex flex-col items-center z-20 px-4"
      >
        {/* Divider Line */}
        <div className="w-[80%] max-w-[600px] h-[2px] bg-white mb-4 opacity-80 shadow-[0_1px_3px_rgba(0,0,0,0.5)]"></div>

        {/* Contact Info */}
        <p 
          className="text-lg md:text-2xl text-white font-normal tracking-wide"
          style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.6)' }}
        >
          Bengaluru, India | +91 9108169453
        </p>
      </motion.div>
    </section>
  );
}