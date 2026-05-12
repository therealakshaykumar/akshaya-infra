"use client";
import { m } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';

const compliancePoints = [
  "Strict compliance with Indian Standards & international specs",
  "Consistent product specifications across all batches",
  "Reliable performance in varying climatic conditions",
  "Compliance with government project requirements",
  "Proven durability and long-lasting infrastructure",
];

export default function Quality() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden py-16 flex flex-col w-full">
      
      {/* Right Side Faded Background Image 
          FIXED: Added opacity-15 md:opacity-100 so it becomes a faint watermark on mobile 
          and doesn't interfere with text readability. */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[65%] z-0 pointer-events-none opacity-15 md:opacity-100">
        <div 
          className="relative w-full h-full transform-gpu"
          style={{ 
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)', 
            maskImage: 'linear-gradient(to right, transparent 0%, black 40%)' 
          }}
        >
          <Image 
            src="/quality.png" // Replace with your lab/highway testing image
            alt="Quality Testing Infrastructure" 
            fill 
            sizes="(max-width: 768px) 100vw, 65vw"
            className="object-cover opacity-90"
            quality={60}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col flex-grow">
        
        {/* Top Right Logo */}
        <m.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ willChange: "transform, opacity" }}
          className="absolute right-0 top-0 hidden md:block"
        >
          <Image 
            src="/logo.png" 
            alt="Akshaya Infra Logo" 
            width={140} 
            height={140} 
            className="w-24 md:w-32 drop-shadow-md transform-gpu" 
          />
        </m.div>

        {/* Main Headers */}
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ willChange: "transform, opacity" }}
          className="mt-4 md:mt-8 md:w-[75%]"
        >
          <h2 className="text-5xl md:text-[3.6rem] font-extrabold text-[#0F2A55] leading-[1.1] tracking-tight mb-4">
            Uncompromising Quality & <br className="hidden md:block"/> Industry Compliance
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 font-light mb-12 tracking-wide">
            Our Commitment to Excellence in Every Project
          </p>
        </m.div>

        {/* Bullet Points Section */}
        <div className="relative w-full md:max-w-[60%] flex-grow z-10">
          <ul className="space-y-6">
            {compliancePoints.map((point, idx) => (
              <m.li 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                style={{ willChange: "transform, opacity" }}
                className="flex items-start gap-4"
              >
                {/* Styled Navy Checkmark Icon */}
                <div className="mt-1 flex-shrink-0 w-7 h-7 rounded-full bg-[#0F2A55] flex items-center justify-center shadow-md transform-gpu">
                  <Check className="w-4 h-4 text-white stroke-[3]" />
                </div>
                
                {/* List Text */}
                <p className="text-xl md:text-[1.35rem] text-[#1a2b3c] leading-snug font-medium">
                  {point}
                </p>
              </m.li>
            ))}
          </ul>
        </div>

        {/* Bottom Footer Border & Branding */}
        <m.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ willChange: "transform, opacity" }}
          className="mt-20 border-t border-gray-500/60 w-full md:w-[85%] pt-6 pb-2"
        >
          <p className="text-lg md:text-xl text-[#0F2A55] font-extrabold tracking-wide">
            AKSHAYA INFRA <span className="font-light text-gray-600 ml-1 block md:inline mt-1 md:mt-0">Premium Bitumen & Emulsion Solutions</span>
          </p>
        </m.div>

      </div>
    </section>
  );
}
