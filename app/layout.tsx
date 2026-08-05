import type { Metadata, Viewport } from "next";
import "./globals.css";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const fallbackSiteUrl = "https://harshityadav95.github.io/Lifafa-Mail-App";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (owner && repository
    ? repository.endsWith(".github.io")
      ? `https://${owner}.github.io`
      : `https://${owner}.github.io/${repository}`
    : fallbackSiteUrl);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lifafa Mail — Email, reimagined.",
    template: "%s | Lifafa Mail",
  },
  description:
    "One calm, private inbox for Gmail, Outlook, and custom email—native across Apple devices.",
  applicationName: "Lifafa Mail",
  authors: [{ name: "SolvePao Research" }],
  creator: "SolvePao Research",
  publisher: "SolvePao Research",
  category: "productivity",
  icons: {
    icon: `${siteUrl.replace(/\/$/, "")}/lifafa-icon.png`,
    shortcut: `${siteUrl.replace(/\/$/, "")}/lifafa-icon.png`,
  },
  openGraph: {
    type: "website",
    siteName: "Lifafa Mail",
    title: "Lifafa Mail — Email, reimagined.",
    description:
      "One calm, private inbox for Gmail, Outlook, and custom email.",
    images: [
      {
        url: `${siteUrl.replace(/\/$/, "")}/og.png`,
        width: 1536,
        height: 1024,
        alt: "Lifafa Mail — Email, reimagined.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lifafa Mail — Email, reimagined.",
    description:
      "One calm, private inbox for Gmail, Outlook, and custom email.",
    images: [`${siteUrl.replace(/\/$/, "")}/og.png`],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fffaf3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
