export function SocialProof() {
  return (
    <section id="resultados" className="py-24 bg-[#1a1025] relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-white mb-16">
          Resultados <span className="text-primary">Reais</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Placeholder for Before/After - Using generic stylish placeholders to avoid AI face weirdness */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="group relative aspect-[4/5] bg-neutral-900 rounded-xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                 <p className="text-white/20 font-heading text-lg">Resultado {i}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                   <p className="text-white font-bold">Harmonização Full Face</p>
                   <p className="text-primary text-sm">Protocolo Exclusivo</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-secondary/60 text-sm max-w-xl mx-auto italic">
              *As imagens são meramente ilustrativas de resultados atingidos em casos específicos. Cada paciente possui características únicas e os resultados podem variar.
            </p>
        </div>
      </div>
    </section>
  );
}
