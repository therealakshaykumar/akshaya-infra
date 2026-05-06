import dynamic from 'next/dynamic';
import Hero from './components/Hero';

// Lazy load components that are below the fold
const Overview = dynamic(() => import('./components/Overview'));
const VisionMission = dynamic(() => import('./components/VisionMission'));
const Features = dynamic(() => import('./components/Features'));
const Products = dynamic(() => import('./components/Products'));
const Quality = dynamic(() => import('./components/Quality'));
const Advantages = dynamic(() => import('./components/Advantages'));
const Footer = dynamic(() => import('./components/Footer'));

export const metadata = {
  title: 'Akshaya Infra | Premium Bitumen & Emulsion Solutions',
  description: 'Leading bulk bitumen supplier serving Class 1 government contractors and road construction companies across India.',
  keywords: 'Bitumen supplier, VG-30, VG-40, RS-1 Emulsion, Road Infrastructure, India, Akshaya Infra',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      <Overview />
      <VisionMission />
      <Features />
      <Products />
      <Quality />
      <Advantages />
      <Footer />
    </main>
  );
}