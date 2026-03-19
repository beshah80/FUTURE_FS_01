import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-50 text-zinc-950 dark:from-black dark:via-zinc-950 dark:to-black dark:text-zinc-50">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
