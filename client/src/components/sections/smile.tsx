import { Smile, Sparkle, ShieldCheck, Gem } from "lucide-react";

export function SmileSection() {
  return (
    <section className="py-24 bg-[#2d1b3e] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Estética <span className="font-serif italic text-white/80">Odontológica</span>
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            O sorriso é a moldura do rosto. Integramos saúde e estética para criar sorrisos harmônicos e radiantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
            <div className="bg-[#1a1025] p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group">
              <Gem className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2">Lentes de Contato</h3>
              <p className="text-xs text-secondary/60">Transformação do sorriso com lâminas ultra-finas de porcelana.</p>
            </div>
            <div className="bg-[#1a1025] p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group mt-8">
              <Smile className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2">Facetas em Resina</h3>
              <p className="text-xs text-secondary/60">Estética imediata com naturalidade e resistência.</p>
            </div>
            <div className="bg-[#1a1025] p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group">
              <Sparkle className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2">Gengivoplastia</h3>
              <p className="text-xs text-secondary/60">Correção do contorno gengival para um sorriso simétrico.</p>
            </div>
            <div className="bg-[#1a1025] p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group mt-8">
              <ShieldCheck className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2">Clareamento</h3>
              <p className="text-xs text-secondary/60">Tecnologia segura para um sorriso mais branco e luminoso.</p>
            </div>
          </div>

          <div className="order-1 md:order-2 relative group">
            <div className="relative rounded-full overflow-hidden aspect-square border-4 border-white/5 shadow-2xl max-w-md mx-auto">
              <img
                src="/images/dental-aesthetic.png"
                alt="Estética Odontológica"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2d1b3e]/40 to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute bottom-4 -left-4 w-32 h-32 bg-[#361D45] rounded-full blur-xl opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
