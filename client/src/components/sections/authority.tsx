import { GraduationCap, Award, MapPin } from "lucide-react";

export function Authority() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#1a1025] border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center">
          {/* Image */}
          <div className="w-full md:w-1/3">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10 shadow-2xl relative max-w-xs mx-auto md:max-w-none">
              <img
                src="/images/dra-priscila-real.webp"
                alt="Dra. Priscila"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-white font-heading font-bold text-lg md:text-xl">Dra. Priscila Albuquerque</h3>
                <p className="text-primary text-sm">CRO/PI 4291</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-2/3 space-y-6 md:space-y-8 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white">
              Excelência e <span className="font-serif italic text-gold">Autoridade</span>
            </h2>
            <p className="text-secondary/80 text-base md:text-lg leading-relaxed">
              Com mais de uma década de dedicação à harmonização orofacial, a Dra. Priscila combina técnica refinada, visão artística e atualização constante nos maiores centros mundiais de estética.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mt-4 text-left">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 h-fit rounded-lg flex-shrink-0">
                  <GraduationCap className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm md:text-base">Formação Acadêmica</h4>
                  <p className="text-sm text-secondary/70">Graduada em Odontologia (2011)</p>
                  <p className="text-sm text-secondary/70">Especialista em Periodontia</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 h-fit rounded-lg flex-shrink-0">
                  <Award className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm md:text-base">Especializações Internacionais</h4>
                  <p className="text-sm text-secondary/70">Residência em Harmonização (Miami)</p>
                  <p className="text-sm text-secondary/70">Advanced Aesthetics (Harvard)</p>
                </div>
              </div>

              <div className="flex gap-4 sm:col-span-2 md:col-span-1">
                <div className="bg-primary/10 p-3 h-fit rounded-lg flex-shrink-0">
                  <MapPin className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm md:text-base">Localização Premium</h4>
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
