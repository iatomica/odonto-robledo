import React from 'react';
import { MessageCircle, ShieldCheck, MapPin, ArrowRight, Star, Award } from 'lucide-react';
import { getWhatsAppUrl, CLINIC_RATING } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-start overflow-hidden pt-24 pb-16 bg-[#FCFBF8]">
      
      {/* RIGHT-ALIGNED CLINIC SUITE IMAGE WITH SEAMLESS BLEND */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] xl:w-[58%] z-0 overflow-hidden pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.85) 45%, black 75%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.85) 45%, black 75%)'
        }}
      >
        <img
          src="/images/md_hero_clinic.jpg"
          alt="MD Odontología - Health & Esthetics en Recoleta, Buenos Aires"
          className="w-full h-full object-cover object-[center_center] filter brightness-[1.02]"
        />
        
        {/* Soft atmospheric gradients matching the warm ivory and navy palette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FCFBF8] via-[#FCFBF8]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FCFBF8] via-transparent to-[#FCFBF8]/30"></div>
      </div>

      {/* Mobile/Tablet full background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCFBF8]/95 via-[#FCFBF8]/88 to-[#FCFBF8] lg:hidden z-0 pointer-events-none"></div>

      {/* Top and Bottom soft transition edges */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FCFBF8] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FCFBF8]/90 to-transparent z-10 pointer-events-none"></div>

      {/* HERO CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl lg:max-w-2xl space-y-6">
          
          {/* Eyebrow badge: Brand + Google 5.0 Rating */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider text-[#102246] uppercase font-sans">
                MD HEALTH &amp; ESTHETICS • RECOLETA
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50/95 border border-amber-200/80 shadow-xs text-xs text-amber-900 font-medium">
              <div className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-amber-500" />
                <Star className="w-3.5 h-3.5 fill-amber-500" />
                <Star className="w-3.5 h-3.5 fill-amber-500" />
                <Star className="w-3.5 h-3.5 fill-amber-500" />
                <Star className="w-3.5 h-3.5 fill-amber-500" />
              </div>
              <span className="font-bold">{CLINIC_RATING.score}</span>
              <span className="text-slate-600 font-normal">({CLINIC_RATING.reviewsCount} reseñas en Google)</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-editorial font-medium leading-[1.08] tracking-tight text-[#0A1324]">
            Odontología de alta precisión y <span className="italic font-normal text-[#17386D]">estética integral</span> en Recoleta.
          </h1>

          {/* Subtext highlighting both doctors and their core specialties */}
          <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed max-w-xl">
            Atención clínica personalizada a cargo de la <strong>Dra. Inés Escuder</strong> (Ortodoncia, Ortopedia y Odontopediatría) y el <strong>Dr. Ray Miranda</strong> (Rehabilitación oral, Implantes y Estética). Tecnología de avanzada en un espacio exclusivo en <strong>Ayacucho 1386, CABA</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <a
              href={getWhatsAppUrl('Hola MD Odontología, me comunico desde el sitio web para solicitar una consulta en Ayacucho 1386.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#102246] hover:bg-[#17386D] text-white font-medium text-xs tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] group cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#38BDF8] group-hover:scale-110 transition-transform" />
              <span>Pedir Turno por WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8] group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#tratamientos"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/95 hover:bg-white text-slate-800 border border-slate-200 font-medium text-xs tracking-wider uppercase transition-all duration-200 shadow-xs hover:shadow-sm backdrop-blur-md"
            >
              <span>Ver Especialidades</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>
            </a>
          </div>

          {/* Trust badges row */}
          <div className="pt-6 border-t border-slate-200/90 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs text-slate-700">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/85 backdrop-blur-sm border border-slate-200/90 shadow-2xs">
              <MapPin className="w-4 h-4 text-[#17386D] shrink-0" />
              <span className="font-medium">Ayacucho 1386, Recoleta</span>
            </div>
            
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/85 backdrop-blur-sm border border-slate-200/90 shadow-2xs">
              <Award className="w-4 h-4 text-[#17386D] shrink-0" />
              <span className="font-medium">Dra. Escuder · Dr. Miranda</span>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/85 backdrop-blur-sm border border-slate-200/90 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium">Atención con turno puntual</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
