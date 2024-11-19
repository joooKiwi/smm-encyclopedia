import type {Array, MutableArray, NullableString, NullOrString} from '@joookiwi/type'
import {hasByArray}                                             from '@joookiwi/collection'

import type {Language}                  from 'lang/name/containers/Language'
import type {Name}                      from 'lang/name/Name'
import type {LanguageContent}           from 'core/_template/LanguageContent'
import type {EmptyableLanguage}         from 'lang/name/containers/EmptyableLanguage'
import type {EmptyableOptionalLanguage} from 'lang/name/containers/EmptyableOptionalLanguage'

import {EveryLanguages}             from 'lang/EveryLanguages'
import {NameContainer}              from 'lang/name/Name.container'
import {EmptyLanguageContainer}     from 'lang/name/containers/EmptyLanguage.container'
import {LanguageContainer}          from 'lang/name/containers/Language.container'
import {OptionalLanguageContainer}  from 'lang/name/containers/OptionalLanguage.container'
import {isInProduction}             from 'variables'
import {DescriptionLanguageContent} from 'core/_template/DescriptionLanguageContent'

type PossibleGame = | '1' | 1 | '2' | 2 | '3DS' | 'all' | 'notSMM2' | 'notSMM1' | 'notSMM3DS'
type IsACompleteNameCallback = (language: EveryLanguages,) => boolean

/** The exclusive {@link SMM1} or {@link SMM3DS} (excluding the complete & optional languages) languages */
const SMM1_OR_SMM3DS_LANGUAGES = [EveryLanguages.GERMAN, EveryLanguages.SPANISH, EveryLanguages.ITALIAN, EveryLanguages.DUTCH, EveryLanguages.PORTUGUESE, EveryLanguages.RUSSIAN, EveryLanguages.JAPANESE,] as const
/** The exclusive {@link SMM2} (excluding the complete & optional languages) languages */
const IS_A_COMPLETE_NAME_BASED_ON_GAME_IN_SMM1_OR_SMM3DS: IsACompleteNameCallback = language => SMM1_OR_SMM3DS_LANGUAGES.includes(language,)
const IS_A_COMPLETE_NAME_BASED_ON_GAME_IN_SMM2: IsACompleteNameCallback = language => SMM2_LANGUAGES.includes(language,)
const SMM2_LANGUAGES = [EveryLanguages.GERMAN, EveryLanguages.SPANISH, EveryLanguages.ITALIAN, EveryLanguages.DUTCH, EveryLanguages.RUSSIAN, EveryLanguages.JAPANESE, EveryLanguages.CHINESE, EveryLanguages.KOREAN,] as const
const IS_A_COMPLETE_NAME: IsACompleteNameCallback = () => true
const IS_NOT_A_COMPLETE_NAME: IsACompleteNameCallback = () => false

/**
 * Create a new {@link Name} from validations dependent on the {@link game} and the {@link isACompleteName} attributes
 *
 * @param content The content to retrieve its language values
 * @param game The {@link Games game} (1, 2 or all)
 * @param isACompleteName It is a complete name
 */
