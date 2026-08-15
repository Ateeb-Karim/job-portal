"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  DollarSign,
  Clock,
  Heart,
  Building2,
  Globe,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { useJobs } from "@/context/jobcontext";
import ApplyModal from "@/components/applymodal";
import { Job } from "@/types/datatypes";

const TYPE_BADGE_STYLES: Record<Job["type"], string> = {
  "Full-time": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Part-time": "bg-blue-50 text-blue-700 border-blue-200",
  Internship: "bg-amber-50 text-amber-700 border-amber-200",
  Remote: "bg-indigo-50 text-indigo-700 border-indigo-200",
};

export default function JobDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { jobs, savedJobIds, toggleSaveJob, userRole } = useJobs();
  const [showApplyModal, setShowApplyModal] = useState(false);

  const job = jobs.find((j) => j.id === id);

  if (!job) {
    notFound();
  }

  const isSaved = savedJobIds.includes(job.id);

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/jobslisting"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Jobs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-700 text-xl border border-slate-200 shrink-0">
                    {job.company.name.charAt(0)}
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {job.title}
                    </h1>
                    <p className="text-sm font-medium text-slate-500 flex items-center gap-1 mt-1">
                      <Building2 className="w-3.5 h-3.5" />
                      {job.company.name}
                    </p>
                  </div>
                </div>

                {userRole === "candidate" && (
                  <button
                    onClick={() => toggleSaveJob(job.id)}
                    aria-label={isSaved ? "Remove from saved jobs" : "Save job"}
                    className={`p-2.5 rounded-lg border transition-colors shrink-0 ${
                      isSaved
                        ? "bg-rose-50 border-rose-200 text-rose-500"
                        : "bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 ${isSaved ? "fill-rose-500" : ""}`}
                    />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-5">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${TYPE_BADGE_STYLES[job.type]}`}
                >
                  {job.type}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  {job.location}
                </span>
                {job.salary && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                    <DollarSign className="w-3 h-3 text-emerald-600" />
                    {job.salary}
                  </span>
                )}
                <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" />
                  Posted {job.postedDate}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="font-bold text-slate-900 text-base mb-2">
                  Job Description
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {job.description}
                </p>
              </div>

              <div>
                <h2 className="font-bold text-slate-900 text-base mb-3">
                  Responsibilities
                </h2>
                <ul className="space-y-2">
                  {job.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-bold text-slate-900 text-base mb-3">
                  Requirements
                </h2>
                <ul className="space-y-2">
                  {job.requirements.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <button
                onClick={() => setShowApplyModal(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 rounded-lg transition-colors"
              >
                Apply Now
              </button>
              {userRole === "candidate" && (
                <button
                  onClick={() => toggleSaveJob(job.id)}
                  className={`w-full mt-2.5 flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-lg border transition-colors ${
                    isSaved
                      ? "bg-rose-50 border-rose-200 text-rose-600"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${isSaved ? "fill-rose-500 text-rose-500" : ""}`}
                  />
                  {isSaved ? "Saved" : "Save Job"}
                </button>
              )}
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
              <h2 className="font-bold text-slate-900 text-sm">
                About {job.company.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {job.company.about}
              </p>
              {job.company.website && (
                <a
                  href={job.company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  <Globe className="w-3.5 h-3.5" />
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {showApplyModal && (
        <ApplyModal job={job} onClose={() => setShowApplyModal(false)} />
      )}
    </div>
  );
}
