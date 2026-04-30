import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 py-12 md:py-16 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand/About snippet */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-6 w-fit">
              <Image 
                src="/FGTelecoms.png" 
                alt="FG Telecoms Logo" 
                width={200} 
                height={60} 
                className="h-16 w-auto object-contain scale-110 origin-left" 
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              Premium enterprise solutions provider specializing in Telecommunications, Office Automation, Connectivity, Solar, and Insurance. Partner with the best to elevate your business.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-sky-600 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/log-fault" className="text-sm text-slate-600 hover:text-sky-600 transition-colors font-medium">
                  Log a Fault
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm text-slate-600 hover:text-sky-600 transition-colors font-medium">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-slate-600 hover:text-sky-600 transition-colors font-medium">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Contact Info</h3>
            <div className="space-y-4 text-sm font-medium text-slate-600">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">10 Flanders Drive Mount Edgecombe,<br/>Durban, 4300</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                  <span>031 943 1338</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                  <span>info@finegolding.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Fine Golding. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-sky-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-sky-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
