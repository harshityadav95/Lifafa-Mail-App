"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CaretDown,
  Circle,
  PlayCircle,
  EnvelopeSimple,
  Tray,
  CalendarBlank,
  Checks,
  ShieldCheck,
  WifiSlash,
  Sparkle,
  MagnifyingGlass,
  DeviceMobile,
  Desktop,
  Command,
  LockKey,
  X,
  CheckCircle,
  LinkSimple,
  ArrowCounterClockwise,
} from "@phosphor-icons/react";
import { comparison } from "./comparison-data";

const mail = [
  {
    name: "Maya Chen",
    initials: "MC",
    color: "peach",
    subject: "A small idea. A big next chapter.",
    preview: "Could you review the launch notes by Friday?",
    time: "9:41",
    tag: "Needs you",
    body: "Hey Alex,",
    text: "The new launch notes are ready. Could you review the launch notes by Friday? I’d love your thoughts before we share them with the team.",
    quote: "Could you review the launch notes by Friday?",
    action: "Review the launch notes",
    end: "Thanks for helping bring this to life.",
    file: "Launch notes.pdf",
  },
  {
    name: "Studio North",
    initials: "SN",
    color: "lavender",
    subject: "Your next chapter, on the calendar.",
    preview: "Let’s meet on Monday to talk about the next chapter.",
    time: "9:15",
    tag: "Calendar",
    body: "Hi Alex,",
    text: "Let’s meet on Monday to talk about the next chapter. I’ve attached the outline so you can have a look before we catch up.",
    quote: "Let’s meet on Monday",
    action: "Review the meeting invitation",
    end: "Looking forward to it, the Studio North team.",
    file: "Project outline.pdf",
  },
  {
    name: "Noah Williams",
    initials: "NW",
    color: "mint",
    subject: "Re: A place for the good ideas",
    preview: "I’ll send the updated sketches tomorrow.",
    time: "8:50",
    tag: "Waiting",
    body: "Hey Alex,",
    text: "The first concepts look great. I’ll send the updated sketches tomorrow. There are a few details I want to get right before you review them.",
    quote: "I’ll send the updated sketches tomorrow.",
    action: "Waiting for Noah’s updated sketches",
    end: "More soon, Noah.",
    file: "Concept notes.pdf",
  },
  {
    name: "The Sunday Edit",
    initials: "SE",
    color: "butter",
    subject: "Something worth slowing down for",
    preview: "A few good reads for a quiet weekend.",
    time: "8:02",
    tag: "Reading",
    body: "A little inspiration,",
    text: "A few good reads for a quiet weekend. This week, we’re looking at creative routines, thoughtful spaces, and finding room for what matters.",
    quote: "A few good reads for a quiet weekend.",
    action: "Read the weekend collection",
    end: "See you next Sunday.",
    file: "Reading list.pdf",
  },
];
const featureTabs = [
  {
    name: "All your inboxes",
    icon: Tray,
    title: "Many accounts. One place to land.",
    copy: "Bring Gmail, Outlook and custom IMAP accounts into a shared inbox. Keep every reply connected to the right account.",
    detail: "Sender threads · Folders & labels · Account-scoped replies",
  },
  {
    name: "Email → action",
    icon: Checks,
    title: "Find the next step in the thread.",
    copy: "Requests, commitments and things you’re waiting on, connected to the exact words in the original email. Review, correct and decide what happens next.",
    detail: "Needs You · Review · Waiting · Original evidence",
  },
  {
    name: "Your day, connected",
    icon: CalendarBlank,
    title: "A little less app switching.",
    copy: "Keep mail, calendar and contacts in one native workspace. Export accepted email work to Apple Reminders when you choose.",
    detail: "Calendar · Contacts · User-requested exports",
  },
  {
    name: "Private by choice",
    icon: ShieldCheck,
    title: "An assistant. You’re still in charge.",
    copy: "Intelligence is optional. Use Apple’s on-device model when your device is eligible, review generated drafts, and keep using mail when intelligence is off.",
    detail: "Opt-in intelligence · Reviewed drafts · Remote-content controls",
  },
];
export function LandingExperience({ basePath }: { basePath: string }) {
  const [feature, setFeature] = useState(0);
  const [selected, setSelected] = useState(0);
  const [view, setView] = useState("Inbox");
  const [filter, setFilter] = useState("All features");
  const [query, setQuery] = useState("");
  const [done, setDone] = useState<number[]>([]);
  const [dialog, setDialog] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (dialog && dialogRef.current && !dialogRef.current.open)
      dialogRef.current.showModal();
  }, [dialog]);
  const active = mail[selected];
  const rows = comparison.filter(
    (r) => filter === "All features" || r.category === filter,
  );
  const visibleMail = mail
    .map((m, i) => ({ ...m, index: i }))
    .filter(
      (m) =>
        (!query ||
          `${m.name} ${m.subject} ${m.preview}`
            .toLowerCase()
            .includes(query.toLowerCase())) &&
        (view !== "To Do" || m.index < 3),
    );
  function goToDemo() {
    setView("Inbox");
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-art hero-art-mail">
          <img
            src={`${basePath}/assets/mail-still-life-cutout.png`}
            width="600"
            height="400"
            alt="A fan of paper envelopes and a note for a little more headspace"
          />
        </div>
        <div className="floating-card float-todo" aria-hidden="true">
          <span className="micro-label">A LITTLE CLARITY · TO DO</span>
          <h3>
            That next step?
            <br />
            Already found.
          </h3>
          <p>Review the launch notes</p>
          <div className="mini-task">
            <CheckCircle weight="fill" />
            <span>Linked to the original email</span>
          </div>
        </div>
        <div className="floating-card float-mail" aria-hidden="true">
          <div className="mini-sender">
            <span className="avatar peach">MC</span>
            <div>
              <b>Maya Chen</b>
              <small>To you · Just now</small>
            </div>
            <EnvelopeSimple size={19} />
          </div>
          <h3>
            A small idea.
            <br />A big next chapter.
          </h3>
          <p>
            Could you review the launch
            <br />
            notes by Friday?
          </p>
          <span className="tag">Needs you</span>
        </div>
        <div className="floating-card float-calendar" aria-hidden="true">
          <span className="micro-label">A LITTLE ROOM · YOUR DAY</span>
          <div className="calendar-mini">
            <span>
              MON<b>26</b>
            </span>
            <div>
              <b>Make space for good work.</b>
              <p>10:00 – 10:30 · Project catch-up</p>
            </div>
          </div>
          <div className="calendar-line">Your mail. Your plans. Together.</div>
        </div>
        <div className="hero-center">
          <a className="announcement" href="#product">
            <span className="status-dot" /> A calmer kind of email{" "}
            <span className="announcement-tail">
              Meet Lifafa <ArrowRight size={13} />
            </span>
          </a>
          <h1 id="hero-title">
            The last email app
            <br />
            you’ll ever <span className="pixel-word">need.</span>
          </h1>
          <p className="hero-deck">
            All your inboxes. Your next steps. A little more headspace.
            <br className="desktop-break" /> Meet the native email workspace
            that brings your day together.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={goToDemo}>
              Explore Lifafa <ArrowRight size={17} />
            </button>
            <button className="demo-link" onClick={goToDemo}>
              <PlayCircle size={19} /> See it in action
            </button>
          </div>
          <p className="hero-note">
            <Desktop size={15} />
            <DeviceMobile size={14} /> Made for iPhone, iPad &amp; Mac{" "}
            <span>·</span> In development
          </p>
        </div>
        <a className="scroll-cue" href="#product">
          A little less inbox. A lot more life. <CaretDown size={14} />
        </a>
      </section>
      <div className="provider-strip">
        <span>ALL YOUR ACCOUNTS. FINALLY TOGETHER.</span>
        <div>
          <b>Gmail</b>
          <b>Outlook</b>
          <b>iCloud via IMAP</b>
          <b>IMAP / SMTP</b>
        </div>
        <span className="provider-note">Your address stays yours.</span>
      </div>
      <section className="product-section section-shell" id="product">
        <div className="section-heading">
          <span className="kicker">A FRESH PERSPECTIVE ON EMAIL</span>
          <h2>
            Less managing mail.
            <br />
            <span>More moving forward.</span>
          </h2>
          <p>
            The familiar things, thoughtfully connected.
            <br />A real mail app, with room for everything that comes next.
          </p>
        </div>
        <div
          className="feature-tabs"
          role="tablist"
          aria-label="Explore Lifafa features"
        >
          {featureTabs.map((tab, i) => (
            <button
              key={tab.name}
              id={`feature-tab-${i}`}
              role="tab"
              aria-selected={feature === i}
              aria-controls="feature-panel"
              tabIndex={feature === i ? 0 : -1}
              onClick={() => {
                setFeature(i);
                setView(i === 1 ? "To Do" : i === 2 ? "Calendar" : "Inbox");
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                  e.preventDefault();
                  const next =
                    (i +
                      (e.key === "ArrowRight" ? 1 : -1) +
                      featureTabs.length) %
                    featureTabs.length;
                  setFeature(next);
                  setView(
                    next === 1 ? "To Do" : next === 2 ? "Calendar" : "Inbox",
                  );
                  document.getElementById(`feature-tab-${next}`)?.focus();
                }
              }}
            >
              <tab.icon size={19} />
              {tab.name}
            </button>
          ))}
        </div>
        <div
          id="feature-panel"
          className="feature-panel"
          role="tabpanel"
          aria-labelledby={`feature-tab-${feature}`}
        >
          <div>
            <h3>{featureTabs[feature].title}</h3>
            <p>{featureTabs[feature].copy}</p>
          </div>
          <span>{featureTabs[feature].detail}</span>
        </div>
        <div className="demo-stage" id="demo">
          <div className="demo-caption">
            <span>
              <span className="status-dot" /> TAKE A LOOK AROUND
            </span>
            <span>Interactive preview · Fictional sample mail</span>
          </div>
          <div className="demo-workspace">
            <aside className="workspace-sidebar">
              <div className="window-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div className="demo-brand">
                <img
                  src={`${basePath}/lifafa-icon.png`}
                  width="27"
                  height="27"
                  alt=""
                />
                <b>Lifafa</b>
              </div>
              <span className="sidebar-label">YOUR WORKSPACE</span>
              {[
                { name: "Inbox", icon: Tray },
                { name: "To Do", icon: Checks },
                { name: "Calendar", icon: CalendarBlank },
              ].map((item) => (
                <button
                  key={item.name}
                  className={view === item.name ? "active" : ""}
                  onClick={() => {
                    setView(item.name);
                    setQuery("");
                  }}
                >
                  <item.icon size={18} />
                  {item.name}
                  <span>
                    {item.name === "Inbox"
                      ? "4"
                      : item.name === "To Do"
                        ? 3 - done.length
                        : ""}
                  </span>
                </button>
              ))}
              <span className="sidebar-label accounts-label">
                YOUR ACCOUNTS
              </span>
              <span className="account-name">
                <Circle weight="fill" size={7} /> Personal <small>Gmail</small>
              </span>
              <span className="account-name">
                <Circle weight="fill" size={7} /> Studio <small>Outlook</small>
              </span>
              <div className="sidebar-bottom">
                <ShieldCheck size={16} /> Your mail. Your space.
              </div>
            </aside>
            <div className="workspace-content">
              <div className="workspace-toolbar">
                <b>
                  {view === "Inbox"
                    ? "All inboxes"
                    : view === "To Do"
                      ? "Email work"
                      : "Your calendar"}
                </b>
                <span className="demo-only">SAMPLE WORKSPACE</span>
              </div>
              {view === "Calendar" ? (
                <div className="calendar-demo">
                  <span className="kicker">OCTOBER 2026</span>
                  <h3>A little room for your day.</h3>
                  <div className="week-days">
                    {["Mon 26", "Tue 27", "Wed 28", "Thu 29", "Fri 30"].map(
                      (d, i) => (
                        <div className={i === 0 ? "selected" : ""} key={d}>
                          {d.split(" ")[0]}
                          <b>{d.split(" ")[1]}</b>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="calendar-event">
                    <CalendarBlank size={26} />
                    <div>
                      <b>Project catch-up</b>
                      <p>Monday · 10:00 – 10:30</p>
                      <span>From Studio North’s invitation</span>
                    </div>
                  </div>
                  <p className="calendar-disclaimer">
                    Illustration of a reviewed calendar event. Lifafa keeps
                    original date expressions for your review.
                  </p>
                </div>
              ) : (
                <div className="mail-columns">
                  <div className="message-list">
                    <label className="demo-search">
                      <MagnifyingGlass size={16} />
                      <input
                        type="search"
                        aria-label="Search sample mail"
                        placeholder="Search your mail"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                      <kbd>⌘ K</kbd>
                    </label>
                    <div className="list-label">
                      {view === "To Do"
                        ? "SOURCE-LINKED WORK"
                        : "A LITTLE OF EVERYTHING"}
                      <span>{visibleMail.length}</span>
                    </div>
                    {visibleMail.map((m) => (
                      <button
                        className={`message-row ${selected === m.index ? "selected" : ""}`}
                        key={m.subject}
                        onClick={() => setSelected(m.index)}
                      >
                        <div className="row-top">
                          <span className={`avatar ${m.color}`}>
                            {m.initials}
                          </span>
                          <b>{m.name}</b>
                          <time>{m.time}</time>
                        </div>
                        <strong>{m.subject}</strong>
                        <p>{m.preview}</p>
                        <span
                          className={`tag ${m.index === 2 ? "tag-purple" : m.index === 3 ? "tag-gray" : ""}`}
                        >
                          {done.includes(m.index) ? "Done" : m.tag}
                        </span>
                      </button>
                    ))}
                    {visibleMail.length === 0 && (
                      <div className="empty-search">
                        <MagnifyingGlass size={25} />
                        <p>No matching sample mail.</p>
                        <button onClick={() => setQuery("")}>
                          Clear search
                        </button>
                      </div>
                    )}
                  </div>
                  <article className="message-reader">
                    <div className="reader-tools">
                      <span>
                        <EnvelopeSimple size={17} /> {active.tag}
                      </span>
                      <span>
                        <ShieldCheck size={17} /> Sample email
                      </span>
                    </div>
                    <h3>{active.subject}</h3>
                    <div className="reader-from">
                      <span className={`avatar ${active.color}`}>
                        {active.initials}
                      </span>
                      <div>
                        <b>{active.name}</b>
                        <span>
                          To Alex ·{" "}
                          {selected === 1
                            ? "Studio account"
                            : "Personal account"}
                        </span>
                      </div>
                      <time>{active.time} AM</time>
                    </div>
                    <div className="message-body">
                      <p>{active.body}</p>
                      <p>{active.text}</p>
                      <p>{active.end}</p>
                    </div>
                    <div className="attachment">
                      <LinkSimple size={17} />
                      {active.file}
                      <span>Illustrative attachment</span>
                    </div>
                    <div className="evidence-box">
                      <span className="micro-label">
                        <Sparkle size={13} /> FROM THE EMAIL, TO YOUR DAY
                      </span>
                      <b>{active.action}</b>
                      <blockquote>“{active.quote}”</blockquote>
                      <div>
                        <span>
                          <LinkSimple size={12} /> Original words. Clear
                          context.
                        </span>
                        {selected < 3 && (
                          <button
                            className={done.includes(selected) ? "is-done" : ""}
                            onClick={() =>
                              setDone(
                                done.includes(selected)
                                  ? done.filter((i) => i !== selected)
                                  : [...done, selected],
                              )
                            }
                          >
                            {done.includes(selected) ? (
                              <ArrowCounterClockwise size={13} />
                            ) : (
                              <Check size={13} />
                            )}
                            {done.includes(selected) ? "Undo" : "Mark done"}
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              )}
            </div>
          </div>
          <p className="demo-footnote">
            <Command size={13} /> Try the tabs, choose a message, or mark a
            sample action done.{" "}
            <span role="status" aria-live="polite">
              {done.length > 0
                ? `${done.length} sample action${done.length > 1 ? "s" : ""} completed. No email sent.`
                : "This preview doesn’t connect to your inbox."}
            </span>
          </p>
        </div>
      </section>
      <section className="benefits section-shell">
        <div className="benefit">
          <WifiSlash size={25} />
          <h3>Your inbox travels with you.</h3>
          <p>
            Automatic caching keeps recently used mail close. A durable outbox
            holds supported sends and changes until you’re back online.
          </p>
          <span>OFFLINE, NOT OUT OF TOUCH</span>
        </div>
        <div className="benefit">
          <Sparkle size={25} />
          <h3>A little intelligence. By invitation.</h3>
          <p>
            Optional Apple intelligence helps summarize and draft on eligible
            devices. Mail, rules and saved work stay useful with it switched
            off.
          </p>
          <span>HELP WHEN YOU WANT IT</span>
        </div>
        <div className="benefit">
          <LockKey size={25} />
          <h3>Personal means personal.</h3>
          <p>
            Direct connections to your mail providers. Keychain credentials.
            Remote-content controls. Optional encrypted iCloud sync for derived
            work.
          </p>
          <a href={`${basePath}/privacy/`}>
            Your privacy, explained <ArrowUpRight size={13} />
          </a>
        </div>
      </section>
      <section className="comparison-section section-shell" id="compare">
        <div className="comparison-heading">
          <div>
            <span className="kicker">A CLEARER PICTURE</span>
            <h2>
              Find your kind
              <br />
              of email app.
            </h2>
          </div>
          <p>
            Different approaches. An honest comparison.
            <br />
            See what Lifafa is building alongside GotEmail
            <br className="desktop-break" /> and Inbox Zero.
          </p>
        </div>
        <div
          className="compare-filters"
          role="group"
          aria-label="Filter feature comparison"
        >
          {[
            "All features",
            "Mail",
            "Intelligence",
            "Workflow",
            "Privacy",
            "Platforms",
          ].map((f) => (
            <button
              className={filter === f ? "active" : ""}
              aria-pressed={filter === f}
              key={f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <p className="table-scroll-hint">
          Swipe to compare all three apps <ArrowRight size={13} />
        </p>
        <div
          className="table-scroll"
          tabIndex={0}
          role="region"
          aria-label="Feature comparison, scroll horizontally on small screens"
        >
          <table>
            <caption className="sr-only">
              Lifafa Mail, GotEmail and Inbox Zero feature comparison. Vendor
              claims reviewed 24 October 2026.
            </caption>
            <thead>
              <tr>
                <th scope="col">
                  The things that matter
                  <span>{rows.length} features · Reviewed Oct 24, 2026</span>
                </th>
                <th scope="col" className="lifafa-col">
                  <img
                    src={`${basePath}/lifafa-icon.png`}
                    width="23"
                    height="23"
                    alt=""
                  />
                  Lifafa Mail<span>Native. Connected. Yours.</span>
                </th>
                <th scope="col">
                  GotEmail<span>The native Mac approach</span>
                </th>
                <th scope="col">
                  Inbox Zero<span>The automation approach</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name}>
                  <th scope="row">
                    {r.name}
                    <span>{r.category}</span>
                  </th>
                  {[r.lifafa, r.gotemail, r.inboxzero].map((value, i) => (
                    <td
                      className={`${i === 0 ? "lifafa-col" : ""} ${value === "Not available" || value === "Not listed" ? "muted-cell" : ""}`}
                      key={i}
                    >
                      {i === 0 && !value.startsWith("Not ") && (
                        <Check size={13} />
                      )}
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="comparison-notes">
          <p>
            “Not listed” means we couldn’t verify a feature from the reviewed
            sources; it doesn’t mean the product lacks it. Lifafa capabilities
            describe the current implementation in development, not a
            public-release promise. No weighted scores.
          </p>
          <p>
            ¹ Inbox Zero’s email-app page. ² GotEmail 0.8 feature benchmark; some features aren’t detailed on its homepage. ³
            Lifafa’s ChatGPT public release remains gated; Cloudflare is
            separately authorized for private testing. ⁴ Implemented Apple
            integrations still require device, permission and cross-device
            acceptance checks.
          </p>
          <div>
            <a href={`${basePath}/lifafa-feature-comparison.csv`} download>
              Download the comparison <ArrowUpRight size={12} />
            </a>{" "}
            Explore the sources{" "}
            <a href="https://gotemail.net/" target="_blank" rel="noreferrer">
              GotEmail <ArrowUpRight size={12} />
            </a>
            <a
              href="https://www.getinboxzero.com/"
              target="_blank"
              rel="noreferrer"
            >
              Inbox Zero <ArrowUpRight size={12} />
            </a>
            <a
              href="https://www.getinboxzero.com/email-client"
              target="_blank"
              rel="noreferrer"
            >
              Inbox Zero Mail <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </section>
      <section className="native-section section-shell" id="platforms">
        <span className="kicker">AT HOME ON APPLE</span>
        <h2>
          Big screen. Small screen.
          <br />
          <span>Same peace of mind.</span>
        </h2>
        <p>A native SwiftUI workspace that adapts to the way you work.</p>
        <div className="platforms">
          <div>
            <DeviceMobile size={29} />
            <b>iPhone</b>
            <span>iOS 27+</span>
            <p>Your next step, on the go.</p>
          </div>
          <div>
            <CalendarBlank size={29} />
            <b>iPad</b>
            <span>iPadOS 27+</span>
            <p>A little more room to think.</p>
          </div>
          <div>
            <Desktop size={29} />
            <b>Mac</b>
            <span>macOS 27+</span>
            <p>A workspace for the whole day.</p>
          </div>
        </div>
      </section>
      <section className="faq-section section-shell" id="faq">
        <div>
          <span className="kicker">A FEW GOOD QUESTIONS</span>
          <h2>Glad you asked.</h2>
        </div>
        <div className="faq-list">
          {[
            [
              "Can I download Lifafa today?",
              "Lifafa is in active development. This is a product preview, not a public download. Follow development on GitHub for updates. There is no public signup or download link announced on this site.",
            ],
            [
              "Will my existing email address work?",
              "Lifafa connects to Gmail, Microsoft Outlook and custom IMAP / SMTP accounts. You keep your address. iCloud and other IMAP providers may require app-specific passwords or provider setup.",
            ],
            [
              "Do I have to use AI?",
              "No. Intelligence is off by default in ordinary builds. Mail, manual corrections, rules and saved work remain usable without Apple Intelligence. Optional local processing depends on model and device availability.",
            ],
            [
              "Does Lifafa send emails or complete tasks for me?",
              "You stay in control. Generated replies go through review and the composer. Marking an email-work action done does not send, pay, approve, sign or cancel anything externally.",
            ],
            [
              "What stays on my device?",
              "Mailbox caching is local, and credentials use Apple Keychain. Derived work is stored in encrypted envelopes; optional private iCloud sync uses a separate key. Mailbox and outbox caches rely on OS and sandbox protection. Connected mail providers and any separately authorized processing still receive the data required for those functions. See our privacy policy for the complete details.",
            ],
            [
              "Is this a web email app?",
              "This is Lifafa’s static product website. The app itself is native for iPhone, iPad and Mac. The interactive sample above uses fictional mail and does not connect to an account.",
            ],
          ].map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <CaretDown size={17} />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="closing-section">
        <img
          src={`${basePath}/lifafa-icon.png`}
          width="60"
          height="60"
          alt="Lifafa Mail"
        />
        <span className="kicker">MAKE A LITTLE ROOM</span>
        <h2>
          Your inbox is full.
          <br />
          <span>Your day doesn’t have to be.</span>
        </h2>
        <p>A more thoughtful email app is taking shape.</p>
        <button
          className="button button-primary"
          onClick={() => setDialog(true)}
        >
          Follow the journey <ArrowRight size={17} />
        </button>
        <span className="closing-note">
          Built by SolvePao Research. Made for your everyday.
        </span>
      </section>
      {dialog && (
        <dialog
          ref={dialogRef}
          className="journey-dialog"
          onCancel={() => setDialog(false)}
          aria-labelledby="journey-title"
          onKeyDown={(e) => {
            if (e.key === "Escape") setDialog(false);
          }}
        >
          <div className="dialog-card">
            <button
              className="dialog-close"
              aria-label="Close development updates"
              onClick={() => setDialog(false)}
              autoFocus
            >
              <X size={21} />
            </button>
            <img
              src={`${basePath}/lifafa-icon.png`}
              width="50"
              height="50"
              alt=""
            />
            <span className="kicker">A WORK IN PROGRESS</span>
            <h2 id="journey-title">
              Good things take
              <br />a little thought.
            </h2>
            <p>
              Lifafa Mail is in active development. Explore the source, track
              progress, and join the conversation on GitHub.
            </p>
            <a
              className="button button-primary"
              href="https://github.com/solvePao/Lifafa-iOS"
              target="_blank"
              rel="noreferrer"
            >
              Explore on GitHub <ArrowUpRight size={17} />
            </a>
            <p className="dialog-note">
              Public downloads and pricing haven’t been announced.
            </p>
          </div>
        </dialog>
      )}
    </main>
  );
}
