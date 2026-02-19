import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Procedures() {
  const procedures = [
    "Protocolo Papada Zero",
    "Nariz dos Sonhos",
    "Blefaroplastia",
    "Bichectomia",
    "MiniLift",
    "LipLift"
  ];

  return (
    <section id="procedimentos" className="py-24 bg-[#2d1b3e] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-50" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
              <img
                src="/images/procedure-face.jpg"
                alt="Procedimentos Faciais"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d1b3e] to-transparent opacity-60" />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-primary font-heading font-bold uppercase tracking-wider mb-2">Especialidades</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Emagrecimento Facial & <br />
                <span className="font-serif italic text-white/80">Rejuvenescimento</span>
              </h3>
              <p className="text-secondary/80 leading-relaxed">
                Protocolos exclusivos desenhados para realçar seus contornos naturais,
                eliminando gordura localizada e devolvendo a firmeza da pele com técnicas
                minimamente invasivas.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4">
              {procedures.map((item, index) => (
                <li key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="bg-primary/20 p-1 rounded-full">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://wa.me/558898384341?text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20agendamento." target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-heading shadow-lg shadow-primary/20">
                Quero Saber Mais
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Wave Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#1a1025" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
