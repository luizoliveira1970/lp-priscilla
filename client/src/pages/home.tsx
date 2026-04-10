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

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

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

      {/* Floating WhatsApp Button */}
        <Button
          asChild
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 animate-bounce hover:animate-none rounded-full w-12 h-12 md:w-14 md:h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/30 p-0 flex items-center justify-center transition-transform hover:scale-110"
        >
          <a
            href="https://api.whatsapp.com/send?phone=558898384341&text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20agendamento."
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/whatsapp-logo.svg" alt="WhatsApp" className="w-7 h-7 md:w-8 md:h-8 fill-current" />
          </a>
        </Button>
    </div>
  );
}
