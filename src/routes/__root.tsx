import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--color-ivory)] px-6">
      <div className="max-w-md text-center">
        <p className="serif-italic text-base text-[color:var(--color-accent)]">404</p>
        <h1 className="mt-3 font-display text-5xl text-[color:var(--color-primary)]">
          We couldn’t find that page.
        </h1>
        <p className="mt-4 text-sm text-[color:var(--color-muted-foreground)]">
          The page may have moved. Head home, or get in touch and we’ll point you in the right direction.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            to="/"
            className="rounded-full bg-[color:var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-primary-foreground)] transition-colors hover:bg-[color:var(--color-secondary)]"
          >
            Go home
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-[color:var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-primary)] transition-colors hover:bg-[color:var(--color-primary)] hover:text-white"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--color-ivory)] px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-[color:var(--color-primary)]">
          This page didn’t load
        </h1>
        <p className="mt-3 text-sm text-[color:var(--color-muted-foreground)]">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-[color:var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-primary-foreground)]"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-[color:var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-primary)]"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Diwasha Dental Clinic & Implant Centre — Navrangpura, Ahmedabad" },
      {
        name: "description",
        content:
          "Specialist oral surgeons & implant centre in Navrangpura, Ahmedabad. 4.8★ from 181 patients. Gentle care, transparent pricing, modern dentistry.",
      },
      { name: "author", content: "Diwasha Dental" },
      { name: "theme-color", content: "#0E3A5C" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Diwasha Dental" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@1,400;1,500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="min-h-screen pt-16 md:pt-20">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </QueryClientProvider>
  );
}
