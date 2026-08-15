import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { JobProvider } from "@/context/jobcontext";

export const metadata: Metadata = {
  title: "WorkHive — Find Your Next Career",
  description:
    "Search for developer, designer, and tech jobs or post new career opportunities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        <JobProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </JobProvider>
      </body>
    </html>
  );
}
