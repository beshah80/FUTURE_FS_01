import { Badge } from "./Badge";
import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
          {project.title}
        </h3>
        <div className="flex shrink-0 items-center gap-3 text-sm">
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
            >
              Repo
            </a>
          ) : null}
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
            >
              Live
            </a>
          ) : null}
        </div>
      </div>

      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
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

