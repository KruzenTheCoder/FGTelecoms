import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Toaster } from '@/components/ui/sonner';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fine Golding (FG) Telecoms | Premium Enterprise Solutions',
  description: 'South African enterprise solutions provider specializing in Telecommunications, Office Automation, Connectivity, Solar, and Insurance. We partner with the best to elevate your business.',
  keywords: ['FG Telecoms', 'Fine Golding', 'Telecommunications South Africa', 'Office Automation', 'Business Internet', 'VoIP', 'PBX', 'Solar Solutions', 'Business Insurance', 'Toshiba Reseller'],
  authors: [{ name: 'Fine Golding Holdings' }],
  creator: 'FG Group',
  publisher: 'Fine Golding (FG) Telecoms',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Fine Golding (FG) Telecoms | Premium Enterprise Solutions',
    description: 'South African enterprise solutions provider specializing in Telecommunications, Office Automation, Connectivity, Solar, and Insurance.',
    url: 'https://finegolding.com',
    siteName: 'Fine Golding Telecoms',
    images: [
      {
        url: '/FGTelecoms.png',
        width: 800,
        height: 600,
        alt: 'Fine Golding Telecoms Logo',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth antialiased h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans text-slate-900 bg-slate-50" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
