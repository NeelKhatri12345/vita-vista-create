
import { Experience } from '../components/ExperienceSection';
import { Education } from '../components/EducationSection';
import { SkillCategory } from '../components/SkillsSection';

// Backend API URL
const API_URL = 'http://localhost:8080/api/resumes';

// Interface for personal info
interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
}

// Interface for resume data
export interface Resume {
  id?: number;
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skillCategories: SkillCategory[];
}

// Get all resumes
export const getAllResumes = async (): Promise<Resume[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

// Get resume by id
export const getResumeById = async (id: number): Promise<Resume> => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

// Create a new resume
export const createResume = async (resumeData: Resume): Promise<Resume> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resumeData),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

// Update an existing resume
export const updateResume = async (id: number, resumeData: Resume): Promise<Resume> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resumeData),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

// Delete a resume
export const deleteResume = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
};
