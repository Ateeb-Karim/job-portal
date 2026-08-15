"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Plus, X } from "lucide-react";
import { Job, JobType } from "@/types/datatypes";

const JOB_TYPES: JobType[] = ["Full-time", "Part-time", "Internship", "Remote"];

export type JobFormValues = Omit<Job, "id" | "postedDate">;

interface JobFormProps {
  initialValues?: JobFormValues;
  onSubmit: (values: JobFormValues) => void;
  submitLabel: string;
  cancelHref: string;
}

const EMPTY_VALUES: JobFormValues = {
  title: "",
  location: "",
  salary: "",
  type: "Full-time",
  description: "",
  responsibilities: [""],
  requirements: [""],
  isFeatured: false,
  company: { name: "", about: "", website: "" },
};

export default function JobForm({
  initialValues,
  onSubmit,
  submitLabel,
  cancelHref,
}: JobFormProps) {
  const base = initialValues ?? EMPTY_VALUES;

  const [title, setTitle] = useState(base.title);
  const [location, setLocation] = useState(base.location);
  const [salary, setSalary] = useState(base.salary ?? "");
  const [type, setType] = useState<JobType>(base.type);
  const [description, setDescription] = useState(base.description);
  const [isFeatured, setIsFeatured] = useState(base.isFeatured);

  const [responsibilities, setResponsibilities] = useState<string[]>(
    base.responsibilities.length > 0 ? base.responsibilities : [""],
  );
  const [requirements, setRequirements] = useState<string[]>(
    base.requirements.length > 0 ? base.requirements : [""],
  );

  const [companyName, setCompanyName] = useState(base.company.name);
  const [companyAbout, setCompanyAbout] = useState(base.company.about);
  const [companyWebsite, setCompanyWebsite] = useState(base.company.website);

  const updateListItem = (
    list: string[],
    setList: (v: string[]) => void,
    index: number,
    value: string,
  ) => {
    const next = [...list];
    next[index] = value;
    setList(next);
  };

  const addListItem = (list: string[], setList: (v: string[]) => void) => {
    setList([...list, ""]);
  };

  const removeListItem = (
    list: string[],
    setList: (v: string[]) => void,
    index: number,
  ) => {
    setList(list.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit({
      title,
      location,
      salary: salary || undefined,
      type,
      description,
      responsibilities: responsibilities.filter((r) => r.trim() !== ""),
      requirements: requirements.filter((r) => r.trim() !== ""),
      isFeatured,
      company: {
        name: companyName,
        about: companyAbout,
        website: companyWebsite,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-5">
        <h2 className="font-semibold text-slate-900 text-sm">Job Details</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-xs font-semibold text-slate-700">
              Job Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Senior Frontend Engineer"
              className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Location
            </label>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Remote, New York, NY"
              className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Job Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as JobType)}
              className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors bg-white"
            >
              {JOB_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-xs font-semibold text-slate-700">
              Salary{" "}
              <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="e.g. $90,000 - $120,000"
              className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700">
            Job Description
          </label>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Describe the role, team, and what makes this opportunity great..."
            className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
          />
        </div>

        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={isFeatured}
            onChange={(e) => setIsFeatured(e.target.checked)}
            className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
          />
          Feature this job on the homepage
        </label>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="font-semibold text-slate-900 text-sm">
          Responsibilities
        </h2>
        {responsibilities.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              type="text"
              value={item}
              onChange={(e) =>
                updateListItem(
                  responsibilities,
                  setResponsibilities,
                  i,
                  e.target.value,
                )
              }
              placeholder="e.g. Build and maintain reusable components"
              className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {responsibilities.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  removeListItem(responsibilities, setResponsibilities, i)
                }
                className="p-2 text-slate-400 hover:text-rose-600 transition-colors shrink-0"
                aria-label="Remove responsibility"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => addListItem(responsibilities, setResponsibilities)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Responsibility
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="font-semibold text-slate-900 text-sm">Requirements</h2>
        {requirements.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              type="text"
              value={item}
              onChange={(e) =>
                updateListItem(requirements, setRequirements, i, e.target.value)
              }
              placeholder="e.g. 3+ years of React experience"
              className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {requirements.length > 1 && (
              <button
                type="button"
                onClick={() => removeListItem(requirements, setRequirements, i)}
                className="p-2 text-slate-400 hover:text-rose-600 transition-colors shrink-0"
                aria-label="Remove requirement"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => addListItem(requirements, setRequirements)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Requirement
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="font-semibold text-slate-900 text-sm">
          Company Details
        </h2>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700">
            Company Name
          </label>
          <input
            type="text"
            required
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="e.g. Nova Labs"
            className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700">
            About the Company
          </label>
          <textarea
            required
            value={companyAbout}
            onChange={(e) => setCompanyAbout(e.target.value)}
            rows={3}
            placeholder="A short description of your company..."
            className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700">
            Company Website
          </label>
          <input
            type="url"
            value={companyWebsite}
            onChange={(e) => setCompanyWebsite(e.target.value)}
            placeholder="https://example.com"
            className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          {submitLabel}
        </button>
        <Link
          href={cancelHref}
          className="text-sm font-semibold text-slate-600 hover:text-slate-900 px-6 py-3 rounded-lg transition-colors"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
