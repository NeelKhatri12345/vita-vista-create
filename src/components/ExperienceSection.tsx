
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, Plus } from 'lucide-react';

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
  onAdd: () => void;
  onUpdate: (id: string, field: string, value: string) => void;
  onDelete: (id: string) => void;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  onAdd,
  onUpdate,
  onDelete,
}) => {
  return (
    <Card className="hover-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-resume-primary">Experience</CardTitle>
        <Button 
          onClick={onAdd} 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1 border-resume-primary text-resume-primary hover:bg-resume-primary hover:text-white"
        >
          <Plus className="h-4 w-4" /> Add Experience
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="border rounded-lg p-4 space-y-4 animate-fade-in">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Experience Entry</h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                onClick={() => onDelete(exp.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`company-${exp.id}`}>Company</Label>
                <Input
                  id={`company-${exp.id}`}
                  placeholder="Company name"
                  value={exp.company}
                  onChange={(e) => onUpdate(exp.id, 'company', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`position-${exp.id}`}>Position</Label>
                <Input
                  id={`position-${exp.id}`}
                  placeholder="Job title"
                  value={exp.position}
                  onChange={(e) => onUpdate(exp.id, 'position', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`startDate-${exp.id}`}>Start Date</Label>
                <Input
                  id={`startDate-${exp.id}`}
                  placeholder="MM/YYYY"
                  value={exp.startDate}
                  onChange={(e) => onUpdate(exp.id, 'startDate', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`endDate-${exp.id}`}>End Date</Label>
                <Input
                  id={`endDate-${exp.id}`}
                  placeholder="MM/YYYY or Present"
                  value={exp.endDate}
                  onChange={(e) => onUpdate(exp.id, 'endDate', e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor={`description-${exp.id}`}>Description</Label>
              <textarea
                id={`description-${exp.id}`}
                placeholder="Describe your responsibilities and achievements"
                value={exp.description}
                onChange={(e) => onUpdate(exp.id, 'description', e.target.value)}
                className="w-full min-h-[100px] p-2 border rounded-md resize-none"
              />
            </div>
          </div>
        ))}
        {experiences.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No experience entries yet. Click "Add Experience" to add your work history.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ExperienceSection;
