import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/lib/site";

const nav = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-black/60">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
          >
            {site.name}
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-300 sm:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-zinc-950 dark:hover:text-zinc-50"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}

