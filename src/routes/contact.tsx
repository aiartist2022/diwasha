import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { clinic, telLink, whatsappLink, mapsEmbed } from "@/lib/clinic";
import { FadeUp } from "@/components/fade-up";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Diwasha Dental — Navrangpura, Ahmedabad | Book Appointment" },
      {
        name: "description",
        content:
          "Book an appointment at Diwasha Dental — A-301 Dynamic House, above HDFC Bank, Vijay Cross Roads, Navrangpura, Ahmedabad. Call +91 97268 21277 or WhatsApp us.",
      },
      { property: "og:title", content: "Contact Diwasha Dental — Ahmedabad" },
      {
        property: "og:description",
        content:
          "Visit us above HDFC Bank, Vijay Cross Roads, Navrangpura. Call, WhatsApp or send a message.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-[color:var(--color-ivory)] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Get in touch
            </p>
            <h1 className="mt-4 font-display text-[44px] leading-[1.05] text-[color:var(--color-primary)] md:text-[72px]">
              Let’s plan
              <br />
              your <span className="serif-italic text-[color:var(--color-accent)]">visit</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-muted-foreground)] md:text-lg">
              WhatsApp is the quickest way to reach us — most messages are answered within the hour
              during clinic times. You can also call, email, or send a message below.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1fr_1.1fr] md:gap-14 md:px-10">
          {/* INFO */}
          <FadeUp>
            <h2 className="font-display text-3xl text-[color:var(--color-primary)]">
              Diwasha Dental Clinic & Implant Centre
            </h2>

            <div className="mt-8 space-y-7">
              <InfoRow icon={MapPin} label="Visit">
                <p>
                  {clinic.address.line1}
                  <br />
                  {clinic.address.line2}
                  <br />
                  {clinic.address.line3}
                  <br />
                  {clinic.address.city} – {clinic.address.pin}
                </p>
              </InfoRow>
              <InfoRow icon={Phone} label="Call">
                <a href={telLink} className="hover:text-[color:var(--color-primary)]">
                  {clinic.phone}
                </a>
              </InfoRow>
              <InfoRow icon={Mail} label="Email">
                <a
                  href={`mailto:${clinic.email}`}
                  className="hover:text-[color:var(--color-primary)]"
                >
                  {clinic.email}
                </a>
              </InfoRow>
              <InfoRow icon={Clock} label="Hours">
                <ul className="space-y-1">
                  {clinic.hours.map((h) => (
                    <li key={h.day}>
                      <span className="text-[color:var(--color-muted-foreground)]">{h.day}:</span>{" "}
                      {h.time}
                    </li>
                  ))}
                </ul>
              </InfoRow>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-whatsapp)] px-6 py-3.5 text-sm font-medium text-white shadow-[var(--shadow-soft)]"
              >
                WhatsApp us <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={telLink}
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-primary)] bg-white px-6 py-3.5 text-sm font-medium text-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)] hover:text-white"
              >
                Call clinic
              </a>
            </div>
          </FadeUp>

          {/* FORM */}
          <FadeUp delay={0.1}>
            <ContactForm />
          </FadeUp>
        </div>
      </section>

      <section className="bg-[color:var(--color-ivory)] pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeUp>
            <div className="overflow-hidden rounded-3xl border border-[color:var(--color-border)] shadow-[var(--shadow-soft)]">
              <iframe
                title="Diwasha Dental — Navrangpura, Ahmedabad"
                src={mapsEmbed}
                width="100%"
                height="440"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-primary)]/8 text-[color:var(--color-primary)]">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
          {label}
        </p>
        <div className="mt-1 text-sm leading-relaxed text-[color:var(--color-foreground)]/85">
          {children}
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [state, setState] = useState({ name: "", phone: "", service: "", message: "" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      `Hi Diwasha, I'd like to book a consultation.`,
      ``,
      `Name: ${state.name}`,
      state.phone ? `Phone: ${state.phone}` : null,
      state.service ? `Interested in: ${state.service}` : null,
      state.message ? `Message: ${state.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(lines), "_blank", "noopener");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-ivory)] p-8 md:p-10"
    >
      <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
        Send a message
      </p>
      <h2 className="mt-2 font-display text-3xl text-[color:var(--color-primary)]">
        Request an appointment
      </h2>
      <p className="mt-3 text-sm text-[color:var(--color-muted-foreground)]">
        Submitting opens WhatsApp with your details pre-filled — fastest way to get a slot.
      </p>

      <div className="mt-8 grid gap-5">
        <Field
          label="Your name"
          required
          value={state.name}
          onChange={(v) => setState((s) => ({ ...s, name: v }))}
        />
        <Field
          label="Phone (optional)"
          type="tel"
          value={state.phone}
          onChange={(v) => setState((s) => ({ ...s, phone: v }))}
        />
        <SelectField
          label="What are you interested in?"
          value={state.service}
          onChange={(v) => setState((s) => ({ ...s, service: v }))}
          options={[
            "General consultation",
            "Dental implants",
            "Root canal treatment",
            "Oral surgery",
            "Smile makeover",
            "Teeth whitening",
            "Braces / aligners",
            "Something else",
          ]}
        />
        <TextAreaField
          label="Message (optional)"
          value={state.message}
          onChange={(v) => setState((s) => ({ ...s, message: v }))}
        />
        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-primary)] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[color:var(--color-secondary)]"
        >
          Send via WhatsApp <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.16em] text-[color:var(--color-muted-foreground)]">
        {label}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-[color:var(--color-border)] bg-white px-4 py-3 text-sm text-[color:var(--color-foreground)] outline-none transition-colors focus:border-[color:var(--color-accent)]"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.16em] text-[color:var(--color-muted-foreground)]">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-[color:var(--color-border)] bg-white px-4 py-3 text-sm text-[color:var(--color-foreground)] outline-none focus:border-[color:var(--color-accent)]"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.16em] text-[color:var(--color-muted-foreground)]">
        {label}
      </span>
      <textarea
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full resize-none rounded-xl border border-[color:var(--color-border)] bg-white px-4 py-3 text-sm text-[color:var(--color-foreground)] outline-none focus:border-[color:var(--color-accent)]"
      />
    </label>
  );
}
