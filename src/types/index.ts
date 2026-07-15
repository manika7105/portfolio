export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  image: string;
  featured: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  start: string;
  end: string;
  score: string;
  ongoing?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  image?: string;
}

export interface AchievementPhoto {
  src: string | null;
  alt: string;
  caption: string;
  aspect?: string;
}

export interface Achievement {
  title: string;
  description: string;
  tag: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "phone" | "location";
}
