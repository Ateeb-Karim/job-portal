"use client";

import { useJobs } from "@/context/jobcontext";
import JobCard from "@/components/jobcard";

export default function FeaturedJobs() {
  const { jobs } = useJobs();
  const featured = jobs.filter((job) => job.isFeatured).slice(0, 6);

  if (featured.length === 0) {
    return (
      <p className="text-sm text-slate-400">
        No featured jobs available right now.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {featured.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
