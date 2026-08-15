import Link from "next/link";
import { Briefcase, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md text-center">
        <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-600">
          <Briefcase className="w-8 h-8" />
        </div>

        <p className="text-sm font-bold text-indigo-600 tracking-wide">404</p>
        <h1 className="text-2xl font-bold text-slate-900 mt-2">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-500 mt-2 max-w-sm mx-auto">
          The page you're looking for doesn't exist, or the job posting may have
          been removed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/jobslisting"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            <Search className="w-4 h-4" />
            Browse Jobs
          </Link>
        </div>
      </div>
    </div>
  );
}
