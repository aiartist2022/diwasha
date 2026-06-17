import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, ShieldCheck, Clock, Sparkles } from "lucide-react";
import implantDetail from "@/assets/implant-detail.jpg";
import { clinic, whatsappLink } from "@/lib/clinic";
import { FadeUp, FadeUpChild, FadeUpStagger } from "@/components/fade-up";
import { GoldRule } from "@/components/section-divider";

export const Route = createFileRoute("/dental-implants")({
  head: () => ({
    meta: [
      { title: "Dental Implants in Ahmedabad — Specialist Surgeons | Diwasha Dental" },
      {
        name: "description",
        content:
          "Permanent, natural-feeling dental implants planned and placed by qualified oral surgeons. Computer-guided implant placement at Diwasha Dental, Navrangpura, Ahmedabad.",
      },
      { property: "og:title", content: "Dental Implants — Diwasha Dental, Ahmedabad" },
      {
        property: "og:description",
        content:
          "Specialist-placed dental implants in Navrangpura, Ahmedabad. Computer-guided, gently performed.",
      },
      { property: "og:image", content: implantDetail },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalProcedure",
          name: "Dental Implants",
          procedureType: "https://schema.org/SurgicalProcedure",
          performer: {
            "@type": "Dentist",
            name: clinic.name,
            telephone: clinic.phone,
          },
        }),
      },
    ],
  }),
  component: DentalImplantsPage,
});

function DentalImplantsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[color:var(--color-ivory)] py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:px-10">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Dental Implants
            </p>
            <h1 className="mt-4 font-display text-[44px] leading-[1.05] text-[color:var(--color-primary)] md:text-[72px]">
              A tooth that
              <br />
              <span className="serif-italic text-[color:var(--color-accent)]">feels</span> like
              your own.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-muted-foreground)] md:text-lg">
              Dental implants are the closest thing modern dentistry has to growing a tooth back.
              At Diwasha, every implant is planned in 3D and placed by a qualified oral surgeon —
              not delegated, not outsourced.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-primary)] px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-[color:var(--color-secondary)]"
              >
                Book an implant consult <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink("Hi, I'd like to know more about dental implants at Diwasha Dental.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-primary)]/20 bg-white px-6 py-3.5 text-sm font-medium text-[color:var(--color-primary)] hover:border-[color:var(--color-primary)]"
              >
                Ask on WhatsApp
              </a>
            </div>
            <div className="mt-10 flex items-center gap-3">
              <GoldRule />
              <span className="serif-italic text-base text-[color:var(--color-primary)]">
                Consultation with Dr. Aditi · ₹500
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-[28px] bg-[color:var(--color-primary)]/8" />
              <img
                src={implantDetail}
                alt="Dental implant model and porcelain crown — close-up product detail"
                width={1280}
                height={896}
                className="relative w-full rounded-[28px] object-cover shadow-[var(--shadow-lift)]"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* WHY DIWASHA FOR IMPLANTS */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeUp className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Why have it done here
            </p>
            <h2 className="mt-4 font-display text-4xl text-[color:var(--color-primary)] md:text-5xl">
              Placed by surgeons. <span className="serif-italic text-[color:var(--color-accent)]">Not</span> generalists.
            </h2>
          </FadeUp>
          <FadeUpStagger className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Specialist placement",
                body: "Both lead doctors hold MDS qualifications in Oral & Maxillofacial Surgery — implant placement is what they trained for.",
              },
              {
                icon: Sparkles,
                title: "Computer-guided",
                body: "We plan in software, fabricate a surgical guide, and place the implant with millimetre-level accuracy.",
              },
              {
                icon: Clock,
                title: "Predictable timeline",
                body: "Most cases: 1 placement visit, 3–6 months of healing, 1–2 visits to fit the final crown. Clear from day one.",
              },
            ].map((p) => (
              <FadeUpChild key={p.title}>
                <article className="h-full rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-ivory)] p-8">
                  <p.icon className="h-6 w-6 text-[color:var(--color-accent)]" />
                  <h3 className="mt-5 font-display text-2xl text-[color:var(--color-primary)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
                    {p.body}
                  </p>
                </article>
              </FadeUpChild>
            ))}
          </FadeUpStagger>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[color:var(--color-ivory-deep)] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <FadeUp className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              The process
            </p>
            <h2 className="mt-4 font-display text-4xl text-[color:var(--color-primary)] md:text-5xl">
              What to expect, step by step.
            </h2>
          </FadeUp>

          <FadeUpStagger className="mt-14 space-y-px">
            {[
              {
                t: "Consultation & 3D scan",
                b: "Dr. Aditi examines, takes a low-dose CBCT scan and explains your options. You leave with a written plan and itemised cost.",
              },
              {
                t: "Implant placement",
                b: "A 45–60 minute visit under local anaesthesia. Most patients drive themselves home and are back to normal eating in 2–3 days.",
              },
              {
                t: "Healing & integration",
                b: "Over 3–6 months the implant fuses with your jawbone. You wear a temporary tooth and we review healing at regular intervals.",
              },
              {
                t: "Final crown fitting",
                b: "Once integrated, we fit a custom-coloured porcelain crown. You walk out with a tooth that looks, bites and flosses like the original.",
              },
            ].map((step, i) => (
              <FadeUpChild key={step.t}>
                <div className="flex gap-6 border-t border-[color:var(--color-border)] py-7 md:gap-10 md:py-9">
                  <span className="font-display text-3xl text-[color:var(--color-accent)] md:text-4xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-[color:var(--color-primary)] md:text-3xl">
                      {step.t}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[color:var(--color-muted-foreground)] md:text-base">
                      {step.b}
                    </p>
                  </div>
                </div>
              </FadeUpChild>
            ))}
          </FadeUpStagger>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              What’s included
            </p>
            <h2 className="mt-4 font-display text-4xl text-[color:var(--color-primary)] md:text-5xl">
              Every implant fee covers the whole journey.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
              No surprise add-ons mid-treatment. Your written quote covers everything from
              imaging to the final crown.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <ul className="space-y-4">
              {[
                "CBCT scan and digital implant planning",
                "Surgical guide (where indicated)",
                "Implant fixture from a globally-trusted brand",
                "Placement surgery under local anaesthesia",
                "Healing abutment and temporary tooth",
                "Custom porcelain crown on a titanium abutment",
                "All review appointments through healing",
                "5-year clinic warranty on the implant",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 border-b border-[color:var(--color-border)] pb-4 text-sm text-[color:var(--color-foreground)]/85"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-accent)]" />
                  {line}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[color:var(--color-primary)] py-20 text-white md:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center md:px-10">
          <h2 className="font-display text-3xl text-white md:text-5xl">
            Replace your tooth, <span className="serif-italic text-[color:var(--color-accent)]">properly</span>.
          </h2>
          <p className="max-w-xl text-sm text-white/75 md:text-base">
            Book a consultation with Dr. Aditi. We’ll examine, scan and quote — and only proceed
            when you’re completely sure.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] px-6 py-3.5 text-sm font-medium text-[color:var(--color-primary)] transition-transform hover:scale-[1.02]"
            >
              Book consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink("Hi, I'd like to know more about dental implants at Diwasha Dental.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10"
            >
              WhatsApp Dr. Aditi
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
