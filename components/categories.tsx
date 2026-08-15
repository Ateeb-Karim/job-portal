"use client";

import Link from "next/link";
import { Code2, Paintbrush, TrendingUp, Headset } from "lucide-react";
import { useJobs } from "@/context/jobcontext";

interface Category {
  name: string;
  keywords: string[];
  icon: React.ElementType;
  color: string;
}

const CATEGORIES: Category[] = [
  {
    name: "Software Development",
    keywords: ["engineer", "developer", "frontend", "backend"],
    icon: Code2,
    color: "text-blue-600 bg-blue-50",
  },
  {
    name: "UI / UX & Design",
    keywords: ["design"],
    icon: Paintbrush,
    color: "text-purple-600 bg-purple-50",
  },
  {
    name: "Marketing & Sales",
    keywords: ["marketing", "sales"],
    icon: TrendingUp,
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    name: "Customer Support",
    keywords: ["support"],
    icon: Headset,
    color: "text-amber-600 bg-amber-50",
  },
];

export default function Categories() {
  const { jobs } = useJobs();

  const countFor = (keywords: string[]) =>
    jobs.filter((job) =>
      keywords.some((kw) => job.title.toLowerCase().includes(kw)),
    ).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {CATEGORIES.map((cat) => {
        const Icon = cat.icon;
        const count = countFor(cat.keywords);

        return (
          <Link
            key={cat.name}
            href={`/jobslisting?title=${encodeURIComponent(cat.keywords[0])}`}
            className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 shadow-xs hover:shadow-md transition-all flex items-center gap-4"
          >
            <div
              className={`p-3 rounded-lg ${cat.color} group-hover:scale-105 transition-transform`}
            >
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                {cat.name}
              </h3>
              <span className="text-xs text-slate-500">
                {count} {count === 1 ? "open role" : "open roles"}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
