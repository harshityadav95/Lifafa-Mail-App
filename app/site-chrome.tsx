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
      <span>
        lifafa<span className="brand-dot">.</span>
      </span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Brand />
      <nav aria-label="Primary navigation">
        <a href={sitePath("/#product")}>The experience</a>
        <a href={sitePath("/#compare")}>Features &amp; comparison</a>
        <a href={sitePath("/pricing/")}>Pricing</a>
        <a href={sitePath("/#privacy")}>Privacy</a>
        <a href={sitePath("/download/")}>Downloads</a>
      </nav>
      <a className="mobile-pricing-link" href={sitePath("/pricing/")}>Pricing</a>
      <a className="header-cta" href={sitePath("/download/")}>
        Download <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Brand />
        <p>A little less inbox. A lot more life.</p>
      </div>
      <div className="footer-links">
        <nav aria-label="Footer product"><h2>Product</h2><a href={sitePath("/#product")}>The experience</a><a href={sitePath("/#compare")}>Feature comparison</a><a href={sitePath("/pricing/")}>Pricing</a><a href={sitePath("/download/")}>Download</a></nav>
        <nav aria-label="Footer features"><h2>Features</h2><a href={sitePath("/#demo")}>All your inboxes</a><a href={sitePath("/#product")}>Calendar &amp; contacts</a><a href={sitePath("/#offline")}>Offline mail</a><a href={sitePath("/#privacy")}>Privacy by design</a></nav>
        <nav aria-label="Footer resources"><h2>Resources</h2><a href={sitePath("/download/#distribution")}>Platforms &amp; channels</a><a href={sitePath("/#faq")}>Questions &amp; answers</a><a href={sitePath("/lifafa-feature-comparison.csv")} download>Comparison CSV</a><a href="https://github.com/solvePao/Lifafa-iOS" target="_blank" rel="noreferrer">App source ↗</a></nav>
        <nav aria-label="Footer connect"><h2>Connect</h2><a href="https://github.com/solvePao" target="_blank" rel="noreferrer">SolvePao Research ↗</a><a href="https://github.com/solvePao/Lifafa-iOS/issues" target="_blank" rel="noreferrer">Feedback &amp; support ↗</a><a href="https://github.com/harshityadav95/Lifafa-Mail-App" target="_blank" rel="noreferrer">Website source ↗</a><span className="footer-status"><span className="status-dot" /> Coming soon</span></nav>
      </div>
      <div className="footer-base">
        <p>© 2026 SolvePao Research. Built with a little more thought.</p>
        <div><a href={sitePath("/privacy/")}>Privacy Policy</a><a href={sitePath("/terms/")}>Terms of Service</a></div>
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
            <a href={`#${item.id}`} key={item.id}>
              {item.label}
            </a>
          ))}
        </aside>
        <article className="legal-content">{children}</article>
      </div>
      <SiteFooter />
    </main>
  );
}
