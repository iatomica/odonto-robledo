import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { MessageCircle, Menu, X, Calendar, MapPin, Phone, Star } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY, CLINIC_ADDRESS, CLINIC_RATING } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FCFBF8]/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-[#FCFBF8]/85 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Brand */}
          <a href="#" className="flex items-center">
            <BrandLogo size="md" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium tracking-wide text-slate-700">
            <a 
              href="#tratamientos" 
              className="hover:text-[#17386D] transition-colors"
            >
              Especialidades
            </a>
            <a 
              href="#profesionales" 
              className="hover:text-[#17386D] transition-colors"
            >
              Equipo Médico
            </a>
            <a 
              href="#resenas" 
              className="hover:text-[#17386D] transition-colors flex items-center gap-1.5"
            >
              <div className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-amber-500" />
              </div>
              <span className="font-semibold text-slate-900">{CLIC_RATING(CLINIC_RATING.score)}</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-sky-50 text-sky-800 font-semibold border border-sky-100">
                140+ reseñas
              </span>
            </a>
            <a 
              href="#estimador" 
              className="hover:text-[#17386D] transition-colors"
            >
              Consultas &amp; Turnos
            </a>
            <a 
              href="#ubicacion" 
              className="hover:text-[#17386D] transition-colors flex items-center gap-1 text-slate-600"
            >
              <MapPin className="w-3.5 h-3.5 text-[#17386D]" />
              <span>Ayacucho 1386, Recoleta</span>
            </a>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${WHATSAPP_DISPLAY.replace(/[^0-9+]/g, '')}`}
              className="text-xs text-slate-600 hover:text-slate-900 transition-colors font-medium flex items-center gap-1.5 px-3 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#17386D]" />
              <span>{WHATSAPP_DISPLAY}</span>
            </a>

            <a
              href={getWhatsAppUrl('Hola MD Odontología, quisiera coordinar una cita de consulta en Ayacucho 1386.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#102246] hover:bg-[#17386D] text-white font-medium text-xs tracking-wider uppercase shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Agendar Turno</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl('Hola MD Odontología, quisiera consultar por un turno.')}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#102246] text-white text-xs"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#38BDF8]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#102246]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-xl backdrop-blur-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#17386D]" />
              {CLINIC_ADDRESS}
            </span>
            <span className="flex items-center gap-1 text-amber-500 font-semibold">
              <Star className="w-3 h-3 fill-amber-500" />
              5.0 (140 reseñas)
            </span>
          </div>

          <a
            href="#tratamientos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 hover:text-[#17386D]"
          >
            Especialidades Médicas
          </a>
          <a
            href="#profesionales"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 hover:text-[#17386D]"
          >
            Dra. Inés Escuder &amp; Dr. Ray Miranda
          </a>
          <a
            href="#estimador"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 hover:text-[#17386D]"
          >
            Turnos &amp; Coberturas
          </a>
          <a
            href="#ubicacion"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 hover:text-[#17386D]"
          >
            Ubicación y Horarios
          </a>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${WHATSAPP_DISPLAY.replace(/[^0-9+]/g, '')}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-medium"
            >
              <Phone className="w-4 h-4 text-[#17386D]" />
              <span>Llamar al {WHATSAPP_DISPLAY}</span>
            </a>

            <a
              href={getWhatsAppUrl('Hola MD Odontología, quisiera agendar un turno.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#102246] text-white text-xs font-medium uppercase tracking-wider shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#38BDF8]" />
              <span>Pedir Turno por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

function CLIC_RATING(score: string) {
  return score;
}
