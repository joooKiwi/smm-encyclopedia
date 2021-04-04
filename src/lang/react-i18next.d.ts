import 'react-i18next';

declare module 'react-i18next' {
    interface Resources {
        content: typeof import('../locale/en_US/content.json');
        language: typeof import('../locale/en_US/language.json');
    }
}