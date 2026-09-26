import React from 'react';
import { ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const ObrasSocialesSection: React.FC = () => {
  const logos = [
    { name: 'Apross', src: '/logos/obras-sociales/apross.png' },
    { name: 'Federada Cobertura Médica', src: '/logos/obras-sociales/federada.png' },
    { name: 'Galeno', src: '/logos/obras-sociales/galeno.png' },
    { name: 'Jerárquicos Salud', src: '/logos/obras-sociales/jerarquicos.png' },
    { name: 'Andes Salud', src: '/logos/obras-sociales/andes-salud.png' },
    { name: 'Prevención Salud', src: '/logos/obras-sociales/prevencion-salud.png' },
    { name: 'Avalian', src: '/logos/obras-sociales/avalian.png' },
    { name: 'SMATA', src: '/logos/obras-sociales/smata.png' },
    { name: 'CPCE Córdoba', src: '/logos/obras-sociales/cpce-cordoba.png' },
    { name: 'OSEPC / SEP', src: '/logos/obras-sociales/osepc.png' },
  ];

  // Duplicate for seamless infinite loop
  const loopLogos = [...logos, ...logos];

  return (
    <section id="obras-sociales" className="py-10 bg-[#F5EFE6] border-y border-[#E8DEC\-0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-center sm:text-left">
          
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#EAE0D2] flex items-center justify-center text-[#B89368] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#4A3E33] block">
                Obras Sociales & Prepagas Aceptadas
              </span>
              <span className="text-[11px] text-[#7A6A5A]">
                Convenios directos y reintegros arancelarios en Córdoba Capital
              </span>
            </div>
          </div>

          <a
            href={getWhatsAppUrl('Hola Dra. Trinidad Robledo, quisiera consultar si atienden con mi obra social o coseguro.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-[#8C6D48] hover:text-[#5E472D] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Consultar cobertura por WhatsApp</span>
            <ArrowRight className="w-3 h-3" />
          </a>

        </div>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full overflow-hidden mask-linear">
        
        {/* Left and right fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F5EFE6] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F5EFE6] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee py-2">
          {loopLogos.map((item, idx) => (
            <a
              key={idx}
              href={getWhatsAppUrl(`Hola Dra. Trinidad Robledo, tengo la cobertura de ${item.name} y quisiera consultar para atenderme en el consultorio.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3.5 sm:mx-5 px-5 py-3 rounded-2xl bg-white/80 hover:bg-white border border-[#E8DEC\-0] shadow-2xs hover:shadow-sm transition-all duration-300 flex items-center justify-center shrink-0 min-w-[130px] sm:min-w-[150px] h-16 group"
              title={`Consultar cobertura con ${item.name}`}
            >
              <img
                src={item.src}
                alt={`Logo ${item.name}`}
                className="max-h-8 sm:max-h-9 max-w-[120px] object-contain opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
