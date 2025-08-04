'use client';

import { LogoIcon } from './icons';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (!year) {
    return null;
  }

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <LogoIcon className="h-6 w-6 text-primary" />
          <p className="text-sm font-semibold">Cyber Crackdown</p>
        </div>
        <p className="text-sm text-foreground/60 mt-4 sm:mt-0">
          © {year} Cyber Crackdown. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
