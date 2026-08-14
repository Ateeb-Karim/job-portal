export type JobType = "Full-time" | "Part-time" | "Internship" | "Remote";

export type UserRole = "candidate" | "employer";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  website: string;
  logo: string;
}

export interface JobApplication {
  id: string;
  jobId: string;
  userId: string;
  candidateName: string;
  candidateEmail: string;
  resumeUrl: string;
  coverLetter?: string;
  appliedAt: string;
}

export interface Job {
  id: string;
  title: string;
  location: string;
  salary: string;
  type: JobType;
  postedDate: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  isFeatured: boolean;
  company: {
    name: string;
    about: string;
    website: string;
  };
}
