import React from 'react';
import { MapPin, Clock, Navigation, Phone, MessageCircle, Building2 } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY, CLINIC_ADDRESS } from '../utils/whatsapp';


export const LocationAndHours: React.FC = () => {
  return (
    <section id="ubicacion" className="py-20 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Info (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E3D5C1] text-xs font-medium uppercase tracking-wider text-[#7A644D]">
              <MapPin className="w-3.5 h-3.5 text-[#B89368]" />
              <span>Ubicación Estratégica en Córdoba</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-medium text-[#241D17] leading-tight">
              Un consultorio cálido y accesible en el centro
            </h2>

            <p className="text-sm sm:text-base text-[#615446] font-light leading-relaxed">
              El consultorio de la <strong>Dra. Trinidad Robledo</strong> se encuentra en una ubicación céntrica privilegiada en la Ciudad de Córdoba, con accesibilidad directa en transporte público, cocheras cercanas y un ambiente silencioso y privado para tu tranquilidad.
            </p>

            <div className="space-y-4 pt-2">
              
              {/* Address item */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#EAE0D2] shadow-2xs">
                <Building2 className="w-5 h-5 text-[#B89368] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-editorial text-lg text-[#241D17] font-medium leading-tight">
                    Dirección del Consultorio
                  </h4>
                  <p className="text-xs text-[#524436] font-medium mt-0.5">
                    {CLINIC_ADDRESS}
                  </p>
                  <p className="text-[11px] text-[#8C7A68] mt-1">
                    Entre Deán Funes y 27 de Abril • A metros de Plaza San Martín y Peatonal.
                  </p>
                </div>
              </div>

              {/* Hours item */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#EAE0D2] shadow-2xs">
                <Clock className="w-5 h-5 text-[#B89368] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-editorial text-lg text-[#241D17] font-medium leading-tight">
                    Horarios de Atención
                  </h4>
                  <p className="text-xs text-[#524436] font-medium mt-0.5">
                    Lunes a Viernes: 09:00 a 19:00 hs
                  </p>
                  <p className="text-[11px] text-[#8C7A68] mt-1">
                    Atención exclusiva con turno previo para garantizar puntualidad y privacidad.
                  </p>
                </div>
              </div>

              {/* Direct phone */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#EAE0D2] shadow-2xs">
                <Phone className="w-5 h-5 text-[#B89368] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-editorial text-lg text-[#241D17] font-medium leading-tight">
                    WhatsApp & Contacto
                  </h4>
                  <p className="text-xs text-[#524436] font-medium mt-0.5">
                    {WHATSAPP_DISPLAY}
                  </p>
                  <p className="text-[11px] text-[#8C7A68] mt-1">
                    Respondemos consultas sobre tratamientos, obras sociales y turnos disponibles.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Rivera+Indarte+72,+Córdoba,+Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#F2EAE0] text-[#2C241E] border border-[#DDD0BF] text-xs font-medium uppercase tracking-wider transition-all shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5 text-[#B89368]" />
                <span>Cómo llegar (Google Maps)</span>
              </a>

              <a
                href={getWhatsAppUrl('Hola Dra. Trinidad Robledo, quisiera consultar sobre la ubicación y disponibilidad de turnos.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2C241E] hover:bg-[#45372B] text-white text-xs font-medium uppercase tracking-wider transition-all shadow-md active:scale-[0.98]"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#D8BC99]" />
                <span>Pedir Turno</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Photo Card of Space & Clinic (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E8DEC\-0] bg-white p-3 space-y-3">
              
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#EFE7DA]">
                <img
                  src="/images/gabinete-dental-pro.jpg"
                  alt="Consultorio odontológico en Rivera Indarte 72 Córdoba"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-medium text-[#241D17] shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Gabinete de Vanguardia</span>
                </div>
              </div>

              {/* Photo 2 and Info strip */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-xl overflow-hidden aspect-video bg-[#EFE7DA]">
                  <img
                    src="/images/hero-clinic.jpg"
                    alt="Espacio y sala de espera Odontología Robledo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F2EB] flex flex-col justify-center">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C7A68]">Ubicación</span>
                  <span className="text-xs font-bold text-[#241D17] mt-0.5">Piso 3 • Oficina 319</span>
                  <span className="text-[11px] text-[#6A5A4A] mt-1">Ascensor y rampa accesible</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
