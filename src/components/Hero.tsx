'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Wifi, ShieldCheck, PhoneCall, Printer, Briefcase, ArrowRight, Sun } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';

const heroHeadlines = [
  'How can we make your business connect better today?',
  'Ready to scale your enterprise infrastructure?',
  'Let\'s build a secure network for your future.',
];

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/services?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/services');
    }
  };

  const handlePillClick = (pill: string) => {
    router.push(`/services?q=${encodeURIComponent(pill)}`);
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white pt-20 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-70 flex items-center justify-center lg:justify-end pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <img
          src="/HeroBackgroundFG.jpeg"
          alt="Abstract connected globe background"
          className="w-full lg:w-2/3 h-full object-cover object-right"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
            >
              Hey there!{' '}
              <motion.span
                className="inline-block origin-bottom-right"
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              >
                👋
              </motion.span>{' '}
              We're Fine Golding (FG) (Telecoms).{' '}
              <TypeAnimation
                sequence={[
                  'How can we make your business connect better today?',
                  2000,
                  'Ready to scale your enterprise infrastructure?',
                  2000,
                  "Let's build a secure network for your future.",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-sky-600 block mt-2"
              />
            </motion.h1>

            {/* Search / Pills Area */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-full max-w-xl space-y-4"
            >
              <form onSubmit={handleSearch} className="relative flex items-center">
                <div className="absolute left-4 text-slate-400">
                  <Search className="h-5 w-5" />
                </div>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tell us what you're looking for..." 
                  className="w-full pl-12 pr-14 py-4 rounded-full bg-slate-100/80 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all shadow-sm"
                />
                <button 
                  type="submit" 
                  className="absolute right-2 bg-sky-600 text-white p-2.5 rounded-full hover:bg-sky-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                  aria-label="Search"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
              <div className="flex flex-wrap gap-2">
                {['Fast Internet', 'New Phone System', 'Secure Network', 'Office Solutions'].map((pill) => (
                  <button 
                    key={pill} 
                    onClick={() => handlePillClick(pill)}
                    type="button"
                    className="px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold cursor-pointer hover:bg-sky-100 transition-colors border border-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    {pill}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-slate-600 max-w-2xl font-medium"
            >
              We provide the absolute lifeline of any business: Exceptional Voice Quality and Secure, Scalable Connectivity.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto"
            >
              <Link href="/contact" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm uppercase tracking-wide h-14 px-8 rounded-full shadow-lg shadow-sky-600/20" })}>
                Get Connected Today
              </Link>
              <Link href="/services" className={buttonVariants({ size: "lg", variant: "outline", className: "w-full sm:w-auto text-sky-700 border-sky-200 hover:bg-sky-50 hover:text-sky-800 font-bold text-sm uppercase tracking-wide h-14 px-8 bg-white rounded-full shadow-sm" })}>
                View Our Solutions
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Floating Hexagons / Cards */}
          <div className="lg:col-span-5 relative h-[400px] lg:h-[600px] hidden md:block">
            {/* Top Left */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute top-12 left-0 lg:-left-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100 w-64 flex flex-col items-center text-center transform -rotate-2 hover:rotate-0 transition-transform z-10"
            >
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mb-3">
                <Wifi className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Business Internet</h3>
              <p className="text-xs text-slate-500 mb-2">98% coverage across SA.</p>
              <Link href="/services" className="text-sky-600 text-sm font-semibold hover:underline">Learn More &rarr;</Link>
            </motion.div>

            {/* Middle Right */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute top-[20%] -right-8 lg:-right-16 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100 w-64 flex flex-col items-center text-center transform rotate-3 hover:rotate-0 transition-transform z-20"
            >
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mb-3">
                <PhoneCall className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Secure Telephony</h3>
              <p className="text-xs text-slate-500 mb-2">Communications for SMEs.</p>
              <Link href="/services" className="text-sky-600 text-sm font-semibold hover:underline">Learn More &rarr;</Link>
            </motion.div>

            {/* Bottom Left (Moved more left) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="absolute bottom-32 -left-12 lg:-left-24 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100 w-64 flex flex-col items-center text-center transform -rotate-3 hover:rotate-0 transition-transform z-30"
            >
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mb-3">
                <Printer className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Office Automation</h3>
              <p className="text-xs text-slate-500 mb-2">Authorized Toshiba reseller.</p>
              <Link href="/services" className="text-sky-600 text-sm font-semibold hover:underline">Learn More &rarr;</Link>
            </motion.div>

            {/* Bottom Right (New Card) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="absolute bottom-24 right-0 lg:right-4 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100 w-64 flex flex-col items-center text-center transform rotate-2 hover:rotate-0 transition-transform z-40"
            >
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mb-3">
                <Sun className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Solar Solutions</h3>
              <p className="text-xs text-slate-500 mb-2">Beat loadshedding permanently.</p>
              <Link href="/services" className="text-sky-600 text-sm font-semibold hover:underline">Learn More &rarr;</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
