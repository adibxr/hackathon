
'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { LogoIcon } from './icons';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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

  const mobileNavLinks = [
    { href: '/#prizes', text: 'Prizes' },
    { href: '/rules', text: 'Rules' },
  ]

  const NavLinksComponent = ({ links, inSheet }: { links: typeof navLinks, inSheet?: boolean }) => (
    <nav className={cn(
        "flex items-center gap-1 rounded-full px-2 py-2 ml-4 transition-all duration-300",
        isScrolled && !inSheet ? "bg-secondary/50" : "bg-transparent",
        inSheet && "flex-col w-full"
      )}>
        {links.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            className={cn(
              "font-headline uppercase tracking-wider font-medium text-foreground/70 hover:text-primary transition-colors px-3 py-1 rounded-full hover:bg-background/50",
              inSheet ? "w-full text-center text-lg py-3" : "text-sm"
            )}
            onClick={() => inSheet && setIsMobileMenuOpen(false)}
          >
            {link.text}
          </Link>
        ))}
      </nav>
  );

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-5xl">
      <div className={cn(
        "transition-all duration-300 rounded-full border-border",
        isScrolled ? "bg-background/80 shadow-md backdrop-blur-lg border" : "bg-transparent border-transparent"
      )}>
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <LogoIcon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
          </Link>
          {isMobile ? (
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col items-center justify-center h-full">
                  <NavLinksComponent links={navLinks} inSheet />
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <NavLinksComponent links={navLinks} />
          )}
          <div className="hidden sm:flex items-center">
            <Button asChild className="rounded-full transition-transform duration-300 hover:scale-110 font-bold ml-4 text-base px-4">
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
