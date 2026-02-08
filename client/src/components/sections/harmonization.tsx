import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Syringe, Eye, ScanFace } from "lucide-react";

export function Harmonization() {
  const items = [
    {
      icon: <Syringe className="w-6 h-6" />,
      title: "Preenchimento Labial",
      desc: "Volume e contorno para lábios desenhados e hidratados."
    },
    {
      icon: <ScanFace className="w-6 h-6" />,
      title: "Definição Mandibular",
      desc: "Contornos marcantes que valorizam a estrutura do rosto."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Preenchimento de Olheiras",
      desc: "Redução da profundidade e aspecto de cansaço."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Rinomodelação",
      desc: "Correção estética do nariz sem cirurgia plástica."
    }
  ];

  return (
    <section className="py-24 bg-[#1a1025] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Harmonização <span className="text-gold font-serif italic">Orofacial</span>
          </h2>
          <p className="text-secondary/80">
            Técnicas avançadas de preenchimento para equilibrar proporções e realçar sua beleza natural com sofisticação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <Card key={index} className="bg-[#361D45]/30 border-white/10 hover:bg-[#361D45]/50 transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-secondary/70 leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
