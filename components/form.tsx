"use client";

import { useJobs } from "@/context/jobcontext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Search } from "lucide-react";

export default function Form() {
  const router = useRouter();
  const { setFilters } = useJobs();
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters((prev) => ({
      ...prev,
      title: searchTitle,
      location: searchLocation,
    }));
    router.push("/jobs");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 max-w-4xl mx-auto bg-white rounded-2xl p-2.5 sm:p-3 shadow-2xl flex flex-col md:flex-row items-stretch gap-2 text-slate-800"
    >
      <div className="flex-1 flex items-center gap-3 px-3 py-2 border-b md:border-b-0 md:border-r border-slate-200">
        <Search className="w-5 h-5 text-indigo-600 shrink-0" />
        <input
          type="text"
          placeholder="Job title, skill, or company..."
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="w-full bg-transparent text-sm focus:outline-none placeholder:text-slate-400"
        />
      </div>
      <div className="flex-1 flex items-center gap-3 px-3 py-2">
        <MapPin className="w-5 h-5 text-indigo-600 shrink-0" />
        <input
          type="text"
          placeholder="City, state, or 'Remote'..."
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          className="w-full bg-transparent text-sm focus:outline-none placeholder:text-slate-400"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-indigo-500/25 flex items-center justify-center gap-2"
      >
        <Search className="w-4 h-4" />
        Search Jobs
      </button>
    </form>
  );
}
