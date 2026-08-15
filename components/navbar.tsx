"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useJobs } from "@/context/jobcontext";
import {
  Briefcase,
  Heart,
  Menu,
  X,
  PlusCircle,
  LayoutDashboard,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { userRole, setUserRole, savedJobIds } = useJobs();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:bg-indigo-700 transition-colors">
              <Briefcase className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">
              Work<span className="text-indigo-600">Hive</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-indigo-600 font-semibold"
                  : "text-slate-600 hover:text-indigo-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/jobslisting"
              className={`text-sm font-medium transition-colors ${
                isActive("/jobslisting")
                  ? "text-indigo-600 font-semibold"
                  : "text-slate-600 hover:text-indigo-600"
              }`}
            >
              Find Jobs
            </Link>

            {userRole === "candidate" && (
              <Link
                href="/jobslisting?saved=true"
                className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors relative"
              >
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span>Saved Jobs</span>
                {savedJobIds.length > 0 && (
                  <span className="bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {savedJobIds.length}
                  </span>
                )}
              </Link>
            )}

            {userRole === "employer" && (
              <>
                <Link
                  href="/dashboard/employer"
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    isActive("/dashboard/employer")
                      ? "text-indigo-600 font-semibold"
                      : "text-slate-600 hover:text-indigo-600"
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/employer/post-job"
                  className="flex items-center gap-1.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors border border-indigo-200"
                >
                  <PlusCircle className="w-4 h-4" />
                  Post a Job
                </Link>
              </>
            )}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-medium">
              <button
                onClick={() => setUserRole("candidate")}
                className={`px-3 py-1 rounded-md transition-all ${
                  userRole === "candidate"
                    ? "bg-white text-indigo-600 shadow-xs font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Candidate
              </button>
              <button
                onClick={() => setUserRole("employer")}
                className={`px-3 py-1 rounded-md transition-all ${
                  userRole === "employer"
                    ? "bg-white text-indigo-600 shadow-xs font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Employer
              </button>
            </div>

            <div className="h-5 w-px bg-slate-200" />

            <Link
              href="/login"
              className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-xs hover:shadow transition-all"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-indigo-600"
          >
            Home
          </Link>
          <Link
            href="/jobslisting"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-indigo-600"
          >
            Find Jobs
          </Link>

          {userRole === "candidate" && (
            <Link
              href="/jobslisting?saved=true"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 text-base font-medium text-slate-700 hover:text-indigo-600"
            >
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              Saved Jobs ({savedJobIds.length})
            </Link>
          )}

          {userRole === "employer" && (
            <>
              <Link
                href="/dashboard/employer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-700 hover:text-indigo-600"
              >
                Employer Dashboard
              </Link>
              <Link
                href="/dashboard/employer/post-job"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-indigo-600"
              >
                + Post a New Job
              </Link>
            </>
          )}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>View Mode:</span>
              <span className="capitalize font-semibold text-indigo-600">
                {userRole}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-lg text-xs font-medium">
              <button
                onClick={() => setUserRole("candidate")}
                className={`py-1.5 rounded-md ${
                  userRole === "candidate"
                    ? "bg-white text-indigo-600 font-bold shadow-xs"
                    : "text-slate-600"
                }`}
              >
                Candidate
              </button>
              <button
                onClick={() => setUserRole("employer")}
                className={`py-1.5 rounded-md ${
                  userRole === "employer"
                    ? "bg-white text-indigo-600 font-bold shadow-xs"
                    : "text-slate-600"
                }`}
              >
                Employer
              </button>
            </div>

            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 mt-2 rounded-lg border border-slate-300 font-semibold text-slate-700 text-sm"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 bg-indigo-600 font-semibold text-white text-sm rounded-lg shadow-xs"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
