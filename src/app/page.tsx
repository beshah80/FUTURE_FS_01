import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
import { ProjectCard } from "@/components/ProjectCard";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <PageShell>
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:gap-20">
            <aside className="md:sticky md:top-20 md:self-start space-y-6">
              {/* Avatar */}
              <Image
                src={site.avatar}
                alt={site.name}
                width={88}
                height={88}
                className="rounded-full ring-2 ring-indigo-500/30"
                priority
              />

              {/* Intro */}
              <div>
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  Hi, I&apos;m{" "}
                  <span className="text-indigo-600 dark:text-indigo-400">
                    {site.name.split(" ")[0]}
                  </span>
                </h1>
                <p className="mt-3 text-lg font-medium text-zinc-700 dark:text-zinc-200">
                  {site.role}
                </p>
                <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  {site.tagline}
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                >
                  Let&apos;s work together
                </Link>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex h-10 items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-zinc-700"
                >
                  Download CV
                </a>
              </div>

              {/* About */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500">About</p>
                <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                  {site.about}
                </p>
              </div>

              {/* Quick facts */}
              <div className="grid gap-2 rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
                {site.quickFacts.map((fact) => (
                  <div key={fact} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    <span>{fact}</span>
                  </div>
                ))}
              </div>

              {/* Goals */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500">Goals</p>
                <ul className="mt-2 space-y-2">
                  {site.goals.map((g) => (
                    <li key={g} className="flex gap-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500">Education</p>
                <div className="mt-2 space-y-3">
                  {site.education.map((e) => (
                    <div key={e.school} className="rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950">
                      <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{e.school}</p>
                      <p className="text-xs text-zinc-600 dark:text-zinc-300">{e.degree}</p>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500">{e.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500">Languages</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {site.languages.map((l) => (
                    <Badge key={l}>{l}</Badge>
                  ))}
                </div>
              </div>
            </aside>

            <div className="space-y-14">
              <section aria-label="Featured projects">
                <div className="flex items-end justify-between gap-4">
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Featured projects
                  </h2>
                  <Link
                    href="/projects"
                    className="text-sm font-semibold text-indigo-600 underline decoration-indigo-300 underline-offset-4 hover:decoration-indigo-500 dark:text-indigo-400 dark:decoration-indigo-700 dark:hover:decoration-indigo-500"
                  >
                    View all
                  </Link>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {site.projects.slice(0, 4).map((p) => (
                    <ProjectCard key={p.title} project={p} />
                  ))}
                </div>
              </section>

              <section aria-label="Skills">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Skills
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {site.skills.map((s) => (
                    <Badge key={s} accent>{s}</Badge>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
