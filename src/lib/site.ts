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

export type Education = {
  school: string;
  degree: string;
  period: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

export const site = {
  name: "Beshah Ashenafi",
  role: "Full-Stack Web Developer",
  tagline:
    "I build fast, reliable web apps from frontend to backend — turning ideas into products people actually use.",
  location: "Addis Ababa, Ethiopia",
  email: "beshah.ashenafi369@gmail.com",
  avatar: "https://github.com/beshah80.png",
  about:
    "I'm a self-driven Information Science student at Addis Ababa University with a passion for building real products. I started with PHP and MySQL, moved into the MERN stack, and now focus on Next.js and TypeScript. I've shipped client websites, a real-time chat app, and a full course platform — all while studying. I care about clean code, fast UIs, and work that actually ships.",
  goals: [
    "Land a full-stack or frontend role where I can ship real products",
    "Deepen my backend skills — APIs, databases, and system design",
    "Build more client projects and grow as a freelance developer",
    "Contribute to open-source and keep learning in public",
  ],
  interests:
    "I'm drawn to products that solve real problems for real people. Outside of coding I follow tech, enjoy football, and occasionally explore UI design just for fun.",
  education: [
    {
      school: "Addis Ababa University",
      degree: "BSc in Information Science",
      period: "2022 – Present",
    },
  ] satisfies Education[],
  languages: ["Amharic (Native)", "English (Fluent)"],
  socials: [
    { label: "GitHub", href: "https://github.com/beshah80" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/beshah-ashenafi/" },
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
  quickFacts: [
    "Information Science student @ AAU",
    "Based in Addis Ababa, Ethiopia",
    "Full-stack web developer (Next.js + MERN)",
    "Comfortable with EN / AM",
  ],
  projects: [
    {
      title: "Personal Portfolio",
      description:
        "A clean, responsive developer portfolio with a Supabase-backed contact form, dark mode, and a fully custom design system built from scratch.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      repo: "https://github.com/beshah80/FUTURE_FS_01",
    },
    {
      title: "INFNOVA Academy — Course Platform",
      description:
        "Built and deployed in 4 days: course catalog, search/filter, course details, auth/enrollment flows, and external API integration with loading/error states.",
      tech: ["Next.js", "TypeScript", "Tailwind", "API Integration", "Vercel"],
      repo: "https://github.com/beshah80/infnova-academy",
      href: "https://infnova-academy-psi.vercel.app/",
    },
    {
      title: "FIKAT — Healthcare Marketing Agency",
      description:
        "Marketing agency website for dental and healthcare clinics in Addis Ababa. Features bilingual (EN/AM) content, service showcase, and WhatsApp/email contact integration — built in 10 days.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      repo: "https://github.com/beshah80/fikat",
      href: "https://fikat.vercel.app/",
    },
    {
      title: "Agos Decor — Event Decoration Service",
      description:
        "Event decoration service website with filterable image gallery, dedicated pages per event type, Amharic content, client testimonials, and direct WhatsApp booking — built in 14 days.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      repo: "https://github.com/beshah80/agos_decor",
      href: "https://agos-decor.vercel.app/",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Full-stack chat app with real-time messaging, global rooms, private conversations, authentication, and presence — built with WebSockets and a Postgres-backed data model.",
      tech: ["Next.js", "TypeScript", "Socket.IO", "Prisma", "PostgreSQL"],
      repo: "https://github.com/beshah80/Chat_App",
    },
    {
      title: "PhoneSell — E-commerce Platform",
      description:
        "Full-stack phone marketplace with authentication, product management, cart, and admin dashboard — built with PHP and MySQL.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      repo: "https://github.com/beshah80/phoneShop",
    },
  ] satisfies Project[],
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "INFNOVA Technologies",
      period: "Feb 2025 – Present",
      location: "Task-based · Addis Ababa, Ethiopia",
      highlights: [
        "Built responsive web apps with Next.js 16, TypeScript, and Tailwind CSS.",
        "Integrated external APIs with loading, error, and empty states.",
        "Deployed production-ready apps to Vercel with SEO and performance in mind.",
      ],
    },
    {
      role: "Front-End Developer Intern",
      company: "Efuye Gela",
      period: "Jun 2025 – Sep 2025",
      location: "On-site · Addis Ababa, Ethiopia",
      highlights: [
        "Developed React/Next.js frontends with TypeScript and Tailwind CSS.",
        "Implemented global state management and reusable UI components.",
        "Collaborated with backend devs to integrate APIs and ship real products.",
      ],
    },
  ] satisfies Experience[],
};

