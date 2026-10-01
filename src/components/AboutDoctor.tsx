import React from 'react';
import { Sparkles, Award, ShieldCheck, MessageCircle, Stethoscope, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl, DOCTORS } from '../utils/whatsapp';

export const AboutDoctor: React.FC = () => {
  return (
    <section id="profesionales" className="py-20 sm:py-24 bg-[#FCFBF8] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold uppercase tracking-wider text-[#17386D] shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Dirección Médica &amp; Especialistas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-medium text-[#0A1324] leading-tight">
            Compromiso científico, calidez humana y precisión médica
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            En <strong>MD Odontología - Health &amp; Esthetics</strong> cada tratamiento es planificado y ejecutado de manera personalizada por nuestros especialistas directores en Ayacucho 1386, Recoleta.
          </p>
        </div>

        {/* Doctors Grid: Two Feature Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          
          {/* Doctor 1: Dra. Inés Escuder */}
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
              
              {/* Doctor Photo */}
              <div className="sm:col-span-5 relative min-h-[320px] sm:min-h-full bg-slate-100 overflow-hidden">
                <img
                  src="/images/dra_ines_escuder.jpg"
                  alt="Dra. Inés Escuder - Ortodoncia, Ortopedia y Odontopediatría en Recoleta"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono tracking-wider uppercase font-bold text-[#17386D] shadow-xs">
                  Ortodoncia &amp; Niños
                </div>
              </div>

              {/* Doctor Details */}
              <div className="sm:col-span-7 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0284C7] mb-1">
                    Directora de Ortodoncia &amp; Odontopediatría
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-editorial font-medium text-[#0A1324] mb-2 leading-tight">
                    Dra. Inés Escuder
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed mb-4">
                    Especialista en la alineación armónica de la sonrisa y el desarrollo maxilofacial. Enfoque preventivo, interceptivo y de ortodoncia invisible tanto para niños, adolescentes como adultos.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wide">
                      Especialidades Principales:
                    </div>
                    {DOCTORS.ines.specialties.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={getWhatsAppUrl('Hola Dra. Inés Escuder, quisiera coordinar una consulta de Ortodoncia / Ortopedia / Odontopediatría en Ayacucho 1386.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#102246] hover:bg-[#17386D] text-white text-xs font-medium tracking-wide uppercase transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Consultar con la Dra.</span>
                  </a>
                  <span className="text-[11px] text-slate-400 font-mono">MD Recoleta</span>
                </div>
              </div>

            </div>
          </div>

          {/* Doctor 2: Dr. Ray Miranda */}
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
              
              {/* Doctor Photo */}
              <div className="sm:col-span-5 relative min-h-[320px] sm:min-h-full bg-slate-100 overflow-hidden">
                <img
                  src="/images/dr_ray_miranda.jpg"
                  alt="Dr. Ray Miranda - Rehabilitación oral, Implantes y Estética en Recoleta"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono tracking-wider uppercase font-bold text-[#17386D] shadow-xs">
                  Rehabilitación &amp; Estética
                </div>
              </div>

              {/* Doctor Details */}
              <div className="sm:col-span-7 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0284C7] mb-1">
                    Director de Rehabilitación &amp; Cirugía
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-editorial font-medium text-[#0A1324] mb-2 leading-tight">
                    Dr. Ray Miranda
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed mb-4">
                    Especialista en restitución biológica, funcional y estética. Experto en implantología de avanzada, carillas dentales de alta gama y diseño digital de sonrisa con materiales biocompatibles.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wide">
                      Especialidades Principales:
                    </div>
                    {DOCTORS.ray.specialties.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={getWhatsAppUrl('Hola Dr. Ray Miranda, quisiera coordinar una consulta de Rehabilitación Oral / Implantes / Estética en Ayacucho 1386.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#102246] hover:bg-[#17386D] text-white text-xs font-medium tracking-wide uppercase transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Consultar con el Dr.</span>
                  </a>
                  <span className="text-[11px] text-slate-400 font-mono">MD Recoleta</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Clinic Guarantee & Standards */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 flex items-center justify-center text-[#0284C7] shrink-0 border border-sky-100">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Diagnóstico Sin Prisa</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Turnos asignados con tiempo exclusivo para evaluar cada caso con escaneo y radiología diagnóstica.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 flex items-center justify-center text-[#0284C7] shrink-0 border border-sky-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Biomateriales Certificados</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Implantes de titanio de marcas líderes, cerámicas de máxima resistencia y resinas de última generación.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 flex items-center justify-center text-[#0284C7] shrink-0 border border-sky-100">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Atención Multidisciplinaria</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Sinergia directa entre ortodoncia, rehabilitación y estética bajo un mismo equipo médico en Recoleta.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
