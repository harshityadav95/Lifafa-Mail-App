# Lifafa Mail product-site visual QA

final result: passed

## Source and capture evidence

- Visual truth: supplied Fanout screenshot and live `https://fanout.sh/` hero, captured in `build/qa/fanout-reference.png`.
- Implementation: exported static site at `http://127.0.0.1:4174/`, captured in `build/qa/static-desktop-hero.png`.
- Full-view comparison board: `build/qa/hero-comparison.png` (source left, Lifafa right).
- Focused typography and central-layout comparison: `build/qa/hero-focus-comparison.png`.
- Desktop CSS viewport: 1280 × 720. Provider raster sizes: source 1275 × 717; implementation 1265 × 712. Both were normalized to 960 × 540 for the full-view board. These are browser captures, not native-device screenshots; physical device density is not asserted.
- Mobile CSS viewport: 390 × 844, in `build/qa/mobile-hero.png` and `build/qa/mobile-demo.png`. Legal-page evidence: `build/qa/mobile-privacy.png`.
- Additional responsive checks: 320 × 760 and 768 × 1024. Document width stayed within the viewport; the comparison table scrolls within its own region.
- State: light theme, default hero; fictional demo mail, message selection, comparison filters, development dialog and legal pages.

## Comparison history

1. Initial desktop capture exposed a rectangular studio background around the envelope artwork. The built-in image tool removed that background to transparency; the final capture shows clean integration with the canvas.
2. Initial phone capture showed the top-right decorative task card reaching the announcement. The phone rule moves that card upward by 33 px. The final mobile hero separates it from the announcement.
3. Initial full-size demo and comparison typography was too small for comfortable inspection. Increased demo body, sender, list and work-panel text; enlarged comparison text and improved body contrast. Mobile demo capture confirms readable body content and preserved message selection.
4. Final paired comparison: no actionable P0/P1/P2 issues remain within the requested adaptation. The central two-line headline, pixel-style final word, restrained announcement, paired actions, generous space and floating edge composition follow the reference. The header, original mail imagery, green accents and copy are intentional Lifafa adaptations.

## Required fidelity surfaces

- **Typography:** self-hosted Geist provides the light grotesk headline and UI hierarchy; Silkscreen provides the pixel accent. Headline stays dominant, with supporting text and both actions readable. Mobile layout scales the hierarchy and separates controls. The reference's exact commercial font identity was not assumed.
- **Spacing and rhythm:** desktop headline stays centered between edge cards. Phone edge cards stay outside the primary copy and actions. Feature tabs become a two-column control group; the workspace adapts to a single-column reader. Comparison scrolling stays contained. Legal pages retain their reading structure.
- **Colors and tokens:** light gray canvas and dark type follow the reference. Muted green is the Lifafa-specific semantic accent, with the existing red brand icon retained. Body/table contrast was strengthened during QA.
- **Image quality:** custom generated paper-envelope raster, genuine alpha backdrop, clean scale, preserved printed text and no remaining visible rectangular boundary. Existing brand asset and package-provided Phosphor icons are retained. Demo content is actual semantic interactive UI, explicitly marked as fictional; it is not presented as a native app screenshot.
- **Copy:** no competitor testimonials, scores, customer logos, availability or capabilities are attributed to Lifafa. The 43-row comparison names unsupported features, research limits and release gates. No public download, pricing, autonomous send, approved PCC or universal local encryption claim is made. Legal content is preserved.

## Interaction and export checks

- Hero buttons navigate to the sample workspace.
- Feature tabs work with clicks and ArrowLeft/ArrowRight; selected state, focus target and panel change together.
- All four messages select; source quote, sender, original account label, time and attachments update.
- Search filters sample messages, supports empty results and clear/reset.
- Work completion updates sample state and count; undo restores it. No email is sent.
- Calendar view and To Do view switch locally.
- Comparison filters update the table; All features contains 43 rows. CSV contains the matching inventory and review date.
- Native modal opens, traps browser focus through native dialog behavior and dismisses with Escape.
- FAQ disclosures expand; privacy and terms routes export and render.
- No broken images or horizontal page overflow found at checked widths.
- Browser warning/error log on the exported static page: empty.
- Root-path and GitHub Pages project-path static exports passed all three rendered-HTML tests.
- App-only TypeScript check passed. Full template typecheck still lacks pre-existing Cloudflare Worker ambient types; no claim of a full-repository typecheck pass is made.
- Native iOS repository remains clean. No native builds, native runtime acceptance, publication or hosting changes were performed.

## Follow-up polish and limits

