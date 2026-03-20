"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
import { ProjectCard } from "@/components/ProjectCard";
import { site } from "@/lib/site";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <PageShell>
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2.2fr)] lg:gap-24"
          >
            {/* Sidebar (Left on desktop, Top on mobile) */}
            <aside className="space-y-14 lg:sticky lg:top-24 lg:self-start">
              <motion.section variants={itemVariants} className="space-y-8">
                <Image
                  src={site.avatar}
                  alt={site.name}
                  width={110}
                  height={110}
                  className="rounded-full ring-4 ring-indigo-500/10 shadow-xl object-cover"
                  priority
                />
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight lg:text-5xl leading-tight">
                    Hi, I&apos;m{" "}
                    <span className="text-indigo-600 dark:text-indigo-400">
                      {site.name.split(" ")[0]}
                    </span>
                  </h1>
                  <p className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                    {site.role}
                  </p>
                  <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {site.tagline}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  >
                    Let&apos;s work together
                  </Link>
                  <a
                    href="/cv.pdf"
                    download
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 text-sm font-semibold text-zinc-700 transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-zinc-700"
                  >
                    Download CV
                  </a>
                </div>
              </motion.section>

              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">The Story</p>
                <div className="relative">
                  <span className="absolute -left-4 top-0 h-full w-1 rounded-full bg-indigo-500/20" />
                  <p className="text-[15px] leading-8 text-zinc-600 dark:text-zinc-300">
                    {site.about}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Current Goals</p>
                <ul className="space-y-4">
                  {site.goals.map((g) => (
                    <li key={g} className="flex gap-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                      {g}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Credentials</p>
                <div className="space-y-4">
                  {site.education.map((e) => (
                    <div key={e.school} className="rounded-2xl border border-zinc-100 bg-zinc-50/30 p-5 dark:border-zinc-800/30 dark:bg-zinc-900/20">
                      <p className="text-base font-bold text-zinc-950 dark:text-zinc-50">{e.school}</p>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{e.degree}</p>
                      <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">{e.period}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Communication</p>
                <div className="flex flex-wrap gap-3">
                  {site.languages.map((l) => (
                    <Badge key={l}>{l}</Badge>
                  ))}
                </div>
              </motion.div>
            </aside>

            {/* Main Content (Right on desktop, Below sidebar on mobile) */}
            <div className="space-y-16">
              <motion.section variants={itemVariants} aria-label="Featured projects">
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
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {site.projects.slice(0, 4).map((p, i) => (
                    <ProjectCard key={p.title} project={p} index={i} />
                  ))}
                </div>
              </motion.section>

              <motion.section variants={itemVariants} aria-label="Skills">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Technical Expertise
                </h2>
                <div className="mt-8 space-y-8">
                  {site.skillGroups.map((group) => (
                    <div key={group.name}>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                        {group.name}
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.skills.map((s) => (
                          <Badge key={s} accent>{s}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>
          </motion.div>
        </Container>
      </section>
    </PageShell>
  );
}
