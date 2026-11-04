import type { Metadata } from "next";
import { SiteFooter, SiteHeader, sitePath } from "../site-chrome";
import { PricingExperience } from "./pricing-experience";

export const metadata: Metadata = {
  title: "Pricing — A lighter kind of email",
  description: "Lifafa Mail pricing is coming soon. Compare published prices for Bloop.email, Mimestream, Airmail, Superhuman Mail, GotEmail and Inbox Zero, with clear billing periods and sources.",
};
export default function PricingPage() {
  return <><SiteHeader /><PricingExperience basePath={sitePath("")} /><SiteFooter /></>;
}
