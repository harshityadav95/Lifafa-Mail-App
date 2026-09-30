import type { Metadata } from "next";
import { sitePath, SiteFooter, SiteHeader } from "./site-chrome";

export const metadata: Metadata = {
  title: "Your mail. Your day. One place.",
  description:
    "A native Apple workspace for Gmail, Outlook and IMAP, with calendar, local to-dos, contacts and offline mail.",
};

const features = [
  [
    "01",
    "An inbox that makes sense.",
    "Bring multiple Gmail, Outlook and custom accounts together. Sort by time, sender or frequency; organize labels and folders, or clear a sender group in one go.",
    "Combined inbox · Sender threads · Bulk actions",
  ],
  [
    "02",
    "Keep the day connected.",
    "See your calendars, manage local to-dos and find your contacts alongside mail. Sync Google and Outlook events into a dedicated Apple calendar when you choose.",
    "Calendar · To Do · Contacts",
  ],
  [
    "03",
    "Take your mail with you.",
    "Keep a rolling 7–30 days of mail available offline. Secure Mode keeps text-only copies. Supported outgoing messages and mail actions can queue until you reconnect.",
    "Offline downloads · Outbox · Sync controls",
  ],
  [
    "04",
    "From first draft to done.",
    "Compose, reply and reply all with reusable signatures, contact suggestions and attachments. Control attachment downloads and size limits; export mail as JSON or Markdown on Mac.",
    "Signatures · Attachments · Mac export",
  ],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">
            Your mail.
            <br />
            Your day.
            <br />
            <em>One place.</em>
          </h1>
          <p className="hero-deck">
            All your accounts. A clearer inbox. Your calendar, to-dos and
            people, right where you need them.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#product">
              Explore the features
            </a>
            <a className="text-link" href={sitePath("/privacy/")}>
              Privacy, explained
            </a>
          </div>
          <p className="hero-note">
            Native for iPhone, iPad, Mac &amp; Apple Vision.
            <br />
            In active development. Built by SolvePao Research.
          </p>
        </div>
        <div
          className="hero-graphic"
          aria-label="Lifafa brings mail, calendar, to-dos and contacts together with offline access and privacy controls"
        >
          <div className="graphic-topline">
            <span>ONE CONNECTED WORKSPACE</span>
            <span>Made for Apple</span>
          </div>
          <div className="feature-map">
            <svg
              className="map-connections"
              viewBox="0 0 600 520"
              aria-hidden="true"
            >
              <path d="M300 260L130 85M300 260L475 120M300 260L510 320M300 260L385 440M300 260L155 415M300 260L75 245" />
              <circle cx="300" cy="260" r="175" />
              <circle cx="300" cy="260" r="100" />
            </svg>
            <div className="map-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sitePath("/lifafa-icon.png")}
                width="96"
                height="96"
                alt="Lifafa Mail app icon"
              />
              <b>Lifafa</b>
              <span>Your day, connected.</span>
            </div>
            <div className="map-node node-mail">
              <span className="node-icon">✉</span>
              <div>
                <b>Every inbox</b>
                <small>Gmail · Outlook · IMAP</small>
              </div>
            </div>
            <div className="map-node node-calendar">
              <span className="node-icon">01</span>
              <div>
                <b>Your calendar</b>
                <small>Make room for your day</small>
              </div>
            </div>
            <div className="map-node node-tasks">
              <span className="node-icon">✓</span>
              <div>
                <b>To-dos</b>
                <small>One next step at a time</small>
              </div>
            </div>
            <div className="map-node node-contacts">
              <span className="node-icon">@</span>
              <div>
                <b>Your people</b>
                <small>Contacts, close at hand</small>
              </div>
            </div>
            <div className="map-node node-offline">
              <span className="node-icon">↓</span>
              <div>
                <b>Offline mail</b>
                <small>Take your inbox with you</small>
              </div>
            </div>
            <div className="map-node node-privacy">
              <span className="node-icon">◇</span>
              <div>
                <b>Privacy controls</b>
                <small>You choose what loads</small>
              </div>
            </div>
          </div>
          <div className="graphic-bottomline">
            <span>Mail. Plans. People.</span>
            <span>A little more headspace.</span>
          </div>
        </div>
      </section>
      <div className="provider-strip">
        <span>YOUR ACCOUNTS, TOGETHER</span>
        <b>
          <i className="provider gmail">G</i>Gmail
        </b>
        <b>
          <i className="provider outlook">O</i>Outlook
        </b>
        <b>
          <i className="provider icloud">☁</i>iCloud
        </b>
        <b>
          <i className="provider yahoo">Y!</i>Yahoo
        </b>
        <b>
          <i className="provider imap">@</i>IMAP / SMTP
        </b>
      </div>
      <section className="product-section" id="product">
        <div className="section-heading">
          <p className="kicker">MORE THAN A MAILBOX</p>
          <h2>
            A little less switching.
            <br />
            <span>A lot more headspace.</span>
          </h2>
          <p>
            One adaptive SwiftUI app brings your mail and daily essentials into
            a workspace that feels at home on every device.
          </p>
        </div>
        <div className="feature-grid">
          {features.map(([number, title, copy, detail]) => (
            <article className="feature-card" key={number}>
              <span className="feature-number">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <div className="feature-detail">{detail}</div>
            </article>
          ))}
        </div>
      </section>
      <section className="privacy-section" id="permissions">
        <div className="privacy-intro">
          <p className="kicker">YOUR INBOX IS PERSONAL</p>
          <h2>
            Privacy you
            <br />
            can control.
          </h2>
          <p>
            Your accounts connect directly to their providers. Credentials stay
            in Apple Keychain. You decide what a message is allowed to load.
          </p>
          <a className="button button-light" href={sitePath("/privacy/")}>
            Read our privacy policy
          </a>
        </div>
        <div className="privacy-controls">
          <div>
            <span>01 / MESSAGE CONTENT</span>
            <h3>Remote images blocked by default.</h3>
            <p>
              Tracking pixels and active content stay blocked until you choose
              otherwise. Secure Mode strips images and links for a quieter
              reader.
            </p>
          </div>
          <div>
            <span>02 / ACCOUNT ACCESS</span>
            <h3>Permission, with purpose.</h3>
            <p>
              Mail access powers your inbox and sending. Contacts support
              recipients and sync. Calendar access supports provider event sync.
              Grants apply per account.
            </p>
          </div>
          <div>
            <span>03 / YOUR CHOICE</span>
            <h3>Controls stay in your hands.</h3>
            <p>
              Disconnect accounts, set offline retention and choose attachment
              downloads. Sanitized diagnostics use Apple CloudKit and can be
              turned off in Settings.
            </p>
          </div>
        </div>
      </section>
      <section className="platform-section">
        <p className="kicker">NATIVE, NOT AN AFTERTHOUGHT</p>
        <h2>
          One workspace.
          <br />
          Everywhere you are.
        </h2>
        <div className="platform-grid">
          {[
            ["iPhone", "iOS 18+", "Your day, in your pocket."],
            ["iPad", "iPadOS 18+", "Room to read and get things done."],
            ["Mac", "macOS 15+", "A full desktop workspace."],
            ["Apple Vision", "visionOS 2+", "An adaptive native experience."],
          ].map(([name, version, copy]) => (
            <div key={name}>
              <h3>{name}</h3>
              <span>{version}</span>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="closing-section">
        <div>
          <p className="kicker">BUILT IN THE OPEN</p>
          <h2>
            A more thoughtful day
            <br />
            starts with your inbox.
          </h2>
          <p>
            Lifafa is in active development. Explore the native app’s source and
            follow what’s taking shape.
          </p>
        </div>
        <a
          className="button button-primary"
          href="https://github.com/harshityadav95/Lifafa-iOS"
          target="_blank"
          rel="noreferrer"
        >
          Follow Lifafa on GitHub
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
