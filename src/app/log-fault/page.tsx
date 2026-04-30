'use client';

import { motion } from 'framer-motion';
import FaultForm from '@/components/FaultForm';
import { TypeAnimation } from 'react-type-animation';

export default function LogFaultPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="relative overflow-hidden pt-24 pb-16 bg-slate-50">
        {/* Background Graphic */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 z-10" />
          <img
            src="/HeroOtherPagesFG.png"
            alt="Background pattern"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 relative">
            <TypeAnimation
              sequence={[
                'Log a Fault',
                2000,
                'Get Support',
                2000,
                'We Are Here To Help',
                2000,
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 block"
            />
            <p className="text-lg text-slate-600">
              Experiencing an issue? Log a ticket below and our support team will assist you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 pt-8 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <FaultForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
