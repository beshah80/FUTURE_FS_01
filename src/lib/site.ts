export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  repo?: string;
};

export const site = {
  name: "Beshah Ashenafi",
  role: "Full-Stack Web Developer",
  tagline:
    "Full-stack developer building scalable web apps that solve real problems — focused on clean UI, reliability, and shipping fast.",
  location: "Addis Ababa, Ethiopia",
  email: "beshah.ashenafi@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle/" },
  ] satisfies SocialLink[],
  skills: [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "MERN",
    "Supabase",
    "PostgreSQL",
    "Prisma",
    "Socket.IO",
  ],
  projects: [
    {
      title: "Future Interns – Task 1: Professional Portfolio",
      description:
        "A clean, responsive portfolio website with a Supabase-backed contact form.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      repo: "https://github.com/your-username/FUTURE_FS_01",
    },
    {
      title: "INFNOVA Academy — Course Platform",
      description:
        "Built and deployed in 4 days as an internship challenge: course catalog, search/filter, course details, auth/enrollment flows, and external API integration with loading/error states.",
      tech: ["Next.js", "TypeScript", "Tailwind", "API Integration", "Vercel"],
    },
    {
      title: "Real-time Chat Application",
      description:
        "Full-stack chat app with real-time messaging, global rooms, private conversations, authentication, and presence — built with WebSockets and a Postgres-backed data model.",
      tech: ["Next.js", "TypeScript", "Socket.IO", "Prisma", "PostgreSQL"],
    },
    {
      title: "PhoneSell — E-commerce Platform",
      description:
        "Full-stack phone marketplace with authentication, product management, cart, and admin dashboard — built with PHP and MySQL.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    },
  ] satisfies Project[],
};

