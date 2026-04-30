'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wifi, ShieldCheck, PhoneCall, Printer, Sun, Briefcase, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Business Internet',
    description: 'Fast Transfers to Business Internet. 98% coverage across South Africa.',
    icon: Wifi,
    href: '/services#connectivity',
  },
  {
    title: 'Network Security',
    description: 'Secure your business with our top-of-the-range firewall solutions.',
    icon: ShieldCheck,
    href: '/services#connectivity',
  },
  {
    title: 'Secure Telephony',
    description: 'Communications solutions designed specifically for SMEs & Large Companies.',
    icon: PhoneCall,
    href: '/services#telecommunications',
  },
  {
    title: 'Office Automation',
    description: 'Authorized Toshiba reseller. Partnered with the best in the business for print and communications.',
    icon: Printer,
    href: '/services#office-automation',
  },
  {
    title: 'Solar Solutions',
    description: 'Uninterrupted power. Keep your business running through loadshedding.',
    icon: Sun,
    href: '/services#solar',
  },
  {
    title: 'Business Insurance',
    description: 'Comprehensive coverage to protect your technological and physical assets.',
    icon: Briefcase,
    href: '/services#insure',
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Enterprise Solutions Designed to Scale
          </h2>
          <p className="text-lg text-slate-600">
            We provide comprehensive, integrated solutions tailored to your business needs, ensuring maximum uptime and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={service.href} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 rounded-xl">
                <Card className="h-full border-transparent bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-sky-500/20 transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-slate-100 text-sky-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-sky-50 transition-all duration-300">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-slate-600">
                      {service.description}
                    </CardDescription>
                    <div className="mt-6 flex items-center text-sm font-semibold text-sky-600 group-hover:text-sky-700">
                      Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
