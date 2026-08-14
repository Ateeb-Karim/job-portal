import type { Job } from "@/types/datatypes";

export const INITIAL_JOBS: Job[] = [
  {
    id: "1",
    title: "Frontend React / Next.js Developer",
    company: {
      name: "TechVision Labs",
      website: "https://example.com",
      about:
        "A fast-growing product studio creating high-performance web applications.",
    },
    location: "Remote",
    salary: "$70,000 - $90,000 / year",
    type: "Full-time",
    postedDate: "2026-08-10",
    description:
      "We are looking for a passionate Frontend Developer experienced in modern Web technologies including React, Next.js, and Tailwind CSS to build responsive user interfaces.",
    responsibilities: [
      "Develop component-driven UI using Next.js App Router and TypeScript.",
      "Optimize application performance and responsiveness across modern devices.",
      "Collaborate with designers and backend teams to integrate REST/GraphQL APIs.",
    ],
    requirements: [
      "Strong proficiency in JavaScript (ES6+), TypeScript, and React.",
      "Experience with Tailwind CSS and responsive design principles.",
      "Familiarity with state management patterns and Git workflows.",
    ],
    isFeatured: true,
  },
  {
    id: "2",
    title: "UI/UX Engineering Intern",
    company: {
      name: "CreativeFlow Solutions",
      website: "https://example.com",
      about: "Designing modern SaaS tools for creative teams worldwide.",
    },
    location: "New York, NY (Hybrid)",
    salary: "$25 - $35 / hr",
    type: "Internship",
    postedDate: "2026-08-12",
    description:
      "Join our product team to design and prototype modern user interfaces while learning industry-standard frontend architecture.",
    responsibilities: [
      "Translate Figma designs into pixel-perfect React components.",
      "Assist in building accessible UI design systems.",
      "Participate in design reviews and usability testing sessions.",
    ],
    requirements: [
      "Solid foundation in HTML, CSS, JavaScript, and React basics.",
      "Basic knowledge of Figma and UI/UX design principles.",
      "Eagerness to learn and collaborate in an agile environment.",
    ],
    isFeatured: true,
  },
  {
    id: "3",
    title: "Full Stack Engineer (Node.js & React)",
    company: {
      name: "CloudScale Inc.",
      website: "https://example.com",
      about: "Cloud infrastructure management platform for enterprise teams.",
    },
    location: "San Francisco, CA",
    salary: "$110,000 - $140,000 / year",
    type: "Full-time",
    postedDate: "2026-08-14",
    description:
      "Looking for an experienced engineer to build scalable backend services and modern frontend dashboards.",
    responsibilities: [
      "Design RESTful APIs and database schemas.",
      "Build performant frontend dashboards with Next.js and TypeScript.",
      "Maintain code quality, test coverage, and CI/CD pipelines.",
    ],
    requirements: [
      "3+ years of experience with Node.js, Express, and React.",
      "Experience with PostgreSQL or MongoDB databases.",
      "Strong knowledge of TypeScript and asynchronous programming.",
    ],
    isFeatured: false,
  },
];
