import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, HeartHandshake, Sparkles, MapPin } from "lucide-react";
import doctorAditi from "@/assets/doctor-aditi.jpg";
import doctorShaswat from "@/assets/doctor-shaswat.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import { clinic, doctors } from "@/lib/clinic";
import { FadeUp, FadeUpChild, FadeUpStagger } from "@/components/fade-up";
import { GoldRule } from "@/components/section-divider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Diwasha Dental — Specialist Oral Surgeons in Ahmedabad" },
      {
        name: "description",
        content:
          "Meet Dr. Aditi and Dr. Shaswat Diwan, the oral & maxillofacial surgeons behind Diwasha Dental. Specialist team, modern clinic, warm care in Navrangpura, Ahmedabad.",
      },
      { property: "og:title", content: "About Diwasha Dental — Navrangpura, Ahmedabad" },
      {
        property: "og:description",
        content:
          "A specialist dental clinic led by oral & maxillofacial surgeons Dr. Aditi & Dr. Shaswat Diwan.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-[color:var(--color-ivory)] py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:px-10">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              About Diwasha
            </p>
            <h1 className="mt-4 font-display text-[44px] leading-[1.05] text-[color:var(--color-primary)] md:text-[72px]">
              A clinic built around
              <br />
              the <span className="serif-italic text-[color:var(--color-accent)]">patient</span> in the chair.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-muted-foreground)] md:text-lg">
              Diwasha Dental Clinic & Implant Centre was founded by two oral surgeons with the same
              quiet conviction: that the difference between good dentistry and great dentistry is
              how you make the patient feel before, during, and long after the procedure.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <GoldRule />
              <span className="serif-italic text-base text-[color:var(--color-primary)]">
                Navrangpura, Ahmedabad · since founding
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full border border-[color:var(--color-accent)]/40" />
              <img
                src={clinicInterior}
                alt="Diwasha Dental treatment suite interior"
                width={1600}
                height={1024}
                className="relative w-full rounded-[28px] object-cover shadow-[var(--shadow-lift)]"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <FadeUp className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Our philosophy
            </p>
            <h2 className="mt-4 font-display text-4xl text-[color:var(--color-primary)] md:text-5xl">
              Specialist hands. Honest plans. No theatre.
            </h2>
            <div className="serif-italic mt-8 space-y-6 text-xl leading-snug text-[color:var(--color-foreground)]/85 md:text-2xl">
              <p>
                We don’t sell treatment. We sit with you, look at what’s actually happening, and
                tell you — honestly — what your tooth needs and what it doesn’t.
              </p>
              <p>
                If a filling will do, it’s a filling. If a root canal will save the tooth, we’ll do
                it gently. If an implant is the right answer, we plan it carefully and place it
                ourselves.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-[color:var(--color-ivory-deep)] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeUp className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              The team
            </p>
            <h2 className="mt-4 font-display text-4xl text-[color:var(--color-primary)] md:text-5xl">
              Specialists you’ll actually meet.
            </h2>
          </FadeUp>

          <FadeUpStagger className="mt-16 grid gap-8 md:grid-cols-2">
            {[
              { ...doctors[0], image: doctorAditi },
              { ...doctors[1], image: doctorShaswat },
            ].map((d) => (
              <FadeUpChild key={d.slug}>
                <article className="overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-soft)]">
                  <div className="aspect-[3/4] overflow-hidden bg-[color:var(--color-ivory)]">
                    <img
                      src={d.image}
                      alt={`${d.name}, ${d.role}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                      {d.role}
                    </p>
                    <h3 className="mt-3 font-display text-3xl text-[color:var(--color-primary)]">
                      {d.name}
                    </h3>
                    <p className="mt-1 text-xs text-[color:var(--color-muted-foreground)]">
                      {d.credentials}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-[color:var(--color-foreground)]/80">
                      {d.bio}
                    </p>
                  </div>
                </article>
              </FadeUpChild>
            ))}
          </FadeUpStagger>

          <FadeUpStagger className="mt-12 grid gap-6 md:grid-cols-2">
            {[doctors[2], doctors[3]].map((d) => (
              <FadeUpChild key={d.slug}>
                <article className="rounded-2xl border border-[color:var(--color-border)] bg-white p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    {d.role}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-[color:var(--color-primary)]">
                    {d.name}
                  </h3>
                  <p className="text-xs text-[color:var(--color-muted-foreground)]">
                    {d.credentials}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-foreground)]/80">
                    {d.bio}
                  </p>
                </article>
              </FadeUpChild>
            ))}
          </FadeUpStagger>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Specialist-led",
                body: "Two qualified Oral & Maxillofacial Surgeons on staff — a rarity for a private clinic.",
              },
              {
                icon: HeartHandshake,
                title: "Honest pricing",
                body: "Written treatment plans with itemised cost. Nothing starts without your go-ahead.",
              },
              {
                icon: Sparkles,
                title: "Modern protocols",
                body: "Digital planning, hospital-grade sterilisation, single-use disposables where it matters.",
              },
            ].map((p) => (
              <FadeUp key={p.title}>
                <p.icon className="h-6 w-6 text-[color:var(--color-accent)]" />
                <h3 className="mt-5 font-display text-2xl text-[color:var(--color-primary)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
                  {p.body}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-primary)] py-20 text-white md:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center md:px-10">
          <MapPin className="h-6 w-6 text-[color:var(--color-accent)]" />
          <h2 className="font-display text-3xl text-white md:text-5xl">
            Visit us at <span className="serif-italic text-[color:var(--color-accent)]">Navrangpura</span>.
          </h2>
          <p className="max-w-xl text-sm text-white/75 md:text-base">
            {clinic.address.line1}, {clinic.address.line2}, {clinic.address.line3},{" "}
            {clinic.address.city} – {clinic.address.pin}
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] px-6 py-3.5 text-sm font-medium text-[color:var(--color-primary)] transition-transform hover:scale-[1.02]"
          >
            Plan your visit <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
