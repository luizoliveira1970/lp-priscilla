import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Procedures } from "@/components/sections/procedures";
import { Harmonization } from "@/components/sections/harmonization";
import { Technology } from "@/components/sections/technology";
import { SmileSection } from "@/components/sections/smile";
import { SocialProof } from "@/components/sections/social-proof";
import { Authority } from "@/components/sections/authority";
import { Footer } from "@/components/layout/footer";
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
        <Technology />
        <SmileSection />
        <SocialProof />
        <Authority />
      </main>
      
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none"
      >
        <Button 
          className="rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/30 p-0 flex items-center justify-center transition-transform hover:scale-110"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
        </Button>
      </a>
    </div>
  );
}
