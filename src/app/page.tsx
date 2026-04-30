import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import StatsCounter from '@/components/StatsCounter';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesGrid />
      <StatsCounter />
    </div>
  );
}
