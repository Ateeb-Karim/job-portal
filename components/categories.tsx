"use client";

import { useJobs } from "@/context/jobcontext";
import { Code2, Paintbrush, TrendingUp, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

const CATEGORIES = [
  {
    name: "Software Development",
    count: "140+ Jobs",
    icon: Code2,
    color: "text-blue-600 bg-blue-50",
  },
  {
    name: "UI / UX & Design",
    count: "85+ Jobs",
    icon: Paintbrush,
    color: "text-purple-600 bg-purple-50",
  },
  {
    name: "Marketing & Sales",
    count: "60+ Jobs",
    icon: TrendingUp,
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    name: "Cybersecurity & Cloud",
    count: "45+ Jobs",
    icon: ShieldCheck,
    color: "text-amber-600 bg-amber-50",
  },
];

export default function Categories() {
  const { setFilters } = useJobs();
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {CATEGORIES.map((cat, i) => {
        const Icon = cat.icon;
        return (
          <div
            key={i}
            onClick={() => {
              setFilters((p) => ({ ...p, title: cat.name.split(" ")[0] }));
              router.push("/jobs");
            }}
            className="group cursor-pointer bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 shadow-xs hover:shadow-md transition-all flex items-center gap-4"
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
              <span className="text-xs text-slate-500">{cat.count}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
