import type { Metadata } from "next";
import { sitePath, SiteFooter, SiteHeader } from "./site-chrome";

export const metadata: Metadata = {
  title: "Email, reimagined.",
  description:
    "Lifafa Mail brings Gmail, Outlook, and custom email into one private, native inbox for Apple devices.",
};

const permissionCards = [
  {
    number: "01",
    title: "Mail",
    copy: "To show your inbox and let you compose, send, reply, label, archive, move, trash, restore, and delete the messages you choose.",
  },
  {
    number: "02",
    title: "Contacts",
    copy: "To suggest recipients and, when you ask, sync Google or Outlook contacts into Apple Contacts without deleting your local contacts.",
  },
  {
    number: "03",
    title: "Calendar",
    copy: "To read and manage provider calendars for event sync. The current app can copy a useful date range into a dedicated Apple calendar.",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow reveal reveal-one">
            <span className="status-dot" aria-hidden="true" />
            Native for Apple · In development
          </p>
          <h1 id="hero-title" className="reveal reveal-two">
            Email,
            <span>reimagined.</span>
          </h1>
          <p className="hero-deck reveal reveal-three">
            One calm inbox for Gmail, Outlook, and the accounts you already
            use—thoughtfully built for iPhone, iPad, Mac, and Apple Vision.
          </p>
          <div className="hero-actions reveal reveal-four">
            <a className="button button-primary" href="#product">
              Meet your new inbox <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-quiet" href={sitePath("/privacy/")}>
              See how your data is used
            </a>
          </div>
          <p className="hero-note reveal reveal-four">
            No waitlist. No tracking form. Just a clear look at what we are
            building.
          </p>
        </div>

        <div
          className="inbox-concept reveal reveal-three"
          role="img"
          aria-label="Conceptual Lifafa Mail inbox showing multiple accounts in one clean view"
        >
          <div className="concept-label" aria-hidden="true">
            Product concept · not a screenshot
          </div>
          <div className="inbox-window" aria-hidden="true">
            <div className="window-topbar">
              <div className="traffic-lights">
                <span />
                <span />
                <span />
              </div>
              <div className="window-title">Lifafa Mail</div>
              <button tabIndex={-1}>Compose</button>
            </div>
            <div className="inbox-body">
              <aside className="concept-sidebar">
                <div className="account-orb">LY</div>
                <div className="side-item active">
                  <span>Inbox</span>
                  <b>8</b>
                </div>
                <div className="side-item"><span>Starred</span></div>
                <div className="side-item"><span>Sent</span></div>
                <div className="side-item"><span>Drafts</span><b>2</b></div>
                <div className="side-rule" />
                <p>ACCOUNTS</p>
                <div className="account-line"><i className="account-dot gmail" />Personal</div>
                <div className="account-line"><i className="account-dot outlook" />Work</div>
              </aside>
              <div className="message-list">
                <div className="list-heading">
                  <div><span>Today</span><b>Inbox</b></div>
                  <div className="search-pill">Search mail</div>
                </div>
                <div className="message-row selected">
                  <div className="avatar avatar-red">PM</div>
                  <div className="message-main">
                    <div className="message-meta"><b>Priya Menon</b><time>10:42</time></div>
                    <strong>Design notes for Friday</strong>
                    <p>The new flow feels lighter. I left a few thoughts…</p>
                  </div>
                </div>
                <div className="message-row">
                  <div className="avatar avatar-gold">A</div>
                  <div className="message-main">
                    <div className="message-meta"><b>Alex</b><time>9:18</time></div>
                    <strong>Dinner on Saturday?</strong>
                    <p>I found that little place we talked about.</p>
                  </div>
                </div>
                <div className="message-row">
                  <div className="avatar avatar-blue">M</div>
                  <div className="message-main">
                    <div className="message-meta"><b>Microsoft 365</b><time>8:05</time></div>
                    <strong>Your weekly digest</strong>
                    <p>A quick look at what moved this week.</p>
                  </div>
                </div>
                <div className="message-row faded-row">
                  <div className="avatar avatar-green">C</div>
                  <div className="message-main">
                    <div className="message-meta"><b>Calendar</b><time>Yesterday</time></div>
                    <strong>Plans for next week</strong>
                    <p>Three events are ready to sync.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="floating-chip chip-secure" aria-hidden="true">
            <span>✓</span>
            <div><b>Private by default</b><small>Tokens stay in your Keychain</small></div>
          </div>
          <div className="floating-chip chip-accounts" aria-hidden="true">
            <i className="account-dot gmail" />
            <i className="account-dot outlook" />
            <b>One inbox</b>
          </div>
        </div>
      </section>

      <section className="manifesto" aria-label="Product philosophy">
        <p>Email is where work, plans, receipts, ideas, and people meet.</p>
        <h2>It should feel like a place you can think.</h2>
      </section>

      <section className="product-section" id="product" aria-labelledby="product-title">
        <div className="section-heading">
          <p className="kicker">The new inbox</p>
          <h2 id="product-title">Everything important.<br />Nothing in the way.</h2>
          <p>
            Lifafa Mail brings the accounts you depend on into one native,
            considered space—with controls that stay understandable.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card feature-large feature-coral">
            <div className="feature-number">01 / ONE PLACE</div>
            <div className="account-stack" aria-hidden="true">
              <div className="stack-card stack-one"><i className="account-dot gmail" />Gmail <span>Personal</span></div>
              <div className="stack-card stack-two"><i className="account-dot outlook" />Outlook <span>Work</span></div>
              <div className="stack-card stack-three"><i className="account-dot custom" />IMAP <span>Custom</span></div>
            </div>
            <div>
              <h3>Every account, one clear view.</h3>
              <p>Keep Gmail, Outlook, work, school, and custom mail together—then switch context whenever you want.</p>
            </div>
          </article>

          <article className="feature-card feature-ink">
            <div className="feature-number">02 / YOUR RHYTHM</div>
            <div className="sort-art" aria-hidden="true">
              <span>Newest</span><span>Sender</span><span>Frequency</span>
            </div>
            <div>
              <h3>Sort by what matters now.</h3>
              <p>Organize by time, sender, or frequency and make quick work of a crowded inbox.</p>
            </div>
          </article>

          <article className="feature-card feature-cream">
            <div className="feature-number">03 / COMPOSE</div>
            <div className="compose-art" aria-hidden="true">
              <span>To</span><p>priya@example.com</p>
              <span>Subject</span><p>Friday’s notes</p>
              <div className="compose-lines"><i /><i /><i /></div>
              <button tabIndex={-1}>Send</button>
            </div>
            <div>
              <h3>Write with less friction.</h3>
              <p>Compose, reply, attach files, choose contacts, and add your signature without breaking your flow.</p>
            </div>
          </article>

          <article className="feature-card feature-large feature-sky">
            <div className="feature-number">04 / CALM BY DEFAULT</div>
            <div className="privacy-art" aria-hidden="true">
              <div className="shield-ring"><span>✓</span></div>
              <div className="privacy-line"><b>Remote images</b><span>Blocked</span></div>
              <div className="privacy-line"><b>Active content</b><span>Off</span></div>
              <div className="privacy-line"><b>OAuth tokens</b><span>Keychain</span></div>
            </div>
            <div>
              <h3>Privacy is a product decision.</h3>
              <p>Remote images and active content are blocked by default. Secure Mode pares messages back even further.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="permissions-section" id="permissions" aria-labelledby="permissions-title">
        <div className="permissions-intro">
          <p className="kicker">Permission, with purpose</p>
          <h2 id="permissions-title">Your account access, explained.</h2>
          <p>
            Lifafa requests access only to make visible product features work.
            Permissions are granted per account and can be revoked by
            disconnecting that account.
          </p>
          <a href={sitePath("/privacy/")}>Read the full privacy policy <span aria-hidden="true">↗</span></a>
        </div>
        <div className="permission-list">
          {permissionCards.map((card) => (
            <article key={card.number}>
              <span>{card.number}</span>
              <div><h3>{card.title}</h3><p>{card.copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="platform-section" aria-labelledby="platform-title">
        <p className="kicker">One adaptive app</p>
        <h2 id="platform-title">Made for the Apple devices already around you.</h2>
        <div className="platform-row" aria-label="Supported platforms">
          <span>iPhone</span><i>•</i><span>iPad</span><i>•</i><span>Mac</span><i>•</i><span>Apple Vision</span>
        </div>
      </section>

      <section className="closing-section" aria-labelledby="closing-title">
        <div className="closing-shape" aria-hidden="true"><span>ल</span></div>
        <p className="kicker">In active development</p>
        <h2 id="closing-title">A more thoughtful inbox is on its way.</h2>
        <p>
          Lifafa Mail is being shaped in the open. Product details may evolve
          before release; our commitment to clear, respectful data use will not.
        </p>
        <div className="closing-actions">
          <a className="button button-dark" href="https://github.com/harshityadav95/Lifafa-Mail-App" target="_blank" rel="noreferrer">
            Follow development <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href={sitePath("/terms/")}>Read the terms</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
