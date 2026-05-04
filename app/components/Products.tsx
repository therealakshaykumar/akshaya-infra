"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    name: "VG 30 Bitumen",
    image: "/road.jpeg",
    features: [
      "Widely used in India.",
      "Ideal for mild weather and standard road construction.",
      "Excellent thermal susceptibility."
    ]
  },
  {
    name: "VG 40 Bitumen",
    image: "/road2.jpeg",
    features: [
      "For heavy traffic, intersections & toll booths.",
      "Superior resistance to rutting and deformation."
    ]
  },
  {
    name: "RS-1 Emulsion",
    image: "/road3.jpeg",
    features: [
      "Fast-setting water-based emulsion.",
      "Low viscosity, ideal for spray applications."
    ]
  }
];

export default function Products() {
  return (
    <section className="py-20 bg-[#0c2340] text-white px-6 md:px-12 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-3 tracking-tight">Our Products</h2>
            <p className="text-xl md:text-2xl text-blue-100/90 font-light tracking-wide">
              Comprehensive Range of Bitumen & Emulsion Solutions
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <Image 
              src="/logo.png" 
              alt="Akshaya Infra Logo" 
              width={140} 
              height={140} 
              className="w-24 md:w-32 drop-shadow-xl" 
            />
          </motion.div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:divide-x divide-white/30">
          {products.map((prod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="flex flex-col px-4 md:px-8 first:pl-0 last:pr-0"
            >
              {/* Centered Product Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 tracking-wide">
                {prod.name}
              </h3>
              
              {/* PERFECT ALIGNMENT FIX: 
                  Replaced aspect-[4/3] with a strict height (h-[220px] lg:h-[260px]) 
                  This forces every image box to be identical in size regardless of the source image. */}
              <div className="relative w-full h-[220px] lg:h-[260px] mb-8 bg-white overflow-hidden shadow-lg">
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              
              {/* Bulleted Features List */}
              <ul className="list-disc pl-6 space-y-2.5 text-lg md:text-[1.15rem] text-white/95 font-light leading-snug">
                {prod.features.map((feat, fIdx) => (
                  <li key={fIdx} className="pl-1 marker:text-white">
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}