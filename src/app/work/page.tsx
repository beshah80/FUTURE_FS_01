import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";

export default function WorkPage() {
  return (
    <PageShell>
      <section className="py-16 sm:py-20">
        <Container>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Work
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg sm:leading-8">
            A focused look at my experience: what I built, how I worked, and the
            impact.
          </p>

          <div className="mt-10 grid gap-4">
            {site.experience.map((exp) => (
              <article
                key={`${exp.company}-${exp.role}`}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-indigo-800/50"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                      {exp.role} @ {exp.company}
                    </h2>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                      {exp.location}
                    </p>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {exp.period}
                  </p>
                </div>

                <ul className="mt-5 space-y-2 text-zinc-700 dark:text-zinc-200">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 dark:bg-indigo-600" />
                      <span className="text-sm leading-6">{h}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

