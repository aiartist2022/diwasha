import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

function Instagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}
function Facebook({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.5 1.6-1.5h1.7V4.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V14h2.7v8h3.4Z" />
    </svg>
  );
}
import { clinic, services, telLink } from "@/lib/clinic";
import logoAsset from "@/assets/diwasha-logo-white.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <img
              src={logoAsset.url}
              alt="Diwasha Dental Clinic & Implant Centre"
              className="h-28 w-auto md:h-32"
            />
            <p className="serif-italic mt-5 max-w-sm text-lg leading-relaxed text-white/85">
              "{clinic.tagline}."
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/75">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-accent)]" />
                <span>
                  {clinic.address.line1}, {clinic.address.line2},<br />
                  {clinic.address.line3}, {clinic.address.city} – {clinic.address.pin}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[color:var(--color-accent)]" />
                <a href={telLink} className="hover:text-white">{clinic.phone}</a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[color:var(--color-accent)]" />
                <a href={`mailto:${clinic.email}`} className="hover:text-white">{clinic.email}</a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-[color:var(--color-accent)]">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={s.slug === "dental-implants" ? "/dental-implants" : "/services"}
                    className="hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-[color:var(--color-accent)]">Visit</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/services" className="hover:text-white">All Services</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
            <h4 className="mt-8 font-display text-lg text-[color:var(--color-accent)]">Hours</h4>
            <ul className="mt-4 space-y-1.5 text-sm text-white/75">
              {clinic.hours.map((h) => (
                <li key={h.day}>
                  <span className="text-white/55">{h.day}</span>
                  <br />
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/15 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} Diwasha Dental Clinic & Implant Centre. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a
              href={clinic.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-white/20 p-2.5 transition-colors hover:bg-white/10"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={clinic.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-white/20 p-2.5 transition-colors hover:bg-white/10"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
