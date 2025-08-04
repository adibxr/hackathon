
'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { LogoIcon } from './icons';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#task', text: 'Task' },
    { href: '/#prizes', text: 'Prizes' },
    { href: '/#timeline', text: 'Timeline' },
    { href: '/#collaborators', text: 'Collaborators' },
    { href: '/rules', text: 'Rules' },
  ];

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-5xl">
      <div className={cn(
        "transition-all duration-300 rounded-full border-border shadow-md backdrop-blur-lg border",
        "bg-background/80"
      )}>
        <div className="container mx-auto px-2 sm:px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <LogoIcon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
          </Link>
          <nav className="flex items-center gap-1 bg-secondary/50 rounded-full px-2 py-2 ml-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-headline uppercase tracking-wider font-medium text-foreground/70 hover:text-primary transition-colors px-2 sm:px-3 py-1 rounded-full hover:bg-background/50 text-xs sm:text-sm">
                {link.text}
              </Link>
            ))}
          </nav>
          <div className="flex items-center">
            <Button asChild className="rounded-full transition-transform duration-300 hover:scale-110 font-bold ml-2 sm:ml-4 text-xs sm:text-base px-3 sm:px-4">
              <Link href="/register">
                JOIN NOW !
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
