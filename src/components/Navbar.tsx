'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Log a Fault', href: '/log-fault' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/FGTelecoms.png" 
            alt="Fine Golding Logo" 
            width={200} 
            height={60} 
            className="h-16 w-auto object-contain scale-110" 
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-sm ${isActive ? 'text-sky-600' : 'text-slate-600 hover:text-sky-600'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-sky-600 transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact" className={buttonVariants({ className: "bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full px-6" })}>
            Get In Touch
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="text-slate-900" />}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-6 pt-10">
              <nav className="flex flex-col gap-4">
                {links.map((link) => {
                  const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-sm ${isActive ? 'text-sky-600' : 'text-slate-900 hover:text-sky-600'}`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
              <Link href="/contact" className={buttonVariants({ className: "w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold mt-4 rounded-full" })}>
                Get In Touch
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
