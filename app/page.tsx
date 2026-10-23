import type { Metadata } from "next";
import { SiteFooter, SiteHeader, sitePath } from "./site-chrome";
import { LandingExperience } from "./landing-experience";

export const metadata: Metadata = {
  title: "The last email app you’ll ever need.",
  description:
    "Meet Lifafa Mail. All your inboxes, email-linked To Do and your day, together in a native workspace for iPhone, iPad and Mac. In active development.",
};
export default function Home() {
  return (
    <>
      <SiteHeader />
      <LandingExperience basePath={sitePath("")} />
      <SiteFooter />
    </>
  );
}
