"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "./Badge";
import type { Project } from "@/lib/site";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/70 bg-white shadow-sm ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:ring-indigo-100/60 dark:border-zinc-800/70 dark:bg-zinc-950 dark:hover:border-indigo-800/50 dark:hover:ring-indigo-900/40"
    >
      {/* Project Visual */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center bg-linear-to-br ${project.color || 'from-indigo-500 to-purple-600'} text-white transition-transform duration-500 group-hover:scale-105`}>
            <div className="text-center p-6">
              <h4 className="text-xl font-bold tracking-tight drop-shadow-md">
                {project.title}
              </h4>
              <div className="mt-2 h-1 w-12 mx-auto rounded-full bg-white/40 group-hover:w-20 transition-all duration-300" />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-black/5 transition-opacity group-hover:opacity-0" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 Transition-colors">
            {project.title}
          </h3>
          <div className="flex shrink-0 items-center gap-3 text-xs font-medium sm:text-sm">
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
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
                onClick={(e) => e.stopPropagation()}
              >
                Live ↗
              </a>
            ) : null}
          </div>
        </div>

        <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
