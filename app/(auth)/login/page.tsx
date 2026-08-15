"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Briefcase, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useJobs } from "@/context/jobcontext";
import { UserRole } from "@/types/datatypes";

export default function LoginPage() {
  const router = useRouter();
  const { setUserRole, setCurrentUser } = useJobs();

  const [role, setRole] = useState<UserRole>("candidate");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setUserRole(role);
    setCurrentUser({
      id: `u_${Date.now()}`,
      name: email.split("@")[0] || "User",
      email,
      role,
    });

    router.push(role === "employer" ? "/dashboard/employer" : "/jobslisting");
  };

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              <Briefcase className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">
              Work<span className="text-indigo-600">Hive</span>
            </span>
          </Link>
          <h1 className="text-xl font-bold text-slate-900 mt-6">
            Welcome back
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Sign in to continue to your account
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
          <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-medium mb-6">
            <button
              type="button"
              onClick={() => setRole("candidate")}
              className={`flex-1 py-2 rounded-md transition-all ${
                role === "candidate"
                  ? "bg-white text-indigo-600 shadow-xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              I&apos;m a Candidate
            </button>
            <button
              type="button"
              onClick={() => setRole("employer")}
              className={`flex-1 py-2 rounded-md transition-all ${
                role === "employer"
                  ? "bg-white text-indigo-600 shadow-xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              I&apos;m an Employer
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-9 pr-3 py-2.5 border rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-10 py-2.5 border rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <a
                href="#"
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 rounded-lg transition-colors"
            >
              Sign In as {role === "candidate" ? "Candidate" : "Employer"}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
