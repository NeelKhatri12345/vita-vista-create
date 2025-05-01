
import React from 'react';
import { Education } from './EducationSection';
import { Experience } from './ExperienceSection';
import { SkillCategory } from './SkillsSection';

interface ResumePreviewProps {
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
}

const ResumePreview: React.FC<ResumePreviewProps> = ({
  personalInfo,
  experiences,
  education,
  skillCategories,
}) => {
  return (
    <div className="resume-paper">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-resume-primary">{personalInfo.name || 'Your Name'}</h1>
          <div className="flex justify-center flex-wrap gap-x-4 mt-2 text-sm text-gray-600">
            {personalInfo.email && <div>{personalInfo.email}</div>}
            {personalInfo.phone && <div>{personalInfo.phone}</div>}
            {personalInfo.location && <div>{personalInfo.location}</div>}
          </div>
        </div>

        {/* Summary */}
        {personalInfo.summary && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-resume-primary border-b border-gray-300 pb-1 mb-3">Summary</h2>
            <p className="text-sm text-gray-700">{personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {experiences.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-resume-primary border-b border-gray-300 pb-1 mb-3">Experience</h2>
            {experiences.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-medium">{exp.position}</h3>
                  <p className="text-xs text-gray-500">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <p className="font-medium text-gray-700">{exp.company}</p>
                <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-resume-primary border-b border-gray-300 pb-1 mb-3">Education</h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-medium">{edu.institution}</h3>
                  <p className="text-xs text-gray-500">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
                <p className="text-gray-700">{edu.degree} in {edu.field}</p>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {skillCategories.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-resume-primary border-b border-gray-300 pb-1 mb-3">Skills</h2>
            {skillCategories.map((category) => (
              <div key={category.id} className="mb-3">
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm text-gray-700">{category.skills.join(', ')}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
