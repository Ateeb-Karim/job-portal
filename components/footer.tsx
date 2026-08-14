import Link from "next/link";
import { Briefcase, Globe } from "lucide-react";
import { FiGithub, FiTwitter, FiLinkedin, FiGlobe } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Work<span className="text-indigo-400">Hive</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Connecting modern tech talent with top-tier product studios,
              startups, and global enterprises.
            </p>
            <div className="flex gap-3 text-slate-400">
              <a
                href="#"
                className="p-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
              >
                <FiTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
              >
                <FiGithub className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              For Candidates
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/jobs"
                  className="hover:text-white transition-colors"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs?type=Remote"
                  className="hover:text-white transition-colors"
                >
                  Remote Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs?type=Internship"
                  className="hover:text-white transition-colors"
                >
                  Internships
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="hover:text-white transition-colors"
                >
                  Create Candidate Profile
                </Link>
              </li>
            </ul>
          </div>{" "}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              For Employers
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/dashboard/employer/post-job"
                  className="hover:text-white transition-colors"
                >
                  Post a Job
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/employer"
                  className="hover:text-white transition-colors"
                >
                  Employer Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="hover:text-white transition-colors"
                >
                  Employer Registration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              WorkHive
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} WorkHive Portal. Built with Next.js &
            Tailwind CSS.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <Globe className="w-3.5 h-3.5" />
            <span>English (US)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
