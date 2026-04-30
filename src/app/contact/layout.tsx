import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Fine Golding (FG) Telecoms',
  description: 'Get in touch with FG Telecoms today. Offices in Durban, Pietermaritzburg, and Johannesburg to support all your enterprise connectivity and telecommunications needs.',
  openGraph: {
    title: 'Contact Fine Golding Telecoms',
    description: 'Reach out to our expert team for robust business internet, secure telephony, and reliable office automation.',
    url: 'https://finegolding.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}