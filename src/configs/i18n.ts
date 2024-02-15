import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: import.meta.env.DEV ? true : false,
        interpolation: {
            escapeValue: false,
        },
        defaultNS: 'common',
        ns: ['common'],
    });

export default i18n;
