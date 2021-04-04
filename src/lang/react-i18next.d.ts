import 'react-i18next';

declare module 'react-i18next' {
    interface Resources {
        content: typeof import('../locales/en/content.json');
        language: typeof import('../locales/en/language.json');
    }
}