## Diwasha Dental — Phase 1 Website Build

A premium, conversion-focused multi-page site for Diwasha Dental Clinic & Implant Centre, Navrangpura, Ahmedabad. Built straight to the brief's spec: warm-clinical aesthetic (Deep Navy + Teal + Warm Gold on Ivory), Playfair Display + Inter + Cormorant Garamond italic, and a Phase 1 page set.

### Pages (TanStack Start routes)

- `/` — Home: Hero (Option C copy, dual CTA), Trust bar, Why Diwasha (3 pillars), Services grid (6 cards), Doctors, Testimonials, Gallery preview, Technology, FAQ, Booking CTA, Footer
- `/about` — Story of Dr. Aditi & Dr. Shaswat Diwan, mission, credentials, clinic photos
- `/services` — Overview of all 6 services, linking out
- `/dental-implants` — Full SEO landing page (template for future service pages)
- `/contact` — Map embed, hours, WhatsApp, click-to-call, contact form
- `/*` — Branded 404 (root route notFoundComponent already exists; restyled to brand)

### Design System

- Tokens in `src/styles.css` via `@theme inline` + `:root` (oklch):
  - `--primary` Deep Navy `#0E3A5C`, `--secondary` Teal `#1B6B72`, `--accent` Warm Gold `#C9843B`
  - `--background` Ivory `#F8F5F0`, `--foreground` Charcoal `#2D2D2D`, `--card` White
- Fonts loaded via `<link>` in `__root.tsx` head (Playfair Display, Inter, Cormorant Garamond italic). Tokens: `--font-display` (Playfair), `--font-sans` (Inter), `--font-serif` (Cormorant).
- Decorative SVG wave dividers between sections; subtle paper grain overlay.
- Reusable shadcn-derived button variants: `primary` (navy), `gold` (accent), `whatsapp` (green), `outline`.

### Global Components

- `SiteHeader` — Logo, nav (Services dropdown, About, Gallery, Contact), sticky "Book Appointment" CTA, frosted glass on scroll, mobile hamburger sheet.
- `SiteFooter` — Contact block, nav columns, social links, copyright.
- `WhatsAppFAB` — Fixed bottom-right floating button, pulse animation, deep-links to `wa.me/919726821277` with pre-filled message.
- `SectionDivider` — Decorative wave SVG.
- `RatingBadge`, `StatCounter` (IntersectionObserver count-up), `FAQItem` (accordion + FAQPage JSON-LD), `ServiceCard`, `DoctorCard`, `TestimonialCard`, `BeforeAfterTile`.

### Motion

Use `motion/react` (Motion for React) for scroll-triggered fade-up staggers, hero entry, and counter animation. Respect `prefers-reduced-motion`. (GSAP from the brief is swapped for Motion since it integrates cleanly with React; same visual outcome.)

### Content & SEO

- Per-route `head()` with unique title/description/OG tags using the brief's keyword targets.
- JSON-LD: `LocalBusiness`/`Dentist` on Home + Contact, `FAQPage` on Home, `Person` on doctor cards, `MedicalProcedure` on Dental Implants.
- Real copy from the brief (Option C hero, Why Diwasha pillars, etc.). NAP: A-301 Dynamic House, above HDFC Bank, near Vijay Cross Roads, 120 Feet Ring Road, Navrangpura, Ahmedabad – 380009. Phone +91 97268 21277. Email diwasha.dental@gmail.com.
- Single H1 per page, semantic sectioning, descriptive alt text, lazy images.

### Imagery

All photography slots use generated placeholder images (warm-clinical style) saved under `src/assets/`, sized per slot, clearly captioned so the client can swap them later. No stock dentist clichés.

### Out of Scope (Phase 2)

Root Canal, Oral Surgery, Smile Makeover, Teeth Whitening, Braces & Aligners, Gallery page, appointment-booking backend. The Dental Implants page becomes the template to clone.

### Technical Notes

- Stack stays on TanStack Start + Tailwind v4 + shadcn (no migration to plain HTML despite the brief — TanStack is required here).
- No backend/Cloud needed for Phase 1 (contact form is a `mailto:` + WhatsApp deep link; can be upgraded to Lovable Cloud later if Prad wants form submissions stored).
- Tailwind v4 token mapping in `src/styles.css`; no `tailwind.config.js`.

I'll implement once you approve.