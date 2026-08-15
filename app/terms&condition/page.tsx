export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl border border-slate-200 shadow-xs p-8 sm:p-12">
        <h1 className="text-3xl font-semibold text-slate-900">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: August 2026</p>

        <div className="mt-8 space-y-8 text-sm text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using WorkHive, you agree to be bound by these
              Terms of Service. If you do not agree, please do not use the
              platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              2. Use of the Platform
            </h2>
            <p>
              WorkHive allows candidates to browse and apply for job listings,
              and allows employers to post and manage job listings. You agree to
              provide accurate information when creating an account, posting a
              job, or submitting an application.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              3. Account Roles
            </h2>
            <p>
              Users may act as a Candidate or an Employer. You are responsible
              for the accuracy of any job listings you post or applications you
              submit under your chosen role.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              4. Prohibited Conduct
            </h2>
            <p>
              You agree not to post false, misleading, or discriminatory job
              listings, and not to misuse the application process to submit
              fraudulent or spam applications.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              5. Termination
            </h2>
            <p>
              We reserve the right to suspend or remove content that violates
              these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              6. Disclaimer
            </h2>
            <p>
              WorkHive is provided as a demo application "as is," without
              warranties of any kind. Job listings and company information are
              for demonstration purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              7. Contact
            </h2>
            <p>
              Questions about these Terms can be directed to our{" "}
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
