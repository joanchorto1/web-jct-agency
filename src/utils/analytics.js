let analyticsLoaded = false;
let analyticsEnabled = false;

const PLAUSIBLE_SCRIPT_SRC = 'https://plausible.io/js/script.js';
const CONSENT_STORAGE_KEY = 'jct-cookie-consent';

const getDomain = () => {
  if (typeof window === 'undefined') {
    return '';
  }
  return process.env.REACT_APP_PLAUSIBLE_DOMAIN || window.location.hostname;
};

export const loadAnalytics = () => {
  if (analyticsLoaded || typeof document === 'undefined') {
    return;
  }

  const existingScript = document.querySelector(`script[src="${PLAUSIBLE_SCRIPT_SRC}"]`);
  if (existingScript) {
    analyticsLoaded = true;
    return;
  }

  const script = document.createElement('script');
  script.src = PLAUSIBLE_SCRIPT_SRC;
  script.defer = true;
  script.dataset.domain = getDomain();

  if (typeof window !== 'undefined') {
    window.plausible = window.plausible || function () {
      (window.plausible.q = window.plausible.q || []).push(arguments);
    };
  }

  document.head.appendChild(script);
  analyticsLoaded = true;
};

export const trackEvent = (eventName, options = {}) => {
  if (!analyticsEnabled) {
    return;
  }
  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    window.plausible(eventName, { props: options });
  }
};

export const setAnalyticsEnabled = (enabled) => {
  analyticsEnabled = enabled;
  if (enabled) {
    loadAnalytics();
  }
};

export const getStoredConsent = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.error('Error reading consent from storage', error);
    return null;
  }
};

export const saveConsent = (consent) => {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  } catch (error) {
    console.error('Error saving consent to storage', error);
  }
};

export const hasAnalyticsConsent = (consent) => Boolean(consent?.categories?.analytics);
