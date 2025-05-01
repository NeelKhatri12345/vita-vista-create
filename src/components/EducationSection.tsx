
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, Plus } from 'lucide-react';

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

interface EducationSectionProps {
  education: Education[];
  onAdd: () => void;
  onUpdate: (id: string, field: string, value: string) => void;
  onDelete: (id: string) => void;
}

const EducationSection: React.FC<EducationSectionProps> = ({
  education,
  onAdd,
  onUpdate,
  onDelete,
}) => {
  return (
    <Card className="hover-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-resume-primary">Education</CardTitle>
        <Button 
          onClick={onAdd} 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1 border-resume-primary text-resume-primary hover:bg-resume-primary hover:text-white"
        >
          <Plus className="h-4 w-4" /> Add Education
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="border rounded-lg p-4 space-y-4 animate-fade-in">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Education Entry</h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                onClick={() => onDelete(edu.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
                <Input
                  id={`institution-${edu.id}`}
                  placeholder="University/College name"
                  value={edu.institution}
                  onChange={(e) => onUpdate(edu.id, 'institution', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
                <Input
                  id={`degree-${edu.id}`}
                  placeholder="e.g., Bachelor's, Master's"
                  value={edu.degree}
                  onChange={(e) => onUpdate(edu.id, 'degree', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`field-${edu.id}`}>Field of Study</Label>
                <Input
                  id={`field-${edu.id}`}
                  placeholder="e.g., Computer Science"
                  value={edu.field}
                  onChange={(e) => onUpdate(edu.id, 'field', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <Label htmlFor={`startDate-${edu.id}`}>Start</Label>
                  <Input
                    id={`startDate-${edu.id}`}
                    placeholder="MM/YYYY"
                    value={edu.startDate}
                    onChange={(e) => onUpdate(edu.id, 'startDate', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`endDate-${edu.id}`}>End</Label>
                  <Input
                    id={`endDate-${edu.id}`}
                    placeholder="MM/YYYY"
                    value={edu.endDate}
                    onChange={(e) => onUpdate(edu.id, 'endDate', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        {education.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No education entries yet. Click "Add Education" to add your educational background.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EducationSection;
