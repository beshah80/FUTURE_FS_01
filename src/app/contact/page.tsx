"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
                Let&apos;s build something together.
              </h1>
              <p className="text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
                I&apos;m currently open to new roles, freelance projects, and collaborations.
                Whether you have a specific project in mind or just want to say hi, I&apos;d love to hear from you.
                You can also reach me directly at{" "}
                <a
                  className="font-bold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
                .
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 rounded-3xl border border-zinc-200/60 bg-white p-8 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-950 sm:p-10"
            >
              <ContactForm />
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </PageShell>
  );
}

