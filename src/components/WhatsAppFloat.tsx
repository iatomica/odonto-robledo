import React, { useState } from 'react';
import { MessageCircle, X, Send, ArrowRight, MapPin, Star } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    {
      title: 'Ortodoncia & Alineadores Invisibles',
      desc: 'Consulta con la Dra. Inés Escuder',
      msg: 'Hola Dra. Inés Escuder, quisiera consultar por un turno de Ortodoncia / Alineadores en Ayacucho 1386.'
    },
    {
      title: 'Odontopediatría & Ortopedia Infantil',
      desc: 'Atención especializada para niños',
      msg: 'Hola Dra. Inés Escuder, quisiera coordinar un turno de Odontopediatría / Ortopedia para mi hijo/a.'
    },
    {
      title: 'Implantes & Rehabilitación Oral',
      desc: 'Consulta con el Dr. Ray Miranda',
      msg: 'Hola Dr. Ray Miranda, quisiera coordinar una consulta de Implantes Dentales / Rehabilitación en Ayacucho 1386.'
    },
    {
      title: 'Diseño de Sonrisa & Estética Dental',
      desc: 'Carillas cerámicas y blanqueamiento',
      msg: 'Hola Dr. Ray Miranda, me gustaría consultar por un tratamiento de Estética Dental / Diseño de Sonrisa.'
    }
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Interactive Drawer */}
      {isOpen && (
        <div className="mb-3 w-[330px] sm:w-[360px] rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#102246] to-[#17386D] p-4 text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1.5 flex items-center justify-center shrink-0 border border-sky-200 shadow-xs">
                <img
                  src="/logos/md-symbol.svg"
                  alt="MD Odontología"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-editorial text-base font-medium leading-tight text-white">
                  MD Odontología
                </h4>
                <p className="text-[11px] text-[#BAE6FD] flex items-center gap-1.5 mt-0.5 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Health &amp; Esthetics • Recoleta</span>
                </p>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between text-[11px] text-slate-300">
              <span className="flex items-center gap-1 text-amber-300 font-semibold">
                <Star className="w-3 h-3 fill-amber-300" />
                5,0 (140 reseñas)
              </span>
              <span className="flex items-center gap-1 text-slate-200">
                <MapPin className="w-3 h-3 text-[#38BDF8]" />
                Ayacucho 1386
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <p className="text-xs text-slate-600 font-medium">
              ¿En qué especialidad podemos ayudarte hoy?
            </p>

            <div className="space-y-2">
              {quickOptions.map((opt, index) => (
                <a
                  key={index}
                  href={getWhatsAppUrl(opt.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0284C7] hover:shadow-xs transition-all text-left group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-900 group-hover:text-[#0284C7] transition-colors">
                      {opt.title}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0284C7] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <span className="text-[11px] text-slate-500 font-light block mt-0.5">
                    {opt.desc}
                  </span>
                </a>
              ))}
            </div>

            {/* Direct message button */}
            <a
              href={getWhatsAppUrl('Hola MD Odontología, quisiera hacer una consulta.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full py-3 rounded-xl bg-[#102246] hover:bg-[#17386D] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <Send className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Abrir Chat de WhatsApp</span>
            </a>
          </div>

        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#102246] hover:bg-[#17386D] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group border-2 border-white/40 cursor-pointer"
        aria-label="Abrir opciones de WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 text-[#38BDF8] group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#102246] animate-pulse"></span>
        </div>
        <span className="text-xs font-bold tracking-wide pr-1">
          WhatsApp • 11 6788-9751
        </span>
      </button>

    </div>
  );
};
