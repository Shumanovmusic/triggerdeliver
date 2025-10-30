import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = ({ onOpenLeadForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'Product', 'Customers', 'Learn', 'Contact'];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-2xl font-bold text-gray-900">TriggerDeliver</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    index === 0 ? 'text-blue-600' : 'text-gray-600'
                  } relative group`}
                >
                  {item}
                  {index === 0 && (
                    <div className="absolute -bottom-[20px] left-0 right-0 h-[3px] bg-blue-600"></div>
                  )}
                  <div className="absolute -bottom-[20px] left-0 right-0 h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                onClick={onOpenLeadForm}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
              >
                Start free trial
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 lg:hidden">
          <nav className="flex flex-col items-center gap-6 p-6">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`text-lg font-medium ${
                  index === 0 ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col gap-4 w-full mt-6">
              <Button
                onClick={onOpenLeadForm}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full rounded-full"
              >
                Start free trial
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;