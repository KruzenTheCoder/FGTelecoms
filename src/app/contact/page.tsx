'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Building } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { TypeAnimation } from 'react-type-animation';

export default function ContactPage() {
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
                'Contact Us',
                2000,
                'Let\'s Connect',
                2000,
                'Reach Out Today',
                2000,
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 block"
            />
            <p className="text-lg text-slate-600">
              Ready to upgrade your enterprise solutions? Get in touch with our experts today.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 pt-8 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side: Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-slate-950 text-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Building className="h-6 w-6 text-sky-400" /> Durban Head Office
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="bg-slate-800 p-2.5 rounded-full shrink-0">
                    <MapPin className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 mt-1 text-sm">10 Flanders Drive Mount Edgecombe,<br/>Durban, 4300</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-slate-800 p-2.5 rounded-full shrink-0">
                    <Phone className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 mt-1 text-sm">031 943 1338</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-slate-800 p-2.5 rounded-full shrink-0">
                    <Mail className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 mt-1 text-sm">info@finegolding.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Building className="h-6 w-6 text-sky-400" /> Pietermaritzburg Office
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="bg-slate-800 p-2.5 rounded-full shrink-0">
                    <MapPin className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 mt-1 text-sm">103 Roberts Road,<br/>Pietermaritzburg, 3201</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-slate-800 p-2.5 rounded-full shrink-0">
                    <Phone className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 mt-1 text-sm">033 940 5200</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-slate-800 p-2.5 rounded-full shrink-0">
                    <Mail className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 mt-1 text-sm">accounts@finegolding.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Building className="h-6 w-6 text-sky-400" /> Johannesburg Office
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="bg-slate-800 p-2.5 rounded-full shrink-0">
                    <MapPin className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 mt-1 text-sm">Homestead Road,<br/>Johannesburg, Gauteng, 2090</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-slate-800 p-2.5 rounded-full shrink-0">
                    <Mail className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 mt-1 text-sm">info@finegolding.com</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 rounded-3xl h-64 w-full flex items-center justify-center border border-slate-300 shadow-inner overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] opacity-50 object-cover bg-center"></div>
              <div className="relative z-10 flex flex-col items-center bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                <MapPin className="h-8 w-8 text-sky-500 mb-2" />
                <span className="font-semibold text-slate-900">Google Maps Integration</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Lead Generation Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
      </section>
    </div>
  );
}
