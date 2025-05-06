
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import ResumeForm from '@/components/ResumeForm';
import ResumePreview from '@/components/ResumePreview';
import { Experience } from '@/components/ExperienceSection';
import { Education } from '@/components/EducationSection';
import { SkillCategory } from '@/components/SkillsSection';
import { Button } from '@/components/ui/button';
import { v4 as uuidv4 } from 'uuid';
import { createResume, updateResume, Resume } from '@/services/resumeService';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [resumeId, setResumeId] = useState<number | null>(null);

  // Personal Info State
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
  });

  // Experience State
  const [experiences, setExperiences] = useState<Experience[]>([]);

  // Education State
  const [education, setEducation] = useState<Education[]>([]);

  // Skills State
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([]);

  // Preview toggle
  const [showPreview, setShowPreview] = useState(false);
  
  // Loading state
  const [loading, setLoading] = useState(false);

  // Personal Info Handlers
  const handleUpdatePersonalInfo = (field: string, value: string) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  // Experience Handlers
  const handleAddExperience = () => {
    const newExperience: Experience = {
      id: uuidv4(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    setExperiences((prev) => [...prev, newExperience]);
  };

  const handleUpdateExperience = (id: string, field: string, value: string) => {
    setExperiences((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  };

  const handleDeleteExperience = (id: string) => {
    setExperiences((prev) => prev.filter((exp) => exp.id !== id));
  };

  // Education Handlers
  const handleAddEducation = () => {
    const newEducation: Education = {
      id: uuidv4(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
    };
    setEducation((prev) => [...prev, newEducation]);
  };

  const handleUpdateEducation = (id: string, field: string, value: string) => {
    setEducation((prev) =>
      prev.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
    );
  };

  const handleDeleteEducation = (id: string) => {
    setEducation((prev) => prev.filter((edu) => edu.id !== id));
  };

  // Skills Handlers
  const handleAddSkillCategory = () => {
    const newCategory: SkillCategory = {
      id: uuidv4(),
      name: '',
      skills: [],
    };
    setSkillCategories((prev) => [...prev, newCategory]);
  };

  const handleUpdateSkillCategoryName = (id: string, name: string) => {
    setSkillCategories((prev) =>
      prev.map((cat) => (cat.id === id ? { ...cat, name } : cat))
    );
  };

  const handleDeleteSkillCategory = (id: string) => {
    setSkillCategories((prev) => prev.filter((cat) => cat.id !== id));
  };

  const handleAddSkill = (categoryId: string, skill: string) => {
    setSkillCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? { ...cat, skills: [...cat.skills, skill] }
          : cat
      )
    );
  };

  const handleDeleteSkill = (categoryId: string, skillIndex: number) => {
    setSkillCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              skills: cat.skills.filter((_, index) => index !== skillIndex),
            }
          : cat
      )
    );
  };

  // Save resume to backend
  const handleSaveResume = async () => {
    setLoading(true);

    try {
      const resumeData: Resume = {
        personalInfo,
        experiences,
        education,
        skillCategories,
      };

      let response;
      if (resumeId) {
        // Update existing resume
        response = await updateResume(resumeId, resumeData);
        toast({
          title: "Resume Updated",
          description: "Your resume has been saved successfully.",
        });
      } else {
        // Create new resume
        response = await createResume(resumeData);
        setResumeId(response.id!);
        toast({
          title: "Resume Created",
          description: "Your resume has been created successfully.",
        });
      }
    } catch (error) {
      console.error('Error saving resume:', error);
      toast({
        title: "Error",
        description: "Failed to save your resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4">
        {/* Action Buttons */}
        <div className="w-full max-w-6xl mx-auto mb-6 flex justify-between items-center">
          <Button 
            className="bg-resume-primary hover:bg-blue-600 no-print"
            onClick={handleSaveResume}
            disabled={loading}
          >
            {loading ? 'Saving...' : resumeId ? 'Update Resume' : 'Save Resume'}
          </Button>
          
          <Button 
            className="bg-resume-secondary hover:bg-purple-600 no-print"
            onClick={() => setShowPreview(!showPreview)}
          >
            {showPreview ? 'Edit Resume' : 'Preview Resume'}
          </Button>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-8">
          {/* Form */}
          <div className={`mb-10 md:mb-0 md:col-span-2 lg:col-span-1 ${showPreview ? 'hidden md:block' : ''}`}>
            <ResumeForm
              personalInfo={personalInfo}
              experiences={experiences}
              education={education}
              skillCategories={skillCategories}
              onUpdatePersonalInfo={handleUpdatePersonalInfo}
              onAddExperience={handleAddExperience}
              onUpdateExperience={handleUpdateExperience}
              onDeleteExperience={handleDeleteExperience}
              onAddEducation={handleAddEducation}
              onUpdateEducation={handleUpdateEducation}
              onDeleteEducation={handleDeleteEducation}
              onAddSkillCategory={handleAddSkillCategory}
              onUpdateSkillCategoryName={handleUpdateSkillCategoryName}
              onDeleteSkillCategory={handleDeleteSkillCategory}
              onAddSkill={handleAddSkill}
              onDeleteSkill={handleDeleteSkill}
            />
          </div>

          {/* Preview */}
          <div className={`lg:col-span-1 md:col-span-2 ${!showPreview ? 'hidden md:block' : ''}`}>
            <ResumePreview
              personalInfo={personalInfo}
              experiences={experiences}
              education={education}
              skillCategories={skillCategories}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
