import Link from "next/link";
import { Job } from "@/types/datatypes";
import { useJobs } from "@/context/jobcontext";
import { MapPin, DollarSign, Clock, Heart, Building2 } from "lucide-react";

interface JobCardProps {
  job: Job;
}

const TYPE_BADGE_STYLES: Record<Job["type"], string> = {
  "Full-time": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Part-time": "bg-blue-50 text-blue-700 border-blue-200",
  Internship: "bg-amber-50 text-amber-700 border-amber-200",
  Remote: "bg-indigo-50 text-indigo-700 border-indigo-200",
};

export default function JobCard({ job }: JobCardProps) {
  const { savedJobIds, toggleSaveJob, userRole } = useJobs();
  const isSaved = savedJobIds.includes(job.id);

  return (
    <div className="group bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between relative">
      <div>
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-700 text-lg border border-slate-200 group-hover:border-indigo-300 transition-colors">
              {job.company.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors text-base line-clamp-1">
                <Link href={`/job/${job.id}`}>{job.title}</Link>
              </h3>
              <p className="text-xs font-medium text-slate-500 flex items-center gap-1 mt-0.5">
                <Building2 className="w-3.5 h-3.5" />
                {job.company.name}
              </p>
            </div>
          </div>

          {userRole === "candidate" && (
            <button
              onClick={() => toggleSaveJob(job.id)}
              aria-label={isSaved ? "Remove from saved jobs" : "Save job"}
              className={`p-2 rounded-lg border transition-colors ${
                isSaved
                  ? "bg-rose-50 border-rose-200 text-rose-500"
                  : "bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Heart className={`w-4 h-4 ${isSaved ? "fill-rose-500" : ""}`} />
            </button>
          )}
        </div>

        <p className="text-xs text-slate-600 line-clamp-2 my-3 leading-relaxed">
          {job.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${TYPE_BADGE_STYLES[job.type]}`}
          >
            {job.type}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
            <MapPin className="w-3 h-3 text-slate-400" />
            {job.location}
          </span>
          {job.salary && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
              <DollarSign className="w-3 h-3 text-emerald-600" />
              {job.salary}
            </span>
          )}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] text-slate-400 flex items-center gap-1">
          <Clock className="w-3 h-3" />
          Posted {job.postedDate}
        </span>
        <Link
          href={`/job/${job.id}`}
          className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-md transition-colors"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
