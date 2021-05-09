import i18n, {Resource}          from "i18next";
import {initReactI18next}        from "react-i18next";
import japaneseLanguage          from "./locale/ja/language.json";
import japaneseContent           from "./locale/ja/content.json";
import englishLanguage           from "./locale/en/language.json";
import englishContent            from "./locale/en/content.json";
import americanEnglishContent    from "./locale/en/en_AM/content.json";
import europeanEnglishContent    from "./locale/en/en_EU/content.json";
import spanishLanguage           from "./locale/es/language.json";
import spanishContent            from "./locale/es/content.json";
import americanSpanishContent    from "./locale/es/es_AM/content.json";
import europeanSpanishContent    from "./locale/es/es_EU/content.json";
import frenchLanguage            from "./locale/fr/language.json";
import frenchContent             from "./locale/fr/content.json";
import canadianFrenchContent     from "./locale/fr/fr_CA/content.json";
import europeanFrenchContent     from "./locale/fr/fr_EU/content.json";
import dutchLanguage             from "./locale/nl/language.json";
import dutchContent              from "./locale/nl/content.json";
import germanLanguage            from "./locale/de/language.json";
import germanContent             from "./locale/de/content.json";
import italianLanguage           from "./locale/it/language.json";
import italianContent            from "./locale/it/content.json";
import portugueseLanguage        from "./locale/pt/language.json";
import portugueseContent         from "./locale/pt/content.json";
import americanPortugueseContent from "./locale/pt/pt_AM/content.json";
import europeanPortugueseContent from "./locale/pt/pt_EU/content.json";
import russianLanguage           from "./locale/ru/language.json";
import russianContent            from "./locale/ru/content.json";
import koreanLanguage            from "./locale/ko/language.json";
import koreanContent             from "./locale/ko/content.json";
import chineseLanguage           from "./locale/zh/language.json";
import chineseContent            from "./locale/zh/content.json";
import traditionalChineseContent from "./locale/zh/zh_T/content.json";
import simplifiedChineseContent  from "./locale/zh/zh_S/content.json";

declare module 'react-i18next' {
    interface Resources {
        language: typeof englishLanguage;
        content: typeof englishContent;
    }
}

const resources: Resource = {
    ja: {
        language: japaneseLanguage,
        content: japaneseContent,
    },
    en: {
        language: englishLanguage,
        content: englishContent,
    },
    en_AM: {
        content: americanEnglishContent,
    },
    en_EU: {
        content: europeanEnglishContent,
    },
    fr: {
        language: frenchLanguage,
        content: frenchContent,
    },
    fr_CA: {
        content: canadianFrenchContent,
    },
    fr_EU: {
        content: europeanFrenchContent,
    },
    es: {
        language: spanishLanguage,
        content: spanishContent,
    },
    sp_AM: {
        content: americanSpanishContent,
    },
    sp_EU: {
        content: europeanSpanishContent,
    },
    nl: {
        language: dutchLanguage,
        content: dutchContent,
    },
    de: {
        language: germanLanguage,
        content: germanContent,
    },
    it: {
        language: italianLanguage,
        content: italianContent,
    },
    pt: {
        language: portugueseLanguage,
        content: portugueseContent,
    },
    pt_AM: {
        content: americanPortugueseContent,
    },
    pt_EU: {
        content: europeanPortugueseContent,
    },
    ru: {
        language: russianLanguage,
        content: russianContent,
    },
    ko: {
        language: koreanLanguage,
        content: koreanContent,
    },
    zh: {
        language: chineseLanguage,
        content: chineseContent,
    },
    zh_T: {
        content: traditionalChineseContent,
    },
    zh_S: {
        content: simplifiedChineseContent,
    },
};

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: {
            fr_CA: ['fr'],
            fr_EU: ['fr'],
            es_AM: ['es'],
            es_EU: ['es'],
            pt_AM: ['pt'],
            pt_EU: ['pt'],
            zh_S: ['zh'],
            zh_T: ['zh'],
            default: ['en'],
        },
        ns: ['content', 'language'],
        resources,
        debug: true,

        interpolation: {
            escapeValue: false,
        }
    });


export default i18n;