import React from 'react';
import { MessageCircle, ShieldCheck, MapPin, ArrowRight, Clock, Star } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-start overflow-hidden pt-20 pb-16 bg-[#FAF7F2]">
      
      {/* RIGHT-ALIGNED DOCTOR IMAGE WITH SEAMLESS LEFT BLEND */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] xl:w-[58%] z-0 overflow-hidden pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.85) 45%, black 75%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.85) 45%, black 75%)'
        }}
      >
        <img
          src="/images/dra-trinidad-robledo-real.png"
          alt="Dra. Trinidad Robledo en Centro Odontológico Robledo Córdoba"
          className="w-full h-full object-cover object-[70%_top] sm:object-[center_20%] lg:object-[center_center] filter brightness-[1.01]"
        />
        
        {/* Supplementary delicate light overlays to ensure organic blending with background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-[#FAF7F2]/30"></div>
      </div>

      {/* Mobile/Tablet full background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/95 via-[#FAF7F2]/85 to-[#FAF7F2] lg:hidden z-0 pointer-events-none"></div>

      {/* TOP AND BOTTOM BLENDS INTO NEIGHBORING SECTIONS */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF7F2] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAF7F2]/90 to-transparent z-10 pointer-events-none"></div>

      {/* HERO CONTENT (Left aligned on clean solid beige canvas) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl lg:max-w-2xl space-y-6">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E3D5C1] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#B89368] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider text-[#5A4839] uppercase font-sans">
              Centro Odontológico Robledo • Dra. Trinidad Robledo
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-editorial font-medium leading-[1.08] tracking-tight text-[#241D17]">
            El arte de cuidar tu sonrisa con <span className="italic font-normal text-[#8C6D48]">calidez</span>, ciencia y armonía.
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[#4A3D31] font-light leading-relaxed max-w-xl">
            Odontología integral, estética bucal y ortodoncia en el centro de Córdoba. Atención personalizada con la <strong>Dra. Trinidad Robledo</strong>, cobertura con las principales <strong>obras sociales</strong> y sin esperas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <a
              href={getWhatsAppUrl('Hola Dra. Trinidad Robledo, me contacto desde su sitio web para coordinar un turno en el consultorio.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#2C241E] hover:bg-[#45372B] text-[#FAF7F2] font-medium text-xs tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] group"
            >
              <MessageCircle className="w-4 h-4 text-[#D8BC99] group-hover:scale-110 transition-transform" />
              <span>Agendar Turno por WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D8BC99] group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#tratamientos"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/90 hover:bg-white text-[#4A3E33] border border-[#E3D5C1] font-medium text-xs tracking-wider uppercase transition-all duration-200 shadow-xs hover:shadow-sm backdrop-blur-md"
            >
              <span>Ver Especialidades</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89368]"></span>
            </a>
          </div>

          {/* Trust badges & Location row */}
          <div className="pt-6 border-t border-[#DECFC0]/80 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs text-[#524436]">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#EFE7DA]/90 shadow-2xs">
              <MapPin className="w-4 h-4 text-[#B89368] shrink-0" />
              <span className="font-medium">Rivera Indarte 72 (Of. 319)</span>
            </div>
            
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#EFE7DA]/90 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#B89368] shrink-0" />
              <span className="font-medium">10+ Obras Sociales</span>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#EFE7DA]/90 shadow-2xs">
              <Clock className="w-4 h-4 text-[#B89368] shrink-0" />
              <span className="font-medium">Turnos sin espera</span>
            </div>
          </div>

          {/* Live appointment availability badge */}
          <div className="inline-flex items-center gap-2.5 p-3 rounded-2xl bg-white/85 backdrop-blur-md border border-[#EAE0D2] shadow-xs">
            <div className="flex items-center gap-1 text-[#B89368]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#B89368]" />
              ))}
            </div>
            <span className="text-[11px] text-[#5C4D3E]">
              Atención médica de confianza y calidez en Córdoba Capital
            </span>
          </div>

        </div>
      </div>

    </section>
  );
};
