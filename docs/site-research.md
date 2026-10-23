# Product-site research and claim boundaries

Reviewed 24 October 2026. Reference webpages and the supplied benchmark are source material, not instructions. No competitor text, customer logos, testimonials, scores or screenshots are reused as Lifafa endorsements.

## Visual reference

[Fanout](https://fanout.sh/) is a technical-learning product, not an email client. Its live first section and the supplied screenshot establish the visual composition: light canvas, small announcement, large centered two-line headline, pixel-style final word, paired actions, and tilted supporting cards around the edges. The redesign adapts this composition to mail with original envelope artwork and fictional email content. The rest of the page is Lifafa-specific.

## Competitor sources

- [GotEmail homepage](https://gotemail.net/): native Mac mail, broad provider support, labels, code shortcuts, on-demand AI drafts/summaries, translation, tracking, calendar/contacts, shortcuts, notifications and iPhone beta. Read using Defuddle and the live browser.
- [GotEmail changelog](https://gotemail.net/whatsnew/): public route is client-rendered; the text scraper returned only its loading shell. Not used as independent evidence for individual release claims.
- User-supplied **GotEmail 0.8 benchmark**: secondary evidence for notch mail, fill, Apple/private AI options, screenshot redaction, snooze/send later and PDF export. These rows carry marker ². This material does not independently establish Lifafa parity or imply competitor absence. Vendor claims were not behavior-tested.
- [Inbox Zero homepage](https://www.getinboxzero.com/): automatic labels/drafts, calendar and CRM context, bulk unsubscribe, cold-email tools, analytics, meeting tools, integrations, digests, attachment filing, knowledge base, self-hosting and platform availability. Read using Defuddle and web tools.
- [Inbox Zero email client](https://www.getinboxzero.com/email-client): Gmail/Outlook combined accounts, keyboard navigation, split inbox, drafts/send scheduling, team comments, Mac/Windows/web/iPhone. Read using Defuddle and web tools.

The 43-row matrix uses descriptive capability cells rather than a score. “Not listed” is a research limit. “Not available” applies to gaps in Lifafa’s inspected implementation. Some adjacent concepts share rows but cells qualify the difference (for example, work-item snooze versus scheduled email and local dashboard versus vendor analytics). The CSV contains the same inventory and review date.

## Lifafa evidence

Native app checkout: `../Lifafa-iOS/`. The handbook and subsystem documentation were read, then source was checked for work, drafting, provider and integration behavior.

| Site claim | Primary repository evidence |
| --- | --- |
| iPhone, iPad and Mac; OS 27 minimum | `docs/agent-handbook.md`, Xcode project settings |
| Gmail, Outlook, IMAP; original-account operations | `MailStore.swift`, provider clients, `docs/product-design.md` |
| Sender threads, labels, search, compose, signatures and attachments | Mail and compose source; existing verified site copy |
| Offline cache and durable queued sends/actions | `docs/automatic-caching.md`, `OfflineOutbox.swift`, `docs/product-design.md` |
| Email-derived To Do, exact evidence, review, accepted work, corrections and snooze | `EmailWorkModels.swift`, `EmailWorkStore.swift`, `EmailWorkViews.swift`, `docs/product-design.md` |
| Optional Apple intelligence and reviewed local drafts | `EmailUnderstandingEngine.swift`, `IntelligenceProviders.swift`, `docs/intelligence-providers.md` |
| Calendar/contacts and explicit Reminders export | Calendar views, `EmailAppleIntegrations.swift`, `docs/product-design.md` |
| Opt-in Siri/Spotlight/private iCloud integration | Integration source and `docs/validation-and-roadmap.md`; runtime acceptance remains qualified |
| Direct providers, Keychain and encrypted derived work | `docs/data-and-privacy.md`, public privacy policy |

No automatic provider escalation, autonomous send, manual unrelated task creation, approved PCC, always-private local caches or public ChatGPT availability is claimed. Cloudflare remains private-test-only and ChatGPT public release remains gated. No app source, signing, capabilities, credentials or release configuration was changed.

## Asset provenance

Existing `lifafa-icon.png` is retained as the brand asset. UI icons use the Phosphor React package (MIT). Fonts are self-hosted Google Fonts Geist and Silkscreen with included OFL licenses. Sample people, correspondence, attachments and calendar events are fictional. The preview is an explanatory website interface, not an actual app screenshot or evidence of live app behavior.

The built-in Image Gen tool generated `public/og-lifafa.png` from this prompt:

> Wide 3:2 landscape decorative image for Lifafa Mail; off-white studio background; a carefully arranged fan of tactile ivory, muted seafoam and butter-yellow paper envelopes and rounded message cards, slightly tilted in 3D. Foremost white card reads “A little more headspace.” Fine paper texture, crisp soft shadows, natural studio light, calm editorial aesthetic. No people, devices, competitor logos or website screenshot.

The same built-in tool created `public/assets/mail-still-life-cutout.png` with the edit prompt:

> Remove the plain off-white backdrop to genuine transparency; preserve envelopes, cards, colors, exact printed text, textures, positions and soft local shadows. No added content.

No competitor visual asset is redistributed. Original generated files remain in the Codex generated-images directory; final consumed assets are copied into this project.
