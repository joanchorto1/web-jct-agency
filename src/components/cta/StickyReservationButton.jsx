import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { WHATSAPP_LINKS } from '../../utils/whatsapp';

const StickyReservationButton = ({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}) => (
  <div className="sticky-reservation-button shadow-lg">
    <div className="d-flex flex-column gap-2">
      <Button href={primaryHref} size="lg" className="fw-semibold">
        {primaryLabel}
      </Button>
      <Button href={secondaryHref} variant="outline-light" size="sm" className="fw-semibold">
        {secondaryLabel}
      </Button>
    </div>
  </div>
);

StickyReservationButton.propTypes = {
  primaryLabel: PropTypes.string,
  primaryHref: PropTypes.string,
  secondaryLabel: PropTypes.string,
  secondaryHref: PropTypes.string,
};

StickyReservationButton.defaultProps = {
  primaryLabel: 'Reserva diagnòstic per WhatsApp',
  primaryHref: WHATSAPP_LINKS.reserveDiagnostic,
  secondaryLabel: 'Contacta per WhatsApp',
  secondaryHref: WHATSAPP_LINKS.generalInquiry,
};

export default StickyReservationButton;
