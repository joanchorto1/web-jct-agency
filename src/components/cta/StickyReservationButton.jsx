import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

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
  primaryLabel: 'Reserva l’anàlisi gratuïta',
  primaryHref: '/contacte',
  secondaryLabel: 'Demana una demo personalitzada',
  secondaryHref: '/contacte#demo',
};

export default StickyReservationButton;
