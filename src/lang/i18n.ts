import i18n, {Resource} from 'i18next';
import {initReactI18next} from 'react-i18next';

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

const resources: Resource = {
    en_US: {
        language: import('../locale/en_US/language.json'),
        content: import('../locale/en_US/content.json'),
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