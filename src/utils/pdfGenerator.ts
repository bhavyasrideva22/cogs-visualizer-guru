
import { jsPDF } from "jspdf";
import 'jspdf-autotable';

// TypeScript declaration for jspdf-autotable
declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

export const generatePDF = (
  cogsData: {
    rawMaterials: number;
    directLabor: number;
    manufacturingOverhead: number;
    shippingCosts: number;
    inventoryStart: number;
    purchases: number;
    inventoryEnd: number;
  },
  calculationMethod: 'direct' | 'inventory',
  totalCOGS: number
) => {
  // Initialize jsPDF
  const doc = new jsPDF();
  
  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  // Add header with logo and title
  doc.setFillColor(36, 94, 79); // Primary color #245e4f
  doc.rect(0, 0, 210, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.text("COGS Calculation Report", 105, 20, { align: "center" });
  
  doc.setFontSize(12);
  doc.text("Generated on: " + new Date().toLocaleDateString('en-IN'), 105, 30, { align: "center" });
  
  // Add calculation method
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);
  doc.text(`Calculation Method: ${calculationMethod === 'direct' ? 'Direct Method' : 'Inventory Method'}`, 20, 50);
  
  // Add total COGS
  doc.setFontSize(16);
  doc.setTextColor(36, 94, 79); // Primary color
  doc.text(`Total COGS: ${formatCurrency(totalCOGS)}`, 20, 60);
  
  // Add breakdown table
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text("Cost Breakdown:", 20, 75);
  
  if (calculationMethod === 'direct') {
    // Direct method breakdown
    const directData = [
      ["Component", "Amount", "Percentage"],
      [
        "Raw Materials", 
        formatCurrency(cogsData.rawMaterials), 
        `${Math.round((cogsData.rawMaterials / totalCOGS) * 100)}%`
      ],
      [
        "Direct Labor", 
        formatCurrency(cogsData.directLabor), 
        `${Math.round((cogsData.directLabor / totalCOGS) * 100)}%`
      ],
      [
        "Manufacturing Overhead", 
        formatCurrency(cogsData.manufacturingOverhead), 
        `${Math.round((cogsData.manufacturingOverhead / totalCOGS) * 100)}%`
      ],
      [
        "Shipping & Freight", 
        formatCurrency(cogsData.shippingCosts), 
        `${Math.round((cogsData.shippingCosts / totalCOGS) * 100)}%`
      ],
      ["Total", formatCurrency(totalCOGS), "100%"]
    ];
    
    doc.autoTable({
      startY: 80,
      head: [directData[0]],
      body: directData.slice(1),
      theme: 'grid',
      headStyles: { 
        fillColor: [36, 94, 79],
        textColor: [255, 255, 255],
        fontStyle: 'bold'
      },
      footStyles: {
        fillColor: [240, 240, 240],
        fontStyle: 'bold'
      },
      alternateRowStyles: { fillColor: [245, 245, 245] },
      columnStyles: {
        0: { cellWidth: 80 },
        1: { cellWidth: 60, halign: 'right' },
        2: { cellWidth: 40, halign: 'right' }
      }
    });
  } else {
    // Inventory method breakdown
    const inventoryData = [
      ["Component", "Amount"],
      ["Beginning Inventory", formatCurrency(cogsData.inventoryStart)],
      ["+ Purchases", formatCurrency(cogsData.purchases)],
      ["- Ending Inventory", formatCurrency(cogsData.inventoryEnd)],
      ["= Total COGS", formatCurrency(totalCOGS)]
    ];
    
    doc.autoTable({
      startY: 80,
      head: [inventoryData[0]],
      body: inventoryData.slice(1),
      theme: 'grid',
      headStyles: { 
        fillColor: [36, 94, 79],
        textColor: [255, 255, 255],
        fontStyle: 'bold'
      },
      footStyles: {
        fillColor: [240, 240, 240],
        fontStyle: 'bold'
      },
      alternateRowStyles: { fillColor: [245, 245, 245] },
      columnStyles: {
        0: { cellWidth: 100 },
        1: { cellWidth: 80, halign: 'right' }
      }
    });
  }
  
  // Add formula explanation
  const tableHeight = calculationMethod === 'direct' ? 100 : 80;
  const formulaY = 80 + tableHeight + 20;
  
  doc.setFontSize(12);
  doc.text("Formula Used:", 20, formulaY);
  
  if (calculationMethod === 'direct') {
    doc.text("COGS = Raw Materials + Direct Labor + Manufacturing Overhead + Shipping Costs", 20, formulaY + 10);
  } else {
    doc.text("COGS = Beginning Inventory + Purchases - Ending Inventory", 20, formulaY + 10);
    doc.text(`${formatCurrency(cogsData.inventoryStart)} + ${formatCurrency(cogsData.purchases)} - ${formatCurrency(cogsData.inventoryEnd)} = ${formatCurrency(totalCOGS)}`, 20, formulaY + 20);
  }
  
  // Add additional information and explanations
  doc.setFontSize(14);
  doc.text("What is COGS?", 20, formulaY + 40);
  doc.setFontSize(10);
  doc.text(
    "Cost of Goods Sold (COGS) represents the direct costs attributable to the production of the goods sold by a company. " +
    "This amount includes the cost of materials and labor directly used to create the good. It excludes indirect expenses, " +
    "such as distribution costs and sales force costs.",
    20, formulaY + 50, { maxWidth: 170 }
  );
  
  // Add footer with company information
  const pageCount = doc.getNumberOfPages();
  doc.setFontSize(10);
  
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    
    // Footer with line
    doc.setDrawColor(36, 94, 79); // Primary color
    doc.line(20, 280, 190, 280);
    
    doc.setTextColor(100, 100, 100);
    doc.text("COGS Calculator | Your Financial Partner", 105, 287, { align: "center" });
    doc.text(`Page ${i} of ${pageCount}`, 105, 293, { align: "center" });
  }
  
  // Save the PDF
  doc.save("COGS_Calculation_Report.pdf");
};
