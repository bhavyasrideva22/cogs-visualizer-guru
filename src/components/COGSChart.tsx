
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface COGSChartProps {
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

const COLORS = ['#245e4f', '#7ac9a7', '#e9c46a', '#4a8fe7'];

const COGSChart: React.FC<COGSChartProps> = ({ cogsData, calculationMethod, totalCOGS }) => {
  let chartData = [];
  
  if (calculationMethod === 'direct') {
    chartData = [
      { name: 'Raw Materials', value: cogsData.rawMaterials },
      { name: 'Direct Labor', value: cogsData.directLabor },
      { name: 'Manufacturing Overhead', value: cogsData.manufacturingOverhead },
      { name: 'Shipping Costs', value: cogsData.shippingCosts }
    ].filter(item => item.value > 0);
  } else {
    // For inventory method, we show a different representation
    // Beginning Inventory + Purchases are positive, Ending Inventory is negative
    chartData = [
      { name: 'Beginning Inventory', value: cogsData.inventoryStart },
      { name: 'Purchases', value: cogsData.purchases },
      { name: 'Ending Inventory', value: -cogsData.inventoryEnd } // Negative since it's subtracted
    ].filter(item => item.value !== 0);
  }

  // Custom tooltip formatter
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const percentage = Math.round((Math.abs(data.value) / totalCOGS) * 100);
      
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
          <p className="font-medium">{data.name}</p>
          <p className="text-sm">
            ₹{Math.abs(data.value).toLocaleString('en-IN')} 
            {data.value < 0 ? ' (subtracted)' : ''}
          </p>
          <p className="text-xs text-gray-500">
            {percentage}% of total
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-primary">COGS Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {chartData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                      opacity={entry.value < 0 ? 0.7 : 1} // Lighter color for negative values
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend layout="horizontal" verticalAlign="bottom" align="center" />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              No data to display. Please enter values to see the chart.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default COGSChart;
