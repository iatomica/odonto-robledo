import React, { useState } from 'react';
import { Calendar, MessageCircle, Check, UserCheck, Clock } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY, CLINIC_ADDRESS } from '../utils/whatsapp';

export const InteractiveTurnoEstimator: React.FC = () => {
  const [specialty, setSpecialty] = useState('Ortodoncia & Alineadores');
  const [doctorPreference, setDoctorPreference] = useState('Dra. Inés Escuder (Ortodoncia / Odontopediatría)');
  const [preferredTime, setPreferredTime] = useState('Por la tarde (14:00 a 19:00 hs)');
  const [patientName, setPatientName] = useState('');

  const specialtiesList = [
    'Ortodoncia & Alineadores Invisibles',
    'Ortopedia Maxilar Infantil',
    'Odontopediatría (Atención Infantil)',
    'Rehabilitación Oral & Coronas',
    'Implantes Dentales',
    'Estética Dental, Carillas & Blanqueamiento',
    'Consulta Diagnóstica General'
  ];

  const doctorsList = [
    'Dra. Inés Escuder (Ortodoncia, Ortopedia, Odontopediatría)',
    'Dr. Ray Miranda (Rehabilitación, Implantes, Estética)',
    'Primer profesional especialista disponible'
  ];

  const times = [
    'Por la mañana (09:00 a 13:00 hs)',
    'Por la tarde (14:00 a 19:00 hs)',
    'Primer turno disponible en la semana'
  ];

  const buildWhatsAppMessage = () => {
    let msg = `Hola MD Odontología, quisiera agendar un turno para *${specialty}*`;
    if (patientName.trim()) {
      msg += ` a nombre de *${patientName.trim()}*`;
    }
    msg += `.\n• Especialista preferido: *${doctorPreference}*\n• Franja horaria: *${preferredTime}*.\n¿Tendrán disponibilidad para coordinar una cita en el consultorio de ${CLINIC_ADDRESS}? Muchas gracias.`;
    return msg;
  };

  return (
    <section id="estimador" className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold uppercase tracking-wider text-[#17386D] shadow-2xs">
            <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Coordinación Inmediata de Citas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-editorial font-medium text-[#0A1324] leading-tight">
            Agendá tu consulta con nuestros especialistas
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            Completá tus preferencias en pocos clics y el equipo de recepción de <strong>MD Odontología</strong> te confirmará las opciones de horario disponibles por WhatsApp.
          </p>
        </div>

        {/* Card Form */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md space-y-8">
          
          {/* Step 1: Especialidad */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#102246] text-white flex items-center justify-center text-[10px] font-bold">1</span>
              <span>Seleccioná el Tratamiento o Especialidad:</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {specialtiesList.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSpecialty(item)}
                  className={`p-3 rounded-xl text-left text-xs transition-all border flex items-center justify-between ${
                    specialty === item
                      ? 'bg-sky-50 border-[#0284C7] text-[#0A1324] font-semibold shadow-2xs'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span>{item}</span>
                  {specialty === item && <Check className="w-4 h-4 text-[#0284C7] shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Profesional */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#102246] text-white flex items-center justify-center text-[10px] font-bold">2</span>
              <span>Profesional de Referencia:</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {doctorsList.map((doc) => (
                <button
                  key={doc}
                  type="button"
                  onClick={() => setDoctorPreference(doc)}
                  className={`p-3 rounded-xl text-left text-xs transition-all border flex items-center justify-between ${
                    doctorPreference === doc
                      ? 'bg-sky-50 border-[#0284C7] text-[#0A1324] font-semibold shadow-2xs'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span className="leading-snug">{doc}</span>
                  {doctorPreference === doc && <Check className="w-4 h-4 text-[#0284C7] shrink-0 ml-1" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Franja horaria y Nombre */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0284C7]" />
                <span>Preferencia Horaria:</span>
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-200 text-xs text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
              >
                {times.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#0284C7]" />
                <span>Tu Nombre y Apellido (Opcional):</span>
              </label>
              <input
                type="text"
                placeholder="Ej. Martín García"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-200 text-xs text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
              />
            </div>
          </div>

          {/* Submit CTA */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              <span className="font-semibold text-slate-800">Atención en: </span>
              {CLINIC_ADDRESS} • Tel: {WHATSAPP_DISPLAY}
            </div>

            <a
              href={getWhatsAppUrl(buildWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#102246] hover:bg-[#17386D] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#38BDF8]" />
              <span>Solicitar Turno por WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
