export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  dateOfBirth: string;
  placeOfBirth: string;
  gender: string;
  nationality: string;
  civilStatus: string;
  website: string;
  customField: string;
}

export interface Skill {
  id: string;
  name: string;
  level: 'Básico' | 'Intermediário' | 'Avançado';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  course: string;
  institution: string;
  period: string;
}

export interface Language {
  id: string;
  name: string;
}

// --- NOVAS INTERFACES ---
export interface Volunteering {
  id: string;
  organization: string;
  role: string;
  period: string;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  date: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
  languages: Language[];
  // --- NOVOS CAMPOS ---
  volunteering: Volunteering[];
  certifications: Certification[];
}