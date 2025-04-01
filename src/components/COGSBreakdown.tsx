
import React from 'react';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface COGSBreakdownProps {
  cogsData: {
    rawMaterials: number;
    directLabor: number;
    manufacturingOverhead: number;
    shippingCosts: number;
    inventoryStart: number;
    purchases: number;
    inventoryEnd: number;
  };
  calculationMethod: 'direct' | 'inventory';
  totalCOGS: number;
}

const COGSBreakdown: React.FC<COGSBreakdownProps> = ({ cogsData, calculationMethod, totalCOGS }) => {
  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Format percentage
  const formatPercentage = (value: number, total: number): string => {
    if (total === 0) return '0%';
    return `${Math.round((Math.abs(value) / total) * 100)}%`;
  };
  
  return (
    <Card className="bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-primary">Cost Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        {calculationMethod === 'direct' ? (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">
              Below is a breakdown of your direct COGS components:
            </p>
            
            <div className="space-y-3">
              {cogsData.rawMaterials > 0 && (
                <div className="flex items-center justify-between p-2 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="bg-primary h-3 w-3 rounded-full"></span>
                    <span>Raw Materials</span>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{formatCurrency(cogsData.rawMaterials)}</div>
                    <div className="text-xs text-gray-500">{formatPercentage(cogsData.rawMaterials, totalCOGS)}</div>
                  </div>
                </div>
              )}
              
              {cogsData.directLabor > 0 && (
                <div className="flex items-center justify-between p-2 bg-secondary/10 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="bg-secondary h-3 w-3 rounded-full"></span>
                    <span>Direct Labor</span>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{formatCurrency(cogsData.directLabor)}</div>
                    <div className="text-xs text-gray-500">{formatPercentage(cogsData.directLabor, totalCOGS)}</div>
                  </div>
                </div>
              )}
              
              {cogsData.manufacturingOverhead > 0 && (
                <div className="flex items-center justify-between p-2 bg-accent/10 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="bg-accent h-3 w-3 rounded-full"></span>
                    <span>Manufacturing Overhead</span>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{formatCurrency(cogsData.manufacturingOverhead)}</div>
                    <div className="text-xs text-gray-500">{formatPercentage(cogsData.manufacturingOverhead, totalCOGS)}</div>
                  </div>
                </div>
              )}
              
              {cogsData.shippingCosts > 0 && (
                <div className="flex items-center justify-between p-2 bg-chatbot/10 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="bg-chatbot h-3 w-3 rounded-full"></span>
                    <span>Shipping & Freight</span>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{formatCurrency(cogsData.shippingCosts)}</div>
                    <div className="text-xs text-gray-500">{formatPercentage(cogsData.shippingCosts, totalCOGS)}</div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="pt-4 border-t mt-4">
              <div className="flex justify-between items-center">
                <div className="font-semibold">Total COGS</div>
                <div className="font-bold text-primary text-xl">{formatCurrency(totalCOGS)}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">
              Your COGS calculated using the inventory method:
            </p>
            
            <div className="space-y-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between p-2 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-2">
                    <ArrowUpIcon className="h-4 w-4 text-primary" />
                    <span>Beginning Inventory</span>
                  </div>
                  <div className="font-medium">{formatCurrency(cogsData.inventoryStart)}</div>
                </div>
                
                <div className="flex items-center justify-between p-2 bg-secondary/10 rounded-lg">
                  <div className="flex items-center gap-2">
                    <ArrowUpIcon className="h-4 w-4 text-secondary" />
                    <span>Purchases</span>
                  </div>
                  <div className="font-medium">{formatCurrency(cogsData.purchases)}</div>
                </div>
                
                <div className="flex items-center justify-between p-2 bg-accent/10 rounded-lg">
                  <div className="flex items-center gap-2">
                    <ArrowDownIcon className="h-4 w-4 text-accent" />
                    <span>Ending Inventory</span>
                  </div>
                  <div className="font-medium">- {formatCurrency(cogsData.inventoryEnd)}</div>
                </div>
                
                <div className="pt-4 border-t mt-2">
                  <div className="flex justify-between items-center">
                    <div className="font-semibold">Total COGS</div>
                    <div className="font-bold text-primary text-xl">{formatCurrency(totalCOGS)}</div>
                  </div>
                </div>
              </div>
              
              <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                <p>Formula: Beginning Inventory + Purchases - Ending Inventory = COGS</p>
                <p className="mt-1">
                  {formatCurrency(cogsData.inventoryStart)} + {formatCurrency(cogsData.purchases)} - {formatCurrency(cogsData.inventoryEnd)} = {formatCurrency(totalCOGS)}
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default COGSBreakdown;
