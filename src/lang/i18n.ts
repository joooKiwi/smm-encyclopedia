import englishLanguage                 from 'lang/locale/en/language.json'
import englishContent                  from 'lang/locale/en/content.json'
import englishGameContent              from 'lang/locale/en/gameContent.json'
import englishEntityContent            from 'lang/locale/en/entityContent.json'
import americanEnglishContent          from 'lang/locale/en/en-AM/content.json'
import europeanEnglishContent          from 'lang/locale/en/en-EU/content.json'
import frenchLanguage                  from 'lang/locale/fr/language.json'
import frenchContent                   from 'lang/locale/fr/content.json'
import frenchGameContent               from 'lang/locale/fr/gameContent.json'
import frenchEntityContent             from 'lang/locale/fr/entityContent.json'
import canadianFrenchContent           from 'lang/locale/fr/fr-CA/content.json'
import canadianFrenchGameContent       from 'lang/locale/fr/fr-CA/gameContent.json'
import europeanFrenchContent           from 'lang/locale/fr/fr-EU/content.json'
import europeanFrenchGameContent       from 'lang/locale/fr/fr-EU/gameContent.json'
import germanLanguage                  from 'lang/locale/de/language.json'
import germanContent                   from 'lang/locale/de/content.json'
import germanGameContent               from 'lang/locale/de/gameContent.json'
import germanEntityContent             from 'lang/locale/de/entityContent.json'
import spanishLanguage                 from 'lang/locale/es/language.json'
import spanishContent                  from 'lang/locale/es/content.json'
import spanishGameContent              from 'lang/locale/es/gameContent.json'
import spanishEntityContent            from 'lang/locale/es/entityContent.json'
import americanSpanishContent          from 'lang/locale/es/es-AM/content.json'
import americanSpanishEntityContent    from 'lang/locale/es/es-AM/entityContent.json'
import europeanSpanishContent          from 'lang/locale/es/es-EU/content.json'
import europeanSpanishEntityContent    from 'lang/locale/es/es-EU/entityContent.json'
import italianLanguage                 from 'lang/locale/it/language.json'
import italianContent                  from 'lang/locale/it/content.json'
import italianGameContent              from 'lang/locale/it/gameContent.json'
import italianEntityContent            from 'lang/locale/it/entityContent.json'
import dutchLanguage                   from 'lang/locale/nl/language.json'
import dutchContent                    from 'lang/locale/nl/content.json'
import dutchGameContent                from 'lang/locale/nl/gameContent.json'
import dutchEntityContent              from 'lang/locale/nl/entityContent.json'
import portugueseLanguage              from 'lang/locale/pt/language.json'
import portugueseContent               from 'lang/locale/pt/content.json'
import portugueseGameContent           from 'lang/locale/pt/gameContent.json'
import portugueseEntityContent         from 'lang/locale/pt/entityContent.json'
import americanPortugueseContent       from 'lang/locale/pt/pt-AM/content.json'
import europeanPortugueseContent       from 'lang/locale/pt/pt-EU/content.json'
import russianLanguage                 from 'lang/locale/ru/language.json'
import russianContent                  from 'lang/locale/ru/content.json'
import russianGameContent              from 'lang/locale/ru/gameContent.json'
import russianEntityContent            from 'lang/locale/ru/entityContent.json'
import japaneseLanguage                from 'lang/locale/ja/language.json'
import japaneseContent                 from 'lang/locale/ja/content.json'
import japaneseGameContent             from 'lang/locale/ja/gameContent.json'
import japaneseEntityContent           from 'lang/locale/ja/entityContent.json'
import chineseLanguage                 from 'lang/locale/zh/language.json'
import chineseContent                  from 'lang/locale/zh/content.json'
import chineseGameContent              from 'lang/locale/zh/gameContent.json'
import chineseEntityContent            from 'lang/locale/zh/entityContent.json'
import traditionalChineseLanguage      from 'lang/locale/zh/zh-tw/language.json'
import traditionalChineseContent       from 'lang/locale/zh/zh-tw/content.json'
import traditionalChineseGameContent   from 'lang/locale/zh/zh-tw/gameContent.json'
import traditionalChineseEntityContent from 'lang/locale/zh/zh-tw/entityContent.json'
import simplifiedChineseLanguage       from 'lang/locale/zh/zh-cn/language.json'
import simplifiedChineseContent        from 'lang/locale/zh/zh-cn/content.json'
import simplifiedChineseGameContent    from 'lang/locale/zh/zh-cn/gameContent.json'
import simplifiedChineseEntityContent  from 'lang/locale/zh/zh-cn/entityContent.json'
import koreanLanguage                  from 'lang/locale/ko/language.json'
import koreanContent                   from 'lang/locale/ko/content.json'
import koreanGameContent               from 'lang/locale/ko/gameContent.json'
import koreanEntityContent             from 'lang/locale/ko/entityContent.json'

