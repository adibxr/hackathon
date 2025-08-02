'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { FireboltIcon } from './icons';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <FireboltIcon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
          <span className="font-headline text-2xl font-bold tracking-tight">Cyber Crackdown</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#themes" className="font-medium text-foreground/70 hover:text-primary transition-colors">
            Themes
          </Link>
          <Link href="/#prizes" className="font-medium text-foreground/70 hover:text-primary transition-colors">
            Prizes
          </Link>
          <Link href="/#collaborators" className="font-medium text-foreground/70 hover:text-primary transition-colors">
            Collaborators
          </Link>
          <Link href="/rules" className="font-medium text-foreground/70 hover:text-primary transition-colors">
            Rules
          </Link>
        </nav>
        <Button asChild className="hidden md:flex transition-transform duration-300 hover:scale-105">
          <Link href="/register">Register Now</Link>
        </Button>
      </div>
    </header>
  );
}
