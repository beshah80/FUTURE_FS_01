"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
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

export default function WorkDetail() {
  const { slug } = useParams();
  const experience = site.experience.find((e) => e.slug === slug);

  if (!experience) {
    notFound();
  }

  return (
    <PageShell>
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-12 lg:flex-row lg:gap-20"
          >
            {/* Sidebar Details */}
            <aside className="lg:w-80 space-y-10 lg:sticky lg:top-24 lg:self-start">
              <motion.div variants={itemVariants}>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="h-5 w-5 transition-transform group-hover:-translate-x-1"
                  >
                    <path
                      d="M16.6667 10H3.33334M3.33334 10L8.33334 15M3.33334 10L8.33334 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Back to Work
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Duration</p>
                <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{experience.period}</p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Location</p>
                <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{experience.location}</p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <Badge key={skill} accent>{skill}</Badge>
                  ))}
                </div>
              </motion.div>

              {experience.highlight && (
                <motion.div variants={itemVariants} className="pt-6 border-t border-zinc-100 dark:border-zinc-800/50">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-4">Career Highlight</p>
                  <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300 italic">
                    &ldquo;{experience.highlight}&rdquo;
                  </p>
                </motion.div>
              )}
            </aside>

            {/* Main Content */}
            <div className="flex-1 space-y-16">
              <motion.div variants={itemVariants} className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
                    {experience.role}
                  </h1>
                  <p className="mt-2 text-xl font-medium text-indigo-600 dark:text-indigo-400">
                    {experience.company}
                  </p>
                </div>
                <p className="text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
                  {experience.description}
                </p>
              </motion.div>

              <motion.section variants={itemVariants} className="space-y-8">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                  Responsibilities
                </h2>
                <div className="grid gap-6">
                  {experience.responsibilities.map((task, i) => (
                    <div key={task} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-base leading-8 text-zinc-600 dark:text-zinc-300">
                        {task}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                  Core Impact
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {experience.impact.map((item) => (
                    <div key={item} className="rounded-2xl border border-zinc-100 bg-zinc-50/50 p-6 dark:border-zinc-800/50 dark:bg-zinc-900/30">
                      <p className="text-sm font-bold leading-7 text-zinc-700 dark:text-zinc-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="space-y-6 pt-10 border-t border-zinc-100 dark:border-zinc-800/50">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                  Challenges & Learnings
                </h2>
                <div className="space-y-8">
                  {experience.challenges.map((c) => (
                    <div key={c.title} className="space-y-2">
                      <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50">{c.title}</h3>
                      <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">{c.description}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="space-y-6 pt-10 border-t border-zinc-100 dark:border-zinc-800/50">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                  Key Projects
                </h2>
                <div className="grid gap-6">
                  {experience.keyProjects.map((p) => (
                    <div key={p.title} className="rounded-2xl border border-indigo-100/50 bg-indigo-50/20 p-6 dark:border-indigo-900/30 dark:bg-indigo-950/10">
                      <h3 className="text-base font-bold text-indigo-950 dark:text-indigo-50">{p.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{p.description}</p>
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
