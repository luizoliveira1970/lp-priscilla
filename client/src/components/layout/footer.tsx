import { Instagram, AtSign } from "lucide-react";

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
              <a
                href="https://instagram.com/priscillaalbuquerque2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/60 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.threads.com/@priscillaalbuquerque2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/60 hover:text-primary transition-colors"
                aria-label="Threads"
              >
                <AtSign className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-secondary/60">
              <li><a href="#procedimentos" className="hover:text-primary transition-colors">Procedimentos</a></li>
              <li><a href="#tecnologia" className="hover:text-primary transition-colors">Tecnologia</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre a Dra.</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=558898384341&text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20agendamento." target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Agendamento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <ul className="space-y-4 text-sm text-secondary/60">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Barão+de+Studart,+158+-+Meireles,+Fortaleza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors block group"
                >
                  <span className="font-semibold block text-white/80 group-hover:text-primary transition-colors">Fortaleza</span>
                  Av. Barão de Studart, 158 - Meireles
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Complexo+de+saúde+São+Miguel+-+Av+doutor+Guarani,+88+-+Bairro+Derby,+Sobral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors block group"
                >
                  <span className="font-semibold block text-white/80 group-hover:text-primary transition-colors">Sobral</span>
                  Complexo de saúde São Miguel<br />Av doutor Guarani, 88 - Bairro Derby
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=558898384341&text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20agendamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="font-semibold text-white/80 text-base hover:text-primary transition-colors">WhatsApp (88) 98384-341</span>
                </a>
              </li>
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
