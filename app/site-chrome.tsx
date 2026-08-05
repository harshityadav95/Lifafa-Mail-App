import type { ReactNode } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function sitePath(path: string) {
  return `${basePath}${path}`;
}

export function Brand() {
  return (
    <a className="brand" href={sitePath("/")} aria-label="Lifafa Mail home">
      {/* Static export: the branded source image is already right-sized. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${basePath}/lifafa-icon.png`} alt="" width="44" height="44" />
      <span>Lifafa Mail</span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Brand />
      <nav aria-label="Primary navigation">
        <a href={sitePath("/#product")}>Product</a>
        <a href={sitePath("/#permissions")}>Data access</a>
        <a href={sitePath("/privacy/")}>Privacy</a>
        <a href={sitePath("/terms/")}>Terms</a>
      </nav>
      <span className="development-pill">In development</span>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Brand />
        <p>Email, reimagined.</p>
      </div>
      <div className="footer-links">
        <div>
          <p>Product</p>
          <a href={sitePath("/#product")}>Overview</a>
          <a href={sitePath("/#permissions")}>Data access</a>
        </div>
        <div>
          <p>Legal</p>
          <a href={sitePath("/privacy/")}>Privacy Policy</a>
          <a href={sitePath("/terms/")}>Terms of Service</a>
        </div>
        <div>
          <p>Development</p>
          <a href="https://github.com/harshityadav95/Lifafa-Mail-App" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://github.com/harshityadav95/Lifafa-Mail-App/issues" target="_blank" rel="noreferrer">Contact</a>
        </div>
      </div>
      <div className="footer-base">
        <p>Research &amp; design by <strong>SolvePao Research.</strong></p>
        <p>© 2026 SolvePao Research. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function LegalPageShell({
  eyebrow,
  title,
  updated,
  summary,
  toc,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  summary: string;
  toc: Array<{ id: string; label: string }>;
  children: ReactNode;
}) {
  return (
    <main>
      <SiteHeader />
      <header className="legal-hero">
        <p className="kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="legal-summary">{summary}</p>
        <p className="legal-date">Last updated {updated}</p>
      </header>
      <div className="legal-layout">
        <aside className="legal-toc" aria-label="On this page">
          <p>On this page</p>
          {toc.map((item) => (
            <a href={`#${item.id}`} key={item.id}>{item.label}</a>
          ))}
        </aside>
        <article className="legal-content">{children}</article>
      </div>
      <SiteFooter />
    </main>
  );
}
