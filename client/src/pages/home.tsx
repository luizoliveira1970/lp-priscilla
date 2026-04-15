import { lazy, Suspense } from "react";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Procedures } from "@/components/sections/procedures";
import { Harmonization } from "@/components/sections/harmonization";

// Componentes abaixo da dobra carregados sob demanda
const Technology = lazy(() => import("@/components/sections/technology").then(m => ({ default: m.Technology })));
const SmileSection = lazy(() => import("@/components/sections/smile").then(m => ({ default: m.SmileSection })));
const SocialProof = lazy(() => import("@/components/sections/social-proof").then(m => ({ default: m.SocialProof })));
const Authority = lazy(() => import("@/components/sections/authority").then(m => ({ default: m.Authority })));
const Footer = lazy(() => import("@/components/layout/footer").then(m => ({ default: m.Footer })));

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-white">
      <Header />

      <main>
        <Hero />
        <Procedures />
        <Harmonization />
        <Suspense fallback={<div className="h-96 bg-background" />}>
          <Technology />
          <SmileSection />
          <SocialProof />
          <Authority />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}
