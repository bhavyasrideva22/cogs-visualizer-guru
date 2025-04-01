
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import COGSChart from './COGSChart';
import COGSBreakdown from './COGSBreakdown';
import ExportOptions from './ExportOptions';
import { BadgeIndianRupee } from 'lucide-react';

interface CogsData {
  rawMaterials: number;
  directLabor: number;
  manufacturingOverhead: number;
  shippingCosts: number;
  inventoryStart: number;
  purchases: number;
  inventoryEnd: number;
}

const initialData: CogsData = {
  rawMaterials: 0,
  directLabor: 0,
  manufacturingOverhead: 0,
  shippingCosts: 0,
  inventoryStart: 0,
  purchases: 0,
  inventoryEnd: 0
};

const COGSCalculator: React.FC = () => {
  const [cogsData, setCogsData] = useState<CogsData>(initialData);
  const [totalCOGS, setTotalCOGS] = useState<number>(0);
  const [calculationMethod, setCalculationMethod] = useState<'direct' | 'inventory'>('direct');
  const [animateResult, setAnimateResult] = useState<boolean>(false);

  // Calculate COGS based on the selected method
  const calculateCOGS = () => {
    let total = 0;
    
    if (calculationMethod === 'direct') {
      total = cogsData.rawMaterials + cogsData.directLabor + 
              cogsData.manufacturingOverhead + cogsData.shippingCosts;
    } else {
      total = cogsData.inventoryStart + cogsData.purchases - cogsData.inventoryEnd;
    }
    
    setTotalCOGS(total);
    setAnimateResult(true);
    setTimeout(() => setAnimateResult(false), 500);
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCogsData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  // Reset form
  const handleReset = () => {
    setCogsData(initialData);
    setTotalCOGS(0);
  };

  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="container-custom py-8">
      <Card className="bg-white card-shadow">
        <CardHeader className="bg-primary text-white rounded-t-lg">
          <div className="flex items-center gap-2">
            <BadgeIndianRupee className="h-6 w-6" />
            <CardTitle className="text-2xl">COGS Calculator</CardTitle>
          </div>
          <CardDescription className="text-white/80">
            Calculate your Cost of Goods Sold using either the direct method or inventory method
          </CardDescription>
        </CardHeader>
        
        <Tabs defaultValue="direct" onValueChange={(v) => setCalculationMethod(v as 'direct' | 'inventory')}>
          <div className="px-6 pt-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="direct">Direct Method</TabsTrigger>
              <TabsTrigger value="inventory">Inventory Method</TabsTrigger>
            </TabsList>
          </div>
          
          <CardContent className="p-6">
            <TabsContent value="direct" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="rawMaterials">Raw Materials</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <Input
                      id="rawMaterials"
                      name="rawMaterials"
                      type="number"
                      placeholder="0"
                      className="pl-8"
                      value={cogsData.rawMaterials || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="directLabor">Direct Labor</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <Input
                      id="directLabor"
                      name="directLabor"
                      type="number"
                      placeholder="0"
                      className="pl-8"
                      value={cogsData.directLabor || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="manufacturingOverhead">Manufacturing Overhead</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <Input
                      id="manufacturingOverhead"
                      name="manufacturingOverhead"
                      type="number"
                      placeholder="0"
                      className="pl-8"
                      value={cogsData.manufacturingOverhead || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="shippingCosts">Shipping & Freight Costs</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <Input
                      id="shippingCosts"
                      name="shippingCosts"
                      type="number"
                      placeholder="0"
                      className="pl-8"
                      value={cogsData.shippingCosts || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="inventory" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="inventoryStart">Beginning Inventory</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <Input
                      id="inventoryStart"
                      name="inventoryStart"
                      type="number"
                      placeholder="0"
                      className="pl-8"
                      value={cogsData.inventoryStart || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="purchases">Purchases</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <Input
                      id="purchases"
                      name="purchases"
                      type="number"
                      placeholder="0"
                      className="pl-8"
                      value={cogsData.purchases || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="inventoryEnd">Ending Inventory</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <Input
                      id="inventoryEnd"
                      name="inventoryEnd"
                      type="number"
                      placeholder="0"
                      className="pl-8"
                      value={cogsData.inventoryEnd || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-between mt-8">
              <div className="flex gap-4">
                <Button 
                  onClick={calculateCOGS} 
                  className="bg-primary hover:bg-primary/90"
                >
                  Calculate COGS
                </Button>
                <Button 
                  onClick={handleReset} 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Reset
                </Button>
              </div>
              
              <div className={`bg-secondary/20 p-4 rounded-lg flex items-center gap-2 ${animateResult ? 'animate-fade-in' : ''}`}>
                <span className="font-semibold">Total COGS:</span>
                <Badge variant="outline" className="bg-secondary text-lg py-1 px-3">
                  {formatCurrency(totalCOGS)}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Tabs>
        
        {totalCOGS > 0 && (
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <COGSChart 
                cogsData={cogsData} 
                calculationMethod={calculationMethod} 
                totalCOGS={totalCOGS} 
              />
              <COGSBreakdown 
                cogsData={cogsData} 
                calculationMethod={calculationMethod} 
                totalCOGS={totalCOGS} 
              />
            </div>
            
            <div className="mt-8">
              <ExportOptions 
                cogsData={cogsData} 
                calculationMethod={calculationMethod} 
                totalCOGS={totalCOGS} 
              />
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default COGSCalculator;
