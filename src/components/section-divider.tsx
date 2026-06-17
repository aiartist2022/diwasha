export function SectionDivider({
  flip = false,
  from = "var(--color-background)",
  to = "var(--color-card)",
}: {
  flip?: boolean;
  from?: string;
  to?: string;
}) {
  return (
    <div
      aria-hidden
      className="relative -mb-px w-full"
      style={{ background: from }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-12 w-full md:h-20"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block h-px w-12 align-middle ${className}`}
      style={{ background: "var(--color-accent)" }}
    />
  );
}