- The reference supplies no phone composition; its responsive adaptation was judged for usability, rather than pixel matching an unavailable phone reference.
- Competitor availability is based on public claims and the supplied GotEmail benchmark, not independent product testing.
- Actual VoiceOver, native app behavior and physical-device browsing were not tested.
- Temporary visual evidence and scraped pages are under ignored `build/`; this report and source research are retained with the site.

## Implementation checklist

- [x] Hero composition, typography and custom art reviewed against the source.
- [x] Phone and desktop interactions checked in the browser.
- [x] Static export and project-path asset handling verified.
- [x] Legal routes and source-backed capability boundaries retained.
- [x] Local static preview left running for review.

## Competition and pricing follow-up — 24 October 2026

- Added Mimestream, Airmail and Superhuman Mail to all 43 feature rows and the matching CSV. Browser inspection confirmed seven table headers (feature plus six products), all 43 body rows, and three rows when filtering Platforms.
- Added `/pricing/`, with the existing brand, pixel accent, green Lifafa announcement card, paper-ticket illustration, five competitor cards, workflow analysis and FAQ disclosures. Pricing is reachable from desktop navigation, a compact phone header link, the footer and the comparison notes.
- Browser-tested annual → monthly → annual. Monthly card values were $4.99, $7.99, $30, $49.99 one time and $20; yearly equivalents were $4.17, $3.33, $25, $49.99 one time and $18. Annual totals and billing units remain visible. Lifafa's card has no numeric price.
- Reviewed pricing at 1280 × 850 and 390 × 844; checked comparison at 1280 × 850 and 320 × 760. No document overflow in the measured phone views; the wide feature table has its own focusable scroll region and sticky feature labels. Screenshots: `build/qa/pricing-desktop-market.png`, `build/qa/pricing-mobile.png`, `build/qa/comparison-six-products.png`.
- Live US App Store Airmail prices ($39.99/year, $7.99/month) override the help center's conflicting older rates in the headline comparison. Both sources and the discrepancy are shown.
- `npm test`: production static export and all four rendered-HTML tests passed, including the new pricing route and undisclosed Lifafa amount. App-only TypeScript check and `git diff --check` passed. Both browser pages returned no warning/error entries during this QA.
- Local-only work: no commit, push, publication, hosting change or native-app change. Competitor features and checkout eligibility were researched, not behavior-tested. No physical-device or VoiceOver acceptance is claimed.

### Pricing table revision — 25 October 2026

Replaced pricing cards and the billing switch with simultaneous Monthly, Annually and Lifetime columns. The five competitor rows precede a green Lifafa footer row with three “Disclosed soon” values; no Lifafa amount is disclosed. Moved the larger Lifafa panel below the comparison. Retained plan caveats and links in a native disclosure.

Browser inspection verified every value and the final Lifafa row. Desktop table capture: `build/qa/pricing-table-desktop.png`. At 390 × 844, document width was 375px and table region width was 333px with 790px of contained scroll content; the document did not overflow. Phone capture: `build/qa/pricing-table-mobile.png`. Restored the viewport after QA. Prices retain their original 24 October review date.

### Pricing order — 25 October 2026

Pinned Lifafa as the first highlighted body row. Competitors sort by ascending monthly price, with unpublished monthly rates last. Browser row inspection confirmed Lifafa, Mimestream, Airmail, Inbox Zero, Superhuman Mail, GotEmail. All three Lifafa values remain “Disclosed soon.” Production build and all four existing tests passed; `git diff --check` passed. Capture: `build/qa/pricing-table-ascending.png`.

## Website update — 4 November 2026

- Preserved the existing website identity and GitHub Pages publishing path; native app working changes were not edited.
- Built/exported all five public routes with the production `/Lifafa-Mail-App` base path. Six rendered-export tests passed. App-only TypeScript check passed using an ignored temporary config that excludes existing unused Cloudflare worker/database stubs. `git diff --check` passed.
- Local browser review at 1280px: homepage privacy diagram, download hero/cards and footer visually inspected; pricing and distribution tables stayed in their scroll containers without page overflow. Seven pricing rows and five Coming soon channel cards were observed. Header Download navigation reached the dedicated page.
- Browser interactions: sample search for Studio North returned one message; clearing restored the inbox; To Do showed its Coming soon placeholder; Privacy comparison filter displayed four matching rows and all seven product columns.
- All exported internal route/fragment/CSV links were checked. No public installer, purchase action or TestFlight invitation was invented.
- Responsive CSS includes single-column channel cards and privacy copy, two-column footer groups and horizontally scrollable tables. The browser viewport override did not change its reported 1280px width despite a 390px request and reload, so mobile visual verification remains incomplete. The temporary override was reset. No real-device app acceptance is claimed.
