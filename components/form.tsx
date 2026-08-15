"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin } from "lucide-react";
import { useJobs } from "@/context/jobcontext";

export default function Form() {
  const router = useRouter();
  const { setFilters } = useJobs();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setFilters((prev) => ({
      ...prev,
      title,
      location,
    }));

    const params = new URLSearchParams();
    if (title) params.set("title", title);
    if (location) params.set("location", location);

    router.push(
      `/jobslisting${params.toString() ? `?${params.toString()}` : ""}`,
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 mx-auto max-w-3xl bg-white rounded-2xl shadow-lg p-2 flex flex-col sm:flex-row gap-2"
    >
      <div className="flex items-center flex-1 px-3 py-2.5 rounded-xl focus-within:bg-slate-50 transition-colors">
        <Search className="w-5 h-5 text-slate-400 shrink-0" />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Job title, keywords, or company"
          className="w-full ml-3 text-sm text-slate-900 outline-none bg-transparent"
        />
      </div>

      <div className="hidden sm:block w-px bg-slate-200 my-1" />

      <div className="flex items-center flex-1 px-3 py-2.5 rounded-xl focus-within:bg-slate-50 transition-colors">
        <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="City, state, or remote"
          className="w-full ml-3 text-sm text-slate-900 outline-none bg-transparent"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shrink-0"
      >
        Search Jobs
      </button>
    </form>
  );
}
