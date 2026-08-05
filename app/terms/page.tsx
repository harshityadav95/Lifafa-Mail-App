import type { Metadata } from "next";
import { LegalPageShell, sitePath } from "../site-chrome";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing access to and use of Lifafa Mail.",
};

export const dynamic = "force-static";

const toc = [
  { id: "acceptance", label: "Acceptance" },
  { id: "development", label: "Development status" },
  { id: "license", label: "License" },
  { id: "accounts", label: "Accounts" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "third-parties", label: "Third-party services" },
  { id: "privacy", label: "Privacy" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Liability" },
  { id: "changes", label: "Changes & contact" },
];

export default function TermsOfService() {
  return (
    <LegalPageShell
      eyebrow="Legal · Terms"
      title="Clear terms for a product still taking shape."
      updated="5 August 2026"
      summary="These Terms of Service govern your access to the Lifafa Mail application and this product website."
      toc={toc}
    >
      <section id="acceptance">
        <span className="legal-number">01</span>
        <h2>Acceptance</h2>
        <p>
          By downloading, accessing, testing, or using Lifafa Mail, you agree to
          these Terms of Service (“Terms”). If you do not agree, do not use the
          application. “Lifafa Mail” includes the application, this website, and
          related features made available by SolvePao Research (“SolvePao,” “we,”
          or “us”).
        </p>
        <p>
          You must be legally able to enter into these Terms. If you use Lifafa
          Mail for an organization, you represent that you have authority to bind
          that organization.
        </p>
      </section>

      <section id="development">
        <span className="legal-number">02</span>
        <h2>Development and preview status</h2>
        <p>
          Lifafa Mail is currently in development. Features may be incomplete,
          experimental, unavailable, changed, suspended, or removed before
          release. Preview builds may contain defects, lose local data, consume
          additional network or battery resources, or behave differently across
          devices.
        </p>
        <div className="legal-callout">
          Do not rely on a development build as the only copy of important
          messages, contacts, calendar information, attachments, or credentials.
        </div>
        <p>
          We may limit access to preview builds and may reset or discontinue a
          preview at any time. Product descriptions on this website are forward-
          looking and do not promise a release date or final feature set.
        </p>
      </section>

      <section id="license">
        <span className="legal-number">03</span>
        <h2>Limited license</h2>
        <p>
          Subject to these Terms, SolvePao grants you a limited, personal,
          revocable, non-exclusive, non-transferable license to install and use
          Lifafa Mail on compatible devices you own or control for lawful email,
          contact, and calendar use.
        </p>
        <p>
          Except where applicable law or an open-source license permits it, you
          may not copy, sell, rent, sublicense, distribute, reverse engineer,
          interfere with, or create derivative works from Lifafa Mail. Third-
          party and open-source components remain subject to their own licenses.
        </p>
      </section>

      <section id="accounts">
        <span className="legal-number">04</span>
        <h2>Your accounts and content</h2>
        <p>
          You are responsible for accounts you connect, information you send,
          actions you take, recipients you choose, and compliance with your email
          provider’s rules. You must have permission to use each connected
          account and to access or transmit its content.
        </p>
        <p>
          You retain ownership of your messages, attachments, contacts, calendar
          information, and other content. You authorize Lifafa Mail to access,
          process, display, store locally, and transmit that content only as
          needed to provide features you request and as described in the Privacy
          Policy.
        </p>
        <p>
          Keep your device passcode and account credentials secure. Notify the
          relevant provider immediately if you believe an account is compromised.
        </p>
      </section>

      <section id="acceptable-use">
        <span className="legal-number">05</span>
        <h2>Acceptable use</h2>
        <p>You may not use Lifafa Mail to:</p>
        <ul>
          <li>violate law, regulation, sanctions, or another person’s rights;</li>
          <li>send spam, phishing, malware, harassment, threats, or deceptive content;</li>
          <li>access an account, system, or data without authorization;</li>
          <li>evade provider limits, security controls, or consent requirements;</li>
          <li>probe, disrupt, overload, or damage Lifafa Mail or connected services; or</li>
          <li>misrepresent your identity or SolvePao’s endorsement.</li>
        </ul>
        <p>
          We may suspend access where reasonably necessary to investigate misuse,
          protect people or systems, comply with law, or preserve the integrity
          of a development program.
        </p>
      </section>

      <section id="third-parties">
        <span className="legal-number">06</span>
        <h2>Third-party services</h2>
        <p>
          Lifafa Mail connects to services operated by others, including Google,
          Microsoft, Apple, and custom mail providers. Their availability,
          security, data practices, content, and terms are outside SolvePao’s
          control. Your use of those services remains governed by your agreements
          with them.
        </p>
        <p>
          Provider changes, API limits, account policies, network conditions, or
          revoked permissions may affect Lifafa Mail. We are not responsible for
          third-party outages, account decisions, or changes to third-party
          services.
        </p>
      </section>

      <section id="privacy">
        <span className="legal-number">07</span>
        <h2>Privacy and permissions</h2>
        <p>
          Our <a href={sitePath("/privacy/")}>Privacy Policy</a> explains how Lifafa Mail
          accesses, uses, stores, protects, and shares information. By using the
          app, you acknowledge those practices. You control provider permissions
          and may disconnect accounts or revoke access through Lifafa Mail,
          system settings, or the provider’s account settings.
        </p>
      </section>

      <section id="disclaimers">
        <span className="legal-number">08</span>
        <h2>Disclaimers</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, LIFAFA MAIL AND THE WEBSITE ARE
          PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, AVAILABILITY, OR SECURITY.
        </p>
        <p>
          We do not warrant uninterrupted delivery, error-free operation, perfect
          spam detection, permanent compatibility with any provider, or recovery
          of lost content. Some jurisdictions do not allow certain warranty
          exclusions, so parts of this section may not apply to you.
        </p>
      </section>

      <section id="liability">
        <span className="legal-number">09</span>
        <h2>Limitation of liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, SOLVEPAO RESEARCH AND ITS
          CONTRIBUTORS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOSS OF DATA,
          MESSAGES, PROFITS, REVENUE, BUSINESS, GOODWILL, OR OPPORTUNITY, ARISING
          FROM OR RELATED TO LIFAFA MAIL.
        </p>
        <p>
          Where liability cannot be excluded, SolvePao’s total aggregate
          liability for claims related to Lifafa Mail will not exceed the amount
          you paid SolvePao for the app during the twelve months before the event
          giving rise to the claim. Nothing in these Terms limits liability that
          cannot lawfully be limited.
        </p>
      </section>

      <section id="changes">
        <span className="legal-number">10</span>
        <h2>Termination, changes, and contact</h2>
        <p>
          You may stop using Lifafa Mail at any time and disconnect your accounts.
          We may suspend or terminate access if you materially breach these Terms,
          create risk or legal exposure, or if the product is discontinued.
          Provisions that by their nature should survive termination will survive.
        </p>
        <p>
          We may update these Terms as Lifafa Mail develops. The date above will
          show the latest version. Material changes will be presented in an
          appropriate, prominent way. Continued use after updated Terms take
          effect means you accept them.
        </p>
        <p>
          These Terms are the entire agreement between you and SolvePao regarding
          Lifafa Mail, except for any separate written agreement. If one provision
          is unenforceable, the remaining provisions remain effective. Failure to
          enforce a provision is not a waiver.
        </p>
        <p>
          Questions about these Terms can be sent through the <a href="https://github.com/harshityadav95/Lifafa-Mail-App/issues" target="_blank" rel="noreferrer">Lifafa Mail issue tracker</a>. Do not post passwords, tokens, private messages, or other sensitive information.
        </p>
      </section>
    </LegalPageShell>
  );
}
