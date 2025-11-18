const EMAIL_ADDRESS = 'joan@joanchorto.com';

const EMAIL_SUBJECTS = {
  constructProInfo: 'Auditoria ConstructPro',
  reserveDiagnostic: 'Reserva diagnòstic gratuït',
  generalInquiry: 'Consulta general',
};

const buildMailToUrl = (subject, body = '') => {
  const subjectParam = encodeURIComponent(subject);
  const bodyParam = body ? `&body=${encodeURIComponent(body)}` : '';
  return `mailto:${EMAIL_ADDRESS}?subject=${subjectParam}${bodyParam}`;
};

export const EMAIL_LINKS = {
  constructProInfo: buildMailToUrl(EMAIL_SUBJECTS.constructProInfo),
  reserveDiagnostic: buildMailToUrl(EMAIL_SUBJECTS.reserveDiagnostic),
  generalInquiry: buildMailToUrl(EMAIL_SUBJECTS.generalInquiry),
};

export default EMAIL_LINKS;
