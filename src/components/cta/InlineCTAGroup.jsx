import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const InlineCTAGroup = ({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  primaryVariant,
  secondaryVariant,
  size,
  className,
}) => (
  <div className={`inline-cta-group d-flex flex-column flex-sm-row gap-2 ${className}`}>
    <Button
      href={primaryHref}
      size={size}
      variant={primaryVariant}
      className="shadow-sm"
    >
      {primaryLabel}
    </Button>
    <Button
      href={secondaryHref}
      size={size}
      variant={secondaryVariant}
      className="shadow-sm"
    >
      {secondaryLabel}
    </Button>
  </div>
);

InlineCTAGroup.propTypes = {
  primaryLabel: PropTypes.string,
  primaryHref: PropTypes.string,
  secondaryLabel: PropTypes.string,
  secondaryHref: PropTypes.string,
  primaryVariant: PropTypes.string,
  secondaryVariant: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  className: PropTypes.string,
};

InlineCTAGroup.defaultProps = {
  primaryLabel: 'Reserva l’anàlisi gratuïta',
  primaryHref: '/contacte',
  secondaryLabel: 'Demana una demo personalitzada',
  secondaryHref: '/contacte#demo',
  primaryVariant: 'primary',
  secondaryVariant: 'outline-primary',
  size: undefined,
  className: '',
};

export default InlineCTAGroup;
