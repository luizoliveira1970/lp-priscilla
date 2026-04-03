import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Heart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Procedimentos", href: "#procedures" },
    { name: "Tecnologia", href: "#technology" },
    { name: "Resultados", href: "#results" },
    { name: "Sobre", href: "#about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-white/5 py-4 shadow-lg"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
            <Heart className="w-5 h-5 text-primary" fill="currentColor" />
          </div>
          <div>
            <h1 className="text-xl font-heading font-bold text-white tracking-wide leading-none">
              Dra. Priscila
            </h1>
            <p className="text-xs text-white/60 font-sans tracking-widest uppercase">
              Albuquerque
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold px-6 shadow-[0_0_20px_rgba(40,180,99,0.3)] transition-all hover:scale-105"
          >
            <a
              href="https://api.whatsapp.com/send?phone=558898384341&text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20agendamento."
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Consulta
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white/90 hover:text-primary transition-colors text-center"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="w-full rounded-full bg-primary text-white font-bold">
            <a
              href="https://api.whatsapp.com/send?phone=558898384341&text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20agendamento."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar Consulta
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
