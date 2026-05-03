// app/page.tsx
import Hero from './components/Hero';
import Overview from './components/Overview';
import VisionMission from './components/VisionMission';
// import Features from './components/Features';
// import Products from './components/Products';
// import Quality from './components/Quality';
// import Contact from './components/Contact';

export const metadata = {
  title: 'Akshaya Infra | Premium Bitumen & Emulsion Solutions',
  description: 'Leading bulk bitumen supplier serving Class 1 government contractors and road construction companies across India.',
  keywords: 'Bitumen supplier, VG-30, VG-40, RS-1 Emulsion, Road Infrastructure, India, Akshaya Infra',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Hero />
      <Overview />
      {/* <VisionMission /> */}
      {/* 
      <Features />
      <Products />
      <Quality />
      <Contact /> */}
    </main>
  );
}