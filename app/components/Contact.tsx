"use client";
import { m } from 'framer-motion';
import { MapPin, Phone, Mail, User } from 'lucide-react';

export default function Contact() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <m.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Ready to Partner with You</h2>
          <p className="text-slate-400 mb-8">Contact us today for premium bitumen solutions and technical consultation.</p>
          
          <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-wide">AKSHAYA INFRA</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-slate-500 shrink-0" />
              <p>#84/5, D.V.G Road, Basavanagudi,<br />Bengaluru - 560004, India</p>
            </div>
            <div className="flex items-center gap-4">
              <User className="w-6 h-6 text-slate-500 shrink-0" />
              <p>Proprietor: Arjun B G Rao</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-slate-500 shrink-0" />
              <p>+91 9108169453 | +91 9606379772</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-slate-500 shrink-0" />
              <a href="mailto:Akshayainfra33@gmail.com" className="hover:text-white transition-colors">
                Akshayainfra33@gmail.com
              </a>
            </div>
          </div>
        </m.div>
        
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ willChange: "transform, opacity" }}
          className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center transform-gpu"
        >
           <h4 className="text-white text-xl font-semibold mb-4">Request a Quote</h4>
           <p className="text-sm text-slate-400 mb-6">Get in touch with our technical experts for optimal solutions for your infrastructure projects.</p>
           <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors">
             Contact Sales Team
           </button>
        </m.div>
      </div>
    </footer>
  );
}