import React from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-background/95 fixed top-4 right-4 z-50 max-w-fit border-b rounded-2xl backdrop-blur supports-[backdrop-filter]:bg-background/60 p-2">
      <div className="flex h-10 items-center justify-end">
        {/* Desktop Navigation - Right aligned, hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium px-4"> {/* Increased space-x */}
          <a href="#home" className="hover:bg-secondary/50 hover:border-primary/50 transition-all rounded-md px-3 py-1">Home</a>
          <a href="#skills" className="hover:bg-secondary/50 hover:border-primary/50 transition-all rounded-md px-3 py-1">Skills</a>
          <a href="#projects" className="hover:bg-secondary/50 hover:border-primary/50 transition-all rounded-md px-3 py-1">Projects</a>
          <a href="#experience" className="hover:bg-secondary/50 hover:border-primary/50 transition-all rounded-md px-3 py-1">Experience</a>
          <a href="#education" className="hover:bg-secondary/50 hover:border-primary/50 transition-all rounded-md px-3 py-1">Education</a>
          <a href="#contact" className="hover:bg-secondary/50 hover:border-primary/50 transition-all rounded-md px-3 py-1">Contact</a>
        </nav>

        {/* Mobile Navigation - Hamburger menu, visible on mobile */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-6 py-6"> {/* Increased space-y */}
              <SheetClose asChild>
                <a href="#home" className="text-lg font-medium hover:bg-secondary/50 hover:border-primary/50 transition-all rounded-md px-3 py-1">Home</a>
              </SheetClose>
              <SheetClose asChild>
                <a href="#skills" className="text-lg font-medium hover:bg-secondary/50 hover:border-primary/50 transition-all rounded-md px-3 py-1">Skills</a>
              </SheetClose>
              <SheetClose asChild>
                <a href="#projects" className="text-lg font-medium hover:bg-secondary/50 hover:border-primary/50 transition-all rounded-md px-3 py-1">Projects</a>
              </SheetClose>
              <SheetClose asChild>
                <a href="#experience" className="text-lg font-medium hover:bg-secondary/50 hover:border-primary/50 transition-all rounded-md px-3 py-1">Experience</a>
              </SheetClose>
              <SheetClose asChild>
                <a href="#education" className="text-lg font-medium hover:bg-secondary/50 hover:border-primary/50 transition-all rounded-md px-3 py-1">Education</a>
              </SheetClose>
              <SheetClose asChild>
                <a href="#contact" className="text-lg font-medium hover:bg-secondary/50 hover:border-primary/50 transition-all rounded-md px-3 py-1">Contact</a>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
