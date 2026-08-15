"use client";

import Link from "next/link";
import { Building2, MapPin, ArrowRight } from "lucide-react";
import { useJobs } from "@/context/jobcontext";

export default function CompaniesPage() {
  const { jobs } = useJobs();

  const companies = Array.from(
    jobs
      .reduce((map, job) => {
        const existing = map.get(job.company.name);
        if (existing) {
          existing.jobCount += 1;
          existing.locations.add(job.location);
        } else {
          map.set(job.company.name, {
            name: job.company.name,
            about: job.company.about,
            website: job.company.website,
            jobCount: 1,
            locations: new Set([job.location]),
          });
        }
        return map;
      }, new Map<string, { name: string; about: string; website: string; jobCount: number; locations: Set<string> }>())
      .values(),
  );

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Companies Hiring Now
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            {companies.length}{" "}
            {companies.length === 1 ? "company" : "companies"} with open
            positions
          </p>
        </div>

        {companies.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
            <p className="text-sm text-slate-500">
              No companies with active job postings right now.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {companies.map((company) => (
              <div
                key={company.name}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col gap-4 hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-700 text-lg border border-slate-200 shrink-0">
                    {company.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-slate-900 text-sm line-clamp-1">
                      {company.name}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {Array.from(company.locations).slice(0, 2).join(", ")}
                      {company.locations.size > 2 ? " +more" : ""}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {company.about}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                    <Building2 className="w-3 h-3" />
                    {company.jobCount} open{" "}
                    {company.jobCount === 1 ? "role" : "roles"}
                  </span>
                  <Link
                    href={`/jobslisting?title=${encodeURIComponent(company.name)}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    View Jobs
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
