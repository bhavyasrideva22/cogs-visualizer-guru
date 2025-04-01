
import React from 'react';
import COGSCalculator from '@/components/COGSCalculator';
import COGSExplanation from '@/components/COGSExplanation';
import Footer from '@/components/Footer';
import { BadgeIndianRupee } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <header className="bg-primary text-white py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <BadgeIndianRupee className="h-8 w-8 mr-2" />
              <h1 className="text-2xl font-bold text-white">COGS Calculator</h1>
            </div>
            
            <div>
              <p className="text-white/80 text-center md:text-right">
                The #1 operations tool for product businesses in India
              </p>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        <div className="py-10 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container-custom text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Calculate Your Cost of Goods Sold (COGS)
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our interactive COGS calculator helps product-based businesses accurately measure 
              production costs and improve profitability.
            </p>
          </div>
        </div>
        
        <COGSCalculator />
        <COGSExplanation />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
