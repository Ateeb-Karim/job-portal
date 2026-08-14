import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { JobProvider } from "@/context/jobcontext";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WorkHive | Modern Job Portal",
  description:
    "Search for developer, designer, and tech jobs or post new career opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased`}
      >
        <JobProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </JobProvider>
      </body>
    </html>
  );
}
