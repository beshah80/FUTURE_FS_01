import { site } from "@/lib/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 py-8 dark:border-zinc-800/70">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-sm text-zinc-500 dark:text-zinc-400">
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              {site.email}
            </a>
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
