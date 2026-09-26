import React, { useState } from 'react';
import { MessageCircle, X, Send, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';


export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    {
      title: 'Agendar Turno de Control / Limpieza',
      desc: 'Consulta odontológica general en el consultorio',
      msg: 'Hola Dra. Trinidad Robledo, quisiera agendar un turno para consulta general y limpieza dental en Rivera Indarte 72.'
    },
    {
      title: 'Consultar Cobertura de mi Obra Social',
      desc: 'Apross, Galeno, Federada, Jerárquicos y más',
      msg: 'Hola Dra. Trinidad Robledo, quisiera consultar sobre la cobertura de mi obra social/prepaga para una atención odontológica.'
    },
    {
      title: 'Estética Dental & Blanqueamiento',
      desc: 'Evaluación de carillas o aclaramiento dental',
      msg: 'Hola Dra. Trinidad Robledo, me gustaría consultar por un tratamiento de blanqueamiento dental o diseño de sonrisa.'
    }
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Interactive Drawer */}
      {isOpen && (
        <div className="mb-3 w-[330px] sm:w-[360px] rounded-3xl bg-white border border-[#DDD0BF] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#2C241E] to-[#45372B] p-4 text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1.5 flex items-center justify-center shrink-0 border border-[#D8BC99] shadow-xs">
                <img
                  src="/logos/centro-odontologico-robledo-black.png"
                  alt="Centro Odontológico Robledo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-editorial text-base font-medium leading-tight text-[#FAF7F2]">
                  Dra. Trinidad Robledo
                </h4>
                <p className="text-[11px] text-[#D8BC99] flex items-center gap-1.5 mt-0.5 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Odontología Integral & Estética</span>
                </p>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-[#EFE7DA]/90 font-light">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#D8BC99]" /> Rivera Indarte 72 (Of. 319)
              </span>
              <span className="font-mono text-[#D8BC99]">Córdoba</span>
            </div>
          </div>

          {/* Quick choices list */}
          <div className="p-3.5 space-y-2 bg-[#FCFAF7] max-h-[360px] overflow-y-auto">
            <p className="text-xs text-[#7A6A5A] font-medium px-1">
              Elegí una opción para iniciar la conversación:
            </p>

            {quickOptions.map((opt, idx) => (
              <a
                key={idx}
                href={getWhatsAppUrl(opt.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-3 rounded-2xl bg-white border border-[#EAE0D2] hover:border-[#B89368] hover:bg-[#FAF6F0] transition-all text-left shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#241D17] group-hover:text-[#8C6D48] transition-colors">
                    {opt.title}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A69788] group-hover:text-[#8C6D48] group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-[11px] text-[#786655] mt-1 line-clamp-1">
                  {opt.desc}
                </p>
              </a>
            ))}

            <a
              href={getWhatsAppUrl('Hola Dra. Trinidad Robledo, quisiera hacerle una consulta odontológica.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Chatear Libremente por WhatsApp</span>
            </a>
          </div>

          {/* Footer of drawer */}
          <div className="px-4 py-2.5 bg-white border-t border-[#EFE7DA] flex items-center justify-between text-[11px] text-[#7A6A5B]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B89368]" /> 10+ Obras Sociales
            </span>
            <span className="font-mono text-[10px] text-[#8C7A68]">
              {WHATSAPP_DISPLAY}
            </span>
          </div>

        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        {!isOpen && (
          <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 whitespace-nowrap bg-white border border-[#DDD0BF] text-[#2C241E] text-xs px-3.5 py-1.5 rounded-full shadow-lg pointer-events-none group-hover:opacity-100 opacity-90 transition-opacity">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            ¿Querés consultar un turno? <strong className="text-[#8C6D48]">Escribile a la Doctora</strong>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#2C241E] hover:bg-[#45372B] text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-[#E3D5C1] focus:outline-none"
          aria-label="Abrir WhatsApp Dra Trinidad Robledo"
        >
          {isOpen ? (
            <X className="w-7 h-7 text-[#D8BC99]" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-[#D8BC99]/20 text-[#D8BC99]" />
              <span className="absolute top-0 right-0 -mr-0.5 -mt-0.5 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};
