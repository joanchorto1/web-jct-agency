const WHATSAPP_PHONE = '34633391411';

export const WHATSAPP_MESSAGES = {
  constructProInfo: 'Vull saber mes informació sobre constructPRO.',
  reserveDiagnostic: 'vull reserva un diagnostico',
  generalInquiry: 'Hola Joan, tinc una consulta',
};

export const buildWhatsAppUrl = (message) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_LINKS = {
  constructProInfo: buildWhatsAppUrl(WHATSAPP_MESSAGES.constructProInfo),
  reserveDiagnostic: buildWhatsAppUrl(WHATSAPP_MESSAGES.reserveDiagnostic),
  generalInquiry: buildWhatsAppUrl(WHATSAPP_MESSAGES.generalInquiry),
};

export default WHATSAPP_LINKS;
