"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useJobs } from "@/context/jobcontext";
import JobForm, { JobFormValues } from "@/components/jobform";

export default function PostJobPage() {
  const router = useRouter();
  const { addJob } = useJobs();

  const handleSubmit = (values: JobFormValues) => {
    addJob(values);
    router.push("/dashboard/employer");
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/dashboard/employer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Dashboard
        </Link>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Post a New Job
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Fill in the details below to publish a new opportunity.
          </p>
        </div>

        <JobForm
          onSubmit={handleSubmit}
          submitLabel="Publish Job"
          cancelHref="/dashboard/employer"
        />
      </div>
    </div>
  );
}
