import { Sparkles, ShieldCheck, HeartHandshake, Zap, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';

import { getWhatsAppUrl } from '../utils/whatsapp';

export const ServicesSection: React.FC = () => {
  return (
    <section id="tratamientos" className="py-20 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E3D5C1] text-xs font-medium uppercase tracking-wider text-[#7A644D]">
            <Sparkles className="w-3.5 h-3.5 text-[#B89368]" />
            <span>Especialidades Odontológicas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-medium text-[#241D17] leading-tight">
            Servicios integrales diseñados para tu salud y estética bucal
          </h2>

          <p className="text-sm sm:text-base text-[#615446] font-light leading-relaxed">
            Agrupamos nuestros tratamientos en áreas clave de atención, combinando diagnóstico preciso, técnicas mínimamente invasivas y materiales de máxima calidad.
          </p>
        </div>

        {/* Collage Cards Layout */}
        <div className="space-y-10">

          {/* ROW 1: Estética (Col 7) + Ortodoncia (Col 5) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Collage 1: Estética Dental & Sonrisa */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-[#E8DEC\-0] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between">
              
              <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
                
                {/* Photo Column */}
                <div className="sm:col-span-5 relative min-h-[260px] sm:min-h-full overflow-hidden bg-[#EFE7DA]">
                  <img
                    src="/images/estetica-dental-sonrisa.jpg"
                    alt="Estética dental y diseño de sonrisa Dra Trinidad Robledo"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono tracking-wider uppercase font-semibold text-[#8C6D48] shadow-xs">
                    Estética Bucal
                  </div>
                </div>

                {/* Details Column */}
                <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-editorial font-medium text-[#241D17] mb-2 leading-tight">
                      Diseño de Sonrisa & Estética
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6A5C4E] font-light leading-relaxed mb-5">
                      Tratamientos personalizados para lograr una sonrisa radiante, natural y en perfecta armonía con tus rasgos faciales.
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-start gap-2 text-xs text-[#45372B]">
                        <CheckCircle2 className="w-4 h-4 text-[#B89368] shrink-0 mt-0.5" />
                        <span><strong>Carillas dentales:</strong> Porcelana ultra fina y resina estratificada.</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-[#45372B]">
                        <CheckCircle2 className="w-4 h-4 text-[#B89368] shrink-0 mt-0.5" />
                        <span><strong>Blanqueamiento dental clínico:</strong> Aclaramiento sin sensibilidad.</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-[#45372B]">
                        <CheckCircle2 className="w-4 h-4 text-[#B89368] shrink-0 mt-0.5" />
                        <span><strong>Armonización & contorneado:</strong> Corrección de formas y bordes.</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-[#45372B]">
                        <CheckCircle2 className="w-4 h-4 text-[#B89368] shrink-0 mt-0.5" />
                        <span><strong>Cierre de diastemas:</strong> Eliminación de separaciones estéticas.</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#F2EBE1]">
                    <a
                      href={getWhatsAppUrl('Hola Dra. Trinidad Robledo, quisiera consultar sobre un diseño de sonrisa o blanqueamiento dental.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2C241E] hover:bg-[#45372B] text-white text-xs font-medium uppercase tracking-wider transition-all shadow-xs active:scale-[0.98]"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#D8BC99]" />
                      <span>Consultar por Estética</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* Collage 2: Ortodoncia Invisible */}
            <div className="lg:col-span-5 rounded-3xl bg-white border border-[#E8DEC\-0] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between">
              
              <div className="relative h-48 sm:h-56 overflow-hidden bg-[#EFE7DA]">
                <img
                  src="/images/ortodoncia-invisible.jpg"
                  alt="Alineadores invisibles y ortodoncia moderna"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono tracking-wider uppercase font-semibold text-[#8C6D48] shadow-xs">
                  Ortodoncia
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-editorial font-medium text-[#241D17] mb-2 leading-tight">
                    Ortodoncia Invisible & Convencional
                  </h3>
                  <p className="text-xs text-[#6A5C4E] font-light leading-relaxed mb-4">
                    Alineá tus dientes con placas transparentes cómodas y removibles, o brackets estéticos de última generación.
                  </p>

                  <div className="space-y-1.5 mb-6 text-xs text-[#45372B]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B89368] shrink-0" />
                      <span>Alineadores transparentes sin alambres</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B89368] shrink-0" />
                      <span>Ortodoncia estética para jóvenes y adultos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B89368] shrink-0" />
                      <span>Corrección de mordida y apiñamiento</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F2EBE1]">
                  <a
                    href={getWhatsAppUrl('Hola Dra. Trinidad Robledo, me interesa consultar sobre ortodoncia invisible y alineadores.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C6D48] hover:text-[#5E472D] transition-colors"
                  >
                    <span>Evaluar mi alineación dental</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* ROW 2: Odontología Integral (Col 4) + Implantes (Col 4) + Bruxismo & Urgencias (Col 4) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Collage 3: Integral & Prevención */}
            <div className="rounded-3xl bg-white border border-[#E8DEC\-0] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F7F2EB] flex items-center justify-center text-[#B89368] mb-4">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#8C7A68] mb-1">
                  Prevención & Cuidado
                </div>
                <h3 className="text-xl font-editorial font-medium text-[#241D17] mb-2 leading-tight">
                  Odontología Integral & Profilaxis
                </h3>
                <p className="text-xs text-[#6A5C4E] leading-relaxed mb-4">
                  Tratamientos conservadores para mantener tu boca sana, sin dolor y con cobertura por obras sociales.
                </p>

                <div className="space-y-2 mb-6 text-xs text-[#524436]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89368] shrink-0 mt-0.5" />
                    <span>Limpieza con ultrasonido y pulido coronario</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89368] shrink-0 mt-0.5" />
                    <span>Restauraciones estéticas en resina sin metal</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89368] shrink-0 mt-0.5" />
                    <span>Control de encías y salud periodontal</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89368] shrink-0 mt-0.5" />
                    <span>Odontopediatría amigable y sin miedo</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2EBE1]">
                <a
                  href={getWhatsAppUrl('Hola Dra. Trinidad Robledo, quisiera agendar un turno de control y limpieza dental.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#8C6D48] hover:text-[#5E472D]"
                >
                  <span>Agendar control general</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Collage 4: Implantes & Prótesis */}
            <div className="rounded-3xl bg-white border border-[#E8DEC\-0] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F7F2EB] flex items-center justify-center text-[#B89368] mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#8C7A68] mb-1">
                  Rehabilitación Oral
                </div>
                <h3 className="text-xl font-editorial font-medium text-[#241D17] mb-2 leading-tight">
                  Implantes & Coronas Dentales
                </h3>
                <p className="text-xs text-[#6A5C4E] leading-relaxed mb-4">
                  Recuperá piezas dentarias perdidas con máxima firmeza, función masticatoria óptima y estética biocompatible.
                </p>

                <div className="space-y-2 mb-6 text-xs text-[#524436]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89368] shrink-0 mt-0.5" />
                    <span>Implantes de titanio de fijación precisa</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89368] shrink-0 mt-0.5" />
                    <span>Coronas en porcelana y zirconio libre de metal</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89368] shrink-0 mt-0.5" />
                    <span>Prótesis dentales fijas y removibles</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89368] shrink-0 mt-0.5" />
                    <span>Rehabilitación de función y sonrisa completa</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2EBE1]">
                <a
                  href={getWhatsAppUrl('Hola Dra. Trinidad Robledo, quisiera consultar sobre implantes dentales o rehabilitación con prótesis.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#8C6D48] hover:text-[#5E472D]"
                >
                  <span>Consultar por implantes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Collage 5: Bruxismo & Urgencias */}
            <div className="rounded-3xl bg-white border border-[#E8DEC\-0] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F7F2EB] flex items-center justify-center text-[#B89368] mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#8C7A68] mb-1">
                  Alivio & Terapia
                </div>
                <h3 className="text-xl font-editorial font-medium text-[#241D17] mb-2 leading-tight">
                  Bruxismo & Placas Miorrelajantes
                </h3>
                <p className="text-xs text-[#6A5C4E] leading-relaxed mb-4">
                  Soluciones para el desgaste dentario nocturno, dolor en mandíbula, cefaleas tensionales y urgencias odontológicas.
                </p>

                <div className="space-y-2 mb-6 text-xs text-[#524436]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89368] shrink-0 mt-0.5" />
                    <span>Placas de descanso miorrelajantes a medida</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89368] shrink-0 mt-0.5" />
                    <span>Protección contra desgaste y fracturas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89368] shrink-0 mt-0.5" />
                    <span>Endodoncia (conductos) con anestesia suave</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89368] shrink-0 mt-0.5" />
                    <span>Atención inmediata ante dolor agudo</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2EBE1]">
                <a
                  href={getWhatsAppUrl('Hola Dra. Trinidad Robledo, sufro de bruxismo / dolor y quisiera consultar por una placa de descanso o atención de urgencia.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#8C6D48] hover:text-[#5E472D]"
                >
                  <span>Pedir turno por bruxismo/dolor</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
