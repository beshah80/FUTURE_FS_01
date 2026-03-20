import Link from "next/link";
import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";

export default function WorkPage() {
  return (
    <PageShell>
      <section className="pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
        <Container>
          <div className="grid gap-8 sm:mt-8">
            {site.experience.map((exp) => (
              <Link
                key={exp.slug}
                href={`/work/${exp.slug}`}
                className="group relative flex flex-col items-start rounded-3xl border border-zinc-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:ring-1 hover:ring-indigo-100 dark:border-zinc-800/60 dark:bg-zinc-950 dark:hover:border-indigo-800/50 dark:hover:ring-indigo-900/40"
              >
                <div className="flex w-full flex-wrap items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {exp.role}
                    </h2>
                    <p className="text-base font-semibold text-zinc-700 dark:text-zinc-200">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-right">
                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      {exp.period}
                    </p>
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      {exp.location}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-zinc-600 dark:text-zinc-300 line-clamp-2">
                  {exp.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {exp.skills.slice(0, 5).map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-lg bg-zinc-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500 ring-1 ring-inset ring-zinc-200 dark:bg-zinc-900/50 dark:text-zinc-400 dark:ring-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                  {exp.skills.length > 5 && (
                    <span className="text-[10px] font-bold text-zinc-400">
                      +{exp.skills.length - 5} more
                    </span>
                  )}
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400">
                  View Case Study
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M3.33334 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

