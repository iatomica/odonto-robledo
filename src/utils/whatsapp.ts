export const WHATSAPP_RAW = '5493517068119';
export const WHATSAPP_DISPLAY = '+54 9 3517 06-8119';
export const CLINIC_ADDRESS = 'Rivera Indarte 72 - 3er piso (Ofic. 319), Córdoba Capital';
export const CLINIC_NAME = 'Odontología Robledo';
export const DOCTOR_NAME = 'Dra. Trinidad Robledo';

export const getWhatsAppUrl = (customMessage?: string): string => {
  const defaultMessage = 'Hola Dra. Trinidad Robledo, me contacto a través del sitio web para coordinar una consulta odontológica en Rivera Indarte 72.';
  const message = customMessage ? customMessage.trim() : defaultMessage;
  return `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(message)}`;
};
