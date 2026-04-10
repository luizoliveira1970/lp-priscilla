"use client";
import { useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SocialItem {
  type: "image" | "video";
  src: string;
  title: string;
  subtitle: string;
}

const RESULTS: SocialItem[] = [
  {
    type: "video",
    src: "/videos/social-proof-papada-zero.mp4",
    title: "Protocolo Papada Zero",
    subtitle: "Resultado Instantâneo",
  },
  {
    type: "image",
    src: "/images/social-proof-4.webp",
    title: "Harmonização Labial",
    subtitle: "Naturalidade e Volume",
  },
  {
    type: "image",
    src: "/images/social-proof-5.webp",
    title: "Protocolo Papada Zero",
    subtitle: "Definição de Contorno",
  },
  {
    type: "image",
    src: "/images/social-proof-6.webp",
    title: "Contorno Mandibular",
    subtitle: "Perfil Esculpido",
  },
  {
    type: "image",
    src: "/images/social-proof-7.webp",
    title: "Preenchimento Labial",
    subtitle: "Contorno e Hidratação",
  },
  {
    type: "image",
    src: "/images/social-proof-8.webp",
    title: "Protocolo Papada Zero",
    subtitle: "Harmonização Facial",
  },
  {
    type: "image",
    src: "/images/social-proof-2.webp",
    title: "Rinomodelação",
    subtitle: "Harmonização Nasal",
  },
  {
    type: "image",
    src: "/images/social-proof-3.webp",
    title: "Pós-Imediato",
    subtitle: "Resultado Real",
  },
];

export function SocialProof() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      align: 'start',
      loop: true,
      skipSnaps: false,
    },
    [
      Autoplay({ 
        delay: 6000, 
        stopOnInteraction: false, 
        stopOnMouseEnter: true,
        playOnInit: true
      })
    ]
  );
  
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!video.src) {
              video.src = RESULTS[0].src;
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

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      const autoplay = emblaApi.plugins()?.autoplay;
      if (autoplay) autoplay.reset();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      const autoplay = emblaApi.plugins()?.autoplay;
      if (autoplay) autoplay.reset();
    }
  }, [emblaApi]);

  return (
    <section id="resultados" className="py-16 md:py-24 bg-[#1a1025] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Resultados <span className="text-primary italic">Reais</span>
            </h2>
            <p className="text-secondary/80 text-lg">
              Veja o poder transformador do <span className="text-primary font-bold">Protocolo Papada Zero</span> e outras técnicas exclusivas.
            </p>
          </div>
          
          <div className="flex gap-4 justify-center md:justify-end">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary transition-all duration-300 group"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 group-active:scale-90" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary transition-all duration-300 group"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6 group-active:scale-90" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="embla cursor-grab active:cursor-grabbing" 
          ref={emblaRef}
        >
          <div className="embla__container flex">
            {RESULTS.map((item, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] px-2 md:px-3">
                <div className="group relative aspect-[4/5] bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  {item.type === "video" ? (
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      preload="none"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      loading="lazy"
                    />
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1025]/95 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-primary text-sm font-semibold tracking-wider uppercase">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-20 text-center">
          <p className="text-secondary/40 text-[10px] md:text-xs max-w-2xl mx-auto italic leading-relaxed border-t border-white/5 pt-8">
            *As imagens são registros de resultados obtidos em casos específicos via Protocolo Papada Zero. Resultados variam de acordo com as características individuais de cada paciente.
          </p>
        </div>
      </div>
    </section>
  );
}
