"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";
import {
  Job,
  UserRole,
  JobApplication,
  User,
  JobType,
} from "@/types/datatypes";
import { INITIAL_JOBS } from "@/data/mockdata";

interface FilterState {
  title: string;
  location: string;
  type: JobType | "All";
}

interface JobContextType {
  jobs: Job[];
  filteredJobs: Job[];
  savedJobIds: string[];
  currentUser: User | null;
  userRole: UserRole;
  filters: FilterState;
  applications: JobApplication[];

  setUserRole: (role: UserRole) => void;
  setCurrentUser: (user: User | null) => void;
  resetFilters: () => void;
  addJob: (job: Omit<Job, "id" | "postedDate">) => void;
  editJob: (id: string, updatedJob: Partial<Job>) => void;
  deleteJob: (id: string) => void;
  toggleSaveJob: (jobId: string) => void;
  applyForJob: (
    application: Omit<JobApplication, "id" | "appliedAt">,
  ) => boolean;
  hasApplied: (jobId: string, candidateEmail: string) => boolean;

  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

const initialFilters: FilterState = {
  title: "",
  location: "",
  type: "All",
};

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState<Job[]>(INITIAL_JOBS);
  const [savedJobIds, setSavedJobIds] = useState<string[]>([]);
  const [userRole, setUserRoleState] = useState<UserRole>("candidate");
  const [currentUser, setCurrentUser] = useState<User | null>({
    id: "u1",
    name: "Ateeb Karim",
    email: "ateeb@example.com",
    role: "candidate",
  });
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  useEffect(() => {
    const localJobs = localStorage.getItem("job_portal_jobs");
    const localSaved = localStorage.getItem("job_portal_saved");
    const localRole = localStorage.getItem(
      "job_portal_role",
    ) as UserRole | null;
    const localApps = localStorage.getItem("job_portal_apps");

    if (localJobs) setJobs(JSON.parse(localJobs));
    if (localSaved) setSavedJobIds(JSON.parse(localSaved));
    if (localApps) setApplications(JSON.parse(localApps));
    if (localRole) setUserRoleState(localRole);
  }, []);

  const setUserRole = (role: UserRole) => {
    setUserRoleState(role);
    localStorage.setItem("job_portal_role", role);
    if (currentUser) {
      setCurrentUser({ ...currentUser, role });
    }
  };

  const saveJobsToStorage = (updatedJobs: Job[]) => {
    setJobs(updatedJobs);
    localStorage.setItem("job_portal_jobs", JSON.stringify(updatedJobs));
  };

  const addJob = (newJobData: Omit<Job, "id" | "postedDate">) => {
    const newJob: Job = {
      ...newJobData,
      id: Date.now().toString(),
      postedDate: new Date().toISOString().split("T")[0],
    };
    const updated = [newJob, ...jobs];
    saveJobsToStorage(updated);
  };

  const editJob = (id: string, updatedJob: Partial<Job>) => {
    const updated = jobs.map((job) =>
      job.id === id ? { ...job, ...updatedJob } : job,
    );
    saveJobsToStorage(updated);
  };

  const deleteJob = (id: string) => {
    const updated = jobs.filter((job) => job.id !== id);
    saveJobsToStorage(updated);
  };

  const toggleSaveJob = (jobId: string) => {
    let updatedSaved: string[];
    if (savedJobIds.includes(jobId)) {
      updatedSaved = savedJobIds.filter((id) => id !== jobId);
    } else {
      updatedSaved = [...savedJobIds, jobId];
    }
    setSavedJobIds(updatedSaved);
    localStorage.setItem("job_portal_saved", JSON.stringify(updatedSaved));
  };

  const applyForJob = (appData: Omit<JobApplication, "id" | "appliedAt">) => {
    const alreadyApplied = applications.some(
      (app) =>
        app.jobId === appData.jobId &&
        app.candidateEmail === appData.candidateEmail,
    );

    if (alreadyApplied) return false;

    const newApp: JobApplication = {
      ...appData,
      id: Date.now().toString(),
      appliedAt: new Date().toISOString().split("T")[0],
    };
    const updatedApps = [newApp, ...applications];
    setApplications(updatedApps);
    localStorage.setItem("job_portal_apps", JSON.stringify(updatedApps));
    return true;
  };

  const hasApplied = (jobId: string, candidateEmail: string) => {
    return applications.some(
      (app) => app.jobId === jobId && app.candidateEmail === candidateEmail,
    );
  };

  const resetFilters = () => setFilters(initialFilters);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesTitle =
        !filters.title ||
        job.title.toLowerCase().includes(filters.title.toLowerCase()) ||
        job.company.name.toLowerCase().includes(filters.title.toLowerCase());

      const matchesLocation =
        !filters.location ||
        job.location.toLowerCase().includes(filters.location.toLowerCase());

      const matchesType = filters.type === "All" || job.type === filters.type;

      return matchesTitle && matchesLocation && matchesType;
    });
  }, [jobs, filters]);

  return (
    <JobContext.Provider
      value={{
        jobs,
        filteredJobs,
        savedJobIds,
        currentUser,
        userRole,
        filters,
        applications,

        setUserRole,
        setCurrentUser,
        setFilters,
        resetFilters,
        addJob,
        editJob,
        deleteJob,
        toggleSaveJob,
        applyForJob,
        hasApplied,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobs must be used within a JobProvider");
  }
  return context;
};
