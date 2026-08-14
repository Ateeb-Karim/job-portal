"use client";

import React, { useMemo } from "react";
import { useJobs } from "@/context/jobcontext";
import JobCard from "@/components/jobcard";
import { JobType } from "@/types/datatypes";
import {
  Search,
  MapPin,
  X,
  RotateCcw,
  SlidersHorizontal,
  Heart,
  Briefcase,
} from "lucide-react";
import { useSearchParams } from "next/navigation";

const JOB_TYPES: (JobType | "All")[] = [
  "All",
  "Full-time",
  "Part-time",
  "Internship",
  "Remote",
];

export default function JobsPage() {
  const {
    jobs,
    filteredJobs,
    filters,
    setFilters,
    resetFilters,
    savedJobIds,
    userRole,
  } = useJobs();

  const searchParams = useSearchParams();
  const showOnlySaved = searchParams.get("saved") === "true";

  const displayedJobs = useMemo(() => {
    if (showOnlySaved) {
      return filteredJobs.filter((job) => savedJobIds.includes(job.id));
    }
    return filteredJobs;
  }, [filteredJobs, savedJobIds, showOnlySaved]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, location: e.target.value }));
  };

  const handleTypeSelect = (type: JobType | "All") => {
    setFilters((prev) => ({ ...prev, type }));
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {showOnlySaved ? "Your Saved Jobs" : "Explore Open Positions"}
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                {showOnlySaved
                  ? `Showing ${displayedJobs.length} bookmarked opportunities`
                  : `Showing ${displayedJobs.length} available opportunities out of ${jobs.length}`}
              </p>
            </div>
            {(filters.title ||
              filters.location ||
              filters.type !== "All" ||
              showOnlySaved) && (
              <button
                onClick={() => {
                  resetFilters();
                  if (showOnlySaved) {
                    window.history.replaceState(null, "", "/jobs");
                  }
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-3 py-2 rounded-lg transition-colors self-start sm:self-auto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset All Filters
              </button>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <aside className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-6 lg:col-span-1">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h2 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-indigo-600" />
                Filter Jobs
              </h2>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Job Title or Company
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="e.g. Next.js, Frontend"
                  value={filters.title}
                  onChange={handleTitleChange}
                  className="w-full pl-9 pr-3 py-2  border rounded-lg text-xs text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
                />
                {filters.title && (
                  <button
                    onClick={() => setFilters((p) => ({ ...p, title: "" }))}
                    className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>{" "}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Location
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="City or Remote"
                  value={filters.location}
                  onChange={handleLocationChange}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border  rounded-lg text-xs text-slate-900 focus:outline-none transition-colors"
                />
                {filters.location && (
                  <button
                    onClick={() => setFilters((p) => ({ ...p, location: "" }))}
                    className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-700">
                Employment Type
              </label>
              <div className="space-y-1">
                {JOB_TYPES.map((type) => {
                  const isSelected = filters.type === type;
                  return (
                    <button
                      key={type}
                      onClick={() => handleTypeSelect(type)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <span>{type}</span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            {userRole === "candidate" && (
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={showOnlySaved ? "/jobs" : "/jobs?saved=true"}
                  className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold border transition-all ${
                    showOnlySaved
                      ? "bg-rose-500 text-white border-rose-600"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${showOnlySaved ? "fill-white" : "text-rose-500"}`}
                  />
                  {showOnlySaved
                    ? "Showing Saved Jobs"
                    : `View Saved (${savedJobIds.length})`}
                </a>
              </div>
            )}
          </aside>
          <main className="lg:col-span-3 space-y-4">
            {(filters.title || filters.location || filters.type !== "All") && (
              <div className="flex flex-wrap items-center gap-2 bg-white p-3 rounded-lg border border-slate-200 text-xs">
                <span className="font-semibold text-slate-500">
                  Active Filters:
                </span>
                {filters.title && (
                  <span className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 border border-indigo-200 px-2.5 py-1 rounded-md font-medium">
                    "{filters.title}"
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-indigo-900"
                      onClick={() => setFilters((p) => ({ ...p, title: "" }))}
                    />
                  </span>
                )}
                {filters.location && (
                  <span className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 border border-indigo-200 px-2.5 py-1 rounded-md font-medium">
                    Location: {filters.location}
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-indigo-900"
                      onClick={() =>
                        setFilters((p) => ({ ...p, location: "" }))
                      }
                    />
                  </span>
                )}
                {filters.type !== "All" && (
                  <span className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 border border-indigo-200 px-2.5 py-1 rounded-md font-medium">
                    Type: {filters.type}
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-indigo-900"
                      onClick={() => setFilters((p) => ({ ...p, type: "All" }))}
                    />
                  </span>
                )}
              </div>
            )}
            {displayedJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {displayedJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">
                    No matching jobs found
                  </h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    We couldn't find any positions matching your search
                    parameters. Try broadening your keyword or clearing location
                    filters.
                  </p>
                </div>
                <button
                  onClick={resetFilters}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Search Criteria
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
