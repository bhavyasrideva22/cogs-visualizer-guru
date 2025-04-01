
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BadgeIndianRupee, Calculator, FileText, PieChart, TrendingUp, BookOpen } from 'lucide-react';

const COGSExplanation: React.FC = () => {
  return (
    <div className="container-custom py-8">
      <Card className="bg-white card-shadow">
        <CardContent className="p-6 sm:p-8">
          <section>
            <h1 className="text-3xl font-bold text-primary mb-4">
              Understanding Cost of Goods Sold (COGS): The #1 Operations Tool for Product Businesses
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">
              COGS Calculator helps product-based businesses accurately calculate their Cost of Goods Sold, 
              providing crucial insights into profitability and operational efficiency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="flex flex-col items-center p-4 bg-primary/5 rounded-lg">
                <Calculator className="h-10 w-10 text-primary mb-2" />
                <h3 className="font-semibold text-center">Precise Calculations</h3>
                <p className="text-sm text-center mt-2">
                  Accurately calculate COGS using either direct or inventory methods
                </p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-secondary/10 rounded-lg">
                <PieChart className="h-10 w-10 text-secondary mb-2" />
                <h3 className="font-semibold text-center">Visual Insights</h3>
                <p className="text-sm text-center mt-2">
                  Understand cost breakdown through intuitive charts and visualizations
                </p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-accent/10 rounded-lg">
                <FileText className="h-10 w-10 text-accent mb-2" />
                <h3 className="font-semibold text-center">Shareable Reports</h3>
                <p className="text-sm text-center mt-2">
                  Export professional PDF reports or email results to your team
                </p>
              </div>
            </div>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4" id="what-is-cogs">
              What is Cost of Goods Sold (COGS)?
            </h2>
            
            <p className="mb-4">
              Cost of Goods Sold (COGS) represents the direct costs attributable to the production of the goods 
              that a company sells during a specific period. These costs include the materials used in creating 
              the product along with the direct labor costs used to produce the good.
            </p>
            
            <div className="bg-primary/5 p-4 rounded-lg my-6">
              <h3 className="font-semibold flex items-center gap-2 mb-2">
                <BadgeIndianRupee className="h-5 w-5 text-primary" />
                COGS Formula
              </h3>
              <p className="font-medium">Direct Method:</p>
              <p className="ml-4 mb-2">COGS = Raw Materials + Direct Labor + Manufacturing Overhead + Shipping Costs</p>
              
              <p className="font-medium">Inventory Method:</p>
              <p className="ml-4">COGS = Beginning Inventory + Purchases - Ending Inventory</p>
            </div>
            
            <p className="mb-4">
              COGS is subtracted from a company's revenue to calculate its gross profit. The gross profit is a 
              profitability measure that evaluates how efficiently a company can produce and sell its products.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4" id="why-cogs-matters">
              Why COGS Matters for Your Business
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Profit Analysis
                </h3>
                <p className="text-gray-700">
                  COGS directly impacts your gross profit margin, making it essential for understanding your 
                  business's profitability. Lower COGS relative to revenue means higher profit margins.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Tax Implications
                </h3>
                <p className="text-gray-700">
                  COGS is a tax-deductible business expense in India. Accurately calculating COGS 
                  ensures you're properly accounting for all deductible costs.
                </p>
              </div>
            </div>
            
            <p className="mb-4">
              For product-based businesses in India, precise COGS calculation is not just an accounting 
              requirement—it's a strategic tool that helps:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Identify cost-saving opportunities in your production process</li>
              <li>Make informed pricing decisions to ensure profitability</li>
              <li>Track inventory valuation and production efficiency</li>
              <li>Forecast future financial performance based on cost trends</li>
              <li>Benchmark against industry standards to stay competitive</li>
            </ul>
            
            <div className="bg-secondary/10 p-4 rounded-lg my-6">
              <h3 className="font-semibold mb-2">Example: A Textile Manufacturing Business</h3>
              <p className="mb-2">
                A textile manufacturer in Mumbai produces cotton shirts with the following costs:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Raw Materials (Cotton, threads, buttons): ₹1,50,000</li>
                <li>Direct Labor: ₹80,000</li>
                <li>Manufacturing Overhead (Electricity, machine maintenance): ₹40,000</li>
                <li>Shipping: ₹30,000</li>
              </ul>
              <p>
                Total COGS = ₹3,00,000. If the company sells these products for ₹5,00,000, 
                their gross profit would be ₹2,00,000, representing a 40% gross margin.
              </p>
            </div>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4" id="cogs-components">
              Understanding COGS Components
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Raw Materials</h3>
                <p className="text-gray-700">
                  These are the direct materials that become part of the finished product. For example, 
                  in a furniture manufacturing business, raw materials would include wood, fabric, stuffing, 
                  and hardware components.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Direct Labor</h3>
                <p className="text-gray-700">
                  This includes wages paid to workers directly involved in manufacturing or producing the goods. 
                  It doesn't include indirect labor such as administrative staff or marketing personnel.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Manufacturing Overhead</h3>
                <p className="text-gray-700">
                  These are costs indirectly related to production, such as factory rent, utilities, 
                  equipment maintenance, depreciation of manufacturing equipment, and production supervisors' salaries.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Shipping & Freight</h3>
                <p className="text-gray-700">
                  These include costs associated with shipping raw materials from suppliers to your facility, 
                  and sometimes the cost of shipping finished goods to customers if included in the product cost.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Inventory Valuation</h3>
                <p className="text-gray-700">
                  For businesses that maintain inventory, COGS calculation involves tracking beginning inventory, 
                  purchases made during the period, and ending inventory. This ensures that only the costs 
                  associated with goods actually sold are included in COGS.
                </p>
              </div>
            </div>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4" id="cogs-vs-expenses">
              COGS vs. Operating Expenses: Understanding the Difference
            </h2>
            
            <p className="mb-4">
              It's crucial to distinguish between COGS and operating expenses when analyzing your business finances:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-primary/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">COGS Includes:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Raw materials</li>
                  <li>Direct labor costs</li>
                  <li>Manufacturing supplies</li>
                  <li>Equipment costs for production</li>
                  <li>Freight-in costs</li>
                  <li>Storage costs for raw materials</li>
                </ul>
              </div>
              
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Operating Expenses Include:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Rent for office space</li>
                  <li>Administrative salaries</li>
                  <li>Marketing and advertising</li>
                  <li>Sales commissions</li>
                  <li>Research and development</li>
                  <li>Customer service costs</li>
                </ul>
              </div>
            </div>
            
            <p>
              Separating COGS from operating expenses allows businesses to calculate gross profit 
              (Revenue - COGS) and analyze production efficiency independently from other business operations.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4" id="optimize-cogs">
              Strategies to Optimize Your COGS
            </h2>
            
            <p className="mb-4">
              Reducing your COGS without compromising product quality can significantly improve your profit margins. 
              Here are some effective strategies:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">1. Bulk Purchasing</h3>
                <p className="text-gray-700">
                  Negotiate better rates with suppliers by ordering materials in larger quantities, 
                  which typically results in volume discounts.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1">2. Streamline Production Processes</h3>
                <p className="text-gray-700">
                  Implement lean manufacturing principles to reduce waste and improve efficiency in your 
                  production line, lowering both material and labor costs.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1">3. Source Alternative Suppliers</h3>
                <p className="text-gray-700">
                  Regularly evaluate your supplier relationships and look for alternative options that 
                  might offer better quality materials at competitive prices.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1">4. Optimize Inventory Management</h3>
                <p className="text-gray-700">
                  Implement just-in-time inventory practices to reduce storage costs and minimize waste 
                  from obsolete or expired materials.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1">5. Invest in Technology</h3>
                <p className="text-gray-700">
                  Automating parts of your production process can reduce labor costs and improve consistency, 
                  leading to less waste and higher-quality products.
                </p>
              </div>
            </div>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4" id="cogs-in-india">
              COGS Calculation in the Indian Business Context
            </h2>
            
            <p className="mb-4">
              For Indian businesses, especially with the introduction of GST (Goods and Services Tax), 
              calculating COGS has specific considerations:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">GST Input Credits</h3>
                <p className="text-gray-700">
                  GST paid on purchases used in your production process can be claimed as input tax credits, 
                  effectively reducing your net COGS. Ensure your COGS calculations account for these tax implications.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1">Inventory Valuation Methods</h3>
                <p className="text-gray-700">
                  Indian accounting standards allow for various inventory valuation methods such as FIFO 
                  (First-In-First-Out), LIFO (Last-In-First-Out), and weighted average. The method you choose 
                  can impact your COGS calculation, especially in periods of price fluctuations.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1">Import Duties and Customs</h3>
                <p className="text-gray-700">
                  If your business imports raw materials or components, remember to include import duties, 
                  customs charges, and international shipping costs in your COGS calculations.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1">Seasonal Variations</h3>
                <p className="text-gray-700">
                  Many Indian industries experience significant seasonal variations in costs, from agricultural 
                  product pricing to energy costs during monsoon versus summer. Accounting for these seasonal 
                  patterns in your COGS analysis can provide more accurate financial planning.
                </p>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default COGSExplanation;
