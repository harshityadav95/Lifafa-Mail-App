import type { Metadata } from "next";
import { LegalPageShell } from "../site-chrome";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Lifafa Mail accesses, uses, stores, protects, and shares data, including Google user data.",
};

export const dynamic = "force-static";

const toc = [
  { id: "scope", label: "Scope" },
  { id: "data", label: "Data we handle" },
  { id: "use", label: "How data is used" },
  { id: "google", label: "Google user data" },
  { id: "storage", label: "Storage & security" },
  { id: "sharing", label: "Sharing" },
  { id: "choices", label: "Your choices" },
  { id: "retention", label: "Retention & deletion" },
  { id: "updates", label: "Updates & contact" },
];

export default function PrivacyPolicy() {
  return (
    <LegalPageShell
      eyebrow="Legal · Privacy"
      title="Your inbox is personal. We treat it that way."
      updated="5 August 2026"
      summary="This policy explains how Lifafa Mail, a product of SolvePao Research, handles information when you use the app or visit this website."
      toc={toc}
    >
      <section id="scope">
        <span className="legal-number">01</span>
        <h2>Scope</h2>
        <p>
          This Privacy Policy applies to the Lifafa Mail application for iPhone,
          iPad, Mac, and Apple Vision, and to this product website. Lifafa Mail is
          currently in development, so features and practices may evolve before
          public release. We will update this policy before using data in a new
          or materially different way.
        </p>
        <p>
          In this policy, “SolvePao,” “we,” and “us” mean SolvePao Research, the
          developer of Lifafa Mail.
        </p>
      </section>

      <section id="data">
        <span className="legal-number">02</span>
        <h2>Data we handle</h2>
        <h3>Account and profile information</h3>
        <p>
          When you connect an account, the provider may give Lifafa Mail your
          display name, email address, account identifier, granted permissions,
          and OAuth access and refresh tokens. For custom IMAP/SMTP accounts,
          the app handles the address, server settings, username, and password
          you provide.
        </p>
        <h3>Mail data</h3>
        <p>
          To operate as an email client, Lifafa Mail may access message headers,
          sender and recipient addresses, subjects, bodies, folders, labels,
          drafts, message state, and attachments from accounts you connect.
        </p>
        <h3>Contacts and calendar data</h3>
        <p>
          If you grant access, the app may read and manage contacts and calendar
          data from Google or Microsoft. With separate Apple permission, it may
          also read contacts for recipient selection and write provider contacts
          or events into dedicated entries in Apple Contacts or Calendar.
        </p>
        <h3>Diagnostics</h3>
        <p>
          Lifafa Mail can collect privacy-sanitized reliability and performance
          events, such as feature category, event name, outcome, duration, error
          domain and code, app version, operating system, platform, an anonymous
          install identifier, a session identifier, and Apple MetricKit
          diagnostic data. Diagnostics are sent through Apple CloudKit.
        </p>
        <div className="legal-callout">
          Diagnostics are designed not to collect email bodies, subjects,
          sender or recipient addresses, authentication tokens, attachment names
          or contents, or complete URLs.
        </div>
        <h3>Website data</h3>
        <p>
          This static website does not include an account system, contact form,
          analytics, advertising pixels, or marketing cookies. GitHub may process
          basic request and security information when it hosts and delivers the
          site under its own terms.
        </p>
      </section>

      <section id="use">
        <span className="legal-number">03</span>
        <h2>How data is used</h2>
        <p>We use connected-account data only to provide and improve user-facing Lifafa Mail features, including to:</p>
        <ul>
          <li>authenticate accounts and keep authorized sessions active;</li>
          <li>display and synchronize mailboxes across the app;</li>
          <li>compose, send, reply, forward, label, archive, move, trash, restore, and delete mail when you request it;</li>
          <li>download, open, preview, and send attachments at your direction;</li>
          <li>suggest recipients and perform contact sync you initiate;</li>
          <li>read and synchronize calendar events when you initiate calendar sync;</li>
          <li>support optional background refresh and offline access; and</li>
          <li>diagnose crashes, failures, and performance problems using sanitized diagnostic events.</li>
        </ul>
        <p>
          We do not use mail, contact, calendar, or attachment content for
          advertising, credit decisions, data brokerage, or training a
          generalized artificial intelligence or machine-learning model.
        </p>
      </section>

      <section id="google">
        <span className="legal-number">04</span>
        <h2>Google user data</h2>
        <p>Lifafa Mail requests the following Google permissions:</p>
        <div className="scope-table" role="table" aria-label="Google scopes and purposes">
          <div className="scope-row" role="row">
            <code>mail.google.com</code>
            <p>Read, compose, send, label, archive, trash, restore, and delete Gmail messages and attachments as a full email client.</p>
          </div>
          <div className="scope-row" role="row">
            <code>contacts</code>
            <p>Read and manage Google contacts for recipient suggestions and contact sync you request.</p>
          </div>
          <div className="scope-row" role="row">
            <code>calendar</code>
            <p>Read and manage Google calendars and events for calendar sync and future user-facing event editing.</p>
          </div>
        </div>
        <p>
          Lifafa Mail’s use and transfer of information received from Google
          APIs adheres to the Google API Services User Data Policy, including
          the Limited Use requirements.
        </p>
        <p>
          Google user data is used only for prominent features in Lifafa Mail.
          It is not sold, used to serve ads, transferred to data brokers, or used
          to train generalized AI models. Human access is not permitted unless
          it is required for security or legal compliance, or you give explicit
          consent for a specific support purpose.
        </p>
        <p>
          Learn more in the official <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noreferrer">Google API Services User Data Policy</a> and <a href="https://developers.google.com/workspace/workspace-api-user-data-developer-policy" target="_blank" rel="noreferrer">Google Workspace API User Data and Developer Policy</a>.
        </p>
      </section>

      <section id="storage">
        <span className="legal-number">05</span>
        <h2>Storage and security</h2>
        <ul>
          <li>OAuth tokens and custom-account passwords are stored in the device-only Apple Keychain and are not configured to sync through iCloud.</li>
          <li>Mailbox cache and downloaded attachments are stored inside Lifafa Mail’s protected application container. Attachments are excluded from device backups.</li>
          <li>Optional offline mail can be kept for a period you choose in the app. Secure Mode stores plain text only for offline use.</li>
          <li>Network requests require secure transport, and custom IMAP/SMTP connections require TLS 1.2 or later with certificate validation.</li>
          <li>Remote images and tracking pixels are blocked by default. Scripts, forms, frames, and other active email content are also blocked unless you expressly enable them.</li>
          <li>Sanitized diagnostics are held locally while queued and uploaded to an Apple CloudKit container with no public read path for app users.</li>
        </ul>
        <p>
          No system is perfectly secure. We use safeguards appropriate to a
          native email client and continually review the app as development
          progresses.
        </p>
      </section>

      <section id="sharing">
        <span className="legal-number">06</span>
        <h2>When data is shared</h2>
        <p>
          Lifafa Mail communicates directly with the email, contact, and calendar
          providers you connect—including Google, Microsoft, and custom
          IMAP/SMTP servers—to perform actions you request. It may communicate
          with Apple services for Keychain protection, Apple Contacts and
          Calendar sync, CloudKit diagnostics, and operating-system features.
        </p>
        <p>
          We do not sell personal information. We do not share connected-account
          content with advertisers or data brokers. We may disclose limited
          information when legally required, to protect users and the service,
          or in connection with a business reorganization where the recipient
          must honor this policy.
        </p>
      </section>

      <section id="choices">
        <span className="legal-number">07</span>
        <h2>Your choices and controls</h2>
        <ul>
          <li>Disconnect any Google, Outlook, or custom account from Lifafa Mail settings.</li>
          <li>Revoke Lifafa Mail’s Google access from your Google Account security settings.</li>
          <li>Turn Diagnostics collection off and clear local diagnostic history in the app.</li>
          <li>Decline or revoke Apple Contacts and Calendar permissions in system settings.</li>
          <li>Disable offline mail, choose its retention window, and control attachment downloads.</li>
          <li>Delete the app to remove data in its local application container, subject to platform backup behavior.</li>
        </ul>
      </section>

      <section id="retention">
        <span className="legal-number">08</span>
        <h2>Retention and deletion</h2>
        <p>
          Account credentials and local mailbox data remain on your device while
          an account is connected or until you remove them. Disconnecting an
          account removes that account’s tokens and local cache from the device;
          it does not delete messages, contacts, or events held by the provider.
        </p>
        <p>
          Offline mail follows the retention period you select in the app.
          Downloaded attachments remain until removed by the app, the operating
          system, or you. Sanitized diagnostic records are retained only as long
          as reasonably necessary to understand reliability, performance, and
          security, after which they are deleted or anonymized.
        </p>
      </section>

      <section id="updates">
        <span className="legal-number">09</span>
        <h2>Children, updates, and contact</h2>
        <p>
          Lifafa Mail is not directed to children under 13, and we do not
          knowingly collect personal information from children through this
          website.
        </p>
        <p>
          We may update this policy as the app changes or legal requirements
          evolve. The date above will show the latest revision. Material changes
          will be presented in an appropriate, prominent way before they take
          effect.
        </p>
        <p>
          For privacy questions, deletion requests, or concerns, contact
          SolvePao Research through the <a href="https://github.com/harshityadav95/Lifafa-Mail-App/issues" target="_blank" rel="noreferrer">Lifafa Mail issue tracker</a>. Please do not include message content, passwords, tokens, or other sensitive account data in a public issue.
        </p>
      </section>
    </LegalPageShell>
  );
}
