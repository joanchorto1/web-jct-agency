const WHATSAPP_PHONE = '34633391411';

export const WHATSAPP_MESSAGES = {
  constructProInfo: 'Vull saber més informació sobre constructPRO.',
  reserveDiagnostic: 'Vull reservar un diagnòstic',
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
