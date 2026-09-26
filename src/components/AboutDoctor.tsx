import React from 'react';
import { Heart, Sparkles, Award, ShieldCheck, MessageCircle, MapPin } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';


export const AboutDoctor: React.FC = () => {
  return (
    <section id="la-doctora" className="py-20 sm:py-24 bg-[#FAF7F2] border-t border-[#E8DEC\-0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Layout (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E8DEC\-0] bg-[#EFE7DA]">
                <img
                  src="/images/dra-trinidad-robledo-real.png"
                  alt="Dra Trinidad Robledo Odontóloga Córdoba"
                  className="w-full h-[450px] object-cover object-top"
                />
              </div>

              {/* Floating Testimonial card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-5 rounded-2xl border border-[#E8DEC\-0] shadow-xl max-w-[280px]">
                <div className="flex items-center gap-2 mb-2 text-[#B89368]">
                  <Sparkles className="w-4 h-4 fill-[#B89368]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#241D17]">
                    Atención sin prisa
                  </span>
                </div>
                <p className="text-xs text-[#6A5C4E] leading-relaxed">
                  "Priorizamos la escucha y el trato humano para que tu experiencia en el sillón sea tranquila y segura."
                </p>
                <div className="mt-2 pt-2 border-t border-[#F2EAE0] text-[10px] font-mono text-[#8C7A68]">
                  Od. Trinidad Robledo
                </div>
              </div>

            </div>
          </div>

          {/* Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E3D5C1] text-xs font-medium uppercase tracking-wider text-[#7A644D]">
              <Award className="w-3.5 h-3.5 text-[#B89368]" />
              <span>Vocación Médica & Sensibilidad Estética</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-medium text-[#241D17] leading-tight">
              Dra. Trinidad Robledo
            </h2>

            <p className="text-sm sm:text-base text-[#615446] font-light leading-relaxed">
              Formada en <strong>odontología integral y estética bucal</strong>, la Dra. Trinidad Robledo concibe la salud odontológica como un equilibrio armónico entre precisión clínica, bienestar biológico y belleza natural.
            </p>

            <p className="text-xs sm:text-sm text-[#6A5C4E] leading-relaxed">
              En su consultorio ubicado en el corazón de Córdoba (Rivera Indarte 72), cada cita se programa con el tiempo necesario para realizar un diagnóstico exhaustivo, explicarte con claridad cada alternativa y trabajar sin dolor, utilizando las técnicas más suaves y materiales certificados.
            </p>

            {/* Philosophy pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-2xl bg-white border border-[#EAE0D2] shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2 text-[#241D17] font-medium text-xs">
                  <Heart className="w-4 h-4 text-[#B89368]" />
                  <span>Odontología Empática</span>
                </div>
                <p className="text-[11px] text-[#6E5E4F] leading-relaxed">
                  Ideal para personas con ansiedad dental o temores previos. Protocolos indoloros y contención.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#EAE0D2] shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2 text-[#241D17] font-medium text-xs">
                  <ShieldCheck className="w-4 h-4 text-[#B89368]" />
                  <span>Bio-compatibilidad</span>
                </div>
                <p className="text-[11px] text-[#6E5E4F] leading-relaxed">
                  Resinas de última generación, cerámicas libres de metales y esterilización de estándar hospitalario.
                </p>
              </div>

            </div>

            {/* Location & Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppUrl('Hola Dra. Trinidad Robledo, quisiera coordinar una primera consulta en el consultorio.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#2C241E] hover:bg-[#45372B] text-white font-medium text-xs tracking-wider uppercase shadow-md transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-[#D8BC99]" />
                <span>Conversar con la Doctora por WhatsApp</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-[#7A6A5B] px-2">
                <MapPin className="w-4 h-4 text-[#B89368] shrink-0" />
                <span>Rivera Indarte 72 - Piso 3 (Of. 319)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
