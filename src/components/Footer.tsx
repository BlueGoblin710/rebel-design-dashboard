
import React from 'react';
import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rebel-secondary py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Rebel Web Designs</h3>
            <p className="text-rebel-muted mb-4">
              Creating stunning web and graphic designs that stand out from the crowd.
            </p>
          </div>

          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="animated-link text-rebel-muted hover:text-rebel-accent">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="animated-link text-rebel-muted hover:text-rebel-accent">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="animated-link text-rebel-muted hover:text-rebel-accent">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="animated-link text-rebel-muted hover:text-rebel-accent">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-scale text-rebel-muted hover:text-rebel-accent"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-scale text-rebel-muted hover:text-rebel-accent"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-scale text-rebel-muted hover:text-rebel-accent"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-scale text-rebel-muted hover:text-rebel-accent"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-rebel-muted mt-8 pt-8 text-center text-rebel-muted text-sm">
          <p>&copy; {new Date().getFullYear()} Rebel Web Designs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
