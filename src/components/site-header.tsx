import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { clinic, services, telLink } from "@/lib/clinic";
import logoAsset from "@/assets/diwasha-logo.png.asset.json";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-[color:var(--color-border)] bg-[color:var(--color-ivory)]/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link to="/" className="flex items-center" aria-label="Diwasha Dental Clinic & Implant Centre — home">
          <img
            src={logoAsset.url}
            alt="Diwasha Dental Clinic & Implant Centre"
            className="h-16 w-auto md:h-20"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className="flex items-center gap-1 px-4 py-2 text-sm text-[color:var(--color-foreground)] transition-colors hover:text-[color:var(--color-primary)]"
            >
              Services <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-72 rounded-xl border border-[color:var(--color-border)] bg-white p-2 shadow-[var(--shadow-lift)]">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={s.slug === "dental-implants" ? "/dental-implants" : "/services"}
                    className="block rounded-lg px-3 py-2 text-sm text-[color:var(--color-foreground)] transition-colors hover:bg-[color:var(--color-ivory)] hover:text-[color:var(--color-primary)]"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm text-[color:var(--color-foreground)] transition-colors hover:text-[color:var(--color-primary)]"
              activeProps={{ className: "px-4 py-2 text-sm text-[color:var(--color-primary)] font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink}
            className="flex items-center gap-2 text-sm text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary)]"
          >
            <Phone className="h-4 w-4" /> {clinic.phone}
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-[color:var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-primary-foreground)] shadow-[var(--shadow-soft)] transition-all hover:bg-[color:var(--color-secondary)]"
          >
            Book Appointment
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="rounded-md p-2 text-[color:var(--color-primary)] lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[color:var(--color-ivory)] lg:hidden">
          <div className="flex h-16 items-center justify-between px-5">
            <img src={logoAsset.url} alt="Diwasha" className="h-12 w-auto" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-md p-2 text-[color:var(--color-primary)]"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-4">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="border-b border-[color:var(--color-border)] py-4 font-display text-2xl text-[color:var(--color-primary)]"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="border-b border-[color:var(--color-border)] py-4 font-display text-2xl text-[color:var(--color-primary)]"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="border-b border-[color:var(--color-border)] py-4 font-display text-2xl text-[color:var(--color-primary)]"
            >
              Services
            </Link>
            <Link
              to="/dental-implants"
              onClick={() => setOpen(false)}
              className="border-b border-[color:var(--color-border)] py-3 pl-4 text-base text-[color:var(--color-muted-foreground)]"
            >
              · Dental Implants
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="border-b border-[color:var(--color-border)] py-4 font-display text-2xl text-[color:var(--color-primary)]"
            >
              Contact
            </Link>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={telLink}
                className="flex items-center justify-center gap-2 rounded-full border border-[color:var(--color-primary)] py-3 text-sm font-medium text-[color:var(--color-primary)]"
              >
                <Phone className="h-4 w-4" /> {clinic.phone}
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-[color:var(--color-primary)] py-3 text-center text-sm font-medium text-[color:var(--color-primary-foreground)]"
              >
                Book Appointment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
