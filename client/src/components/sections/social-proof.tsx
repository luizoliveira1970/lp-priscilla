"use client";
import { useEffect, useRef } from "react";

export function SocialProof() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Set src only when visible to avoid downloading before needed
            if (!video.src) {
              video.src = "/videos/social-proof-papada-zero.mp4";
              video.load();
            }
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="resultados" className="py-24 bg-[#1a1025] relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-white mb-16">
          Resultados <span className="text-primary">Reais</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card de Vídeo - Prova Social */}
          <div className="group relative aspect-[4/5] bg-neutral-900 rounded-xl overflow-hidden border border-white/10">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <p className="text-white font-bold">Protocolo Papada Zero</p>
                <p className="text-primary text-sm">Resultado Instantâneo</p>
              </div>
            </div>
          </div>

          {/* Resultado 2 - Rinomodelação */}
          <div className="group relative aspect-[4/5] bg-neutral-900 rounded-xl overflow-hidden border border-white/10">
            <img
              src="/images/social-proof-2.webp"
              alt="Resultado Rinomodelação"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <p className="text-white font-bold">Rinomodelação</p>
                <p className="text-primary text-sm">Harmonização Nasal</p>
              </div>
            </div>
          </div>

          {/* Resultado 3 - Pós Imediato */}
          <div className="group relative aspect-[4/5] bg-neutral-900 rounded-xl overflow-hidden border border-white/10">
            <img
              src="/images/social-proof-3.webp"
              alt="Resultado Pós Imediato"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <p className="text-white font-bold">Pós-Imediato</p>
                <p className="text-primary text-sm">Resultado Real</p>
              </div>
            </div>
          </div>
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
