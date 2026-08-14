import Link from "next/link";
import { Briefcase, ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/button";
import Form from "@/components/form";
import Categories from "@/components/categories";
import FeaturedJobs from "@/components/featuredjobs";

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="relative bg-linear-to-b from-indigo-900 via-indigo-950 to-slate-900 text-white pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.25),transparent_50%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-800/60 border border-indigo-700/50 rounded-full px-4 py-1.5 text-xs font-semibold text-indigo-200 mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Over 2,500+ active job opportunities ready for you
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Find Your Next <span className="text-indigo-400">Dream Career</span>{" "}
            Today
          </h1>
          <p className="mt-4 text-base sm:text-lg text-indigo-100/80 max-w-2xl mx-auto font-normal">
            Discover opportunities at fast-growing startups, global enterprises,
            and top technology companies worldwide.
          </p>
          <Form />
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-indigo-200/80">
            <span className="font-medium text-white">Popular Searches:</span>
            <Button value="React Developer" title="React" type="All" />
            <span>•</span>
            <Button value="Remote" title="Remote" type="All" />
            <span>•</span>
            <Button value="Internship" title="Internship" type="All" />
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Explore Popular Categories
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              Browse open roles by high-demand industries
            </p>
          </div>
        </div>
        <Categories />
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Featured Job Opportunities
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              Top verified positions recommended for you
            </p>
          </div>
          <Link
            href="/jobs"
            className="flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            View All Jobs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <FeaturedJobs />
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800 shadow-lg relative overflow-hidden">
          <div className="space-y-3 max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              For Hiring Managers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Hiring Top-Tier Tech Talent?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Post your open roles to connect with thousands of active software
              developers, designers, and project leads today.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link
              href="/dashboard/employer/post-job"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md inline-flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              Post Job Opportunity
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
