
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PersonalInfoSectionProps {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  onChange: (field: string, value: string) => void;
}

const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({
  personalInfo,
  onChange,
}) => {
  return (
    <Card className="hover-card">
      <CardHeader>
        <CardTitle className="text-resume-primary">Personal Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={personalInfo.name}
              onChange={(e) => onChange('name', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              value={personalInfo.email}
              onChange={(e) => onChange('email', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              placeholder="(555) 123-4567"
              value={personalInfo.phone}
              onChange={(e) => onChange('phone', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="New York, NY"
              value={personalInfo.location}
              onChange={(e) => onChange('location', e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="summary">Summary</Label>
          <textarea
            id="summary"
            placeholder="Brief professional summary"
            value={personalInfo.summary}
            onChange={(e) => onChange('summary', e.target.value)}
            className="w-full min-h-[100px] p-2 border rounded-md resize-none"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoSection;
