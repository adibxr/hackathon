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
    { href: '/#task', text: 'Task' },
    { href: '/#prizes', text: 'Prizes' },
    { href: '/#timeline', text: 'Timeline' },
    { href: '/#collaborators', text: 'Collaborators' },
    { href: '/rules', text: 'Rules' },
  ];

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-5xl">
      <div className={cn(
        "transition-all duration-300 rounded-full border-border shadow-md",
        isScrolled ? "bg-background/80 backdrop-blur-lg border" : "bg-background border",
      )}>
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <FireboltIcon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
          </Link>
          <nav className="hidden md:flex items-center gap-4 bg-secondary/50 rounded-full px-4 py-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-headline uppercase tracking-wider font-medium text-foreground/70 hover:text-primary transition-colors px-3 py-1 rounded-full hover:bg-background/50">
                {link.text}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="hidden md:flex rounded-full transition-transform duration-300 hover:scale-110 font-bold mx-2">
              <Link href="/register">
                JOIN NOW !
              </Link>
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
                  </Link>
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="font-headline uppercase tracking-wider font-medium text-lg text-foreground/80 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      {link.text}
                    </Link>
                  ))}
                  <Button asChild size="lg" className="mt-6" onClick={() => setIsMobileMenuOpen(false)}>
                     <Link href="/register">
                       JOIN NOW !
                     </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
