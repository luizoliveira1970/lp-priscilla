import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Procedimentos", href: "#procedimentos" },
    { name: "Tecnologias", href: "#tecnologia" },
    { name: "Resultados", href: "#resultados" },
    { name: "Sobre", href: "#sobre" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5",
        isScrolled
          ? "bg-[#1a1025]/90 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Heart className="w-5 h-5 text-primary fill-primary/20" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg md:text-xl text-white tracking-wide">
                Dra. Priscila Albuquerque
              </span>
              <span className="text-[10px] md:text-xs text-secondary uppercase tracking-widest hidden md:block">
                Harmonização Orofacial Avançada
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors font-heading uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <Button
            asChild
            className="rounded-full bg-primary hover:bg-primary/90 text-white px-6 font-heading font-semibold shadow-[0_0_15px_rgba(40,180,99,0.3)] hover:shadow-[0_0_20px_rgba(40,180,99,0.5)] transition-all duration-300"
          >
            <a
              href="https://api.whatsapp.com/send?phone=558898384341&text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20agendamento."
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Consulta
            </a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#1a1025] border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-secondary hover:text-primary py-2 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="w-full rounded-full bg-primary mt-2">
            <a
              href="https://api.whatsapp.com/send?phone=558898384341&text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20agendamento."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Agendar Consulta
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
