import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';

const CTASection = ({ onOpenLeadForm }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Activate Every Customer?
        </h2>
        <p className="text-xl text-blue-100">
          Build intelligent, personalised journeys that scale across every channel with TriggerDeliver.
        </p>
        <Button 
          onClick={onOpenLeadForm}
          className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg group"
        >
          Start free trial
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

const Footer = () => {
  const footerLinks = {
    Product: ['Real-Time CDP', 'AI Personalization', 'Omnichannel Messaging', 'Journeys & Automation', 'Analytics'],
    Solutions: ['Retail & Ecommerce', 'SaaS & Subscriptions', 'Media & Entertainment', 'Financial Services', 'Travel & Hospitality'],
    Resources: ['Blog', 'Case Studies', 'Webinars', 'Documentation', 'Help Center'],
    Company: ['About Us', 'Careers', 'Partners', 'Press', 'Contact'],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold">TriggerDeliver</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Customer activation platform built for modern B2C marketing teams
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>
            © {new Date().getFullYear()} TriggerDeliver. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { CTASection, Footer };