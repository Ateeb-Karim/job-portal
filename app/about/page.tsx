import Link from "next/link";
import { Briefcase, Target, Users, Globe2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-5">
            <Briefcase className="w-7 h-7" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            About Work<span className="text-indigo-600">Hive</span>
          </h1>
          <p className="text-sm text-slate-500 mt-3 max-w-xl mx-auto leading-relaxed">
            WorkHive connects modern tech talent with fast-growing startups,
            product studios, and global enterprises. We built a simpler, more
            transparent way to find — and fill — great roles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
            <div className="w-11 h-11 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mx-auto mb-3">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">
              Our Mission
            </h3>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Make finding the right role — or the right hire — fast,
              transparent, and free of noise.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
            <div className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">
              Who We Serve
            </h3>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Candidates seeking meaningful work and employers looking for the
              right fit, without the friction.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
            <div className="w-11 h-11 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mx-auto mb-3">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">Reach</h3>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Opportunities across remote, hybrid, and on-site roles, spanning
              startups to global enterprises.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 sm:p-10 text-center text-white">
          <h2 className="text-xl font-bold">Ready to get started?</h2>
          <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
            Whether you're hiring or looking for your next role, WorkHive makes
            it simple.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <Link
              href="/jobslisting"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Browse Jobs
            </Link>
            <Link
              href="/register"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
