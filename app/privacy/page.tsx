import type { Metadata } from "next";
import { LegalPageShell } from "../site-chrome";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Lifafa Mail data access, optional intelligence and diagnostics, storage, permissions, and deletion controls.",
};
export const dynamic = "force-static";
const toc = [
  { id: "scope", label: "Scope" },
  { id: "data", label: "Data we handle" },
  { id: "use", label: "How data is used" },
  { id: "google", label: "Google user data" },
  { id: "storage", label: "Storage & security" },
  { id: "intelligence", label: "Optional intelligence" },
  { id: "diagnostics", label: "Optional diagnostics" },
  { id: "choices", label: "Your choices" },
  { id: "retention", label: "Retention & deletion" },
  { id: "updates", label: "Updates & contact" },
];
export default function PrivacyPolicy() {
  return (
    <LegalPageShell eyebrow="Legal · Privacy" title="Your inbox is personal. We treat it that way."
      updated="23 October 2026"
      summary="How Lifafa Mail, developed by SolvePao Research, handles your information. Optional processing and diagnostic sharing require their own consent."
      toc={toc}>
      <section id="scope">
        <span className="legal-number">01</span><h2>Scope</h2>
        <p>This policy covers Lifafa Mail for iPhone, iPad, and Mac, and this product website. Lifafa Mail is in development. Availability depends on the app version, platform, account permissions, and service eligibility.</p>
        <p>“SolvePao,” “we,” and “us” mean SolvePao Research, the developer of Lifafa Mail. We will explain material changes before requesting any new consent.</p>
      </section>
      <section id="data">
        <span className="legal-number">02</span><h2>Data we handle</h2>
        <h3>Connected accounts and email</h3>
        <p>The app handles your account name, address, provider identifiers, authorized OAuth sessions, and custom IMAP/SMTP settings and credentials. It connects directly to your mail providers to read, search, organize, compose, send, and delete mail you choose. This involves headers, addresses, subjects, bodies, folders, labels, drafts, message state, and attachments. There is no Lifafa mail relay or hosted inference backend.</p>
        <h3>Contacts, calendars, and email-derived work</h3>
        <p>When authorized, Lifafa accesses provider contacts and calendars and can import them into Apple Contacts or Calendar. Email-derived work can contain summaries, exact evidence quotes, actions, deadlines, rules, and your corrections. These are sensitive mail-derived records even when they do not contain the entire message.</p>
        <h3>Website</h3>
        <p>This static product website has no mailbox sign-in, contact form, analytics SDK, advertising pixels, or marketing cookies. Its hosting provider, GitHub Pages, may process request and security information under its own policies.</p>
      </section>
      <section id="use">
        <span className="legal-number">03</span><h2>How data is used</h2>
        <ul>
          <li>Authenticate connected accounts and provide mail reading, sending, organization, search, attachments, and offline recovery.</li>
          <li>Provide contacts and calendar features you authorize, and email-derived To Do, rules, corrections, and reviewed suggestions.</li>
          <li>Perform optional, separately authorized intelligence processing and encrypted private iCloud synchronization.</li>
          <li>Investigate reliability and performance using optional technical diagnostics, as described below.</li>
        </ul>
        <p>We do not sell personal information, use mailbox content for advertising or data brokerage, or use it to train generalized artificial intelligence models. Proposals do not themselves send mail, pay, approve, sign, or cancel anything externally. Generated replies require review through the composer.</p>
      </section>
      <section id="google">
        <span className="legal-number">04</span><h2>Google user data</h2>
        <p>Google authorization allows Lifafa to access the Gmail, contacts, and calendar features shown in its consent flow. Google handles sign-in; the app stores authorization tokens in your device Keychain, not your Google password. Access is used for the user-facing features you authorize. You can revoke access in your Google Account settings.</p>
        <p>Lifafa Mail’s use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements. Google data is not sold, used for advertising or data brokerage, or used to train generalized AI models. Human access is restricted to explicitly authorized support, security, or legal purposes consistent with those requirements.</p>
        <p>See the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noreferrer">Google API Services User Data Policy</a> and <a href="https://developers.google.com/workspace/workspace-api-user-data-developer-policy" target="_blank" rel="noreferrer">Google Workspace API User Data and Developer Policy</a>.</p>
      </section>
      <section id="storage">
        <span className="legal-number">05</span><h2>Storage and security</h2>
        <ul>
          <li>Mail authorization tokens and custom-account credentials use device-local Apple Keychain storage. They are not copied into email-work CloudKit records.</li>
          <li>Mailbox databases, downloaded content, and durable outbox/recovery files rely on app sandbox and operating-system protection. They are not all encrypted by Lifafa with an application key, and backup exclusion is not uniform across these caches.</li>
          <li>Saved email-work envelopes are authenticated client ciphertext. Optional email-work synchronization uses only the private database of Apple CloudKit, with a separate key shared through iCloud Keychain. Encryption keys are not stored in CloudKit records.</li>
          <li>Diagnostic reports use a separate device-only Keychain encryption key and are excluded from backup. Cloud diagnostics use CloudKit service encryption; they are readable by authorized container administrators, unlike the client-encrypted email-work payload.</li>
          <li>Email may load external images unless you enable blocking or Secure Mode. External content can disclose your IP address and message-open activity to senders. Active scripts/forms are off by default and require a separate warning before enabling.</li>
        </ul>
        <p>Private iCloud work sync is optional, requires the account-link and key checks, and does not make your mail credentials or full attachments available to Lifafa administrators. No system is perfectly secure; these safeguards are not a guarantee against every risk.</p>
      </section>
      <section id="intelligence">
        <span className="legal-number">06</span><h2>Optional intelligence and other sharing</h2>
        <p>Intelligence is off by default. Understanding, reply drafting, rule suggestions, attachment-text processing, and other model features need their own permissions and mailbox consent. Existing mail, saved work, rules, and corrections remain usable when intelligence is off or unavailable.</p>
        <p>Apple Foundation Models perform the supported local model processing. The native OpenAI/ChatGPT integration is separately gated by authorization and verified service/platform eligibility; authorization for a personal development installation does not enable it in ordinary public builds. Private Cloudflare Clef Flash builds can send authorized classification inputs directly to Cloudflare Workers AI. Bundled private-build credentials never grant mailbox consent. The app does not automatically escalate to another online processor.</p>
        <p>Before any available external processor is authorized, its in-app consent must explain the recipient and inputs, including any selected mail or extracted attachment text. Those inputs leave the device for that service; they are separate from diagnostics. Private Cloud Compute is not available in Lifafa’s current setup.</p>
        <p>Other communication includes the mail providers you connect, Apple iCloud/Keychain and operating-system services, and external content you permit. We may disclose information when required by law or for legitimate security purposes. No third-party analytics or advertising SDK is part of Lifafa’s diagnostic pipeline.</p>
      </section>
      <section id="diagnostics">
        <span className="legal-number">07</span><h2>Optional diagnostics</h2>
        <p>In the privacy-first diagnostic format, local collection and CloudKit sharing are separate, default-off choices in Settings → Privacy &amp; Diagnostics on each device. Fresh, versioned consent is required; old switches do not authorize the revised sharing flow. Sharing requires collection. Declining either choice does not restrict mail features.</p>
        <p>Reports contain allowlisted technical event/error codes, durations, counts, provider kind, app/build/OS, and random installation, session, and report identifiers. Optional developer deletion diagnostics add technical operation stages with random correlation IDs. Reports exclude addresses, subjects, received dates, message text, attachments, credentials, URLs, file paths, AI prompts, and raw error messages. Apple MetricKit reports are reduced to allowlisted counts; raw payloads and call stacks are not stored or uploaded.</p>
        <p>Reports are not anonymous: random identifiers and CloudKit record ownership can link them to an installation or iCloud account. With sharing enabled, Apple CloudKit processes the reports and authorized Lifafa container administrators can inspect them for reliability, performance, and support. Other app users must not be granted access to those reports.</p>
        <div className="legal-callout">Cloud sharing in this revision remains unavailable until permissions, privacy disclosures, a private support contact, and the independent 30-day retention job are verified. The 30-day period is a product retention target, not a verified automatic expiry claim. Apple’s own TestFlight and system analytics are controlled separately by Apple.</div>
        <p>Earlier explicitly opted-in internal deletion diagnostics could include sender/To addresses, subjects, received time, and lifecycle metadata. The revised app discards the old pending local queues and never copies historical private logs into the public diagnostic database. Historical cloud records are not silently erased by installing the update; they require separately reviewed administrator cleanup or a privacy request.</p>
      </section>
      <section id="choices">
        <span className="legal-number">08</span><h2>Your choices and permissions</h2>
        <ul>
          <li>Disconnect mail accounts in Settings or revoke access with Google or Microsoft. Disconnecting Lifafa does not delete mail held by the provider.</li>
          <li>Keep diagnostics off, collect only on-device, or separately consent to cloud sharing when available. Turning collection off also turns sharing off and stops new diagnostic processing.</li>
          <li>Clear local diagnostic reports or request deletion of cloud reports tracked by this installation. Turning sharing off alone does not delete existing reports.</li>
          <li>Choose intelligence processors/features and source-account consent separately. Diagnostic consent never authorizes AI processing.</li>
          <li>Request Calendar/Reminders exports explicitly. Exports do not establish bidirectional synchronization. Contacts, Calendar, Reminders, and notification permissions can be managed in system settings.</li>
          <li>Enable or disable optional iCloud work synchronization and Spotlight indexing; disabling indexing removes Lifafa’s indexed work entries.</li>
          <li>Control remote images, external links, active content, and Secure Mode. User-selected exports and shared files leave Lifafa’s local storage controls.</li>
        </ul>
      </section>
      <section id="retention">
        <span className="legal-number">09</span><h2>Retention and deletion</h2>
        <p>Cached mail is managed by Lifafa’s automatic cache budget and cleanup. The mailbox index and durable pending send/mutation intent have a different lifecycle from disposable content. Clearing cached content does not mean pending work or provider-held mail has been deleted. Saved work and exports persist until removed through the relevant controls; private cloud data needs the applicable cloud deletion/recovery flow.</p>
        <p>Local diagnostic event content expires after 7 days while the app runs, with caps of 500 general pending events, 2,000 deletion events, 100 recent events, and 500 local message lookups. The encrypted ledger of attempted cloud record IDs and pending deletion requests is kept separately so clearing local history does not lose the ability to request cloud deletion.</p>
        <p>Cloud diagnostic retention is intended to be 30 days, enforced by a separately operated administrator cleanup job once deployed and verified. A nightly job can remove expired records on its next successful run; service outages can delay deletion. The app can also request earlier cleanup. Failed cloud deletions remain queued and retry with the originating iCloud account, including when collection/sharing are off. Reports from older app versions, another installation, a lost receipt ledger, or an uninstalled app require administrator assistance; uninstalling does not delete cloud reports.</p>
        <p>Historical sensitive diagnostics require separately reviewed cleanup. Until that cleanup and the retention job are verified, existing cloud records may remain. We will not describe undeployed cleanup as automatic deletion.</p>
      </section>
      <section id="updates">
        <span className="legal-number">10</span><h2>Children, updates, and contact</h2>
        <p>Lifafa Mail is not directed to children under 13. This website does not knowingly collect children’s personal information. Material changes to collection, destinations, or purposes require updated disclosures and, where appropriate, fresh consent.</p>
        <p>For a non-sensitive privacy question, use the <a href="https://github.com/harshityadav95/Lifafa-Mail-App/issues" target="_blank" rel="noreferrer">Lifafa Mail issue tracker</a>. Do not post addresses, message content, tokens, diagnostic exports, or other private data in a public issue. A verified private privacy/deletion contact must be established before cloud diagnostic sharing is enabled.</p>
      </section>
    </LegalPageShell>
  );
}
