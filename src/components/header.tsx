'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { FireboltIcon } from './icons';
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#themes', text: 'Themes' },
    { href: '/#prizes', text: 'Prizes' },
    { href: '/#collaborators', text: 'Collaborators' },
    { href: '/rules', text: 'Rules' },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent",
      isScrolled && "md:top-4 md:container md:mx-auto md:px-4 md:rounded-full"
    )}>
      <div className={cn(
        "container mx-auto px-4 h-20 flex items-center justify-between",
        isScrolled && "md:h-16"
      )}>
        <Link href="/" className="flex items-center gap-2 group">
          <FireboltIcon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
          <span className="font-headline text-2xl font-bold tracking-tight">Cyber Crackdown</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-medium text-foreground/70 hover:text-primary transition-colors">
              {link.text}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:flex transition-transform duration-300 hover:scale-105">
            <Link href="/register">Register Now</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 pt-10">
                <Link href="/" className="flex items-center gap-2 group mb-4" onClick={() => setIsMobileMenuOpen(false)}>
                  <FireboltIcon className="h-8 w-8 text-primary" />
                  <span className="font-headline text-2xl font-bold">Cyber Crackdown</span>
                </Link>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="font-medium text-lg text-foreground/80 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    {link.text}
                  </Link>
                ))}
                <Button asChild size="lg" className="mt-6" onClick={() => setIsMobileMenuOpen(false)}>
                   <Link href="/register">Register Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
