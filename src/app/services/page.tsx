'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wifi, ShieldCheck, PhoneCall, Printer, Sun, Briefcase, CheckCircle2 } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const servicesData = [
  {
    id: 'connectivity',
    title: 'Connectivity & Security',
    icon: Wifi,
    content: 'We provide 98% coverage across South Africa with our Business Internet solutions. Protect your infrastructure with top-tier firewall and network security products.',
    features: [
      'High-speed Fibre & Wireless Internet',
      'Managed Firewalls & Network Security',
      'SD-WAN Solutions',
      'Failover & Redundancy Planning',
    ]
  },
  {
    id: 'telecommunications',
    title: 'Telecommunications',
    icon: PhoneCall,
    content: 'The lifeline of any business is a telephone. We ensure exceptional voice quality and reliable PBX solutions designed for both SMEs and Large Enterprises.',
    features: [
      'Cloud-hosted PBX Systems',
      'VoIP & SIP Trunking',
      'Call Center Solutions',
      'Mobile Integration & Softphones',
    ]
  },
  {
    id: 'office-automation',
    title: 'Office Automation',
    icon: Printer,
    content: 'As an authorized Toshiba reseller, we partner with the best in the business for print, document management, and communication hardware.',
    features: [
      'Multifunction Printers & Copiers',
      'Document Management Systems',
      'Managed Print Services',
      'Hardware Maintenance & Support',
    ]
  },
  {
    id: 'solar',
    title: 'Solar Solutions',
    icon: Sun,
    content: 'Don\'t let loadshedding get you down. Keep your business running smoothly with our commercial solar, inverter, and battery backup solutions.',
    features: [
      'Commercial Solar Installations',
      'High-Capacity Battery Backups',
      'Inverter Systems',
      'Energy Consumption Audits',
    ]
  },
  {
    id: 'insure',
    title: 'Business Insurance',
    icon: Briefcase,
    content: 'Comprehensive insurance coverage to protect your technological investments, physical assets, and business continuity.',
    features: [
      'Equipment & Hardware Insurance',
      'Cyber Liability Coverage',
      'Business Interruption Insurance',
      'Customized Risk Assessments',
    ]
  }
];

function ServicesContent() {
  const searchParams = useSearchParams();
  const [activeService, setActiveService] = useState(servicesData[0].id);

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      const lowerQ = q.toLowerCase();
      // Simple keyword matching to select the right tab
      if (lowerQ.includes('internet') || lowerQ.includes('network') || lowerQ.includes('wifi') || lowerQ.includes('fibre')) {
        setActiveService('connectivity');
      } else if (lowerQ.includes('phone') || lowerQ.includes('pbx') || lowerQ.includes('voice') || lowerQ.includes('voip')) {
        setActiveService('telecommunications');
      } else if (lowerQ.includes('office') || lowerQ.includes('print') || lowerQ.includes('copier')) {
        setActiveService('office-automation');
      } else if (lowerQ.includes('solar') || lowerQ.includes('power') || lowerQ.includes('inverter') || lowerQ.includes('backup')) {
        setActiveService('solar');
      } else if (lowerQ.includes('insure') || lowerQ.includes('insurance') || lowerQ.includes('liability')) {
        setActiveService('insure');
      }
    }
  }, [searchParams]);

  const activeContent = servicesData.find(s => s.id === activeService) || servicesData[0];

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
                'Our Enterprise Services',
                2000,
                'Explore Our Solutions',
                2000,
                'Empower Your Business',
                2000,
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 block"
            />
            <p className="text-lg text-slate-600">
              Discover our comprehensive suite of solutions designed to streamline your operations, secure your data, and power your growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 pt-8 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2 sticky top-28 h-fit">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`flex items-center gap-4 w-full text-left px-6 py-4 rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                  activeService === service.id
                    ? 'bg-white shadow-md border border-slate-100 text-sky-600'
                    : 'text-slate-600 hover:bg-white/50 hover:text-slate-900'
                }`}
              >
                <service.icon className={`h-6 w-6 ${activeService === service.id ? 'text-sky-600' : 'text-slate-400'}`} />
                <span className="font-semibold text-lg">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="w-full lg:w-2/3">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100"
            >
              <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-8">
                <activeContent.icon className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{activeContent.title}</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                {activeContent.content}
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-6">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {activeContent.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-sky-600 shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-slate-100 flex gap-4">
                <Link href="/contact" className={buttonVariants({ size: "lg", className: "bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full px-8 shadow-md" })}>
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-500">Loading services...</div>}>
      <ServicesContent />
    </Suspense>
  );
}
