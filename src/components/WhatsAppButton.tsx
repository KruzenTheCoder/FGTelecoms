'use client';

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/27319431338"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba56] hover:scale-110 transition-all duration-300"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  );
}