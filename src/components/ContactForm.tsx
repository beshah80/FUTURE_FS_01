"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

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
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      <div className="grid gap-2 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-zinc-950 dark:text-zinc-50">
            Name
          </span>
          <input
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-zinc-950 outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-600"
            placeholder="Your name"
            autoComplete="name"
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="font-medium text-zinc-950 dark:text-zinc-50">
            Email
          </span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-zinc-950 outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-600"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm">
        <span className="font-medium text-zinc-950 dark:text-zinc-50">
          Message
        </span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="resize-y rounded-xl border border-zinc-200 bg-white px-3 py-2 text-zinc-950 outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-600"
          placeholder="What would you like to build together?"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-zinc-950 px-4 text-sm font-semibold text-white transition-opacity disabled:opacity-50 dark:bg-white dark:text-black"
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </button>

        {status === "success" ? (
          <p className="text-sm text-emerald-700 dark:text-emerald-300">
            Message sent. Thanks!
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-red-700 dark:text-red-300">
            Something went wrong. Please try again.
          </p>
        ) : null}
      </div>
    </form>
  );
}

