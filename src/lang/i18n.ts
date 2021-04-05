import i18n, {Resource} from 'i18next';
import {initReactI18next} from 'react-i18next';
import enUsLanguage from '../locale/en_US/language.json';
import enUsContent from '../locale/en_US/content.json';

declare module 'react-i18next' {
    interface Resources {
        language: typeof enUsLanguage;
        content: typeof enUsContent;
    }
}

const resources: Resource = {
    en_US: {
        language: enUsLanguage,
        content: enUsContent,
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