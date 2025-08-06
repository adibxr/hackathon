
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navLinks = [
    { href: '/#task', text: 'Task' },
    { href: '/#prizes', text: 'Prizes' },
    { href: '/rules', text: 'Rules' },
  ];

  const NavLinksComponent = ({ links, inSheet }: { links: typeof navLinks, inSheet?: boolean }) => (
    <nav className={cn(
        "flex items-center gap-1",
        inSheet && "flex-col w-full mt-8"
      )}>
        {links.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            className={cn(
              "font-headline uppercase tracking-wider font-medium text-foreground/70 hover:text-primary transition-colors px-3 py-1 rounded-full hover:bg-white/10",
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
    <header className="sticky top-0 z-50 p-4">
       <div className="bg-black/30 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <LogoIcon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
          </Link>
          
          <div className="hidden md:flex items-center">
            <NavLinksComponent links={navLinks} />
            <Button asChild className="rounded-full transition-transform duration-300 hover:scale-110 font-bold ml-4 text-base px-6">
              <Link href="/register">
                JOIN NOW!
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/80 backdrop-blur-xl border-l border-white/10">
                <div className="flex flex-col items-center justify-center h-full">
                  <NavLinksComponent links={navLinks} inSheet />
                   <Button asChild className="rounded-full transition-transform duration-300 hover:scale-110 font-bold mt-8 text-lg px-8 py-6">
                    <Link href="/register">
                      JOIN NOW!
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
