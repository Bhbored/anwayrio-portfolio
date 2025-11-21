import React from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import { Menu } from 'lucide-react';
import { scrollToSection } from '@/utils/scroll';

const Header: React.FC = () => {
  return (
    <header className="bg-background/70 backdrop-blur-lg border border-border rounded-[20px] px-4 py-2.5 fixed top-4 right-4 z-50">
      <div className="flex items-center justify-between">
        {/* Logo/Brand Name - Optional */}
        <div className="font-mono text-sm font-bold text-primary hidden md:block">
          &lt;AE /&gt;
        </div>

        {/* Desktop Navigation - Right aligned, hidden on mobile */}
        <nav className="flex items-center space-x-1">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="group px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-secondary/50 hover:text-primary hover:card-glow relative"
          >
            <span className="relative z-10">Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('skills');
            }}
            className="group px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-secondary/50 hover:text-primary hover:card-glow relative"
          >
            <span className="relative z-10">Skills</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            className="group px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-secondary/50 hover:text-primary hover:card-glow relative"
          >
            <span className="relative z-10">Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </a>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('experience');
            }}
            className="group px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-secondary/50 hover:text-primary hover:card-glow relative"
          >
            <span className="relative z-10">Experience</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </a>
          <a
            href="#education"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('education');
            }}
            className="group px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-secondary/50 hover:text-primary hover:card-glow relative"
          >
            <span className="relative z-10">Education</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="group px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-secondary/50 hover:text-primary hover:card-glow relative"
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </a>
        </nav>

        {/* Mobile Navigation - Hamburger menu, visible on mobile */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background/90 backdrop-blur-lg">
            <div className="flex flex-col space-y-2 py-6">
              <SheetClose asChild>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                  className="group text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-secondary/50 hover:text-primary hover:card-glow relative"
                >
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('skills');
                  }}
                  className="group text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-secondary/50 hover:text-primary hover:card-glow relative"
                >
                  <span className="relative z-10">Skills</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                  className="group text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-secondary/50 hover:text-primary hover:card-glow relative"
                >
                  <span className="relative z-10">Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  href="#experience"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('experience');
                  }}
                  className="group text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-secondary/50 hover:text-primary hover:card-glow relative"
                >
                  <span className="relative z-10">Experience</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  href="#education"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('education');
                  }}
                  className="group text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-secondary/50 hover:text-primary hover:card-glow relative"
                >
                  <span className="relative z-10">Education</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="group text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-secondary/50 hover:text-primary hover:card-glow relative"
                >
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
