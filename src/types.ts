import { ReactNode } from 'react';

export interface SkillItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Systems & OS' | 'Databases & APIs';
  iconName: string;
  description: string;
  proficiency: number; // percentage e.g. 92
  experienceYears: string;
  codeSnippet: string;
  highlights: string[];
}

export interface SubAppDemoType {
  type: 'api-tester' | 'sql-query' | 'log-viewer' | 'system-monitor' | 'code-compiler' | 'data-formatter' | 'pos-system' | 'mess-manager';
  title: string;
  interactive: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Full-Stack' | 'Backend & APIs' | 'Systems & Linux' | 'Web Apps';
  techTags: string[];
  liveUrl: string; // Live Site or Sub-app link
  githubUrl: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
  highlights: string[];
  subAppDemo?: SubAppDemoType;
  starsCount?: number;
  forksCount?: number;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  techUsed: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl?: string;
  content: string;
  rating: number; // e.g. 5
  date: string;
  linkedProject?: string;
}

export interface GithubStatsType {
  username: string;
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  totalContributions: number;
  pullRequests: number;
  commitStreakDays: number;
  topLanguages: { name: string; percentage: number; color: string }[];
}

export interface TerminalCommand {
  cmd: string;
  output: string | ReactNode;
}
