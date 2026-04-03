import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden">
      {/* Background with texture overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1025] via-[#1a1025]/95 to-[#361D45]/40 z-10" />
        <img
          src="/images/luxury-bg.png"
          alt="Luxury Texture"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-30 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Star className="w-3 h-3 text-accent fill-accent" />
            <span className="text-xs font-heading font-medium text-secondary uppercase tracking-widest">
              Estética de Alta Performance
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Eleve sua <span className="text-gold italic font-serif">autoestima</span> e bem-estar.
          </h1>

          <p className="text-lg text-secondary/80 leading-relaxed max-w-lg font-light">
            Procedimentos personalizados que unem ciência e arte para revelar a sua melhor versão com naturalidade e sofisticação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-14 text-base font-heading font-semibold shadow-[0_0_20px_rgba(40,180,99,0.4)]"
            >
              <a href="https://api.whatsapp.com/send?phone=558898384341&text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20agendamento." target="_blank" rel="noopener noreferrer">
                Agendar Avaliação
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/20 text-white hover:bg-white/5 px-8 h-14 text-base font-heading"
            >
              <a href="#procedimentos">
                Conhecer Procedimentos
              </a>
            </Button>
          </div>

          <div className="pt-8 border-t border-white/10 flex items-center gap-8">
            <div>
              <p className="text-3xl font-heading font-bold text-white">10+</p>
              <p className="text-xs text-secondary uppercase tracking-wider">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-white">5k+</p>
              <p className="text-xs text-secondary uppercase tracking-wider">Pacientes Atendidos</p>
            </div>
          </div>
        </div>

        <div className="relative h-[600px] hidden md:block animate-in slide-in-from-right duration-700 delay-200">
          {/* Image Container with Luxury Frame Effect */}
          <div className="absolute inset-0 rounded-[100px_0_100px_0] overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1025] via-transparent to-transparent z-10 opacity-60" />
            <img
              src="/images/dra-priscila-real.png"
              alt="Dra. Priscila Albuquerque"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-10 left-10 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl max-w-xs shadow-xl">
            <p className="font-serif italic text-white text-lg mb-2">"A beleza está na harmonia dos detalhes."</p>
            <p className="text-sm text-primary font-heading font-bold">Dra. Priscila Albuquerque</p>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#2d1b3e" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
