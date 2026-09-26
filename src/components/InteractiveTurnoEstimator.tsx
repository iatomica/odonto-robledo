import React, { useState } from 'react';
import { Calendar, Send, MessageCircle, Check } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';


export const InteractiveTurnoEstimator: React.FC = () => {
  const [treatment, setTreatment] = useState('Consulta General & Diagnóstico');
  const [coverage, setCoverage] = useState('Apross');
  const [preferredTime, setPreferredTime] = useState('Por la tarde (14:00 a 19:00 hs)');
  const [patientName, setPatientName] = useState('');

  const treatments = [
    'Consulta General & Diagnóstico',
    'Limpieza & Profilaxis por Ultrasonido',
    'Blanqueamiento Dental Estético',
    'Diseño de Sonrisa & Carillas',
    'Ortodoncia Invisible / Alineadores',
    'Urgencia / Dolor Dental'
  ];

  const coverages = [
    'Apross',
    'Federada Cobertura Médica',
    'Galeno',
    'Jerárquicos Salud',
    'Andes Salud',
    'Prevención Salud',
    'Avalian',
    'SMATA',
    'CPCE Córdoba',
    'OSEPC / SEP',
    'Particular (Sin Obra Social)'
  ];

  const times = [
    'Por la mañana (09:00 a 13:00 hs)',
    'Por la tarde (14:00 a 19:00 hs)',
    'Primer turno disponible'
  ];

  const buildWhatsAppMessage = () => {
    let msg = `Hola Dra. Trinidad Robledo, quisiera agendar un turno para *${treatment}*`;
    if (patientName.trim()) {
      msg += ` a nombre de *${patientName.trim()}*`;
    }
    msg += `.\n• Cobertura: *${coverage}*\n• Franja horaria preferida: *${preferredTime}*.\n¿Tendrán disponibilidad esta semana en el consultorio de Rivera Indarte 72? Muchas gracias.`;
    return msg;
  };

  return (
    <section id="estimador" className="py-20 sm:py-24 bg-[#F5EFE6] border-t border-[#E8DEC\-0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E3D5C1] text-xs font-medium uppercase tracking-wider text-[#7A644D]">
            <Calendar className="w-3.5 h-3.5 text-[#B89368]" />
            <span>Turnos Directos & Sin Esperas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-editorial font-medium text-[#241D17]">
            Coordiná tu visita al consultorio
          </h2>

          <p className="text-xs sm:text-sm text-[#615446] font-light">
            Elegí tu motivo de consulta y tu cobertura médica. El sistema genera tu mensaje para enviar a la Dra. Trinidad Robledo vía WhatsApp al instante.
          </p>
        </div>

        {/* Card Form */}
        <div className="rounded-3xl bg-white p-6 sm:p-10 border border-[#E8DEC\-0] shadow-md space-y-8">
          
          {/* Step 1: Tratamiento */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E33] mb-3">
              1. Motivo principal de la consulta:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {treatments.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTreatment(t)}
                  className={`text-left p-3.5 rounded-2xl text-xs font-medium transition-all flex items-center justify-between border ${
                    treatment === t
                      ? 'bg-[#2C241E] text-white border-[#2C241E] shadow-xs'
                      : 'bg-[#FCFAF7] text-[#5A4D40] border-[#EAE0D2] hover:border-[#CBAE87]'
                  }`}
                >
                  <span>{t}</span>
                  {treatment === t && <Check className="w-4 h-4 text-[#D8BC99] shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Obra Social */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E33] mb-3">
              2. Obra Social o Cobertura Médica:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {coverages.map((cov) => (
                <button
                  key={cov}
                  type="button"
                  onClick={() => setCoverage(cov)}
                  className={`p-2.5 rounded-xl text-xs font-medium transition-all text-center border truncate ${
                    coverage === cov
                      ? 'bg-[#B89368] text-white border-[#B89368] shadow-xs'
                      : 'bg-[#FCFAF7] text-[#5A4D40] border-[#EAE0D2] hover:border-[#CBAE87]'
                  }`}
                  title={cov}
                >
                  {cov}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Franja horaria & Nombre */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E33] mb-2">
                3. Franja Horaria de Preferencia:
              </label>
              <div className="space-y-2">
                {times.map((tm) => (
                  <button
                    key={tm}
                    type="button"
                    onClick={() => setPreferredTime(tm)}
                    className={`w-full text-left p-3 rounded-xl text-xs font-medium transition-all flex items-center justify-between border ${
                      preferredTime === tm
                        ? 'bg-[#F2EAE0] text-[#241D17] border-[#B89368]'
                        : 'bg-[#FCFAF7] text-[#5A4D40] border-[#EAE0D2]'
                    }`}
                  >
                    <span>{tm}</span>
                    {preferredTime === tm && <Check className="w-3.5 h-3.5 text-[#B89368]" />}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E33] mb-2">
                4. Tu Nombre y Apellido (Opcional):
              </label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="Ej. Sofía Martínez"
                className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#DDD0BF] text-xs text-[#241D17] placeholder:text-[#9C8F82] focus:outline-none focus:ring-2 focus:ring-[#B89368]/40 mb-3"
              />
              <div className="p-3 rounded-xl bg-[#FAF6F0] border border-[#EFE7DA] text-[11px] text-[#786655] leading-relaxed">
                📍 Consultorio: <strong>Rivera Indarte 72 - 3er piso (Ofic. 319)</strong>, Córdoba Capital.
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-[#F2EAE0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#6A5A4A]">
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Coordinación directa al WhatsApp: <strong>{WHATSAPP_DISPLAY}</strong></span>
            </div>

            <a
              href={getWhatsAppUrl(buildWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#2C241E] hover:bg-[#45372B] text-white font-medium text-xs tracking-wider uppercase shadow-md transition-all active:scale-[0.98]"
            >
              <Send className="w-3.5 h-3.5 text-[#D8BC99]" />
              <span>Enviar Turno por WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
