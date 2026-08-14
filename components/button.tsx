"use client";

import { useJobs } from "@/context/jobcontext";
import { useRouter } from "next/navigation";
import { JobType } from "@/types/datatypes";

interface buttonPROPS {
  value: string;
  title: string;
  type: JobType | "All";
}

export default function Button({ value, title, type }: buttonPROPS) {
  const router = useRouter();
  const { setFilters } = useJobs();

  return (
    <button
      onClick={() => {
        setFilters((p) => ({ ...p, title: title, type: type }));
        router.push("/jobs");
      }}
      className="underline hover:text-white transition-colors"
    >
      {value}
    </button>
  );
}
