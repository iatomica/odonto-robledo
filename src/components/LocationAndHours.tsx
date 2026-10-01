import { MapPin, Clock, Navigation, Phone, MessageCircle, Building2, Star } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY, CLINIC_ADDRESS, CLINIC_INSTAGRAM, CLINIC_INSTAGRAM_USER } from '../utils/whatsapp';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const LocationAndHours: React.FC = () => {
  return (
    <section id="ubicacion" className="py-20 sm:py-24 bg-[#FCFBF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Info (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold uppercase tracking-wider text-[#17386D] shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Ubicación Estratégica en Recoleta</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-medium text-[#0A1324] leading-tight">
              Un consultorio exclusivo en una zona privilegiada
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              <strong>MD Odontología - Health &amp; Esthetics</strong> te espera en <strong>{CLINIC_ADDRESS}</strong>, en el selecto barrio de Recoleta. Espacios diseñados para tu máximo confort, privacidad y bienestar clínico.
            </p>

            <div className="space-y-4 pt-2">
              
              {/* Address item */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <Building2 className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-editorial text-lg text-slate-900 font-medium leading-tight">
                    Dirección del Consultorio
                  </h4>
                  <p className="text-xs text-slate-800 font-medium mt-0.5">
                    {CLINIC_ADDRESS}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Recoleta, CABA • A metros de Av. Las Heras, Av. Santa Fe y Av. Pueyrredón.
                  </p>
                </div>
              </div>

              {/* Hours item */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <Clock className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-editorial text-lg text-slate-900 font-medium leading-tight">
                    Horarios de Atención
                  </h4>
                  <p className="text-xs text-slate-800 font-medium mt-0.5">
                    Lunes a Viernes: 09:00 a 20:00 hs
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Atención planificada y puntual con turno previo para evitar salas de espera.
                  </p>
                </div>
              </div>

              {/* Contact item */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <Phone className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                <div className="w-full">
                  <h4 className="font-editorial text-lg text-slate-900 font-medium leading-tight">
                    Contacto Directo &amp; Redes
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 mt-1.5 text-xs text-slate-700">
                    <span className="font-semibold text-slate-900">WhatsApp: {WHATSAPP_DISPLAY}</span>
                    <a
                      href={CLINIC_INSTAGRAM}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#0284C7] hover:underline font-semibold"
                    >
                      <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C]" />
                      <span>{CLINIC_INSTAGRAM_USER}</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl('Hola MD Odontología, quisiera consultar cómo llegar al consultorio de Ayacucho 1386.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#102246] hover:bg-[#17386D] text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#38BDF8]" />
                <span>Contactar por WhatsApp</span>
              </a>

              <a
                href="https://maps.google.com/?q=Ayacucho+1386,+CABA,+Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-semibold uppercase tracking-wider shadow-2xs transition-all"
              >
                <Navigation className="w-4 h-4 text-[#0284C7]" />
                <span>Abrir en Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps & Card (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white relative">
              
              {/* Map Iframe */}
              <div className="h-[380px] sm:h-[440px] w-full bg-slate-100 relative">
                <iframe
                  title="Ubicación de MD Odontología en Recoleta"
                  src="https://maps.google.com/maps?q=Ayacucho%201386,%20CABA,%20Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.02)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Floating Bottom Card */}
              <div className="p-4 bg-white/95 backdrop-blur-md border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">MD HEALTH &amp; ESTHETICS</div>
                  <div className="text-[11px] text-slate-500">{CLINIC_ADDRESS}</div>
                </div>
                <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span>5,0 (140 reseñas)</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
