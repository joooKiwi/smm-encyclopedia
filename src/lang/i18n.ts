import type {Resource}    from 'i18next';
import i18n               from 'i18next';
import {initReactI18next} from 'react-i18next';

import englishLanguage                 from './locale/en/language.json';
import englishContent                  from './locale/en/content.json';
import englishGameContent              from './locale/en/gameContent.json';
import englishEntityContent            from './locale/en/entityContent.json';
import americanEnglishContent          from './locale/en/en_AM/content.json';
import europeanEnglishContent          from './locale/en/en_EU/content.json';
import frenchLanguage                  from './locale/fr/language.json';
import frenchContent                   from './locale/fr/content.json';
import frenchGameContent               from './locale/fr/gameContent.json';
import frenchEntityContent             from './locale/fr/entityContent.json';
import canadianFrenchContent           from './locale/fr/fr_CA/content.json';
import europeanFrenchContent           from './locale/fr/fr_EU/content.json';
import germanLanguage                  from './locale/de/language.json';
import germanContent                   from './locale/de/content.json';
import germanGameContent               from './locale/de/gameContent.json';
import germanEntityContent             from './locale/de/entityContent.json';
import spanishLanguage                 from './locale/es/language.json';
import spanishContent                  from './locale/es/content.json';
import spanishGameContent              from './locale/es/gameContent.json';
import spanishEntityContent            from './locale/es/entityContent.json';
import americanSpanishContent          from './locale/es/es_AM/content.json';
import americanSpanishEntityContent    from './locale/es/es_AM/entityContent.json';
import europeanSpanishContent          from './locale/es/es_EU/content.json';
import europeanSpanishEntityContent    from './locale/es/es_EU/entityContent.json';
import italianLanguage                 from './locale/it/language.json';
import italianContent                  from './locale/it/content.json';
import italianGameContent              from './locale/it/gameContent.json';
import italianEntityContent            from './locale/it/entityContent.json';
import dutchLanguage                   from './locale/nl/language.json';
import dutchContent                    from './locale/nl/content.json';
import dutchGameContent                from './locale/nl/gameContent.json';
import dutchEntityContent              from './locale/nl/entityContent.json';
import portugueseLanguage              from './locale/pt/language.json';
import portugueseContent               from './locale/pt/content.json';
import portugueseGameContent           from './locale/pt/gameContent.json';
import portugueseEntityContent         from './locale/pt/entityContent.json';
import americanPortugueseContent       from './locale/pt/pt_AM/content.json';
import europeanPortugueseContent       from './locale/pt/pt_EU/content.json';
import russianLanguage                 from './locale/ru/language.json';
import russianContent                  from './locale/ru/content.json';
import russianGameContent              from './locale/ru/gameContent.json';
import russianEntityContent            from './locale/ru/entityContent.json';
import japaneseLanguage                from './locale/ja/language.json';
import japaneseContent                 from './locale/ja/content.json';
import japaneseGameContent             from './locale/ja/gameContent.json';
import japaneseEntityContent           from './locale/ja/entityContent.json';
import chineseLanguage                 from './locale/zh/language.json';
import chineseContent                  from './locale/zh/content.json';
import chineseGameContent              from './locale/zh/gameContent.json';
import chineseEntityContent            from './locale/zh/entityContent.json';
import traditionalChineseLanguage      from './locale/zh/zh_T/language.json';
import traditionalChineseContent       from './locale/zh/zh_T/content.json';
import traditionalChineseGameContent   from './locale/zh/zh_T/gameContent.json';
import traditionalChineseEntityContent from './locale/zh/zh_T/entityContent.json';
import simplifiedChineseLanguage       from './locale/zh/zh_S/language.json';
import simplifiedChineseContent        from './locale/zh/zh_S/content.json';
import simplifiedChineseGameContent    from './locale/zh/zh_S/gameContent.json';
import simplifiedChineseEntityContent  from './locale/zh/zh_S/entityContent.json';
import koreanLanguage                  from './locale/ko/language.json';
import koreanContent                   from './locale/ko/content.json';
import koreanGameContent               from './locale/ko/gameContent.json';
import koreanEntityContent             from './locale/ko/entityContent.json';

declare module 'react-i18next' {
    interface Resources {
        language: typeof englishLanguage
        content: typeof englishContent
        gameContent: typeof englishGameContent
        entityContent: typeof englishEntityContent
    }
}

const resources: Resource = {
    en: {
        language: englishLanguage,
        content: englishContent,
        gameContent: englishGameContent,
        entityContent: englishEntityContent,
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
        gameContent: frenchGameContent,
        entityContent: frenchEntityContent,
    },
    fr_CA: {
        content: canadianFrenchContent,
    },
    fr_EU: {
        content: europeanFrenchContent,
    },
    de: {
        language: germanLanguage,
        content: germanContent,
        gameContent: germanGameContent,
        entityContent: germanEntityContent,
    },
    es: {
        language: spanishLanguage,
        content: spanishContent,
        gameContent: spanishGameContent,
        entityContent: spanishEntityContent,
    },
    sp_AM: {
        content: americanSpanishContent,
        entityContent: americanSpanishEntityContent,
    },
    sp_EU: {
        content: europeanSpanishContent,
        entityContent: europeanSpanishEntityContent,
    },
    it: {
        language: italianLanguage,
        content: italianContent,
        gameContent: italianGameContent,
        entityContent: italianEntityContent,
    },
    nl: {
        language: dutchLanguage,
        content: dutchContent,
        gameContent: dutchGameContent,
        entityContent: dutchEntityContent,
    },
    pt: {
        language: portugueseLanguage,
        content: portugueseContent,
        gameContent: portugueseGameContent,
        entityContent: portugueseEntityContent,
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
        gameContent: russianGameContent,
        entityContent: russianEntityContent,
    },
    ja: {
        language: japaneseLanguage,
        content: japaneseContent,
        gameContent: japaneseGameContent,
        entityContent: japaneseEntityContent,
    },
    zh: {
        language: chineseLanguage,
        content: chineseContent,
        gameContent: chineseGameContent,
        entityContent: chineseEntityContent,
    },
    zh_T: {
        content: traditionalChineseContent,
        language: traditionalChineseLanguage,
        gameContent: traditionalChineseGameContent,
        entityContent: traditionalChineseEntityContent,
    },
    zh_S: {
        content: simplifiedChineseContent,
        language: simplifiedChineseLanguage,
        gameContent: simplifiedChineseGameContent,
        entityContent: simplifiedChineseEntityContent,
    },
    ko: {
        language: koreanLanguage,
        content: koreanContent,
        gameContent: koreanGameContent,
        entityContent: koreanEntityContent,
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