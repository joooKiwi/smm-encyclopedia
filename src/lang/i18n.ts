import i18n, {Resource} from 'i18next';
import {initReactI18next} from 'react-i18next';
import enLanguage from '../locale/en/language.json';
import enContent from '../locale/en/content.json';
import frLanguage from '../locale/fr/language.json';
import frContent from '../locale/fr/content.json';

declare module 'react-i18next' {
    interface Resources {
        language: typeof enLanguage;
        content: typeof enContent;
    }
}

const resources: Resource = {
    en_US: {
        language: enLanguage,
        content: enContent,
    },
    en_EU: {
        language: enLanguage,
        content: enContent,
    },
    fr_CA: {
        language: frLanguage,
        content: frContent,
    },
    fr_EU: {
        language: frLanguage,
        content: frContent,
    },
};

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en_US',
        ns: ['content', 'language'],
        resources,
        debug: true,

        interpolation: {
            escapeValue: false,
        }
    });


export default i18n;