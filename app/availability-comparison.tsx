import { availability } from "./availability-data";

export function AvailabilityComparison() {
  return (
    <section className="availability-section section-shell" id="distribution" aria-labelledby="distribution-title">
      <div className="market-heading">
        <div><span className="kicker">WHERE YOUR INBOX CAN GO</span><h2 id="distribution-title">The right app.<br />On your devices.</h2></div>
        <p>Platforms and download channels, side by side.<br />Public releases, limited betas and future plans are labeled separately.</p>
      </div>
      <p className="pricing-review-date">Distribution reviewed 4 November 2026 · Scroll across for every platform</p>
      <div className="table-scroll" tabIndex={0} role="region" aria-label="Email app platforms and distribution channels">
        <table className="distribution-table">
          <caption className="sr-only">Platform availability and distribution for Lifafa Mail and six alternatives</caption>
          <thead><tr><th scope="col">Email app</th>{["iPhone", "iPad", "Mac", "Windows", "Android", "Web", "Download channels"].map(label => <th scope="col" key={label}>{label}</th>)}</tr></thead>
          <tbody>{availability.map(product => <tr key={product.name} className={product.name === "Lifafa Mail" ? "lifafa-distribution-row" : ""}>
            <th scope="row">{product.name}</th>
            {product.platforms.map((status, i) => <td key={i}><span className={`availability-status ${status === "Available" ? "is-available" : status === "Coming soon" ? "is-soon" : ""}`}>{status}</span></td>)}
            <td><a href={product.source} target="_blank" rel="noreferrer">{product.channels} <span aria-hidden="true">↗</span></a></td>
          </tr>)}</tbody>
        </table>
      </div>
      <p className="distribution-methodology">“Not listed” means availability was not verified in the linked official sources. A website or browser extension alone does not establish a web mail client. Lifafa’s public channels are all coming soon; Windows, Android and a browser client are outside its current scope.</p>
      <details className="pricing-source-notes"><summary>Distribution details &amp; official sources</summary><div>{availability.map(product => <article key={product.name}><h3>{product.name}</h3><p>{product.note}</p><div className="market-sources"><a href={product.source} target="_blank" rel="noreferrer">Official availability ↗</a>{product.otherSource && <a href={product.otherSource} target="_blank" rel="noreferrer">Additional platform details ↗</a>}</div></article>)}</div></details>
    </section>
  );
}
