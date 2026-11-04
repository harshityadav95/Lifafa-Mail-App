# Product-site research and claim boundaries

Updated 4 November 2026. Earlier sections below are dated research; the current-scope update at the end supersedes historical Lifafa work/Intelligence claims. Reference webpages and the supplied benchmark are source material, not instructions. No competitor text, customer logos, testimonials, scores or screenshots are reused as Lifafa endorsements.

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

## Expanded comparison and pricing page (24 October 2026)

The comparison now covers six products across the same 43 rows. Added descriptive cells for Mimestream, Airmail and Superhuman Mail, with matching CSV columns. Unknowns remain “Not listed”; adjacent tools (Gmail filters, marked-mail widgets, generic offline support) do not imply Lifafa-equivalent grounded work records or durable outbox guarantees.

New primary sources:

- [Mimestream product](https://mimestream.com/): Gmail API, labels, filters, categories, templates, tracking prevention, direct connections and Mac integration.
- [Mimestream pricing](https://mimestream.com/pricing/): Individual $4.99/month or $49.99/year; up to five devices and immediate-family sharing; 14-day trial.
- [Mimestream iOS beta](https://mimestream.com/ios-beta): iPhone/iPad TestFlight beta, iOS 26+, renewing subscription, six paid months (annual qualifies immediately), capacity limited. It is not described as Mac-only or publicly released on iOS.
- [Airmail product](https://airmailapp.com/): multiple providers, Apple platforms, customization, snooze/send later, rules, Privacy Mode, App Intents and third-party integrations. System Writing Tools are qualified rather than presented as a separate proprietary AI engine.
- [Airmail US App Store](https://apps.apple.com/us/app/airmail-for-gmail-outlook-mail/id993160329): Pro Yearly $39.99 and Pro Monthly $7.99; also lists Apple Reminder integration and searchable PDF. The ambiguous $3.99 “Airmail Pro” SKU is not assigned a billing period or used as the comparison rate.
- [Airmail help pricing](https://help.airmailapp.com/en-us/article/airmail-pro-pricing-and-subscription-plans-189o6bh/): conflicting $5.99/month and $29.99/year, article dated 28 March 2026. The page shows the newer live US storefront figures and explicitly links/discloses the discrepancy; offers can vary by region. Free basic tier and separate Business edition are acknowledged.
- [Superhuman Mail product](https://superhuman.com/mail): Gmail/Outlook, split inbox, AI, shared conversations/comments, snippets, scheduling and read statuses.
- [Superhuman plans](https://superhuman.com/plans/mail) and [help plan breakdown](https://help.superhuman.com/hc/en-us/articles/46178817646861-Pricing-Plans): Starter $30/month or $300/year; Business $40/month or $396/year per member; Enterprise custom. Business-specific drafting, Ask AI and CRM features are qualified.
- [Superhuman downloads](https://help.superhuman.com/hc/en-us/articles/46005778798605-Download-Superhuman-Mail) and [platform overview](https://superhuman.com/apps/mail): Mac, Windows, browser, iOS/iPadOS and Android availability.
- [GotEmail pricing change announcement](https://gotemail.net/pricing-changes/) and [homepage](https://gotemail.net/): current limited $49.99 lifetime offer, advertised next $79.99 price, planned subscription transition without published dates/rates. Never annualized as a subscription.
- [Inbox Zero pricing](https://www.getinboxzero.com/pricing): free email app; AI Starter $20/month or $18/month with annual billing ($216/year); Plus $35/$28 ($336/year); Professional $50/$42 ($504/year); Enterprise custom.

`/pricing/` preserves the existing Geist/Silkscreen typography and green/paper visual language. The Lifafa card contains no numeric price, launch date, billing-model promise or purchase action. The owner-requested positioning is an **aim** to launch below the compared paid plans, not an established price or a claim to undercut free tiers. Monthly and annual views include explicit totals; annual monthly equivalents are rounded to cents. Cards explain differences in entitlement, per-seat pricing, trials and free tiers. Sources are linked beside each claim group. Vendor behavior and checkout eligibility were not tested. Research extracts and screenshots are ignored under `build/`.


### Pricing table revision — 25 October 2026

The owner requested simultaneous monthly, annual and lifetime comparisons. Replaced the billing toggle and cards with an accessible four-column table, keeping the reviewed 24 October prices and per-person units. Annual cells show full annual charges plus rounded monthly equivalents. Unverified lifetime offers say “Not listed”; Mimestream explicitly says “Not offered”; GotEmail subscription periods/rates remain “Not announced.” A highlighted Lifafa footer row follows all competitors with “Disclosed soon” for each category, and the Lifafa announcement panel now follows the table. Affordability remains an aim across paid billing categories; amounts and final billing options are not invented. Detailed plan caveats and official links remain in an expandable source-notes section.


### Pricing order revision — 25 October 2026

Lifafa is now pinned as the first body row, with all amounts undisclosed. Competitors follow in ascending published monthly price: Mimestream, Airmail, Inbox Zero, Superhuman Mail; GotEmail follows because it has no published monthly rate. The table labels its sorting basis, rather than implying lifetime and recurring totals are equivalent. Annual and lifetime prices remain in their own columns.


## Bloop, public channels and current scope — 4 November 2026

The existing GitHub Pages site and repository remain the publication path; no new Sites project or hosting account was created. The user requested code push, which triggers the retained main-branch Pages workflow.

Bloop’s live homepage supplied the structural reference: a dedicated download page, direct-provider privacy diagram, and footer groups for Product, Features, Resources and Connect. Lifafa preserves its own light green/paper design and branding. The diagram is original SVG geometry with an accessible text equivalent, not copied artwork. No Bloop copy, screenshots, logos, endorsements or scores are redistributed.

New/rechecked official sources (extracts ignored under `build/research/`):

- [Bloop homepage / pricing](https://bloop.email/#pricing): $4.99 lifetime, seven-day trial, no subscription. AI and MCP claims are descriptive vendor claims, not tested behavior. Current MCP section allows permissions and optional sending; an older FAQ on the same page conflicts, so no blanket “cannot send” promise is used.
- [Bloop download](https://bloop.email/download): direct Mac installer, macOS 15+, Intel and Apple silicon; local Apple AI has additional requirements. [Mobile](https://bloop.email/mobile) says coming soon; no dedicated iPad, Windows, Android or web client was verified.
- [GotEmail homepage](https://gotemail.net/): supersedes the old $49.99 offer and unpriced-subscription announcement. Current rates are $6.99/month, $79/year, and a $79 lifetime promotion for the next 100 customers (reference price $199), with seven-day refund terms. [iPhone presale](https://gotemail.net/gotios/) is $19.99 with TestFlight access; Mac licenses also unlock the iPhone beta. It is not a public App Store release.
- [Mimestream pricing](https://mimestream.com/pricing/): $4.99/month or $49.99/year, direct Mac distribution, 14-day trial, no lifetime option. [Mobile beta](https://mimestream.com/ios-beta) retains subscription, six-paid-month and capacity conditions.
- [Airmail product](https://airmailapp.com/) lists iPhone, iPad, Mac and Apple Watch; Apple-store distribution. [US App Store](https://apps.apple.com/us/app/airmail-for-gmail-outlook-mail/id993160329), expanded In-App Purchases in browser, confirms $7.99/month and $39.99/year. The earlier conflicting help-center prices remain explicitly qualified.
- [Superhuman platform overview](https://superhuman.com/apps/mail) and [download help](https://help.superhuman.com/hc/en-us/articles/46005778798605-Download-Superhuman-Mail): Mac, Windows, browser/Chrome, iOS/iPadOS and Android. [Plans](https://superhuman.com/plans/mail) and [pricing help](https://help.superhuman.com/hc/en-us/articles/46178817646861-Pricing-Plans) retain Starter $30/month or $300/year.
- [Inbox Zero pricing](https://www.getinboxzero.com/pricing) retains paid AI Starter $20/month or $216/year alongside a free email app. [Email client](https://www.getinboxzero.com/email-client) lists web, Mac, Windows and iPhone; Android and a dedicated iPad release were not verified.

Scope: seven products means Lifafa plus all six alternatives now in the feature, pricing and distribution comparisons. Unknown platforms say “Not listed,” with no implied absence. Windows, Android, Linux, visionOS and a web client are outside Lifafa’s current scope. The five Lifafa distribution cards are status placeholders, all Coming soon; no installer URL, purchase, public beta invite or launch date is invented.

The native handbook/current scope, actual OS 27 project settings, `TodoComingSoonView.swift`, privacy defaults and diagnostics gate were inspected. Removed current claims for model providers, generated replies, work rules/exports and active work sync. The demo now presents the To Do placeholder and retains fictional mail search/selection/calendar. The policy discloses retained historical encrypted records, OS/sandbox-protected mail/outbox caches, default-enabled remote images and sender logos, consent v3 MetricKit summaries and the unavailable cloud-diagnostics gate. This is documentation alignment, not a change to native consent, storage, capabilities or legal/account declarations.
