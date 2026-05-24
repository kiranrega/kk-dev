export interface Project {
  name: string;
  subtitle: string;
  period: string;
  description: string;
  platform: string;
  type: "Production" | "Enterprise" | "Personal";
  role: string;
  keyResult: string;
  challenge?: string;
  outcome?: string;
  bullets: string[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  isWorking?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  duration: string;
  bullets: string[];
  tech: string[];
}

export interface Profile {
  name: string;
  role: string;
  headline: string;
  summary: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  github: string;
  linkedin: string;
  pronouns: string;
}
