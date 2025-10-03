import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationCA from './locales/ca.json';
import translationES from './locales/es.json';

export const SUPPORTED_LANGUAGES = ['ca', 'es'];
export const DEFAULT_LANGUAGE = 'ca';
const STORAGE_KEY = 'preferredLanguage';

const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
      return stored;
    }
  }
  return DEFAULT_LANGUAGE;
};

const resources = {
  ca: { translation: translationCA },
  es: { translation: translationES },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  });

if (typeof window !== 'undefined') {
  i18n.on('languageChanged', (lng) => {
    if (SUPPORTED_LANGUAGES.includes(lng)) {
      window.localStorage.setItem(STORAGE_KEY, lng);
    }
  });
}

export default i18n;
