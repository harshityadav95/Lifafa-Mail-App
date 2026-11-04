import type { Metadata } from "next";
import { SiteHeader, SiteFooter, sitePath } from "../site-chrome";
import { AvailabilityComparison } from "../availability-comparison";

export const metadata: Metadata = {
  title: "Download — Coming soon on iPhone, iPad and Mac",
  description: "Lifafa Mail downloads are coming soon. See iPhone, iPad, Mac and beta distribution status, system requirements, and how other mail apps are distributed.",
};
export const dynamic = "force-static";
const channels = [
  { symbol: "01", device: "iPhone", os: "iOS 27 or later", channel: "App Store", detail: "Your inbox, wherever the day takes you." },
  { symbol: "02", device: "iPad", os: "iPadOS 27 or later", channel: "App Store", detail: "More room for your mail, calendar and contacts." },
  { symbol: "03", device: "Mac", os: "macOS 27 or later", channel: "Mac App Store", detail: "A native workspace for your everyday email." },
  { symbol: "04", device: "Mac · Direct", os: "macOS 27 or later", channel: "Direct download", detail: "A place for a future Mac installer. No file is available yet." },
  { symbol: "05", device: "Beta testing", os: "iPhone, iPad & Mac", channel: "TestFlight", detail: "No public invitation has been announced. Internal testing does not grant public access." },
];
export default function DownloadPage() {
  return <><SiteHeader /><main className="download-page">
    <header className="download-hero">
      <span className="announcement"><span className="status-dot" /> IN DEVELOPMENT · COMING SOON</span>
      <h1>A place for your mail.<br />Soon, on your <span className="pixel-word">devices.</span></h1>
      <p>Lifafa is taking shape for iPhone, iPad and Mac.<br />Every public download channel is coming soon.</p>
      <a className="button button-primary" href={sitePath("/#demo")}>Explore the preview <span aria-hidden="true">↗</span></a>
    </header>
    <section className="download-channels section-shell" aria-labelledby="channels-title">
      <div className="market-heading"><div><span className="kicker">ONE APP. YOUR APPLE DEVICES.</span><h2 id="channels-title">Find your way in.</h2></div><p>Clear status for every channel.<br />No download, purchase or signup is available yet.</p></div>
      <div className="download-grid">{channels.map(item => <article className="download-card" key={item.device}>
        <span className="channel-number">{item.symbol} / LIFAFA MAIL</span><h3>{item.device}</h3><p className="channel-os">{item.os}</p><p>{item.detail}</p>
        <div className="channel-bottom"><span>{item.channel}</span><span className="coming-soon-badge">Coming soon</span></div>
      </article>)}</div>
      <p className="download-note">These channels are placeholders, not confirmed release dates or distribution commitments. Windows, Android, Linux, visionOS and a browser mail client are outside the current scope. This website is a product preview.</p>
    </section>
    <AvailabilityComparison />
    <section className="download-follow section-shell"><span className="kicker">WHILE WE BUILD</span><h2>Follow the next chapter.</h2><p>Development updates live on GitHub. Pricing and launch details will be shared when ready.</p><div><a className="button button-primary" href="https://github.com/solvePao/Lifafa-iOS" target="_blank" rel="noreferrer">Follow development ↗</a><a href={sitePath("/pricing/")}>Compare pricing →</a></div></section>
  </main><SiteFooter /></>;
}
