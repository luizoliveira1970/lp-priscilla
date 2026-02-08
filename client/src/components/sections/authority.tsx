import { GraduationCap, Award, MapPin } from "lucide-react";

export function Authority() {
  return (
    <section id="sobre" className="py-24 bg-[#1a1025] border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
             <div className="aspect-[3/4] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10 shadow-2xl relative">
                <img src="/images/dra-priscila-real.png" alt="Dra. Priscila" className="w-full h-full object-cover object-center" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-white font-heading font-bold text-xl">Dra. Priscila Albuquerque</h3>
                    <p className="text-primary text-sm">CRO/SP 12345</p>
                </div>
             </div>
          </div>
          
          <div className="md:w-2/3 space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Excelência e <span className="font-serif italic text-gold">Autoridade</span>
            </h2>
            <p className="text-secondary/80 text-lg leading-relaxed">
              Com mais de uma década de dedicação à harmonização orofacial, a Dra. Priscila combina técnica refinada, visão artística e atualização constante nos maiores centros mundiais de estética.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 h-fit rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Formação Acadêmica</h4>
                  <p className="text-sm text-secondary/70">Graduada em Odontologia (2011)</p>
                  <p className="text-sm text-secondary/70">Especialista em Periodontia</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 h-fit rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Especializações Internacionais</h4>
                  <p className="text-sm text-secondary/70">Residência em Harmonização (Miami)</p>
                  <p className="text-sm text-secondary/70">Advanced Aesthetics (Harvard)</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 h-fit rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Localização Premium</h4>
                  <p className="text-sm text-secondary/70">Atendimento em clínica de alto padrão com estacionamento e segurança.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
