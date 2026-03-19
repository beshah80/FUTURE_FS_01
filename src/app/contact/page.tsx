import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="py-16 sm:py-20">
        <Container>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg sm:leading-8">
            If you have a project, role, or collaboration in mind, send a
            message. You can also reach me at{" "}
            <a
              className="font-semibold text-indigo-600 underline decoration-indigo-300 underline-offset-4 hover:decoration-indigo-500 dark:text-indigo-400 dark:decoration-indigo-700 dark:hover:decoration-indigo-500"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            .
          </p>

          <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 sm:p-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

