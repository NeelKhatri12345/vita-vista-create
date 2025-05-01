
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PersonalInfoSection from './PersonalInfoSection';
import ExperienceSection, { Experience } from './ExperienceSection';
import EducationSection, { Education } from './EducationSection';
import SkillsSection, { SkillCategory } from './SkillsSection';

interface ResumeFormProps {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  experiences: Experience[];
  education: Education[];
  skillCategories: SkillCategory[];
  onUpdatePersonalInfo: (field: string, value: string) => void;
  onAddExperience: () => void;
  onUpdateExperience: (id: string, field: string, value: string) => void;
  onDeleteExperience: (id: string) => void;
  onAddEducation: () => void;
  onUpdateEducation: (id: string, field: string, value: string) => void;
  onDeleteEducation: (id: string) => void;
  onAddSkillCategory: () => void;
  onUpdateSkillCategoryName: (id: string, name: string) => void;
  onDeleteSkillCategory: (id: string) => void;
  onAddSkill: (categoryId: string, skill: string) => void;
  onDeleteSkill: (categoryId: string, skillIndex: number) => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({
  personalInfo,
  experiences,
  education,
  skillCategories,
  onUpdatePersonalInfo,
  onAddExperience,
  onUpdateExperience,
  onDeleteExperience,
  onAddEducation,
  onUpdateEducation,
  onDeleteEducation,
  onAddSkillCategory,
  onUpdateSkillCategoryName,
  onDeleteSkillCategory,
  onAddSkill,
  onDeleteSkill,
}) => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        <div className="mt-6">
          <TabsContent value="personal">
            <PersonalInfoSection
              personalInfo={personalInfo}
              onChange={onUpdatePersonalInfo}
            />
          </TabsContent>
          <TabsContent value="experience">
            <ExperienceSection
              experiences={experiences}
              onAdd={onAddExperience}
              onUpdate={onUpdateExperience}
              onDelete={onDeleteExperience}
            />
          </TabsContent>
          <TabsContent value="education">
            <EducationSection
              education={education}
              onAdd={onAddEducation}
              onUpdate={onUpdateEducation}
              onDelete={onDeleteEducation}
            />
          </TabsContent>
          <TabsContent value="skills">
            <SkillsSection
              skillCategories={skillCategories}
              onAddCategory={onAddSkillCategory}
              onUpdateCategoryName={onUpdateSkillCategoryName}
              onDeleteCategory={onDeleteSkillCategory}
              onAddSkill={onAddSkill}
              onDeleteSkill={onDeleteSkill}
            />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ResumeForm;
