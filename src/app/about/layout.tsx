import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Fine Golding (FG) Telecoms',
  description: 'Learn about FG Golding Holdings, a premier South African enterprise solutions provider specializing in Telecommunications, Office Automation, Connectivity, Solar, and Insurance.',
  openGraph: {
    title: 'About Us | Fine Golding Telecoms',
    description: 'Discover our vision, mission, and the expert team behind our leading-edge business communication solutions.',
    url: 'https://finegolding.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}