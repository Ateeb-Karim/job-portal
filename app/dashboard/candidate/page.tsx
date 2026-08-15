"use client";

import Link from "next/link";
import {
  FileText,
  Heart,
  MapPin,
  Clock,
  ExternalLink,
  Briefcase,
} from "lucide-react";
import { useJobs } from "@/context/jobcontext";
import { Job } from "@/types/datatypes";

const TYPE_BADGE_STYLES: Record<Job["type"], string> = {
  "Full-time": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Part-time": "bg-blue-50 text-blue-700 border-blue-200",
  Internship: "bg-amber-50 text-amber-700 border-amber-200",
  Remote: "bg-indigo-50 text-indigo-700 border-indigo-200",
};

export default function CandidateDashboardPage() {
  const { jobs, applications, savedJobIds, currentUser } = useJobs();

  const myApplications = applications
    .filter((app) => app.candidateEmail === currentUser?.email)
    .map((app) => ({
      application: app,
      job: jobs.find((j) => j.id === app.jobId),
    }))
    .filter((entry) => entry.job !== undefined);

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            My Dashboard
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Track your applications and saved opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">
                {myApplications.length}
              </p>
              <p className="text-xs text-slate-500">Applications Submitted</p>
            </div>
          </div>

          <Link
            href="/jobslisting?saved=true"
            className="bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4 hover:border-rose-300 transition-colors"
          >
            <div className="w-11 h-11 rounded-lg bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">
                {savedJobIds.length}
              </p>
              <p className="text-xs text-slate-500">Saved Jobs</p>
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-900 text-sm">
              My Applications
            </h2>
          </div>

          {myApplications.length === 0 ? (
            <div className="p-12 text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400 mb-3">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                No applications yet
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                Browse open positions and start applying.
              </p>
              <Link
                href="/jobslisting"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                Find Jobs
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-slate-100">
              {myApplications.map(({ application, job }) => (
                <li
                  key={application.id}
                  className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4 min-w-0">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-700 text-sm border border-slate-200 shrink-0">
                      {job!.company.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <Link
                        href={`/jobslisting/${job!.id}`}
                        className="font-semibold text-slate-900 text-sm hover:text-indigo-600 transition-colors line-clamp-1"
                      >
                        {job!.title}
                      </Link>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-slate-500">
                        <span
                          className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${TYPE_BADGE_STYLES[job!.type]}`}
                        >
                          {job!.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job!.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Applied {application.appliedAt}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                      Submitted
                    </span>
                    {application.resumeUrl && (
                      <a
                        href={application.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                      >
                        Resume
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
