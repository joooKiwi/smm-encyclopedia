import type {NullableString, NullOr, NullOrString} from '@joookiwi/type'
import {ArrayAsCollectionHolder}                   from '@joookiwi/collection'

import type {PossibleEnglishName}        from 'lang/EveryLanguages.types'
import type {Name}                       from 'lang/name/Name'
import type {LanguageContent}            from 'core/_template/LanguageContent'
import type {DescriptionLanguageContent} from 'core/_template/DescriptionLanguageContent'

import {isInProduction}      from 'variables'
import {EveryLanguages}      from 'lang/EveryLanguages'
import {StringNameContainer} from 'lang/name/StringName.container'
import {DualValueLanguage}   from 'lang/name/container/DualValueLanguage'
import {SingleValueLanguage} from 'lang/name/container/SingleValueLanguage'

type PossibleGame = | '1' | 1 | '2' | 2 | '3DS' | 'all' | 'notSMM2' | 'notSMM1' | 'notSMM3DS'
type IsACompleteNameCallback = (language: EveryLanguages,) => boolean

/** The exclusive {@link SMM1} or {@link SMM3DS} (excluding the complete & optional languages) languages */
const SMM1_OR_SMM3DS_LANGUAGES = new ArrayAsCollectionHolder<EveryLanguages>([EveryLanguages.GERMAN, EveryLanguages.SPANISH, EveryLanguages.ITALIAN, EveryLanguages.DUTCH, EveryLanguages.PORTUGUESE, EveryLanguages.RUSSIAN, EveryLanguages.JAPANESE,] ,)
/** The exclusive {@link SMM2} (excluding the complete & optional languages) languages */
const SMM2_LANGUAGES = new ArrayAsCollectionHolder<EveryLanguages>([EveryLanguages.GERMAN, EveryLanguages.SPANISH, EveryLanguages.ITALIAN, EveryLanguages.DUTCH, EveryLanguages.RUSSIAN, EveryLanguages.JAPANESE, EveryLanguages.CHINESE, EveryLanguages.KOREAN,],)
const IS_A_COMPLETE_NAME_BASED_ON_GAME_IN_SMM1_OR_SMM3DS: IsACompleteNameCallback = language => SMM1_OR_SMM3DS_LANGUAGES.has(language,)
const IS_A_COMPLETE_NAME_BASED_ON_GAME_IN_SMM2: IsACompleteNameCallback = language => SMM2_LANGUAGES.has(language,)
const IS_A_COMPLETE_NAME = () => true
const IS_NOT_A_COMPLETE_NAME = () => false

/**
 * Create a new {@link Name} from validations dependent on the {@link game} and the {@link isACompleteName} attributes
 *
 * @param content The content to retrieve its language values
 * @param game The {@link Games game} (1, 2 or all)
 * @param isACompleteName It is a complete name
 */
export function createNameFromContent(content: LanguageContent, game: PossibleGame, isACompleteName: boolean,): Name<string> {
    const isACompleteNameCallback = getIsACompleteNameCallback(game, isACompleteName,)

    return new StringNameContainer(
        getFromCompletedLanguageFrom3Values(content.english, content.americanEnglish, content.europeanEnglish, 'English',),
        getFromCompletedLanguageFrom3Values(content.french, content.canadianFrench, content.europeanFrench, 'French',),
        getFromIncompleteLanguageFrom1Value(content.german, EveryLanguages.GERMAN, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom3Values(content.spanish, content.americanSpanish, content.europeanSpanish, EveryLanguages.SPANISH, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(content.italian, EveryLanguages.ITALIAN, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(content.dutch, EveryLanguages.DUTCH, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom3Values(content.portuguese, content.americanPortuguese, content.europeanPortuguese, EveryLanguages.PORTUGUESE, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(content.russian, EveryLanguages.RUSSIAN, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(content.japanese, EveryLanguages.JAPANESE, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom3Values(content.chinese, content.simplifiedChinese, content.traditionalChinese, EveryLanguages.CHINESE, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(content.korean, EveryLanguages.KOREAN, isACompleteNameCallback,),
        getFromOptionalLanguage(content.hebrew,),
        getFromOptionalLanguage(content.polish,),
        getFromOptionalLanguage(content.ukrainian,),
        getFromOptionalLanguage(content.greek,),
    )

}

export function createNameFromContentDescription(content: DescriptionLanguageContent, game: PossibleGame, isACompleteName: boolean,): Name<string> {
    const isACompleteNameCallback = getIsACompleteNameCallback(game, isACompleteName,)

    return new StringNameContainer(
        getFromCompletedLanguageFrom3Values(content.english_description, content.americanEnglish_description, content.europeanEnglish_description, 'English',),
        getFromCompletedLanguageFrom3Values(content.french_description, content.canadianFrench_description, content.europeanFrench_description, 'French',),
        getFromIncompleteLanguageFrom1Value(content.german_description, EveryLanguages.GERMAN, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom3Values(content.spanish_description, content.americanSpanish_description, content.europeanSpanish_description, EveryLanguages.SPANISH, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(content.italian_description, EveryLanguages.ITALIAN, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(content.dutch_description, EveryLanguages.DUTCH, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom3Values(content.portuguese_description, content.americanPortuguese_description, content.europeanPortuguese_description, EveryLanguages.PORTUGUESE, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(content.russian_description, EveryLanguages.RUSSIAN, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(content.japanese_description, EveryLanguages.JAPANESE, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom3Values(content.chinese_description, content.simplifiedChinese_description, content.traditionalChinese_description, EveryLanguages.CHINESE, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(content.korean_description, EveryLanguages.KOREAN, isACompleteNameCallback,),
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

function getFromCompletedLanguageFrom3Values(value1: NullOrString, value2: NullOrString, value3: NullOrString, language: PossibleEnglishName,): | SingleValueLanguage<string> | DualValueLanguage<string, string> {
    if (value1 == null)
        if (value2 == null)
            if (value3 == null)
                throw new TypeError(`All 3 values of ${language} cannot be null.`,)
            else
                throw new TypeError(`The second value of ${language} cannot be null.`,)
        else if (value3 == null)
            throw new TypeError(`The third value of ${language} cannot be null.`,)
        else
            return new DualValueLanguage(value2, value3,)
    return new SingleValueLanguage(value1,)
}


function getFromIncompleteLanguageFrom1Value(value: NullOrString, language: EveryLanguages, isACompleteName: IsACompleteNameCallback,): NullOr<SingleValueLanguage<string>> {
    if (value == null)
        if (isACompleteName(language,))
            throw new TypeError(`The value of ${language.englishName} cannot be null.`,)
        else
            return null
    return new SingleValueLanguage(value,)
}

function getFromIncompleteLanguageFrom3Values(value1: NullOrString, value2: NullOrString, value3: NullOrString, language: EveryLanguages, isACompleteName: IsACompleteNameCallback,): NullOr<SingleValueLanguage<string> | DualValueLanguage<string, string>> {
    if (value1 == null)
        if (value2 == null)
            if (value3 == null)
                if (isACompleteName(language,))
                    throw new TypeError(`All 3 values of ${language.englishName} cannot be null.`,)
                else
                    return null
            else
                throw new TypeError(`The second value of ${language.englishName} cannot be null.`,)
        else if (value3 == null)
            throw new TypeError(`The third value of ${language.englishName} cannot be null.`,)
        else
            return new DualValueLanguage(value2, value3,)
    return new SingleValueLanguage(value1,)
}


function getFromOptionalLanguage(value: NullableString,): NullOr<SingleValueLanguage<string>> {
    if (value == null)
        return null
    return new SingleValueLanguage(value,)
}
