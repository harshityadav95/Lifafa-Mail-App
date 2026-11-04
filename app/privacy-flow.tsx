export function PrivacyFlow() {
  return <figure className="privacy-flow">
    <svg viewBox="0 0 1000 430" role="img" aria-label="Gmail, Outlook, iCloud and IMAP connect directly over encrypted transport to Lifafa on your Apple devices. No Lifafa mail relay sits between them. Credentials stay in Apple Keychain. Mail caches use operating system and sandbox protection.">
      <defs><linearGradient id="device-surface" x2="0" y2="1"><stop stopColor="#ffffff"/><stop offset="1" stopColor="#e8efeb"/></linearGradient></defs>
      <path d="M55 270 350 105 950 270 650 420Z" fill="#edf3ee" stroke="#d6e2d9" strokeDasharray="5 7" />
      {[{x:88,y:210,label:"IMAP"},{x:177,y:160,label:"iCloud"},{x:266,y:110,label:"Outlook"},{x:355,y:60,label:"Gmail"}].map(({x,y,label}) => <g key={label} transform={`translate(${x} ${y})`}>
        <path d="M0 30 45 5 100 35 55 62Z" fill="#fff" stroke="#8fa99b"/><path d="M0 30V77L55 108V62Z" fill="#e1ebe4" stroke="#8fa99b"/><path d="M55 62 100 35V82L55 108Z" fill="#d1e1d6" stroke="#8fa99b"/>
        <path d="m14 53 26 15m-26 0 26 15" stroke="#91a79a" strokeWidth="2"/><circle cx="77" cy="78" r="3" fill="#237962"/><text x="45" y="135" textAnchor="middle" fill="#496153" fontSize="14">{label}</text>
      </g>)}
      <path d="M440 155 520 201 424 255 613 365 733 299" fill="none" stroke="#237962" strokeWidth="3" strokeLinecap="round"/>
      <path d="m719 299 14 0-5 13" fill="none" stroke="#237962" strokeWidth="3"/>
      <g transform="translate(459 280)"><rect width="46" height="37" rx="8" fill="#237962"/><path d="M14 12V7a9 9 0 0 1 18 0v5M11 13h24v17H11Z" stroke="#fff" fill="none" strokeWidth="2"/><text x="-15" y="64" fontSize="13" fill="#285b44">Encrypted connection</text></g>
      <g transform="translate(530 135)"><path d="m0 35 70-40 99 57-70 40Z M0 35v68l99 57V92m70-40v68l-70 40" fill="none" stroke="#9aac9f" strokeDasharray="5 5"/><text x="80" y="48" textAnchor="middle" fontSize="12" fill="#607467">Lifafa mail relay</text><text x="80" y="69" textAnchor="middle" fontSize="19" fill="#285b44">None</text></g>
      <g transform="translate(710 138)"><path d="m0 0 164 92v145L0 145Z" fill="#bed1c4" stroke="#698b77"/><path d="m10 19 143 80v117L10 135Z" fill="url(#device-surface)" stroke="#9ab7a5"/>
        <path d="m25 48 111 62m-111-38 63 35m-63-11 94 52m-94-28 76 42" stroke="#c4d7ca" strokeWidth="6"/><text transform="matrix(.88 .5 0 1 24 42)" fontSize="13" fill="#237962">Lifafa · Inbox</text>
        <path d="m0 145 164 92-73 40-164-92Z" fill="#dce7df" stroke="#698b77"/><path d="m-44 187 115 66m-100-77 115 66" stroke="#b2c9ba" strokeWidth="3"/>
        <path d="M156 162h45a5 5 0 0 1 5 5v94a5 5 0 0 1-5 5h-45a5 5 0 0 1-5-5v-94a5 5 0 0 1 5-5Z" fill="#f9fcfa" stroke="#698b77" strokeWidth="2"/><path d="M164 186h29m-29 16h29m-29 16h20" stroke="#b2c9ba" strokeWidth="4"/>
      </g>
      <text x="762" y="60" textAnchor="middle" fill="#285b44" fontSize="17">Your Apple devices</text><text x="762" y="83" textAnchor="middle" fill="#607467" fontSize="13">Credentials in Apple Keychain</text>
    </svg>
    <figcaption>Direct mail connections. No Lifafa mail relay. Your mail provider still processes your email.</figcaption>
  </figure>;
}
