
import React from 'react';
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">COGS Calculator</h3>
            <p className="text-white/80">
              The #1 operations tool for product businesses to calculate and optimize their cost of goods sold.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#what-is-cogs" className="text-white/80 hover:text-white transition-colors">
                  What is COGS?
                </a>
              </li>
              <li>
                <a href="#why-cogs-matters" className="text-white/80 hover:text-white transition-colors">
                  Why COGS Matters
                </a>
              </li>
              <li>
                <a href="#cogs-components" className="text-white/80 hover:text-white transition-colors">
                  COGS Components
                </a>
              </li>
              <li>
                <a href="#cogs-vs-expenses" className="text-white/80 hover:text-white transition-colors">
                  COGS vs. Operating Expenses
                </a>
              </li>
              <li>
                <a href="#optimize-cogs" className="text-white/80 hover:text-white transition-colors">
                  Optimize Your COGS
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="text-white/80 mb-2">
              Have questions about the calculator or need help with your COGS analysis?
            </p>
            <a 
              href="mailto:contact@cogscalculator.com" 
              className="text-secondary hover:text-white transition-colors"
            >
              contact@cogscalculator.com
            </a>
          </div>
        </div>
        
        <Separator className="my-6 bg-white/20" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">
            © {year} COGS Calculator. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
