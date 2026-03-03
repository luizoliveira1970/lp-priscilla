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
    <section id="tecnologia" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/clinic-interior.jpg"
          alt="Tecnologia"
          className="w-full h-full object-cover opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1025] via-[#1a1025]/90 to-[#1a1025]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
              Tecnologia de <br />
              <span className="text-primary">Alta Performance</span>
            </h2>
            <p className="text-secondary/80 text-lg leading-relaxed">
              Investimos nos equipamentos mais modernos do mercado mundial para entregar resultados superiores, conforto e segurança em cada procedimento.
            </p>

            <div className="grid gap-6">
              {techs.map((tech, index) => (
                <div key={index} className="group p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-primary transition-colors">
                      {tech.name}
                    </h3>
                    <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5">Premium</Badge>
                  </div>
                  <p className="text-secondary/70 text-sm">
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="h-40 relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md group/item">
                    <img src="/images/tech/ultraformer.png" alt="Lifting Tech" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/item:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-xs text-secondary font-mono">Lifting Tech</span>
                  </div>
                  <div className="h-56 relative overflow-hidden rounded-2xl border border-white/10 group/item">
                    <img src="/images/tech/lavieen.png" alt="Laser Precision" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/item:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-xs text-white font-mono">Laser Precision</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-56 relative overflow-hidden rounded-2xl border border-primary/20 group/item">
                    <img src="/images/tech/scizer.png" alt="Body Contour" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/item:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-xs text-primary font-mono">Body Contour</span>
                  </div>
                  <div className="h-40 relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md group/item">
                    <img src="/images/tech/analysis.png" alt="Smart Analysis" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/item:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-xs text-secondary font-mono">Smart Analysis</span>
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
