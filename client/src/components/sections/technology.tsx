import { Badge } from "@/components/ui/badge";

export function Technology() {
  const techs = [
    {
      name: "Ultraformer III",
      desc: "O padrão ouro em ultrassom micro e macrofocado para lifting facial sem cortes."
    },
    {
      name: "Lavieen",
      desc: "Laser de Thulium para efeito 'BB Cream', tratando manchas, poros e textura."
    },
    {
      name: "Scizer",
      desc: "Tecnologia de ponta para redução de gordura localizada com alta performance."
    }
  ];

  return (
    <section id="tecnologia" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/clinic-interior.webp"
          alt="Tecnologia"
          className="w-full h-full object-cover opacity-10 grayscale"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1025] via-[#1a1025]/90 to-[#1a1025]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col gap-10 md:gap-16 md:flex-row items-center">
          {/* Text content */}
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
              Tecnologia de {" "}
              <span className="text-primary">Alta Performance</span>
            </h2>
            <p className="text-secondary/80 text-base md:text-lg leading-relaxed">
              Investimos nos equipamentos mais modernos do mercado mundial para entregar resultados superiores, conforto e segurança em cada procedimento.
            </p>

            <div className="grid gap-4 md:gap-6">
              {techs.map((tech, index) => (
                <div key={index} className="group p-5 md:p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 text-left">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-white font-heading group-hover:text-primary transition-colors">
                      {tech.name}
                    </h3>
                    <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 flex-shrink-0 ml-2">Premium</Badge>
                  </div>
                  <p className="text-secondary/70 text-sm">
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech images grid: shown below text on mobile */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm md:max-w-md aspect-square">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
              <div className="relative z-10 grid grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-3 md:space-y-4 mt-8">
                  <div className="h-32 md:h-40 relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md group/item">
                    <img src="/images/tech/ultraformer.webp" alt="Lifting Tech" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/item:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs text-secondary font-mono">Lifting Tech</span>
                  </div>
                  <div className="h-44 md:h-56 relative overflow-hidden rounded-2xl border border-white/10 group/item">
                    <img src="/images/tech/lavieen.webp" alt="Laser Precision" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/item:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs text-white font-mono">Laser Precision</span>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div className="h-44 md:h-56 relative overflow-hidden rounded-2xl border border-primary/20 group/item">
                    <img src="/images/tech/scizer.webp" alt="Body Contour" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/item:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs text-primary font-mono">Body Contour</span>
                  </div>
                  <div className="h-32 md:h-40 relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md group/item">
                    <img src="/images/tech/analysis.webp" alt="Smart Analysis" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/item:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs text-secondary font-mono">Smart Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
