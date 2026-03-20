"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [showModal, setShowModal] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const errors = useMemo(() => {
    return {
      name: form.name.trim().length < 2 && touched.name ? "Name must be at least 2 characters" : null,
      email: (!form.email.trim().includes("@") || form.email.trim().length < 5) && touched.email ? "Please enter a valid email" : null,
      message: form.message.trim().length < 10 && touched.message ? "Message must be at least 10 characters" : null,
    };
  }, [form, touched]);

  const canSubmit = useMemo(() => {
    if (status === "loading") return false;
    return (
      form.name.trim().length >= 2 &&
      form.email.trim().includes("@") &&
      form.message.trim().length >= 10
    );
  }, [form, status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setShowModal(true);
      setForm({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
    } catch {
      setStatus("error");
      setShowModal(true);
    }
  }

  if (!mounted) return <div className="h-[400px]" />; // Skeleton placeholder for hydration

  return (
    <>
      <form onSubmit={onSubmit} className="grid gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Name
            </label>
            <input
              required
              value={form.name}
              onBlur={() => setTouched(t => ({ ...t, name: true }))}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className={`h-12 w-full rounded-2xl border bg-white px-4 text-zinc-950 outline-none transition-all focus:ring-2 focus:ring-indigo-500/20 dark:bg-zinc-900/50 dark:text-zinc-50 ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-200 focus:border-indigo-500 dark:border-zinc-800 dark:focus:border-indigo-500'
                }`}
              placeholder="Your name"
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-xs font-medium text-red-500"
                >
                  {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Email
            </label>
            <input
              required
              type="email"
              value={form.email}
              onBlur={() => setTouched(t => ({ ...t, email: true }))}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className={`h-12 w-full rounded-2xl border bg-white px-4 text-zinc-950 outline-none transition-all focus:ring-2 focus:ring-indigo-500/20 dark:bg-zinc-900/50 dark:text-zinc-50 ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-200 focus:border-indigo-500 dark:border-zinc-800 dark:focus:border-indigo-500'
                }`}
              placeholder="you@example.com"
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-xs font-medium text-red-500"
                >
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Message
          </label>
          <textarea
            required
            rows={6}
            value={form.message}
            onBlur={() => setTouched(t => ({ ...t, message: true }))}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className={`w-full resize-none rounded-2xl border bg-white px-4 py-3 text-zinc-950 outline-none transition-all focus:ring-2 focus:ring-indigo-500/20 dark:bg-zinc-900/50 dark:text-zinc-50 ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-200 focus:border-indigo-500 dark:border-zinc-800 dark:focus:border-indigo-500'
              }`}
            placeholder="What's on your mind?"
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-xs font-medium text-red-500"
              >
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col items-center gap-6 pt-4 sm:flex-row">
          <button
            type="submit"
            disabled={!canSubmit || status === "loading"}
            className="relative inline-flex h-12 min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-indigo-600 px-8 text-sm font-bold text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            <AnimatePresence mode="wait">
              {status === "loading" ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2"
                >
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending…
                </motion.div>
              ) : (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Send Message
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </form>

      {/* Feedback Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm rounded-[2.5rem] border border-zinc-200 bg-white p-8 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 sm:p-10"
            >
              <div className="flex flex-col items-center text-center">
                {status === "success" ? (
                  <>
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-900/30">
                      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-zinc-950 dark:text-zinc-50">Sent!</h3>
                    <p className="mb-8 text-zinc-600 dark:text-zinc-400">
                      Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => { setShowModal(false); setStatus("idle"); }}
                      className="inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-2xl bg-zinc-950 px-8 text-sm font-bold text-white transition-all hover:bg-zinc-800 active:scale-95 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
                    >
                      OK
                    </button>
                  </>
                ) : (
                  <>
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50 text-red-600 ring-1 ring-red-100 dark:bg-red-500/10 dark:text-red-400 dark:ring-red-900/30">
                      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-zinc-950 dark:text-zinc-50">Error</h3>
                    <p className="mb-8 text-zinc-600 dark:text-zinc-400">
                      Something went wrong while sending your message. Please try again or reach out via email.
                    </p>
                    <button
                      onClick={() => { setShowModal(false); setStatus("idle"); }}
                      className="inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-2xl bg-red-600 px-8 text-sm font-bold text-white transition-all hover:bg-red-700 active:scale-95"
                    >
                      Try Again
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

