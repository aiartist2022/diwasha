import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Activity,
  Stethoscope,
  Smile,
  AlignCenterHorizontal,
  Sun,
  Star,
  ArrowUpRight,
  ShieldCheck,
  HeartHandshake,
  MapPin,
  Plus,
  Minus,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

import heroDoctor from "@/assets/hero-doctor.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import doctorAditi from "@/assets/doctor-aditi.jpg";
import doctorShaswat from "@/assets/doctor-shaswat.jpg";
import implantDetail from "@/assets/implant-detail.jpg";

import {
  clinic,
  doctors,
  faqs,
  services,
  testimonials,
  whatsappLink,
} from "@/lib/clinic";
import { FadeUp, FadeUpChild, FadeUpStagger } from "@/components/fade-up";
import { GoldRule } from "@/components/section-divider";
import { StatCounter } from "@/components/stat-counter";

const iconMap = {
  Sparkles,
  Activity,
  Stethoscope,
  Smile,
  AlignCenter: AlignCenterHorizontal,
  Sun,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diwasha Dental — Implant & Oral Surgery Centre in Navrangpura, Ahmedabad" },
      {
        name: "description",
        content:
          "Dental care that puts you first. Specialist oral surgeons, modern implants & gentle dentistry near Vijay Cross Roads, Navrangpura. 4.8★ from 181 patients.",
      },
      { property: "og:title", content: "Diwasha Dental — Navrangpura, Ahmedabad" },
      {
        property: "og:description",
        content:
          "Specialist oral surgeons. Gentle approach. 4.8★ rating. Located near Vijay Cross Roads, Navrangpura.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: clinic.name,
          telephone: clinic.phone,
          email: clinic.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: `${clinic.address.line1}, ${clinic.address.line2}`,
            addressLocality: clinic.address.city,
            addressRegion: clinic.address.state,
            postalCode: clinic.address.pin,
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: clinic.rating,
            reviewCount: clinic.reviews,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyDiwasha />
      <ServicesSection />
      <DoctorsSection />
      <Testimonials />
      <GalleryPreview />
      <Technology />
      <FAQSection />
      <BookingCTA />
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-ivory)]">
      <div className="grain-overlay relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-12 md:px-10 md:pb-32 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-24">
        <div className="relative z-10 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--color-accent)]/40 bg-[color:var(--color-accent)]/10 px-3.5 py-1.5 text-xs uppercase tracking-[0.16em] text-[color:var(--color-accent)]"
          >
            <Star className="h-3 w-3 fill-current" />
            {clinic.rating}★ from {clinic.reviews}+ patients
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-[44px] leading-[1.05] text-[color:var(--color-primary)] sm:text-5xl md:text-[64px] lg:text-[72px]"
          >
            Dental care that
            <br />
            puts <span className="serif-italic text-[color:var(--color-accent)]">you</span> first.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-muted-foreground)] md:text-lg"
          >
            Expert oral surgeons. Gentle approach. Modern implants and full-mouth care, delivered
            from a calm clinic above HDFC Bank at Vijay Cross Roads, Navrangpura.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--color-primary)] px-6 py-3.5 text-sm font-medium text-[color:var(--color-primary-foreground)] shadow-[var(--shadow-soft)] transition-all hover:bg-[color:var(--color-secondary)] hover:shadow-[var(--shadow-lift)]"
            >
              Book a consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-primary)]/20 bg-white px-6 py-3.5 text-sm font-medium text-[color:var(--color-primary)] transition-all hover:border-[color:var(--color-primary)]"
            >
              WhatsApp the clinic
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex items-center gap-3 text-xs text-[color:var(--color-muted-foreground)]"
          >
            <GoldRule />
            <span className="serif-italic text-base text-[color:var(--color-primary)]">
              Consultation with Dr. Aditi · ₹500
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full border border-[color:var(--color-accent)]/40 md:h-44 md:w-44" />
          <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-[28px] bg-[color:var(--color-primary)]/8" />
          <div className="relative overflow-hidden rounded-[28px] shadow-[var(--shadow-lift)]">
            <img
              src={heroDoctor}
              alt="Senior oral surgeon at Diwasha Dental clinic in Navrangpura"
              width={1280}
              height={1536}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-white/90 px-5 py-3.5 backdrop-blur">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-muted-foreground)]">
                  Led by
                </p>
                <p className="font-display text-base text-[color:var(--color-primary)]">
                  Dr. Aditi & Dr. Shaswat Diwan
                </p>
              </div>
              <span className="serif-italic text-sm text-[color:var(--color-accent)]">
                Oral Surgeons
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- TRUST BAR ---------------- */
function TrustBar() {
  const items = [
    { value: 4.8, suffix: "★", decimals: 1, label: "Patient rating" },
    { value: 181, suffix: "+", decimals: 0, label: "Verified reviews" },
    { value: 15, suffix: "+", decimals: 0, label: "Years of practice" },
    { value: 4, suffix: "", decimals: 0, label: "Specialists on team" },
  ];
  return (
    <section className="border-y border-[color:var(--color-border)] bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-10 md:grid-cols-4 md:px-10 md:py-14">
        {items.map((it) => (
          <FadeUp key={it.label} className="text-center">
            <p className="font-display text-4xl text-[color:var(--color-primary)] md:text-5xl">
              <StatCounter value={it.value} suffix={it.suffix} decimals={it.decimals} />
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted-foreground)]">
              {it.label}
            </p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

/* ---------------- WHY DIWASHA ---------------- */
function WhyDiwasha() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Oral surgery expertise",
      body: "Dr. Aditi and Dr. Shaswat are both qualified Oral & Maxillofacial Surgeons — a rarity in Ahmedabad. Your treatment is planned and performed by specialists, not generalists.",
    },
    {
      icon: HeartHandshake,
      title: "Compassionate care",
      body: "Dentistry can feel daunting. Every procedure at Diwasha is explained clearly, performed gently, and followed up personally. You’re not a number — you’re a patient we care about.",
    },
    {
      icon: MapPin,
      title: "Landmark location",
      body: "Above HDFC Bank, near Vijay Cross Roads on 120 Feet Ring Road — one of the most accessible clinics in Ahmedabad. Easy parking, easy to find.",
    },
  ];

  return (
    <section className="bg-[color:var(--color-ivory)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
            Why Diwasha
          </p>
          <h2 className="mt-4 font-display text-4xl text-[color:var(--color-primary)] md:text-[52px] md:leading-[1.08]">
            Specialist hands.
            <br />
            <span className="serif-italic text-[color:var(--color-accent)]">Warm</span> chairside.
          </h2>
        </FadeUp>

        <FadeUpStagger className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <FadeUpChild key={p.title}>
              <article className="group h-full rounded-3xl border border-[color:var(--color-border)] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-accent)]/50 hover:shadow-[var(--shadow-lift)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-primary)]/8 text-[color:var(--color-primary)] transition-colors group-hover:bg-[color:var(--color-accent)] group-hover:text-white">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-[color:var(--color-primary)]">
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
  );
}

