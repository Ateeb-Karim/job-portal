import Link from "next/link";

interface ButtonProps {
  value: string;
  title: string;
  type?: string;
}

export default function Button({ value, title, type = "All" }: ButtonProps) {
  const params = new URLSearchParams();
  params.set("title", value);
  if (type !== "All") {
    params.set("type", type);
  }

  return (
    <Link
      href={`/jobslisting?${params.toString()}`}
      className="inline-flex items-center rounded-full bg-indigo-800/50 border border-indigo-700/50 px-3 py-1 text-xs font-medium text-indigo-100 hover:bg-indigo-700/60 hover:text-white transition-colors"
    >
      {title}
    </Link>
  );
}
