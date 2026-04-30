'use client';

import { useState, useEffect } from 'react';

function Counter({ end, suffix = '', label }: { end: number, suffix?: string, label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-sky-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-sm text-slate-500 font-bold tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-12 bg-white relative z-10 border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          <Counter end={98} suffix="%" label="Internet Coverage" />
          <Counter end={10} suffix="+" label="Years Experience" />
          <Counter end={24} suffix="/7" label="Support Available" />
        </div>
      </div>
    </section>
  );
}
