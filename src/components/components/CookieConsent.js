import React, { useEffect, useState } from 'react';
import { getStoredConsent, saveConsent } from '../../utils/analytics';

const defaultConsent = {
  consented: false,
  updatedAt: null,
  categories: {
    necessary: true,
    preferences: false,
    analytics: false,
    marketing: false
  }
};

const CookieConsent = ({ onConsentChange }) => {
  const [consent, setConsent] = useState(defaultConsent);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [managerVisible, setManagerVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      const merged = {
        ...defaultConsent,
        ...stored,
        categories: {
          ...defaultConsent.categories,
          ...(stored.categories || {})
        }
      };
      setConsent(merged);
      setManagerVisible(true);
      onConsentChange?.(merged);
    } else {
      setBannerVisible(true);
    }
  }, [onConsentChange]);

  const updateConsent = (nextConsent, closeBanner = true) => {
    const payload = {
      ...nextConsent,
      updatedAt: new Date().toISOString()
    };
    setConsent(payload);
    saveConsent(payload);
    onConsentChange?.(payload);
    if (closeBanner) {
      setBannerVisible(false);
      setManagerVisible(true);
    }
  };

  const handleAcceptAll = () => {
    updateConsent({
      consented: true,
      categories: {
        necessary: true,
        preferences: true,
        analytics: true,
        marketing: true
      }
    });
  };

  const handleRejectAll = () => {
    updateConsent({
      consented: true,
      categories: {
        necessary: true,
        preferences: false,
        analytics: false,
        marketing: false
      }
    });
  };

  const handleSavePreferences = () => {
    updateConsent({
      ...consent,
      consented: true
    });
  };

  const handleToggle = (category) => {
    setConsent((prev) => ({
      ...prev,
      categories: {
        ...prev.categories,
        [category]: !prev.categories[category]
      }
    }));
  };

  const openManager = () => {
    setBannerVisible(true);
  };

  if (!bannerVisible && !managerVisible) {
    return null;
  }

  return (
    <>
      {bannerVisible && (
        <div className="cookie-consent" role="dialog" aria-modal="true" aria-label="Gestor de consentiment de cookies">
          <div className="cookie-consent__content">
            <h2 className="cookie-consent__title">Gestiona el teu consentiment</h2>
            <p className="cookie-consent__description">
              Utilitzem cookies per garantir el funcionament tècnic del lloc (necessàries) i, amb el teu consentiment,
              millorar l&apos;experiència amb estadístiques i contingut de màrqueting.
            </p>
            <div className="cookie-consent__categories">
              <div className="cookie-consent__category">
                <div>
                  <strong>Necessàries</strong>
                  <p>Imprescindibles per al funcionament del web. S&apos;activen sempre.</p>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" checked disabled />
                </div>
              </div>
              <div className="cookie-consent__category">
                <div>
                  <strong>Preferències</strong>
                  <p>Recorden les teves opcions per oferir-te una experiència personalitzada.</p>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={consent.categories.preferences}
                    onChange={() => handleToggle('preferences')}
                  />
                </div>
              </div>
              <div className="cookie-consent__category">
                <div>
                  <strong>Estadístiques</strong>
                  <p>Ens ajuden a entendre com utilitzes el web (Plausible Analytics).</p>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={consent.categories.analytics}
                    onChange={() => handleToggle('analytics')}
                  />
                </div>
              </div>
              <div className="cookie-consent__category">
                <div>
                  <strong>Màrqueting</strong>
                  <p>Personalitzen el contingut comercial segons els teus interessos.</p>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={consent.categories.marketing}
                    onChange={() => handleToggle('marketing')}
                  />
                </div>
              </div>
            </div>
            <div className="cookie-consent__actions">
              <button type="button" className="btn btn-primary" onClick={handleAcceptAll}>
                Accepta totes
              </button>
              <button type="button" className="btn btn-outline-secondary" onClick={handleRejectAll}>
                Rebutja opcionals
              </button>
              <button type="button" className="btn btn-outline-primary" onClick={handleSavePreferences}>
                Desa preferències
              </button>
            </div>
          </div>
        </div>
      )}

      {managerVisible && !bannerVisible && (
        <button type="button" className="cookie-consent__manage" onClick={openManager}>
          Gestiona cookies
        </button>
      )}
    </>
  );
};

export default CookieConsent;
