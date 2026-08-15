"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  UserCircle2,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { useJobs } from "@/context/jobcontext";
import { UserRole } from "@/types/datatypes";

export default function RegisterPage() {
  const router = useRouter();
  const { setUserRole, setCurrentUser } = useJobs();

  const [role, setRole] = useState<UserRole>("candidate");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setUserRole(role);
    setCurrentUser({
      id: `u_${Date.now()}`,
      name,
      email,
      role,
    });

    router.push(role === "employer" ? "/dashboard/employer" : "/jobslsiting");
  };

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
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
            Create your account
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Join WorkHive to find your next opportunity or hire top talent
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={() => setRole("candidate")}
              className={`relative text-left p-4 rounded-xl border-2 transition-all ${
                role === "candidate"
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              {role === "candidate" && (
                <CheckCircle2 className="w-4 h-4 text-indigo-600 absolute top-3 right-3" />
              )}
              <UserCircle2
                className={`w-6 h-6 mb-2 ${
                  role === "candidate" ? "text-indigo-600" : "text-slate-400"
                }`}
              />
              <p className="text-sm font-semibold text-slate-900">
                I&apos;m a Candidate
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Looking for job opportunities
              </p>
            </button>

            <button
              type="button"
              onClick={() => setRole("employer")}
              className={`relative text-left p-4 rounded-xl border-2 transition-all ${
                role === "employer"
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              {role === "employer" && (
                <CheckCircle2 className="w-4 h-4 text-indigo-600 absolute top-3 right-3" />
              )}
              <Building2
                className={`w-6 h-6 mb-2 ${
                  role === "employer" ? "text-indigo-600" : "text-slate-400"
                }`}
              />
              <p className="text-sm font-semibold text-slate-900">
                I&apos;m an Employer
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Hiring for open positions
              </p>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full pl-9 pr-3 py-2.5 border rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="w-full pl-9 pr-9 py-2.5 border rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2.5 border rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {error && (
              <p className="text-xs text-rose-600 font-medium">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 rounded-lg transition-colors"
            >
              Create {role === "candidate" ? "Candidate" : "Employer"} Account
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
