import resumeData from '../data/resume.json';

export const siteConfig = {
  // Basic information from resume
  name: resumeData.basics.name,
  title: resumeData.basics.title,
  email: resumeData.basics.email,
  linkedin: resumeData.basics.linkedin,
  github: resumeData.basics.github,
  about: resumeData.basics.about,
  
  // Site specific configuration
  heroImage: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  
  // Data from resume
  skills: resumeData.skills,
  experience: resumeData.experience.slice(0, 2), // Only show last 2 jobs
  projects: resumeData.projects,
  education: resumeData.education,
  languages: resumeData.languages
} as const;

// Type definitions for resume data
export type Skill = {
  name: string;
  years: number;
};

export type Experience = {
  company: string;
  website: string;
  title: string;
  location: string;
  period: string;
  tools: string[];
};

export type Project = {
  title: string;
  description: string;
  github?: string;
  technologies: string[];
};

export type Education = {
  school: string;
  degree: string;
  location: string;
  period: string;
  achievements: string[];
};

export type Language = {
  name: string;
  level: string;
};