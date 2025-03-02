
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black bg-opacity-95 backdrop-blur-sm border-b border-rebel-secondary">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight animate-fade-in">
              <span className="text-white">Rebel</span>
              <span className="text-rebel-accent">Web</span>
            </span>
          </Link>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="animated-link text-rebel-text hover:text-rebel-accent">
              Home
            </Link>
            <Link to="/about" className="animated-link text-rebel-text hover:text-rebel-accent">
              About
            </Link>
            <Link to="/services" className="animated-link text-rebel-text hover:text-rebel-accent">
              Services
            </Link>
            <Link to="/contact" className="animated-link text-rebel-text hover:text-rebel-accent">
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 animate-slide-in">
            <div className="flex flex-col space-y-4 py-4">
              <Link
                to="/"
                className="text-rebel-text hover:text-rebel-accent px-4 py-2 rounded-md hover:bg-rebel-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-rebel-text hover:text-rebel-accent px-4 py-2 rounded-md hover:bg-rebel-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-rebel-text hover:text-rebel-accent px-4 py-2 rounded-md hover:bg-rebel-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-rebel-text hover:text-rebel-accent px-4 py-2 rounded-md hover:bg-rebel-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
