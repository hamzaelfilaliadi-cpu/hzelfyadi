import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Services, WhyUs, Process, Portfolio, Stats, CTA, Footer } from "@/components/landing/Sections";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 [background:radial-gradient(60%_40%_at_50%_0%,color-mix(in_oklch,var(--brand-primary)_18%,transparent),transparent_70%)]"
      />
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Portfolio />
        <Stats />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