export function createNameFromContent(content: LanguageContent, game: PossibleGame, isACompleteName: boolean,): Name<string> {
    const isACompleteNameCallback = getIsACompleteNameCallback(game, isACompleteName,)

    const originalLanguages: MutableArray<EveryLanguages> = []
    return new NameContainer(
        originalLanguages,
        getFromCompletedLanguageFrom3Values(originalLanguages, EveryLanguages.ENGLISH, content.english, content.americanEnglish, content.europeanEnglish,),
        getFromCompletedLanguageFrom3Values(originalLanguages, EveryLanguages.FRENCH, content.french, content.canadianFrench, content.europeanFrench,),
        getFromIncompleteLanguageFrom1Value(originalLanguages, EveryLanguages.GERMAN, content.german, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom3Values(originalLanguages, EveryLanguages.SPANISH, content.spanish, content.americanSpanish, content.europeanSpanish, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(originalLanguages, EveryLanguages.ITALIAN, content.italian, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(originalLanguages, EveryLanguages.DUTCH, content.dutch, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom3Values(originalLanguages, EveryLanguages.PORTUGUESE, content.portuguese, content.americanPortuguese, content.europeanPortuguese, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(originalLanguages, EveryLanguages.RUSSIAN, content.russian, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(originalLanguages, EveryLanguages.JAPANESE, content.japanese, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom3Values(originalLanguages, EveryLanguages.CHINESE, content.chinese, content.simplifiedChinese, content.traditionalChinese, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(originalLanguages, EveryLanguages.KOREAN, content.korean, isACompleteNameCallback,),
        getFromOptionalLanguage(originalLanguages, EveryLanguages.HEBREW, content.hebrew,),
        getFromOptionalLanguage(originalLanguages, EveryLanguages.POLISH, content.polish,),
        getFromOptionalLanguage(originalLanguages, EveryLanguages.UKRAINIAN, content.ukrainian,),
        getFromOptionalLanguage(originalLanguages, EveryLanguages.GREEK, content.greek,),
    )

}

export function createNameFromContentDescription(content: DescriptionLanguageContent, game: PossibleGame, isACompleteName: boolean,): Name<string> {
    const isACompleteNameCallback = getIsACompleteNameCallback(game, isACompleteName,)

    const originalLanguages: MutableArray<EveryLanguages> = []
    return new NameContainer(
        originalLanguages,
        getFromCompletedLanguageFrom3Values(originalLanguages, EveryLanguages.ENGLISH, content.english_description, content.americanEnglish_description, content.europeanEnglish_description,),
        getFromCompletedLanguageFrom3Values(originalLanguages, EveryLanguages.FRENCH, content.french_description, content.canadianFrench_description, content.europeanFrench_description,),
        getFromIncompleteLanguageFrom1Value(originalLanguages, EveryLanguages.GERMAN, content.german_description, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom3Values(originalLanguages, EveryLanguages.SPANISH, content.spanish_description, content.americanSpanish_description, content.europeanSpanish_description, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(originalLanguages, EveryLanguages.ITALIAN, content.italian_description, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(originalLanguages, EveryLanguages.DUTCH, content.dutch_description, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom3Values(originalLanguages, EveryLanguages.PORTUGUESE, content.portuguese_description, content.americanPortuguese_description, content.europeanPortuguese_description, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(originalLanguages, EveryLanguages.RUSSIAN, content.russian_description, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(originalLanguages, EveryLanguages.JAPANESE, content.japanese_description, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom3Values(originalLanguages, EveryLanguages.CHINESE, content.chinese_description, content.simplifiedChinese_description, content.traditionalChinese_description, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(originalLanguages, EveryLanguages.KOREAN, content.korean_description, isACompleteNameCallback,),
        EmptyLanguageContainer.get,
        EmptyLanguageContainer.get,
        EmptyLanguageContainer.get,
        EmptyLanguageContainer.get,
    )

}


function getIsACompleteNameCallback(game: PossibleGame, isACompleteName: boolean,): IsACompleteNameCallback {
    if (isInProduction)  // We ignore validation in production
        return IS_NOT_A_COMPLETE_NAME
    switch (game) {
        case 'all':
        case 'notSMM1':
        case 'notSMM3DS':
            if (isACompleteName)
                return IS_A_COMPLETE_NAME
            return IS_NOT_A_COMPLETE_NAME
        case 'notSMM2':
        case 1:
        case '1':
        case '3DS':
            if (isACompleteName)
                return IS_A_COMPLETE_NAME_BASED_ON_GAME_IN_SMM1_OR_SMM3DS
            return IS_NOT_A_COMPLETE_NAME
        case 2:
        case '2':
            if (isACompleteName)
                return IS_A_COMPLETE_NAME_BASED_ON_GAME_IN_SMM2
            return IS_NOT_A_COMPLETE_NAME
    }
    throw new ReferenceError(`The game "${game}" is not a valid value (1, 2, 3DS, all, notSMM1, notSMM3DS or notSMM2).`,)
}


// function getFromCompletedLanguageFrom1Value(language: EveryLanguages, value: NullOrString,): | string {
//     if (value == null)
//         throw new TypeError(`The value of ${language.englishName} cannot be null.`,)
//     return value
// }

function getFromCompletedLanguageFrom3Values(originalLanguages: MutableArray<EveryLanguages>, language: EveryLanguages, value1: NullOrString, value2: NullOrString, value3: NullOrString,): Language<string, string, | readonly [string, string,]> {
    if (value1 == null) {
        if (value2 == null) {
            if (value3 == null)
                throw new TypeError(`All 3 values of ${language.englishName} cannot be null.`,)
            throw new TypeError(`The second value of ${language.englishName} cannot be null.`,)
        }
        if (value3 == null)
            throw new TypeError(`The third value of ${language.englishName} cannot be null.`,)
        originalLanguages.push(...language.children,)
        return new LanguageContainer<string, string, readonly [string, string,]>([value2, value3,],)
    }
    originalLanguages.push(language,)
    return new LanguageContainer<string, string, readonly [string, string,]>(value1,)
}


function getFromIncompleteLanguageFrom1Value(originalLanguages: MutableArray<EveryLanguages>, language: EveryLanguages, value: NullOrString, isACompleteName: IsACompleteNameCallback,): EmptyableLanguage<string, string, never> {
    if (value == null) {
        if (isACompleteName(language,))
            throw new TypeError(`The value of ${language.englishName} cannot be null.`,)
        return EmptyLanguageContainer.get
    }
    originalLanguages.push(language,)
    return new LanguageContainer<string, string, never>(value,)
}

function getFromIncompleteLanguageFrom3Values(originalLanguages: MutableArray<EveryLanguages>, language: EveryLanguages, value1: NullOrString, value2: NullOrString, value3: NullOrString, isACompleteName: IsACompleteNameCallback,): EmptyableLanguage<string, string, readonly [string, string,]> {
    if (value1 == null) {
        if (value2 == null) {
            if (value3 == null) {
                if (isACompleteName(language,))
                    throw new TypeError(`All 3 values of ${language.englishName} cannot be null.`,)
                return EmptyLanguageContainer.get
            }
            throw new TypeError(`The second value of ${language.englishName} cannot be null.`,)
        }
        if (value3 == null)
            throw new TypeError(`The third value of ${language.englishName} cannot be null.`,)
        originalLanguages.push(...language.children,)
        return new LanguageContainer<string, string, readonly [string, string,]>([value2, value3,],)
    }
    originalLanguages.push(language,)
    return new LanguageContainer<string, string, readonly [string, string,]>(value1,)
}


function getFromOptionalLanguage(originalLanguages: MutableArray<EveryLanguages>, language: EveryLanguages, value: NullableString,): EmptyableOptionalLanguage<string, string, never> {
    if (value == null)
        return EmptyLanguageContainer.get
    originalLanguages.push(language,)
    return new OptionalLanguageContainer<string, string, never>(value,)
}
