
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Download, Mail, Share } from 'lucide-react';
import { generatePDF } from '../utils/pdfGenerator';

interface ExportOptionsProps {
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

const ExportOptions: React.FC<ExportOptionsProps> = ({ cogsData, calculationMethod, totalCOGS }) => {
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [emailForm, setEmailForm] = useState({
    recipient: '',
    subject: 'Your COGS Calculation Results',
    message: 'Please find attached your COGS calculation results.'
  });

  const handleEmailFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEmailForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDownloadPDF = () => {
    generatePDF(cogsData, calculationMethod, totalCOGS);
    toast.success("PDF generated successfully!");
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to an email service
    // For now, we'll just simulate success
    setTimeout(() => {
      toast.success(`Email sent to ${emailForm.recipient}!`);
      setEmailDialogOpen(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between border-t pt-6">
      <div className="flex flex-wrap gap-3">
        <Button 
          variant="outline" 
          onClick={handleDownloadPDF}
          className="bg-accent text-charcoal hover:bg-accent/90 flex gap-2"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => setEmailDialogOpen(true)}
          className="border-primary text-primary hover:bg-primary/10 flex gap-2"
        >
          <Mail className="h-4 w-4" />
          Email Results
        </Button>
        
        <Button 
          variant="outline" 
          className="border-gray-300 text-gray-700 hover:bg-gray-100 flex gap-2"
          onClick={() => {
            navigator.clipboard.writeText(`My COGS calculation: ₹${totalCOGS.toLocaleString('en-IN')}`);
            toast.success("Result copied to clipboard!");
          }}
        >
          <Share className="h-4 w-4" />
          Share
        </Button>
      </div>
      
      <Dialog open={emailDialogOpen} onOpenChange={setEmailDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Email Your COGS Results</DialogTitle>
            <DialogDescription>
              Send your calculation results to yourself or your team members.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSendEmail} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="recipient">Email Address</Label>
              <Input
                id="recipient"
                name="recipient"
                type="email"
                placeholder="example@company.com"
                required
                value={emailForm.recipient}
                onChange={handleEmailFormChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                value={emailForm.subject}
                onChange={handleEmailFormChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={3}
                value={emailForm.message}
                onChange={handleEmailFormChange}
              />
            </div>
            
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setEmailDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Send Email</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExportOptions;
