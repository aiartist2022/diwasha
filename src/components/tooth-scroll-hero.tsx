import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Star } from "lucide-react";
import { motion } from "motion/react";

import { clinic, whatsappLink } from "@/lib/clinic";
import { GoldRule } from "@/components/section-divider";
import doctorHero from "@/assets/doctor-hero.png.asset.json";


const FRAME_COUNT = 167;
const framePath = (i: number) =>
  `/tooth/frames/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`;

export function ToothScrollHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);

  // Preload frames
  useEffect(() => {
    let cancelled = false;
    const imgs: HTMLImageElement[] = [];
    let done = 0;
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = framePath(i);
      img.onload = img.onerror = () => {
        if (cancelled) return;
        done++;
        setLoaded(done);
        if (done === FRAME_COUNT) setReady(true);
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
    return () => {
      cancelled = true;
    };
  }, []);

  // Draw a frame to the canvas (cover-fit)
  const drawFrame = (idx: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[idx];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cw, ch);
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const w = iw * scale;
    const h = ih * scale;
    const x = (cw - w) / 2;
    const y = (ch - h) / 2;
    ctx.drawImage(img, x, y, w, h);
  };

  // Scroll → frame scrub
  useEffect(() => {
    if (!ready) return;
    let raf = 0;
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      const target = Math.round(p * (FRAME_COUNT - 1));
      setProgress(p);
      if (target !== currentFrameRef.current) {
        currentFrameRef.current = target;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => drawFrame(target));
      }
    };
    onScroll();
    drawFrame(0);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [ready]);

  const loadPct = Math.round((loaded / FRAME_COUNT) * 100);

  // Hero copy fades out by ~25% progress
  const heroOpacity = Math.max(0, 1 - progress / 0.22);
  const heroTranslate = progress * -80;

  // Panel 1 (Specialists) visible 0.30 – 0.60
  const p1 = panelOpacity(progress, 0.3, 0.42, 0.55, 0.65);
  // Panel 2 (Implant Centre) visible 0.65 – 0.95
  const p2 = panelOpacity(progress, 0.66, 0.76, 0.9, 1.0);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[color:var(--color-ivory)]"
      style={{ height: "360vh" }}
      aria-label="Diwasha Dental — scroll to explore"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{
            opacity: ready ? 1 : 0,
            transition: "opacity 600ms ease",
          }}
        />
        {/* Soft vignette for legibility */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(248,245,240,0) 35%, rgba(248,245,240,0.55) 100%)",
          }}
        />


        {/* Doctor portrait — left side, fades on scroll */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden items-end pb-16 md:flex md:pb-20"
          style={{
            opacity: heroOpacity,
            transform: `translateY(${heroTranslate * 0.4}px)`,
            transition: "opacity 120ms linear",
          }}
        >
          <img
            src={doctorHero.url}
            alt="Dr. Aditi Diwan, Oral Surgeon at Diwasha Dental"
            className="h-[100%] w-auto max-w-[54vw] object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.18)]"
          />
        </div>

        {/* Preloader */}
        {!ready && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[color:var(--color-ivory)] text-[color:var(--color-primary)]">
            <div className="font-display text-3xl">Diwasha Dental</div>
            <div className="mt-6 h-[2px] w-48 overflow-hidden bg-[color:var(--color-primary)]/15">
              <div
                className="h-full bg-[color:var(--color-accent)] transition-[width] duration-150"
                style={{ width: `${loadPct}%` }}
              />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[color:var(--color-muted-foreground)]">
              Preparing experience · {loadPct}%
            </p>
          </div>
        )}

        {/* Hero copy overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            opacity: heroOpacity,
            transform: `translateY(${heroTranslate}px)`,
          }}
        >
          <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 md:px-10">
            <div className="pointer-events-auto max-w-2xl md:ml-auto md:text-left">

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--color-accent)]/40 bg-white/70 px-3.5 py-1.5 text-xs uppercase tracking-[0.16em] text-[color:var(--color-accent)] backdrop-blur"
              >
                <Star className="h-3 w-3 fill-current" />
                {clinic.rating}★ from {clinic.reviews}+ patients
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-6 font-display text-[44px] leading-[1.05] text-[color:var(--color-primary)] sm:text-5xl md:text-[64px] lg:text-[76px]"
              >
                Dental care that
                <br />
                puts{" "}
                <span className="serif-italic text-[color:var(--color-accent)]">you</span> first.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-foreground)]/85 md:text-lg"
              >
                Expert oral surgeons. Gentle approach. Modern implants and full-mouth care,
                delivered from a calm clinic above HDFC Bank at Vijay Cross Roads, Navrangpura.
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
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-primary)]/20 bg-white/80 px-6 py-3.5 text-sm font-medium text-[color:var(--color-primary)] backdrop-blur transition-all hover:border-[color:var(--color-primary)]"
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
                  Scroll to explore
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mid panel — Specialist surgeons */}
        <FloatingPanel opacity={p1} align="right">
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
            Specialist surgeons
          </p>
          <h2 className="mt-3 font-display text-3xl text-[color:var(--color-primary)] md:text-4xl">
            Treated by{" "}
            <span className="serif-italic text-[color:var(--color-accent)]">specialists</span>,
            not generalists.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-foreground)]/80">
            Dr. Aditi and Dr. Shaswat Diwan are both qualified Oral & Maxillofacial
            Surgeons — a rare combination in Ahmedabad.
          </p>
        </FloatingPanel>

        {/* End panel — Implant Centre */}
        <FloatingPanel opacity={p2} align="left">
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
            Implant Centre
          </p>
          <h2 className="mt-3 font-display text-3xl text-[color:var(--color-primary)] md:text-4xl">
            Implants engineered to{" "}
            <span className="serif-italic text-[color:var(--color-accent)]">last a lifetime</span>.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-foreground)]/80">
            Premium titanium systems, CBCT-guided planning, and a calm chairside —
            so a new tooth feels like your own.
          </p>
          <Link
            to="/dental-implants"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--color-primary)] underline-offset-4 hover:underline"
          >
            Explore implants <ArrowUpRight className="h-4 w-4" />
          </Link>
        </FloatingPanel>

        {/* Scroll cue */}
        {ready && progress < 0.05 && (
          <div className="pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-primary)]/60">
            ↓ Scroll
          </div>
        )}
      </div>
    </section>
  );
}

function panelOpacity(
  p: number,
  fadeInStart: number,
  fadeInEnd: number,
  fadeOutStart: number,
  fadeOutEnd: number,
) {
  if (p < fadeInStart || p > fadeOutEnd) return 0;
  if (p < fadeInEnd) return (p - fadeInStart) / (fadeInEnd - fadeInStart);
  if (p > fadeOutStart) return 1 - (p - fadeOutStart) / (fadeOutEnd - fadeOutStart);
  return 1;
}

function FloatingPanel({
  opacity,
  align,
  children,
}: {
  opacity: number;
  align: "left" | "right";
  children: React.ReactNode;
}) {
  if (opacity <= 0.01) return null;
  return (
    <div
      className="pointer-events-none absolute inset-0 z-20 flex items-center"
      style={{ opacity }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div
          className={`pointer-events-auto max-w-md rounded-3xl border border-[color:var(--color-border)] bg-white/85 p-7 shadow-[var(--shadow-lift)] backdrop-blur-md md:p-8 ${
            align === "right" ? "ml-auto" : ""
          }`}
          style={{ transform: `translateY(${(1 - opacity) * 20}px)` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
