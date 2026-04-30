'use client';

import { motion } from 'framer-motion';
import { Building, Users, Target, ShieldCheck, Trophy, ArrowRight, Eye, Handshake } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 bg-slate-50 border-b border-slate-100">
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
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight min-h-[140px] md:min-h-0 relative"
            >
              <TypeAnimation
                sequence={[
                  'Your Partner in Connectivity',
                  2000,
                  'Your Partner in Growth',
                  2000,
                  'Your Partner in Security',
                  2000,
                  'Your Partner in Innovation',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-sky-600 block"
              />
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed"
            >
              At Fine Golding (Telecoms), we provide the absolute lifeline of any business: Exceptional Voice Quality and Secure, Scalable Connectivity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                About FG Telecoms
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                FG Golding Holdings, (FG Group) is the holding company for FG Mobile, FG Telecoms & FG Copiers. The FG Group's directors and shareholders offer a wealth of experience in telecommunications and print solutions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We have a sound proven track record of tailor-made communication solutions designed for the SME as well as large corporates and offer excellent customer service. FG Telecoms, a leading VOIP provider that prides itself in the quality and stability of its network. Within the sector we offer tailor made Wi-Fi solutions with 98% Internet coverage around South Africa.
              </p>
              
              <div className="pt-4">
                <Link href="/contact" className={buttonVariants({ size: "lg", className: "bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-full px-8" })}>
                  Work With Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="grid grid-cols-1 gap-6"
            >
              {/* Feature Cards */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  We strive to give our clients a competitive edge in their respective industries. Through the provision of market-leading communication products, we are dedicated to enhancing their customer service levels, improvising their workplace efficiency and increasing their productivity levels.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To provide a leading edge one stop solution for all business communication needs, backed up by a team which is passionately committed to providing an outstanding customer service.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-16 h-16 bg-white shadow-sm border border-slate-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Handshake className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Partners</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              FG Telecoms has worked to establish strong, supportive partnerships with the most innovative and most trusted vendors in the International Market.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-[100vw] overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 md:before:w-32 before:bg-gradient-to-r before:from-slate-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-10 md:after:w-32 after:bg-gradient-to-l after:from-slate-50 after:to-transparent">
          <div className="flex w-max animate-marquee space-x-6 py-4">
            {/* First Set */}
            <div className="flex space-x-6">
              {[
                'MTN', 'Vodacom', 'Telkom', 'Panasonic', 'Yealink', 'Liquid Telecom', 
                '3CX', 'Cisco', 'Samsung', 'The Rental Company', 'ECN', 'Custom Capital'
              ].map((partner) => (
                <div
                  key={`first-${partner}`}
                  className="flex-shrink-0 bg-white rounded-2xl px-6 py-4 shadow-sm border border-slate-100 flex items-center justify-center h-24 w-[180px] md:w-[220px] hover:shadow-md transition-shadow text-center"
                >
                  <span className="font-bold text-slate-700 text-sm md:text-base">{partner}</span>
                </div>
              ))}
            </div>
            
            {/* Duplicate Set for Infinite Scroll */}
            <div className="flex space-x-6 pr-6">
              {[
                'MTN', 'Vodacom', 'Telkom', 'Panasonic', 'Yealink', 'Liquid Telecom', 
                '3CX', 'Cisco', 'Samsung', 'The Rental Company', 'ECN', 'Custom Capital'
              ].map((partner) => (
                <div
                  key={`second-${partner}`}
                  className="flex-shrink-0 bg-white rounded-2xl px-6 py-4 shadow-sm border border-slate-100 flex items-center justify-center h-24 w-[180px] md:w-[220px] hover:shadow-md transition-shadow text-center"
                >
                  <span className="font-bold text-slate-700 text-sm md:text-base">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
