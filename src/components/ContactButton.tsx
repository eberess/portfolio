'use client';

import { Mail } from "lucide-react";

export const ContactButton = () => {
  return (
    <button 
      className="flex items-center gap-2 px-6 py-3 border border-foreground/20 rounded-full hover:bg-foreground/5 transition-colors"
      onClick={() => window.location.href = 'mailto:el.beressa@gmail.com'}
    >
      <Mail className="w-4 h-4" />
      Me contacter
    </button>
  );
}; 