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
  image?: string;
  color?: string;
};

export type Education = {
  school: string;
  degree: string;
  period: string;
};

export type Experience = {
  slug: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  responsibilities: string[];
  impact: string[];
  challenges: { title: string; description: string }[];
  keyProjects: { title: string; description: string }[];
  highlight: string;
};

export type SkillGroup = {
  name: string;
  skills: string[];
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
  skillGroups: [
    {
      name: "Frontend",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "Supabase", "PostgreSQL", "Prisma", "Socket.IO"],
    },
    {
      name: "Other",
      skills: ["Git", "Vercel", "PHP", "MySQL", "UI/UX Design"],
    },
  ] satisfies SkillGroup[],
  projects: [
    {
      title: "Personal Portfolio",
      description:
        "A clean, responsive developer portfolio with a Supabase-backed contact form, dark mode, and a fully custom design system built from scratch.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      repo: "https://github.com/beshah80/FUTURE_FS_01",
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "INFNOVA Academy — Course Platform",
      description:
        "Built and deployed in 4 days: course catalog, search/filter, course details, auth/enrollment flows, and external API integration with loading/error states.",
      tech: ["Next.js", "TypeScript", "Tailwind", "API Integration", "Vercel"],
      repo: "https://github.com/beshah80/infnova-academy",
      href: "https://infnova-academy-psi.vercel.app/",
      image: "/assets/images/projects/infnova_academy.png",
    },
    {
      title: "FIKAT — Healthcare Marketing Agency",
      description:
        "Marketing agency website for dental and healthcare clinics in Addis Ababa. Features bilingual (EN/AM) content, service showcase, and WhatsApp/email contact integration — built in 10 days.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      repo: "https://github.com/beshah80/fikat",
      href: "https://fikat.vercel.app/",
      image: "/assets/images/projects/fikat.png",
    },
    {
      title: "Agos Decor — Event Decoration Service",
      description:
        "Event decoration service website with filterable image gallery, dedicated pages per event type, Amharic content, client testimonials, and direct WhatsApp booking — built in 14 days.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      repo: "https://github.com/beshah80/agos_decor",
      href: "https://agos-decor.vercel.app/",
      image: "/assets/images/projects/agos_decor.png",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Full-stack chat app with real-time messaging, global rooms, private conversations, authentication, and presence — built with WebSockets and a Postgres-backed data model.",
      tech: ["Next.js", "TypeScript", "Socket.IO", "Prisma", "PostgreSQL"],
      repo: "https://github.com/beshah80/Chat_App",
      image: "/assets/images/projects/chat_app.png",
    },
    {
      title: "PhoneSell — E-commerce Platform",
      description:
        "Full-stack phone marketplace with authentication, product management, cart, and admin dashboard — built with PHP and MySQL.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      repo: "https://github.com/beshah80/phoneShop",
      image: "/assets/images/projects/phonesell.png",
    },
  ] satisfies Project[],
  experience: [
    {
      slug: "infnova",
      role: "Frontend Developer Intern",
      company: "INFNOVA Technologies",
      period: "Feb 2025 – Present",
      location: "Task-based · Addis Ababa, Ethiopia",
      description: "INFNOVA Technologies is a software development company based in Addis Ababa, Ethiopia, specializing in building modern web applications and providing technology education through internship programs.",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "React", "API Integration", "Vercel"],
      responsibilities: [
        "Building responsive web applications using Next.js 16 with App Router and TypeScript.",
        "Implementing modern UI designs with Tailwind CSS for clean and professional interfaces.",
        "Integrating external APIs for dynamic data fetching and real-time content updates.",
        "Developing reusable React components with proper state management and form validation.",
        "Deploying applications to Vercel with optimal performance and SEO configurations.",
      ],
      impact: [
        "Successfully completed frontend internship challenge and advanced to interview stage",
        "Built and deployed INFNOVA Academy platform in just 4 days",
        "Implemented all required features plus bonus API integration",
      ],
      challenges: [
        {
          title: "Tight Deadline",
          description: "Completed full-featured platform in 4 days. Prioritized core features first, then added enhancements.",
        },
        {
          title: "API Integration",
          description: "Learned to handle async data fetching with proper loading and error states.",
        },
        {
          title: "Mobile Navigation",
          description: "Implemented fully functional hamburger menu with smooth animations.",
        },
      ],
      keyProjects: [
        {
          title: "INFNOVA Academy Platform",
          description: "Built a complete online learning platform with course listings, search functionality, detailed course pages, authentication system, and enrollment features. Integrated with INFNOVA Course API for dynamic content.",
        },
      ],
      highlight: "This task-based internship provided hands-on experience building production-ready applications under real-world constraints.",
    },
    {
      slug: "efuye-gela",
      role: "Front-End Developer Intern",
      company: "Efuye Gela",
      period: "Jun 2025 – Sep 2025",
      location: "Hybrid · Addis Ababa, Ethiopia",
      description: "Founded in 2016, Efuye Gela creates robust digital ecosystems for Ethiopia's market. By focusing on agriculture, education, and tourism, they deliver agile, culturally relevant solutions that foster innovation and national digital growth through collaborative technology.",
      skills: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Zustand", "Git", "GitHub", "Vercel"],
      responsibilities: [
        "Building and maintaining React-based applications, integrating modern frontend technologies.",
        "Implementing modern UI designs using Tailwind CSS for rapid and responsive styling.",
        "Developing scalable components and implementing global state management using Zustand.",
        "Collaborating closely with back-end team to seamlessly integrate various APIs.",
        "Utilizing GitHub for robust version control, code reviews, and streamlined team workflow.",
      ],
      impact: [
        "Successfully completed and deployed a responsive Personal Blog Website",
        "Made significant contributions to a real-time Chat Application",
        "Developed scalable components with efficient global state management",
      ],
      challenges: [
        {
          title: "React's Declarative Nature",
          description: "Initially struggled with React's paradigm shift from imperative to declarative programming.",
        },
        {
          title: "Prop Drilling",
          description: "Refactor to use Zustand for efficient global state management in chat application.",
        },
        {
          title: "Next.js Hydration Errors",
          description: "Implemented useEffect and conditional client-side checks to resolve complex hydration mismatches.",
        },
        {
          title: "Merge Conflicts",
          description: "Adopted strict Git workflow with feature branches and mandatory PR reviews to minimize team collision.",
        },
      ],
      keyProjects: [
        {
          title: "Personal Blog Website",
          description: "Developed using Next.js with file-based routing, SSR, SSG, and API routes.",
        },
        {
          title: "Chat Application Project",
          description: "Designed user interfaces with Figma and implemented responsive layouts for real-time engagement.",
        },
      ],
      highlight: "This internship profoundly strengthened the link between classroom learning and real development work.",
    },
    {
      slug: "future-interns",
      role: "Full Stack Web Development Intern",
      company: "Future Interns",
      period: "Mar 2026 – Present",
      location: "Remote / Task-based",
      description: "Future Interns is an online internship platform providing self-directed, task-based learning experiences in full-stack web development. The program focuses on building real-world projects following professional industry standards.",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Supabase", "GitHub", "Vercel", "AI Tools"],
      responsibilities: [
        "Building a professional Personal Portfolio website to showcase skills and professional profile (Task 1).",
        "Developing a Client Lead Management System (Mini CRM) with CRUD operations and backend integration (Task 2).",
        "Creating a professional website for a real local business and pitching it to the owner (Task 3).",
        "Documenting all tasks in a public GitHub repository following specific naming conventions (FUTURE_FS_XX).",
        "Sharing professional technical updates and screenshots of deliverables on LinkedIn for each completed task.",
      ],
      impact: [
        "Successfully built and deployed a 10/10 Personal Portfolio (Task 1) using Next.js and Framer Motion.",
        "Gained hands-on experience with real-world business workflows and client lead management.",
        "Mastered self-directed project development and professional social presence on LinkedIn.",
      ],
      challenges: [
        {
          title: "Self-Directed Learning",
          description: "Navigated the internship as a self-paced program, mastering complex frameworks and AI tools without formal training.",
        },
        {
          title: "Professional Standards",
          description: "Strictly followed GitHub repository naming and submission portal guidelines to ensure project verifiability.",
        },
      ],
      keyProjects: [
        {
          title: "Personal Professional Portfolio",
          description: "Built with Next.js, featuring interactive sections, smooth animations, and a Supabase-backed contact form.",
        },
        {
          title: "Client Lead Management System",
          description: "A mini CRM built to manage leads with CRUD operations, status updates, and secure admin access.",
        },
      ],
      highlight: "This internship encourages working like a real digital professional, focusing on quality, consistency, and verifiable results.",
    },
  ] satisfies Experience[],
};

