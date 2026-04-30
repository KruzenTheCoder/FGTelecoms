import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Fine Golding (FG) Telecoms',
  description: 'Explore our comprehensive suite of enterprise solutions including Business Internet, Secure Telephony, Office Automation, Solar Solutions, and Business Insurance.',
  openGraph: {
    title: 'Enterprise Solutions | FG Telecoms',
    description: 'We provide 98% internet coverage across SA, robust PBX systems, managed printing, and uninterrupted solar power.',
    url: 'https://finegolding.com/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}