import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const ServicesSection: React.FC = () => {
  return (
    <section id="tratamientos" className="py-20 sm:py-24 bg-[#FCFBF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold uppercase tracking-wider text-[#17386D] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Especialidades Odontológicas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-medium text-[#0A1324] leading-tight">
            Tratamientos de alta gama adaptados a cada paciente
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            Abordaje interdisciplinario en Recoleta: ortodoncia, ortopedia y odontopediatría por la <strong>Dra. Inés Escuder</strong>; rehabilitación oral, implantes y estética por el <strong>Dr. Ray Miranda</strong>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-10">

          {/* AREA 1: ORTODONCIA, ORTOPEDIA & ODONTOPEDIATRÍA (Dra. Inés Escuder) */}
          <div className="border border-sky-100 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-sky-50/50 via-white to-white shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-sky-100">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7]" />
                <h3 className="font-editorial text-2xl text-[#102246] font-semibold">
                  Ortodoncia, Ortopedia Maxilar &amp; Odontopediatría
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-sky-100/80 text-[#0284C7] text-xs font-bold uppercase tracking-wider">
                A cargo de la Dra. Inés Escuder
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Ortodoncia */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between hover:border-sky-300 transition-colors">
                <div>
                  <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider mb-2">Alineación &amp; Oclusión</div>
                  <h4 className="text-xl font-editorial font-medium text-slate-900 mb-2">Ortodoncia Integral</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                    Corrección de malposiciones dentarias y mordidas. Alineadores transparentes invisibles y brackets estéticos de última generación.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                      <span>Alineadores invisibles y cómodos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                      <span>Brackets de zafiro y autoligables</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                      <span>Planificación digital de movimientos</span>
                    </li>
                  </ul>
                </div>
                <a
                  href={getWhatsAppUrl('Hola Dra. Inés Escuder, quisiera consultar por un tratamiento de Ortodoncia / Alineadores.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#17386D] hover:text-[#0284C7] transition-colors"
                >
                  <span>Consultar Ortodoncia</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Ortopedia */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between hover:border-sky-300 transition-colors">
                <div>
                  <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider mb-2">Crecimiento Óseo</div>
                  <h4 className="text-xl font-editorial font-medium text-slate-900 mb-2">Ortopedia Maxilar</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                    Guía y estímulo del crecimiento armónico de los huesos maxilares y mandibulares durante la etapa infantil y juvenil.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                      <span>Expansión y remodelación ósea</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                      <span>Corrección temprana de mordida cruzada</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                      <span>Prevención de cirugías ortognáticas</span>
                    </li>
                  </ul>
                </div>
                <a
                  href={getWhatsAppUrl('Hola Dra. Inés Escuder, quisiera consultar sobre Ortopedia Maxilar infantil.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#17386D] hover:text-[#0284C7] transition-colors"
                >
                  <span>Consultar Ortopedia</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Odontopediatría */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between hover:border-sky-300 transition-colors">
                <div>
                  <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider mb-2">Atención Infantil</div>
                  <h4 className="text-xl font-editorial font-medium text-slate-900 mb-2">Odontopediatría</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                    Cuidado dental integral adaptado a niños con paciencia, empatía y técnicas pedagógicas para crear una experiencia positiva.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                      <span>Fluoraciones y selladores protectores</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                      <span>Manejo empático de miedos infantiles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                      <span>Control de hábitos y piezas temporarias</span>
                    </li>
                  </ul>
                </div>
                <a
                  href={getWhatsAppUrl('Hola Dra. Inés Escuder, quisiera coordinar un turno de Odontopediatría para mi hijo/a.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#17386D] hover:text-[#0284C7] transition-colors"
                >
                  <span>Turno Odontopediatría</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

          {/* AREA 2: REHABILITACIÓN ORAL, IMPLANTES & ESTÉTICA (Dr. Ray Miranda) */}
          <div className="border border-indigo-100 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-indigo-50/40 via-white to-white shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-indigo-100">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#102246]" />
                <h3 className="font-editorial text-2xl text-[#102246] font-semibold">
                  Rehabilitación Oral, Implantes &amp; Estética Dental
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-[#102246] text-xs font-bold uppercase tracking-wider">
                A cargo del Dr. Ray Miranda
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Rehabilitación Oral */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between hover:border-indigo-300 transition-colors">
                <div>
                  <div className="text-xs font-bold text-[#17386D] uppercase tracking-wider mb-2">Función &amp; Oclusión</div>
                  <h4 className="text-xl font-editorial font-medium text-slate-900 mb-2">Rehabilitación Oral</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                    Restauración integral de la masticación y la anatomía dentaria en casos de desgaste severo, bruxismo o pérdidas múltiples.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#17386D] shrink-0" />
                      <span>Coronas cerámicas de circonio y disilicato</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#17386D] shrink-0" />
                      <span>Incrustaciones estéticas inlay/onlay</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#17386D] shrink-0" />
                      <span>Restablecimiento de la dimensión vertical</span>
                    </li>
                  </ul>
                </div>
                <a
                  href={getWhatsAppUrl('Hola Dr. Ray Miranda, quisiera coordinar una consulta de Rehabilitación Oral.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#17386D] hover:text-[#0284C7] transition-colors"
                >
                  <span>Consultar Rehabilitación</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Implantes Dentales */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between hover:border-indigo-300 transition-colors">
                <div>
                  <div className="text-xs font-bold text-[#17386D] uppercase tracking-wider mb-2">Implantología Guiada</div>
                  <h4 className="text-xl font-editorial font-medium text-slate-900 mb-2">Implantes Dentales</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                    Reemplazo permanente de dientes perdidos mediante fijaciones de titanio biocompatible de la más alta graduación médica.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#17386D] shrink-0" />
                      <span>Cirugía mínimamente invasiva guiada</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#17386D] shrink-0" />
                      <span>Carga inmediata y prótesis fija</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#17386D] shrink-0" />
                      <span>Regeneración ósea guiada</span>
                    </li>
                  </ul>
                </div>
                <a
                  href={getWhatsAppUrl('Hola Dr. Ray Miranda, quisiera consultar por Implantes Dentales en Ayacucho 1386.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#17386D] hover:text-[#0284C7] transition-colors"
                >
                  <span>Consultar Implantes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Estética Dental */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between hover:border-indigo-300 transition-colors">
                <div>
                  <div className="text-xs font-bold text-[#17386D] uppercase tracking-wider mb-2">Diseño de Sonrisa</div>
                  <h4 className="text-xl font-editorial font-medium text-slate-900 mb-2">Estética Dental</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                    Tratamientos de alta luminosidad para devolver la juventud y armonía a tu sonrisa con técnicas conservadoras.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#17386D] shrink-0" />
                      <span>Carillas ultrafinas de porcelana</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#17386D] shrink-0" />
                      <span>Blanqueamiento clínico en consultorio</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#17386D] shrink-0" />
                      <span>Cierre de diastemas y contorno gingival</span>
                    </li>
                  </ul>
                </div>
                <a
                  href={getWhatsAppUrl('Hola Dr. Ray Miranda, quisiera consultar por Estética Dental / Diseño de Sonrisa.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#17386D] hover:text-[#0284C7] transition-colors"
                >
                  <span>Consultar Estética</span>
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
