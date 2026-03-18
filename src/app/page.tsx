import { Badge } from "@/components/Badge";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
      <Header />

      <main>
        <section className="border-b border-zinc-200/70 py-16 dark:border-zinc-800/70 sm:py-20">
          <Container>
            <div className="grid items-start gap-10 md:grid-cols-2">
              <div>
                <p className="text-base font-medium text-zinc-600 dark:text-zinc-300">
                  {site.location}
                </p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
                  {site.name}
                </h1>
                <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-300">
                  {site.role}
                </p>
                <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                  {site.tagline}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-zinc-950 px-5 text-base font-semibold text-white dark:bg-white dark:text-black"
                  >
                    View projects
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-200 px-5 text-base font-semibold text-zinc-950 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-950"
                  >
                    Contact me
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-7 dark:border-zinc-800 dark:bg-zinc-950 sm:p-8">
                <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                  Skills & tech stack
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {site.skills.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
                <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  I focus on clean UI, strong fundamentals, and building features
                  end-to-end (frontend → backend → deployment).
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section id="projects" className="py-16 sm:py-20">
          <Container>
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Projects
                </h2>
                <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300">
                  A few things I’ve built recently (including Future Interns
                  tasks).
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {site.projects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </Container>
        </section>

        <section
          id="about"
          className="border-t border-zinc-200/70 py-16 dark:border-zinc-800/70 sm:py-20"
        >
          <Container>
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  About
                </h2>
                <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                  I’m a full-stack developer and an Information Science student
                  at AAU. I build production-ready web applications with React,
                  Next.js, and the MERN stack, with a focus on clean UI, strong
                  fundamentals, and scalable architecture.
                </p>
                <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                  I’ve worked on real projects under tight timelines—shipping a
                  full course platform in 4 days with API integration, and
                  contributing to a real-time chat application with reliable
                  state management and deployment workflows.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-950 sm:p-8">
                <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                  Links
                </h3>
                <ul className="mt-5 grid gap-2 text-base">
                  {site.socials.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
                    >
                      {site.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section id="contact" className="py-16 sm:py-20">
          <Container>
            <div className="rounded-2xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-950 sm:p-10">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Contact
              </h2>
              <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300">
                Send a message and I’ll get back to you.
              </p>
              <ContactForm />
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-zinc-200/70 py-10 dark:border-zinc-800/70">
        <Container>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            © {new Date().getFullYear()} {site.name}. Built with Next.js.
          </p>
        </Container>
      </footer>
    </div>
  );
}
