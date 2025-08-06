
'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { LogoIcon } from './icons';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/#task', text: '</TASK>' },
    { href: '/#prizes', text: '</PRIZES>' },
    { href: '/rules', text: '</RULES>' },
  ];

  const NavLinksComponent = ({ inSheet }: { inSheet?: boolean }) => (
    <nav className={cn(
        "flex items-center gap-2",
        inSheet && "flex-col w-full mt-8 gap-4"
      )}>
        {navLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            className={cn(
              "font-medium text-foreground/80 hover:text-primary transition-colors px-4 py-2 rounded-full",
              inSheet ? "w-full text-center text-lg" : "text-sm"
            )}
            onClick={() => inSheet && setIsMobileMenuOpen(false)}
          >
            {link.text}
          </Link>
        ))}
      </nav>
  );

  return (
    <header className="sticky top-4 z-50 px-4">
        <div className="container max-w-2xl mx-auto h-20 flex items-center justify-between bg-background/50 backdrop-blur-lg rounded-full border border-white/10 shadow-lg px-6">
          <Link href="/" className="flex items-center gap-2 group">
            <LogoIcon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
          </Link>
          
          <div className="hidden md:flex items-center">
            <NavLinksComponent />
          </div>

          <div className="hidden md:block">
             <Button asChild className="rounded-full transition-transform duration-300 hover:scale-110 font-bold text-base px-6">
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
              <SheetContent side="right" className="bg-background/90 backdrop-blur-xl">
                <div className="flex flex-col items-center justify-center h-full">
                  <NavLinksComponent inSheet />
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
    </header>
  );
}
