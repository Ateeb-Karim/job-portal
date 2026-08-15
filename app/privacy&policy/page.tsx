export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl border border-slate-200 shadow-xs p-8 sm:p-12">
        <h1 className="text-3xl font-semibold text-slate-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: August 2026</p>

        <div className="mt-8 space-y-8 text-sm text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              1. Information We Collect
            </h2>
            <p>
              When you use WorkHive, we may collect information you provide
              directly, such as your name, email address, resume details, and
              job preferences when you register, apply for a job, or save a
              listing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to operate and improve the
              platform, match candidates with relevant job listings, allow
              employers to review applications, and communicate updates related
              to your account or applications.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              3. Information Sharing
            </h2>
            <p>
              When you apply to a job, your application details (name, email,
              resume link, cover letter) are shared with the employer who posted
              that listing. We do not sell your personal information to third
              parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              4. Data Storage
            </h2>
            <p>
              This is a demo application. Data you enter is stored locally in
              your browser and is not transmitted to or stored on any external
              server.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              5. Your Choices
            </h2>
            <p>
              You can update or remove your saved jobs and applications at any
              time from your dashboard. Clearing your browser storage will
              remove all locally stored account data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              6. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please reach out
              via our{" "}
              <a
                href="/contact"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Contact Support
              </a>{" "}
              page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
