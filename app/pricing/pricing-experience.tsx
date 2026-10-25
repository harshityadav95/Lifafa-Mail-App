"use client";

import { ArrowDown, ArrowUpRight, Check, EnvelopeSimple, Sparkle } from "@phosphor-icons/react";
import { priceProducts } from "../pricing-data";

const money = (value: number) => `$${value.toFixed(2).replace(/\.00$/, "")}`;
const sortedPriceProducts = [...priceProducts].sort(
  (a, b) => (a.monthly ?? Infinity) - (b.monthly ?? Infinity),
);

export function PricingExperience({ basePath }: { basePath: string }) {
  return (
    <main className="pricing-page">
      <header className="pricing-hero">
        <span className="announcement"><span className="status-dot" /> A calmer inbox is on its way</span>
        <h1>A little less inbox.<br />A little <span className="pixel-word">lighter.</span></h1>
        <p>Thoughtful email shouldn’t come with a heavyweight price.<br className="desktop-break" /> We’re building Lifafa to be easier on your day. And your budget.</p>
        <a className="pricing-jump" href="#market-pricing">See how the market compares <ArrowDown size={15} /></a>
      </header>

      <section className="market-pricing" id="market-pricing" aria-labelledby="market-title">
        <div className="market-heading">
          <div><span className="kicker">A LITTLE PERSPECTIVE</span><h2 id="market-title">Good email.<br />Different price tags.</h2></div>
          <p>Five alternatives. Their published paid plans.<br />Monthly, annual and lifetime. Side by side.</p>
        </div>
        <p className="pricing-review-date">USD · Competitors sorted by monthly price, low to high · Prices reviewed 24 October 2026</p>
        <p className="pricing-table-hint">Scroll across to compare every billing option <ArrowUpRight size={13} /></p>
        <div className="pricing-table-scroll" tabIndex={0} role="region" aria-label="Monthly, annual and lifetime pricing comparison">
          <table className="pricing-comparison-table">
            <caption className="sr-only">Paid competitor plans compared by monthly subscription, annual subscription and lifetime purchase. Lifafa Mail prices will be disclosed soon.</caption>
            <thead>
              <tr>
                <th scope="col">Product &amp; plan</th>
                <th scope="col">Monthly<span>Billed every month</span></th>
                <th scope="col">Annually<span>Full year, billed upfront</span></th>
                <th scope="col">Lifetime<span>One-time purchase</span></th>
              </tr>
            </thead>
            <tbody>
              <tr className="lifafa-pricing-row">
                <th scope="row">Lifafa Mail<span>A lighter price is on its way.</span></th>
                {["Monthly", "Annual", "Lifetime"].map((period) => <td key={period}><strong>Disclosed soon</strong><span>Aiming below the competition</span></td>)}
              </tr>
              {sortedPriceProducts.map((product) => (
                <tr key={product.name}>
                  <th scope="row">
                    <a href={product.source} target="_blank" rel="noreferrer">{product.name} <ArrowUpRight size={12} /></a>
                    <span>{product.plan}</span>
                  </th>
                  <td>{product.monthly !== undefined ? <><strong>{money(product.monthly)}</strong><span>/ month{product.plan.includes("per ") ? " per person" : ""}</span></> : <span className="price-unlisted">Not announced</span>}</td>
                  <td>{product.annual !== undefined ? <><strong>{money(product.annual)}</strong><span>/ year{product.plan.includes("per ") ? " per person" : ""}</span><small>≈ {money(product.annual / 12)} / month</small></> : <span className="price-unlisted">Not announced</span>}</td>
                  <td>{product.once !== undefined ? <><strong>{money(product.once)}</strong><span>Current limited offer</span></> : <span className="price-unlisted">{product.name === "Mimestream" ? "Not offered" : "Not listed"}</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="price-methodology"><span aria-hidden="true">↳</span><p>Annual prices are the full yearly charge; monthly equivalents are rounded to cents. “Not listed” means no lifetime offer was verified in the reviewed sources, not that one cannot exist. GotEmail has announced subscriptions without rates or dates; its current lifetime offer remains separate. Taxes, regional prices and promotions may vary. Free tiers are available from Airmail and Inbox Zero; Lifafa’s affordability goal refers to paid options, not free products. Final Lifafa prices and billing options will be disclosed soon.</p></div>
        <details className="pricing-source-notes">
          <summary>Plan details &amp; source notes</summary>
          <div>{sortedPriceProducts.map((product) => <article key={product.name}>
            <h3>{product.name}</h3>
            <p>{product.summary} {product.caveat}</p>
            <div className="market-sources"><a href={product.source} target="_blank" rel="noreferrer">Published pricing <ArrowUpRight size={13} /></a>{product.otherSource && <a href={product.otherSource.url} target="_blank" rel="noreferrer">{product.otherSource.label} <ArrowUpRight size={13} /></a>}</div>
          </article>)}</div>
        </details>
      </section>

      <section className="lifafa-price-card" aria-labelledby="lifafa-pricing-title">
        <div className="lifafa-price-copy">
          <span className="price-eyebrow"><Sparkle size={15} /> THE ONE TO LOOK FORWARD TO</span>
          <h2 id="lifafa-pricing-title">Lifafa Mail</h2>
          <p className="lifafa-price-status">Coming soon<span aria-hidden="true">↗</span></p>
          <p className="lifafa-price-promise">More room in your day.<br />Less weight on your wallet.</p>
          <p className="lifafa-price-detail">Monthly, annual or lifetime: our goal is to price below the competing paid options in each category. Prices and final billing options will be disclosed soon.</p>
          <a className="button button-primary" href={`${basePath}/#demo`}>Experience Lifafa <ArrowUpRight size={16} /></a>
          <span className="price-release-note">In active development · No purchase available yet</span>
        </div>
        <div className="price-ticket-wrap">
          <div className="price-ticket">
            <div className="ticket-heading"><EnvelopeSimple size={22} /><span>LESS, BUT BETTER.</span></div>
            <p>Your next chapter<br />of email.</p>
            <div className="ticket-rule" />
            <ul>
              <li><Check size={16} /> Gmail, Outlook &amp; IMAP</li>
              <li><Check size={16} /> Email-linked To Do</li>
              <li><Check size={16} /> Intelligence, when you choose</li>
              <li><Check size={16} /> Made for iPhone, iPad &amp; Mac</li>
            </ul>
            <div className="ticket-rule" />
            <div className="ticket-bottom"><span>THE PRICE?</span><strong>Worth waiting for.</strong></div>
          </div>
          <span className="ticket-caption">A thoughtful workspace. An approachable ambition.</span>
        </div>
      </section>

      <section className="pricing-editorial">
        <div><span className="kicker">THE VALUE IS IN YOUR DAY</span><h2>Choose a workflow.<br />Then choose a price.</h2><a href={`${basePath}/#compare`}>Explore all 43 features <ArrowUpRight size={16} /></a></div>
        <div className="pricing-insights">
          <article><span>01 / THE GMAIL SPECIALIST</span><h3>Mimestream keeps its focus.</h3><p>A direct Gmail API connection, native Mac experience and Google-specific tools. Its iPhone and iPad apps are in a limited subscriber beta.</p></article>
          <article><span>02 / THE APPLE TOOLBOX</span><h3>Airmail makes it personal.</h3><p>Broad provider support, custom actions and Apple integrations. Pro has the lowest published annual subscription total among the paid plans shown here.</p></article>
          <article><span>03 / THE TEAM WORKFLOW</span><h3>Superhuman puts speed first.</h3><p>AI assistance, shared conversations and scheduling for Gmail and Outlook. Per-member pricing adds up with a team; advanced AI and CRM tools sit in Business.</p></article>
        </div>
      </section>
      <section className="pricing-faq">
        <span className="kicker">BEFORE YOU ASK</span><h2>A few things, clearly.</h2>
        <div className="faq-list">
          <details><summary>What will Lifafa Mail cost?</summary><p>Prices will be disclosed soon. Our goal is to price below competing paid options across monthly, annual and lifetime categories. Final amounts, billing options and launch timing are still to come.</p></details>
          <details><summary>Is Lifafa available to buy today?</summary><p>Lifafa is in active development. You can explore the fictional local demo, but there is no public purchase or download available on this site.</p></details>
          <details><summary>Are these the same kinds of plans?</summary><p>No. Mimestream focuses on Gmail, Airmail Pro offers Apple workflow tools, Superhuman Starter is priced per member, GotEmail currently advertises a lifetime offer, and Inbox Zero sells AI plans alongside its free email app. Compare capabilities as well as price.</p></details>
          <details><summary>Where do the competitor prices come from?</summary><p>Official vendor pricing pages and help centers, reviewed 24 October 2026. Each product links to its source; additional context is in the source notes. Pricing and offers can change; confirm the current plan with the vendor before purchasing.</p></details>
        </div>
      </section>
      <div className="pricing-close"><p>A calmer inbox.<br /><span>Something to look forward to.</span></p><a className="button button-primary" href={`${basePath}/#demo`}>Take a look around <ArrowUpRight size={16} /></a></div>
    </main>
  );
}
