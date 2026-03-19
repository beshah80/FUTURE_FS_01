import { Badge } from "./Badge";
import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm ring-1 ring-transparent transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:ring-indigo-100/60 dark:border-zinc-800/70 dark:bg-zinc-950 dark:hover:border-indigo-800/50 dark:hover:ring-indigo-900/40">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
          {project.title}
        </h3>
        <div className="flex shrink-0 items-center gap-3 text-xs font-medium sm:text-sm">
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200"
            >
              Repo
            </a>
          ) : null}
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-2.5 py-1 text-xs font-semibold text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              Live ↗
            </a>
          ) : null}
        </div>
      </div>

      <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </div>
  );
}
