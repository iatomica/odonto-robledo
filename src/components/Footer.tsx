import React from 'react';
import { BrandLogo } from './BrandLogo';
import { MapPin, Clock, Star, Phone } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY, CLINIC_ADDRESS, CLINIC_INSTAGRAM, CLINIC_INSTAGRAM_USER, CLINIC_RATING } from '../utils/whatsapp';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1528] text-slate-300 text-xs pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <BrandLogo size="md" variant="white" />

            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Centro odontológico de alta precisión en Recoleta. Especialistas en Ortodoncia, Ortopedia, Odontopediatría, Rehabilitación Oral e Implantes Dentales.
            </p>

            <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-xs pt-1">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>{CLINIC_RATING.score} de 5 Estrellas • {CLINIC_RATING.reviewsCount} reseñas en Google</span>
            </div>
          </div>

          {/* Col 2: Dra. Inés Escuder */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Dra. Inés Escuder
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>• Ortodoncia Convencional &amp; Invisible</li>
              <li>• Alineadores Estéticos Transparentes</li>
              <li>• Ortopedia Maxilofacial Infantil</li>
              <li>• Odontopediatría Integral</li>
              <li>• Cuidado y Prevención en Niños</li>
            </ul>
          </div>

          {/* Col 3: Dr. Ray Miranda */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Dr. Ray Miranda
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>• Rehabilitación Oral de Alta Complejidad</li>
              <li>• Implantes Dentales Osteointegrados</li>
              <li>• Coronas Cerámicas &amp; Circonio</li>
              <li>• Diseño Digital de Sonrisa</li>
              <li>• Carillas &amp; Blanqueamiento Clínico</li>
            </ul>
          </div>

          {/* Col 4: Consultorio & Ubicación */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Consultorio &amp; Contacto
            </h4>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>{CLINIC_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Lunes a Viernes: 09:00 a 20:00 hs</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <InstagramIcon className="w-4 h-4 text-[#E1306C] shrink-0" />
                <a
                  href={CLINIC_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#38BDF8] hover:underline"
                >
                  {CLINIC_INSTAGRAM_USER}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} MD Odontología - Health &amp; Esthetics. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Ayacucho 1386, Recoleta, CABA</span>
            <span>•</span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#38BDF8] hover:underline"
            >
              Pedir Turno por WhatsApp
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
