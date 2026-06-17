import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Activity,
  Stethoscope,
  Smile,
  AlignCenterHorizontal,
  Sun,
  ArrowUpRight,
} from "lucide-react";
import { services, whatsappLink } from "@/lib/clinic";
import { FadeUp, FadeUpChild, FadeUpStagger } from "@/components/fade-up";

const iconMap = {
  Sparkles,
  Activity,
  Stethoscope,
  Smile,
  AlignCenter: AlignCenterHorizontal,
  Sun,
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Dental Services in Ahmedabad — Implants, RCT, Cosmetic & More | Diwasha" },
      {
        name: "description",
        content:
          "From dental implants and root canals to oral surgery, smile makeovers and aligners — comprehensive specialist dental care at Diwasha Dental, Navrangpura, Ahmedabad.",
      },
      { property: "og:title", content: "Dental Services — Diwasha Dental Ahmedabad" },
      {
        property: "og:description",
        content:
          "Specialist dental services in Navrangpura, Ahmedabad — implants, RCT, oral surgery, cosmetic & more.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-[color:var(--color-ivory)] py-20 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Services
            </p>
            <h1 className="mt-4 font-display text-[44px] leading-[1.05] text-[color:var(--color-primary)] md:text-[72px]">
              Specialist dentistry,
              <br />
              <span className="serif-italic text-[color:var(--color-accent)]">end to end</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--color-muted-foreground)] md:text-lg">
              From the first cleaning to full-mouth rehabilitation — every treatment at Diwasha is
              planned by a specialist and explained before it begins.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeUpStagger className="grid gap-6 md:grid-cols-2">
            {services.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              const href = s.slug === "dental-implants" ? "/dental-implants" : "/services";
              const isLive = s.slug === "dental-implants";
              return (
                <FadeUpChild key={s.slug}>
                  <article className="group flex h-full flex-col rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-ivory)] p-8 transition-all hover:border-[color:var(--color-accent)]/50 hover:bg-white hover:shadow-[var(--shadow-lift)] md:p-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-primary)]/8 text-[color:var(--color-primary)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-6 font-display text-3xl text-[color:var(--color-primary)]">
                      {s.title}
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
                      {s.blurb}
                    </p>
                    <div className="mt-8 flex items-center gap-3">
                      {isLive ? (
                        <Link
                          to={href}
                          className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-primary)] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-[color:var(--color-secondary)]"
                        >
                          Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      ) : (
                        <a
                          href={whatsappLink(`Hi, I'd like to know more about ${s.title} at Diwasha Dental.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-primary)] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--color-primary)] transition-colors hover:bg-[color:var(--color-primary)] hover:text-white"
                        >
                          Ask on WhatsApp
                        </a>
                      )}
                    </div>
                  </article>
                </FadeUpChild>
              );
            })}
          </FadeUpStagger>
        </div>
      </section>

      <section className="bg-[color:var(--color-primary)] py-20 text-white md:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center md:px-10">
          <h2 className="font-display text-3xl text-white md:text-5xl">
            Not sure where to start?
          </h2>
          <p className="max-w-xl text-sm text-white/75 md:text-base">
            Book a ₹500 consultation with Dr. Aditi — she’ll examine, explain, and quote everything
            in writing before anything is decided.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] px-6 py-3.5 text-sm font-medium text-[color:var(--color-primary)] transition-transform hover:scale-[1.02]"
          >
            Book consultation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
