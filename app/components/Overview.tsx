"use client";
import { m } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const bulletPoints = [
  "Leading bulk bitumen supplier with proven track record",
  "Trusted partner for government contractors and road builders",
  "Commitment to quality, reliability, and customer service",
  "Operational excellence across all project scales"
];

export default function Overview() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <m.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ willChange: "transform, opacity" }}
        >
          <h3 className="text-[#081e3a] font-bold tracking-wider text-sm mb-2 uppercase">Company Overview</h3>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-slate-800">
            BUILDING INDIA&apos;S INFRASTRUCTURE WITH RELIABILITY & QUALITY
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Akshaya Infra is a leading bulk bitumen supplier serving Class 1 government contractors and road construction companies across India, dedicated to supporting the nation&apos;s infrastructure development.
          </p>
          
          <ul className="space-y-4">
            {bulletPoints.map((point, index) => (
              <m.li 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                style={{ willChange: "transform, opacity" }}
                className="flex items-start gap-3 text-slate-700"
              >
                <CheckCircle2 className="w-6 h-6 text-[#081e3a] shrink-0" />
                <span>{point}</span>
              </m.li>
            ))}
          </ul>
        </m.div>
        
        <m.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.6 }}
           style={{ willChange: "transform, opacity" }}
           className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl transform-gpu"
        >
            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                [Insert Overview Image Here]
            </div>
        </m.div>
      </div>
    </section>
  );
}
