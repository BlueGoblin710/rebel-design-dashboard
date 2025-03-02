
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { SignInButton, SignUpButton, UserButton, useAuth } from '@clerk/clerk-react';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const { totalItems } = useCart();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-black sticky top-0 z-10 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-white flex items-center">
            <span className="text-rebel-accent mr-1">Rebel</span> Web Designs
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-white hover:text-rebel-accent transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-rebel-accent transition-colors">
              About
            </Link>
            <Link to="/services" className="text-white hover:text-rebel-accent transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-white hover:text-rebel-accent transition-colors">
              Contact
            </Link>

            {/* Cart Icon with Item Count */}
            <Link to="/cart" className="relative">
              <Button variant="ghost" className="text-white hover:text-rebel-accent p-2">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rebel-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Auth Buttons */}
            {isSignedIn ? (
              <UserButton 
                appearance={{
                  elements: {
                    userButtonAvatarBox: 'h-8 w-8',
                  }
                }}
              />
            ) : (
              <div className="flex items-center space-x-2">
                <SignInButton mode="modal">
                  <Button variant="ghost" className="text-white hover:text-rebel-accent">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="bg-rebel-accent hover:bg-opacity-80">
                    Sign Up
                  </Button>
                </SignUpButton>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            {/* Cart Icon with Item Count */}
            <Link to="/cart" className="relative">
              <Button variant="ghost" className="text-white hover:text-rebel-accent p-2">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rebel-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Auth Icon - Shows user profile if signed in */}
            {isSignedIn ? (
              <UserButton 
                appearance={{
                  elements: {
                    userButtonAvatarBox: 'h-8 w-8',
                  }
                }}
              />
            ) : (
              <Link to="/sign-in">
                <Button variant="ghost" className="text-white p-2">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}
            
            <Button variant="ghost" className="text-white" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3">
            <Link 
              to="/" 
              className="block text-white py-2 hover:text-rebel-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block text-white py-2 hover:text-rebel-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block text-white py-2 hover:text-rebel-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="block text-white py-2 hover:text-rebel-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            {!isSignedIn && (
              <div className="flex flex-col space-y-2 pt-2 border-t border-rebel-muted">
                <SignInButton mode="modal">
                  <Button variant="ghost" className="text-white w-full justify-start hover:text-rebel-accent">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="bg-rebel-accent hover:bg-opacity-80 w-full justify-start">
                    Sign Up
                  </Button>
                </SignUpButton>
              </div>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
