"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  PlusCircle,
  Pencil,
  Trash2,
  MapPin,
  Users,
  CheckCircle2,
  X,
} from "lucide-react";
import { useJobs } from "@/context/jobcontext";
import { Job } from "@/types/datatypes";

const TYPE_BADGE_STYLES: Record<Job["type"], string> = {
  "Full-time": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Part-time": "bg-blue-50 text-blue-700 border-blue-200",
  Internship: "bg-amber-50 text-amber-700 border-amber-200",
  Remote: "bg-indigo-50 text-indigo-700 border-indigo-200",
};

export default function EmployerDashboardPage() {
  const { jobs, applications, deleteJob } = useJobs();
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const applicantCount = (jobId: string) =>
    applications.filter((app) => app.jobId === jobId).length;

  const handleDelete = (id: string) => {
    deleteJob(id);
    setConfirmDeleteId(null);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Employer Dashboard
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Manage your job postings and track applicants
            </p>
          </div>
          <Link
            href="/dashboard/employer/post-job"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            Post New Job
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{jobs.length}</p>
              <p className="text-xs text-slate-500">Jobs Posted</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">
                {applications.length}
              </p>
              <p className="text-xs text-slate-500">Total Applicants</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">
                {jobs.filter((j) => j.isFeatured).length}
              </p>
              <p className="text-xs text-slate-500">Featured Listings</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-900 text-sm">
              Your Job Postings
            </h2>
          </div>

          {jobs.length === 0 ? (
            <div className="p-12 text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400 mb-3">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                No jobs posted yet
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                Get started by posting your first job opportunity.
              </p>
              <Link
                href="/dashboard/employer/post-job"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                <PlusCircle className="w-4 h-4" />
                Post New Job
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-slate-100">
              {jobs.map((job) => (
                <li
                  key={job.id}
                  className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4 min-w-0">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-700 text-sm border border-slate-200 shrink-0">
                      {job.company.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <Link
                        href={`/jobslisting/${job.id}`}
                        className="font-semibold text-slate-900 text-sm hover:text-indigo-600 transition-colors line-clamp-1"
                      >
                        {job.title}
                      </Link>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-slate-500">
                        <span
                          className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${TYPE_BADGE_STYLES[job.type]}`}
                        >
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {applicantCount(job.id)} applicant
                          {applicantCount(job.id) === 1 ? "" : "s"}
                        </span>
                        <span>Posted {job.postedDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                    {confirmDeleteId === job.id ? (
                      <div className="flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-lg px-3 py-1.5">
                        <span className="text-xs font-semibold text-rose-700">
                          Delete this job?
                        </span>
                        <button
                          onClick={() => handleDelete(job.id)}
                          className="text-xs font-bold text-rose-700 hover:text-rose-900"
                        >
                          Yes
                        </button>
                        <button
                          onClick={() => setConfirmDeleteId(null)}
                          className="text-slate-400 hover:text-slate-600"
                          aria-label="Cancel delete"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <Link
                          href={`/dashboard/employer/${job.id}`}
                          className="p-2 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                          aria-label="Edit job"
                        >
                          <Pencil className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => setConfirmDeleteId(job.id)}
                          className="p-2 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                          aria-label="Delete job"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </>
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
