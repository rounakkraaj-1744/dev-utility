import Navbar from "./components/Navbar";

import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ToolsGrid } from "@/components/tools-grid";
import { NewRelease } from "@/components/new-release";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ToolsGrid />
        <NewRelease />
      </main>
      <SiteFooter />
    </div>
  );
}
