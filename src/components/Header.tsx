
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-10 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FileText className="h-6 w-6 text-resume-primary" />
          <h1 className="text-xl font-semibold text-gray-900">ResumeBuilder</h1>
        </div>
        <div>
          <Button 
            className="bg-resume-primary hover:bg-blue-600 transition-colors"
            onClick={() => window.print()}
          >
            Export PDF
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
