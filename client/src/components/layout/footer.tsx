import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#150d1f] py-16 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-4">Dra. Priscila Albuquerque</h3>
            <p className="text-secondary/60 text-sm leading-relaxed mb-6">
              Harmonização Orofacial e Estética de Alta Performance.
              Elevando sua autoestima com naturalidade e segurança.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-secondary/60 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-secondary/60 hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-secondary/60 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-secondary/60">
              <li><a href="#procedimentos" className="hover:text-primary transition-colors">Procedimentos</a></li>
              <li><a href="#tecnologia" className="hover:text-primary transition-colors">Tecnologia</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre a Dra.</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Agendamento</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-secondary/60">
              <li>Av. Paulista, 1000 - São Paulo, SP</li>
              <li>(11) 99999-9999</li>
              <li>contato@drapriscila.com.br</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 text-center text-xs text-secondary/40">
          <p>© 2024 Dra. Priscila Albuquerque. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
