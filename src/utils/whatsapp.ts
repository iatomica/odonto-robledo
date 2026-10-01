export const WHATSAPP_RAW = '5491167889751';
export const WHATSAPP_DISPLAY = '11 6788-9751';
export const WHATSAPP_PHONE_INTL = '+54 9 11 6788-9751';

export const CLINIC_ADDRESS = 'Ayacucho 1386, Recoleta, CABA';
export const CLINIC_NAME = 'MD Odontología';
export const CLINIC_SUBTITLE = 'Health & Esthetics';
export const CLINIC_INSTAGRAM = 'https://www.instagram.com/md_odonto/';
export const CLINIC_INSTAGRAM_USER = '@md_odonto';

export const DOCTORS = {
  ines: {
    name: 'Dra. Inés Escuder',
    role: 'Especialista en Ortodoncia, Ortopedia & Odontopediatría',
    specialties: ['Ortodoncia Convencional & Invisible', 'Ortopedia Maxilar', 'Odontopediatría']
  },
  ray: {
    name: 'Dr. Ray Miranda',
    role: 'Especialista en Rehabilitación Oral, Implantes & Estética Dental',
    specialties: ['Rehabilitación Oral de Alta Complejidad', 'Implantes Dentales', 'Estética & Diseño de Sonrisa']
  }
};

export const CLINIC_RATING = {
  score: '5,0',
  reviewsCount: '140',
  platform: 'Google Reviews'
};

export const getWhatsAppUrl = (customMessage?: string): string => {
  const defaultMessage = 'Hola MD Odontología, me contacto desde el sitio web para solicitar un turno de consulta en Ayacucho 1386, Recoleta.';
  const message = customMessage ? customMessage.trim() : defaultMessage;
  return `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(message)}`;
};
