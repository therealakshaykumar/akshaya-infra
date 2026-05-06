"use client";

import Image from 'next/image';
import { m } from 'framer-motion';
import { MapPin, Phone, Mail, CircleUser } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8f9fb] flex flex-col overflow-hidden">
      
      
      <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[450px] transform-gpu">
        <Image 
          src="/footer.jpeg" 
          alt="Highway Road Infrastructure" 
          fill 
          sizes="100vw"
          className="object-cover object-center" 
          quality={60}
        />
        
        
        <m.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="absolute top-6 right-6 md:top-12 md:right-16 z-10 transform-gpu"
        >
          <Image src="/logo.png" alt="Akshaya Infra Logo" width="160" height="160" sizes="(max-width: 768px) 112px, 160px" className="w-28 md:w-40 drop-shadow-2xl"/>
        </m.div>
      </div>

      
      <div className="w-full max-w-7xl mx-auto px-6 pt-12 md:pt-16 pb-8 md:pb-12 flex flex-col">
        
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0 mb-16">
          
          
          <m.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className="flex flex-col md:w-[60%]"
          >
            <h2 className="text-5xl md:text-[4rem] lg:text-[5rem] leading-[1.1] font-extrabold text-[#0F2A55] mb-6 tracking-tight">
              Ready to Partner <br className="hidden sm:block" /> with You
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0F2A55] tracking-wider uppercase mt-2">
              AKSHAYA INFRA
            </h3>
          </m.div>

          
          <div className="flex flex-col md:w-[40%] space-y-6 md:space-y-7 md:pt-4">
            
            <m.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ willChange: "transform, opacity" }}
              className="flex items-start gap-5"
            >
              <MapPin className="w-8 h-8 text-[#0F2A55] shrink-0 mt-1"/>
              <p className="text-xl md:text-[1.35rem] text-gray-900 leading-snug">
                #84/5, D.V.G Road, Basavanagudi,<br className="hidden md:block" /> Bengaluru - 560004, India
              </p>
            </m.div>
            
            <m.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ willChange: "transform, opacity" }}
              className="flex items-center gap-5"
            >
              <CircleUser className="w-8 h-8 text-[#0F2A55] shrink-0"/>
              <p className="text-xl md:text-[1.35rem] text-gray-900">
                Proprietor: Arjun B G Rao
              </p>
            </m.div>
            
            <m.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ willChange: "transform, opacity" }}
              className="flex items-center gap-5"
            >
              <Phone className="w-8 h-8 text-[#0F2A55] shrink-0"/>
              <p className="text-xl md:text-[1.35rem] text-gray-900">
                +91 9108169453 | +91 9606379772
              </p>
            </m.div>
            
            <m.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ willChange: "transform, opacity" }}
              className="flex items-center gap-5"
            >
              <Mail className="w-8 h-8 text-[#0F2A55] shrink-0"/>
              <p className="text-xl md:text-[1.35rem] text-gray-900">
                Akshayainfra33@gmail.com
              </p>
            </m.div>

          </div>
        </div>

        
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="w-full text-center pt-8 border-t border-gray-200"
        >
          <p className="text-[#0F2A55] font-bold text-lg md:text-xl tracking-wide">
            Contact us today for premium bitumen solutions and technical consultation.
          </p>
        </m.div>
        
      </div>
    </footer>
  );
}