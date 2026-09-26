import React from 'react';
import { BrandLogo } from './BrandLogo';
import { MessageCircle, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY, CLINIC_ADDRESS } from '../utils/whatsapp';


export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#EFE7DA] border-t border-[#DECFC0] pt-16 pb-12 text-[#574B3F] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <BrandLogo size="md" />

            <p className="text-xs text-[#6A5A4A] leading-relaxed">
              Consultorio odontológico de la Dra. Trinidad Robledo. Atención personalizada, odontología integral, diseño de sonrisa y tratamientos preventivos con calidez médica en la Ciudad de Córdoba.
            </p>

            <div className="flex items-center gap-2 text-[#7A644D] font-medium text-[11px] pt-1">
              <ShieldCheck className="w-4 h-4 text-[#B89368] shrink-0" />
              <span>Matrícula Profesional Habilitada • Córdoba</span>
            </div>
          </div>

          {/* Col 2: Tratamientos */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#241D17] uppercase tracking-wider font-mono">
              Especialidades
            </h4>
            <ul className="space-y-2 text-[#6A5A4A]">
              <li>• Diseño de Sonrisa & Carillas</li>
              <li>• Blanqueamiento Dental en Consultorio</li>
              <li>• Ortodoncia Invisible & Alineadores</li>
              <li>• Implantes y Prótesis Dentales</li>
              <li>• Odontología Integral & Restauradora</li>
              <li>• Limpieza & Profilaxis por Ultrasonido</li>
            </ul>
          </div>

          {/* Col 3: Obras Sociales */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#241D17] uppercase tracking-wider font-mono">
              Coberturas Médicas
            </h4>
            <ul className="space-y-2 text-[#6A5A4A]">
              <li>• Apross</li>
              <li>• Federada Cobertura Médica</li>
              <li>• Galeno Argentina</li>
              <li>• Jerárquicos Salud</li>
              <li>• Andes Salud</li>
              <li>• Prevención Salud & Avalian</li>
              <li>• SMATA, CPCE Córdoba & OSEPC</li>
            </ul>
          </div>

          {/* Col 4: Consultorio & Turnos */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#241D17] uppercase tracking-wider font-mono">
              Contacto & Turnos
            </h4>
            
            <div className="space-y-2.5 text-[#6A5A4A]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B89368] shrink-0 mt-0.5" />
                <span>{CLINIC_ADDRESS}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B89368] shrink-0 mt-0.5" />
                <span>Lun a Vie: 09:00 a 19:00 hs (con turno previo)</span>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl('Hola Dra. Trinidad Robledo, me comunico a través del pie de página de su sitio web.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#2C241E] hover:bg-[#45372B] text-white font-medium text-xs tracking-wider uppercase transition-all shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#D8BC99]" />
                  <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#DECFC0] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#786655]">
          <div>
            © {new Date().getFullYear()} Odontología Robledo • Dra. Trinidad Robledo. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Odontología Integral & Estética Bucal</span>
            <span>•</span>
            <span className="font-medium text-[#2C241E]">Córdoba, Argentina</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