/* ---------------- SERVICES ---------------- */
function ServicesSection() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <FadeUp className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              What we treat
            </p>
            <h2 className="mt-4 font-display text-4xl text-[color:var(--color-primary)] md:text-[52px] md:leading-[1.08]">
              A full spectrum of
              <br />
              <span className="serif-italic text-[color:var(--color-accent)]">specialist</span> dentistry.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--color-primary)] underline-offset-4 hover:underline"
            >
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </FadeUp>
        </div>

        <FadeUpStagger className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            const href = s.slug === "dental-implants" ? "/dental-implants" : "/services";
            return (
              <FadeUpChild key={s.slug}>
                <Link
                  to={href}
                  className="group flex h-full flex-col justify-between bg-white p-8 transition-colors hover:bg-[color:var(--color-ivory)]"
                >
                  <div>
                    <Icon className="h-6 w-6 text-[color:var(--color-accent)]" />
                    <h3 className="mt-6 font-display text-2xl text-[color:var(--color-primary)]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
                      {s.blurb}
                    </p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-[color:var(--color-primary)]">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </FadeUpChild>
            );
          })}
        </FadeUpStagger>
      </div>
    </section>
  );
}

/* ---------------- DOCTORS ---------------- */
function DoctorsSection() {
  const featured = [
    { ...doctors[0], image: doctorAditi },
    { ...doctors[1], image: doctorShaswat },
  ];
  return (
    <section className="bg-[color:var(--color-ivory-deep)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
            The team
          </p>
          <h2 className="mt-4 font-display text-4xl text-[color:var(--color-primary)] md:text-[52px] md:leading-[1.08]">
            Surgeons who treat you
            <br />
            <span className="serif-italic text-[color:var(--color-accent)]">like family</span>.
          </h2>
        </FadeUp>

        <FadeUpStagger className="mt-16 grid gap-8 md:grid-cols-2">
          {featured.map((d) => (
            <FadeUpChild key={d.slug}>
              <article className="overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-soft)]">
                <div className="aspect-[5/4] overflow-hidden bg-[color:var(--color-ivory)]">
                  <img
                    src={d.image}
                    alt={`${d.name}, ${d.role} at Diwasha Dental`}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    {d.role}
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-[color:var(--color-primary)]">
                    {d.name}
                  </h3>
                  <p className="mt-2 text-xs text-[color:var(--color-muted-foreground)]">
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

        <FadeUp className="mt-10 text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--color-primary)] underline-offset-4 hover:underline"
          >
            Meet the full team <ArrowUpRight className="h-4 w-4" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  return (
    <section className="bg-[color:var(--color-primary)] py-24 text-[color:var(--color-primary-foreground)] md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
            In patients’ words
          </p>
          <h2 className="mt-4 font-display text-4xl text-white md:text-[52px] md:leading-[1.08]">
            <span className="serif-italic text-[color:var(--color-accent)]">181</span> reviews.
            <br />
            One quiet promise.
          </h2>
        </FadeUp>

        <FadeUpStagger className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <FadeUpChild key={t.name}>
              <figure className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
                <div>
                  <div className="flex gap-1 text-[color:var(--color-accent)]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="serif-italic mt-5 text-xl leading-snug text-white/95">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-8 border-t border-white/10 pt-5">
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-white/60">{t.treatment}</p>
                </figcaption>
              </figure>
            </FadeUpChild>
          ))}
        </FadeUpStagger>
      </div>
    </section>
  );
}

/* ---------------- GALLERY PREVIEW ---------------- */
function GalleryPreview() {
  const tiles = [
    { src: clinicInterior, label: "Treatment suite" },
    { src: implantDetail, label: "Implant detail" },
    { src: heroDoctor, label: "Consultation" },
  ];
  return (
    <section className="bg-[color:var(--color-ivory)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <FadeUp className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Inside the clinic
            </p>
            <h2 className="mt-4 font-display text-4xl text-[color:var(--color-primary)] md:text-[52px] md:leading-[1.08]">
              Calm rooms.
              <br />
              <span className="serif-italic text-[color:var(--color-accent)]">Considered</span> details.
            </h2>
          </FadeUp>
        </div>

        <FadeUpStagger className="mt-14 grid gap-4 md:grid-cols-3">
          {tiles.map((t) => (
            <FadeUpChild key={t.label}>
              <figure className="group relative overflow-hidden rounded-3xl">
                <img
                  src={t.src}
                  alt={t.label}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-4 bottom-4 rounded-full bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.16em] text-[color:var(--color-primary)] backdrop-blur">
                  {t.label}
                </figcaption>
              </figure>
            </FadeUpChild>
          ))}
        </FadeUpStagger>
      </div>
    </section>
  );
}

