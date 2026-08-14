"use client";

import { useJobs } from "@/context/jobcontext";
import JobCard from "./jobcard";

export default function FeaturedJobs() {
  const { jobs } = useJobs();
  const featuredJobs = jobs.filter((job) => job.isFeatured).slice(0, 6);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