import type {Resource}    from 'i18next'
import i18n               from 'i18next'
import {initReactI18next} from 'react-i18next'

import {isInProduction} from 'variables'

declare module 'react-i18next' {
    interface Resources {
        language: typeof englishLanguage
        content: typeof englishContent
        gameContent: typeof englishGameContent
        entityContent: typeof englishEntityContent
    }
}

const resources: Resource = {
    //region -------------------- English --------------------

    en: {
        language: englishLanguage,
        content: englishContent,
        gameContent: englishGameContent,
        entityContent: englishEntityContent,
    },
    'en-AM': {
        content: americanEnglishContent,
    },
    'en-EU': {
        content: europeanEnglishContent,
    },

    //endregion -------------------- English --------------------
    //region -------------------- French --------------------

    fr: {
        language: frenchLanguage,
        content: frenchContent,
        gameContent: frenchGameContent,
        entityContent: frenchEntityContent,
    },
    'fr-CA': {
        content: canadianFrenchContent,
        gameContent: canadianFrenchGameContent,
    },
    'fr-EU': {
        content: europeanFrenchContent,
        gameContent: europeanFrenchGameContent,
    },

    //endregion -------------------- French --------------------
    //region -------------------- German --------------------

    de: {
        language: germanLanguage,
        content: germanContent,
        gameContent: germanGameContent,
        entityContent: germanEntityContent,
    },

    //endregion -------------------- German --------------------
    //region -------------------- Spanish --------------------

    es: {
        language: spanishLanguage,
        content: spanishContent,
        gameContent: spanishGameContent,
        entityContent: spanishEntityContent,
    },
    'es-AM': {
        content: americanSpanishContent,
        entityContent: americanSpanishEntityContent,
    },
    'es-EU': {
        content: europeanSpanishContent,
        entityContent: europeanSpanishEntityContent,
    },

    //endregion -------------------- Spanish --------------------
    //region -------------------- Italian --------------------

    it: {
        language: italianLanguage,
        content: italianContent,
        gameContent: italianGameContent,
        entityContent: italianEntityContent,
    },

    //endregion -------------------- Italian --------------------
    //region -------------------- Dutch --------------------

    nl: {
        language: dutchLanguage,
        content: dutchContent,
        gameContent: dutchGameContent,
        entityContent: dutchEntityContent,
    },

    //endregion -------------------- Dutch --------------------
    //region -------------------- Portuguese --------------------

    pt: {
        language: portugueseLanguage,
        content: portugueseContent,
        gameContent: portugueseGameContent,
        entityContent: portugueseEntityContent,
    },
    'pt-AM': {
        content: americanPortugueseContent,
    },
    'pt-EU': {
        content: europeanPortugueseContent,
    },

    //endregion -------------------- Portuguese --------------------
    //region -------------------- Russian --------------------

    ru: {
        language: russianLanguage,
        content: russianContent,
        gameContent: russianGameContent,
        entityContent: russianEntityContent,
    },

    //endregion -------------------- Russian --------------------
    //region -------------------- Japanese --------------------

    ja: {
        language: japaneseLanguage,
        content: japaneseContent,
        gameContent: japaneseGameContent,
        entityContent: japaneseEntityContent,
    },

    //endregion -------------------- Japanese --------------------
    //region -------------------- Chinese --------------------

    zh: {
        language: chineseLanguage,
        content: chineseContent,
        gameContent: chineseGameContent,
        entityContent: chineseEntityContent,
    },
    'zh-tw': {
        content: traditionalChineseContent,
        language: traditionalChineseLanguage,
        gameContent: traditionalChineseGameContent,
        entityContent: traditionalChineseEntityContent,
    },
    'zh-cn': {
        content: simplifiedChineseContent,
        language: simplifiedChineseLanguage,
        gameContent: simplifiedChineseGameContent,
        entityContent: simplifiedChineseEntityContent,
    },

    //endregion -------------------- Chinese --------------------
    //region -------------------- Korean --------------------

    ko: {
        language: koreanLanguage,
        content: koreanContent,
        gameContent: koreanGameContent,
        entityContent: koreanEntityContent,
    },

    //endregion -------------------- Korean --------------------
}

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
        ns: ['language', 'content', 'gameContent', 'entityContent',],
        resources,
        debug: !isInProduction,

        interpolation: {
            escapeValue: false,
        },
    })


export default i18n