/* ---------------- TECHNOLOGY ---------------- */
function Technology() {
  const items = [
    {
      title: "Digital intraoral scanning",
      body: "Goodbye gooey impressions. We capture your bite in 3D for crowns, aligners and implant planning.",
    },
    {
      title: "Hospital-grade sterilisation",
      body: "Class B autoclave with full traceability on every instrument cycle.",
    },
    {
      title: "Computer-guided implants",
      body: "Implants planned in software, placed with surgical guides for millimetre-level accuracy.",
    },
    {
      title: "Low-dose digital imaging",
      body: "Modern sensors deliver crisp diagnostics with a fraction of the radiation of film.",
    },
  ];
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-10">
        <FadeUp className="md:sticky md:top-32 md:self-start">
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
            Technology
          </p>
          <h2 className="mt-4 font-display text-4xl text-[color:var(--color-primary)] md:text-[52px] md:leading-[1.08]">
            Modern tools,
            <br />
            <span className="serif-italic text-[color:var(--color-accent)]">quietly</span> applied.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
            Good dentistry isn’t about gadget theatre. It’s about the right instruments, in trained
            hands, used only when they help your outcome.
          </p>
        </FadeUp>
        <FadeUpStagger className="divide-y divide-[color:var(--color-border)]">
          {items.map((it, i) => (
            <FadeUpChild key={it.title}>
              <div className="flex gap-6 py-6 md:gap-10 md:py-8">
                <span className="font-display text-2xl text-[color:var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-[color:var(--color-primary)]">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
                    {it.body}
                  </p>
                </div>
              </div>
            </FadeUpChild>
          ))}
        </FadeUpStagger>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[color:var(--color-ivory-deep)] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:px-10">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
            Common questions
          </p>
          <h2 className="mt-4 font-display text-4xl text-[color:var(--color-primary)] md:text-[52px] md:leading-[1.08]">
            Straight answers
            <br />
            to the <span className="serif-italic text-[color:var(--color-accent)]">real</span> worries.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
            If your question isn’t here, message us on WhatsApp — Dr. Aditi or one of the team will
            usually reply within the hour during clinic times.
          </p>
        </FadeUp>
        <FadeUpStagger className="divide-y divide-[color:var(--color-border)] border-y border-[color:var(--color-border)]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <FadeUpChild key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start gap-6 py-6 text-left md:py-7"
                >
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-primary)]/30 text-[color:var(--color-primary)]">
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                  <div className="flex-1">
                    <p className="font-display text-xl text-[color:var(--color-primary)] md:text-2xl">
                      {f.q}
                    </p>
                    <div
                      className={`grid transition-all duration-500 ${
                        isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="overflow-hidden text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </button>
              </FadeUpChild>
            );
          })}
        </FadeUpStagger>
      </div>
    </section>
  );
}

/* ---------------- BOOKING CTA ---------------- */
function BookingCTA() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-primary)] py-24 text-white md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[color:var(--color-accent)]/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[color:var(--color-secondary)]/30 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
            Your first step
          </p>
          <h2 className="mt-4 font-display text-4xl text-white md:text-[64px] md:leading-[1.05]">
            Ready to transform
            <br />
            <span className="serif-italic text-[color:var(--color-accent)]">your</span> smile?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/75">
            Book a consultation with Dr. Aditi or Dr. Shaswat. We’ll explain everything before
            anything is started — no pressure, no surprises.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] px-7 py-4 text-sm font-medium text-[color:var(--color-primary)] shadow-[var(--shadow-lift)] transition-transform hover:scale-[1.02]"
            >
              Book consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              WhatsApp instead
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
