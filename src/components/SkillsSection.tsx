
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { X, Plus } from 'lucide-react';

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
  onAddCategory: () => void;
  onUpdateCategoryName: (id: string, name: string) => void;
  onDeleteCategory: (id: string) => void;
  onAddSkill: (categoryId: string, skill: string) => void;
  onDeleteSkill: (categoryId: string, skillIndex: number) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
  skillCategories,
  onAddCategory,
  onUpdateCategoryName,
  onDeleteCategory,
  onAddSkill,
  onDeleteSkill,
}) => {
  const [newSkillInputs, setNewSkillInputs] = useState<{ [key: string]: string }>({});

  const handleAddSkill = (categoryId: string) => {
    const skill = newSkillInputs[categoryId]?.trim();
    if (skill) {
      onAddSkill(categoryId, skill);
      // Clear the input after adding
      setNewSkillInputs((prev) => ({ ...prev, [categoryId]: '' }));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, categoryId: string) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill(categoryId);
    }
  };

  return (
    <Card className="hover-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-resume-primary">Skills</CardTitle>
        <Button 
          onClick={onAddCategory} 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1 border-resume-primary text-resume-primary hover:bg-resume-primary hover:text-white"
        >
          <Plus className="h-4 w-4" /> Add Category
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {skillCategories.map((category) => (
          <div key={category.id} className="border rounded-lg p-4 space-y-4 animate-fade-in">
            <div className="flex justify-between items-center">
              <div className="w-full max-w-xs">
                <Input
                  placeholder="Category name (e.g., Programming Languages)"
                  value={category.name}
                  onChange={(e) => onUpdateCategoryName(category.id, e.target.value)}
                  className="font-medium"
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                onClick={() => onDeleteCategory(category.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {category.skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="flex items-center gap-1 bg-resume-light text-gray-700 hover:bg-gray-200"
                >
                  {skill}
                  <button 
                    onClick={() => onDeleteSkill(category.id, index)}
                    className="ml-1 hover:text-red-500"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex mt-2">
              <Input
                placeholder="Add a skill"
                value={newSkillInputs[category.id] || ''}
                onChange={(e) => 
                  setNewSkillInputs((prev) => ({ 
                    ...prev, 
                    [category.id]: e.target.value 
                  }))
                }
                onKeyDown={(e) => handleKeyPress(e, category.id)}
                className="rounded-r-none"
              />
              <Button 
                className="rounded-l-none bg-resume-secondary hover:bg-purple-600"
                onClick={() => handleAddSkill(category.id)}
              >
                Add
              </Button>
            </div>
          </div>
        ))}
        {skillCategories.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No skill categories yet. Click "Add Category" to add your skills.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
