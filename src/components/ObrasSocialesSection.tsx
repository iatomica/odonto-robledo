import React from 'react';
import { Star, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, CLINIC_RATING } from '../utils/whatsapp';

export const ObrasSocialesSection: React.FC = () => {
  const patientReviews = [
    {
      name: 'Florencia M.',
      tag: 'Ortodoncia & Alineadores',
      text: 'La atención de la Dra. Inés Escuder es impecable. Me explicó paso a paso el tratamiento de alineadores invisibles y los resultados superaron mis expectativas. Súper puntual y cálida.',
      stars: 5
    },
    {
      name: 'Gonzalo R.',
      tag: 'Implante & Corona',
      text: 'Excelente el Dr. Ray Miranda. Me realizó un implante y no sentí absolutamente nada de dolor. La tecnología que tienen en el consultorio de Ayacucho es de primer nivel mundial.',
      stars: 5
    },
    {
      name: 'Mariana B.',
      tag: 'Odontopediatría',
      text: 'Llevé a mi nene de 6 años con la Dra. Inés y fue una experiencia maravillosa. Cero miedo, salió feliz y con ganas de volver. Consultorio hermoso y cómodo en Recoleta.',
      stars: 5
    },
    {
      name: 'Esteban C.',
      tag: 'Rehabilitación & Estética',
      text: 'El Dr. Ray es un perfeccionista. Me reconstruyó la sonrisa con carillas cerámicas y el cambio es impresionante. 100% recomendados, merecen ampliamente las 5 estrellas.',
      stars: 5
    }
  ];

  return (
    <section id="resenas" className="py-16 bg-[#F8FAFC] border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
          
          {/* Rating Header */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#102246] flex flex-col items-center justify-center text-white shrink-0 shadow-sm">
              <span className="text-xl font-bold font-editorial leading-none">5.0</span>
              <div className="flex text-amber-400 mt-1">
                <Star className="w-2.5 h-2.5 fill-amber-400" />
                <Star className="w-2.5 h-2.5 fill-amber-400" />
                <Star className="w-2.5 h-2.5 fill-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
                <span className="text-xs font-bold text-slate-800 ml-1.5 font-sans">
                  5,0 de 5 estrellas
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Más de <strong>{CLINIC_RATING.reviewsCount} reseñas verificadas</strong> de pacientes en Google Reviews
              </p>
            </div>
          </div>

          {/* Coverage note */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="text-xs font-bold text-slate-800 block">
                Factura para Reintegros &amp; Obras Sociales
              </span>
              <span className="text-[11px] text-slate-500">
                Emitimos comprobante fiscal homologado para tu prepaga
              </span>
            </div>
            <a
              href={getWhatsAppUrl('Hola MD Odontología, quisiera consultar aranceles y facturación para reintegro con mi prepaga.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-medium shadow-2xs transition-colors shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Consultar Aranceles</span>
            </a>
          </div>

        </div>
      </div>

      {/* Infinite Scrolling Track of Reviews */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee flex gap-6 px-4">
          {[...patientReviews, ...patientReviews].map((rev, index) => (
            <div
              key={index}
              className="w-[300px] sm:w-[340px] shrink-0 p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-50 text-[#0284C7] border border-sky-100">
                    {rev.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-light italic mb-4">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800">{rev.name}</span>
                <span className="text-[10px] text-slate-400">Google Review ✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
