import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { MessageCircle, Menu, X, Calendar, MapPin, Phone } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';

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
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#EAE0D2]/80 py-3'
          : 'bg-[#FAF7F2]/80 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Brand */}
          <a href="#" className="flex items-center">
            <BrandLogo size="md" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide text-[#5C4F43]">
            <a 
              href="#tratamientos" 
              className="hover:text-[#B89368] transition-colors"
            >
              Tratamientos
            </a>
            <a 
              href="#obras-sociales" 
              className="hover:text-[#B89368] transition-colors flex items-center gap-1.5"
            >
              <span>Obras Sociales</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#EFE7DA] text-[#8C7355] font-semibold">
                10+
              </span>
            </a>
            <a 
              href="#la-doctora" 
              className="hover:text-[#B89368] transition-colors"
            >
              La Dra. Robledo
            </a>
            <a 
              href="#estimador" 
              className="hover:text-[#B89368] transition-colors"
            >
              Consultas & Turnos
            </a>
            <a 
              href="#ubicacion" 
              className="hover:text-[#B89368] transition-colors flex items-center gap-1 text-[#786655]"
            >
              <MapPin className="w-3.5 h-3.5 text-[#B89368]" />
              <span>Córdoba Centro</span>
            </a>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${WHATSAPP_DISPLAY.replace(/[^0-9+]/g, '')}`}
              className="text-xs text-[#7A6B5D] hover:text-[#2C241E] transition-colors font-medium flex items-center gap-1.5 px-3 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#B89368]" />
              <span>{WHATSAPP_DISPLAY}</span>
            </a>

            <a
              href={getWhatsAppUrl('Hola Dra. Trinidad Robledo, quisiera agendar un turno para consulta odontológica.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2C241E] hover:bg-[#42362C] text-[#FAF7F2] font-medium text-xs tracking-wider uppercase shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#CBAE87]" />
              <span>Agendar Turno</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl('Hola Dra. Trinidad Robledo, quisiera agendar un turno.')}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#2C241E] text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#CBAE87]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#2C241E] hover:bg-[#EFE7DA] transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#EAE0D2] px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-3.5 text-sm font-medium text-[#4A3E33]">
            <a
              href="#tratamientos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B89368]"
            >
              Tratamientos & Especialidades
            </a>
            <a
              href="#obras-sociales"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B89368] flex items-center justify-between"
            >
              <span>Obras Sociales & Prepagas</span>
              <span className="px-2 py-0.5 text-xs bg-[#EFE7DA] text-[#8C7355] rounded-full">
                10 Aceptadas
              </span>
            </a>
            <a
              href="#la-doctora"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B89368]"
            >
              Sobre la Dra. Trinidad Robledo
            </a>
            <a
              href="#estimador"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B89368]"
            >
              Cotizar / Agendar Consulta
            </a>
            <a
              href="#ubicacion"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B89368] flex items-center gap-1.5"
            >
              <MapPin className="w-4 h-4 text-[#B89368]" />
              <span>Rivera Indarte 72 - 3er piso (ofic. 319)</span>
            </a>
          </nav>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl('Hola Dra. Trinidad Robledo, quisiera coordinar un turno.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#2C241E] text-white font-medium text-xs tracking-wider uppercase shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#CBAE87]" />
              <span>Agendar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
