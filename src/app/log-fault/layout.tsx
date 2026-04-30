import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Log a Fault | Fine Golding (FG) Telecoms',
  description: 'Experiencing an issue with your network, PBX, or automation hardware? Log a ticket with our 24/7 support team for immediate resolution.',
  openGraph: {
    title: 'Support & Fault Logging | FG Telecoms',
    description: 'Quickly report any issues and get prompt support from our dedicated technical team.',
    url: 'https://finegolding.com/log-fault',
  },
};

export default function LogFaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}