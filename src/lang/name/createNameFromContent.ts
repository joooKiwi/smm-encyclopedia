import {LanguageContent} from 'core/_template/LanguageContent'
import {Name}            from 'lang/name/Name'
import {EveryLanguages}  from 'lang/EveryLanguages'
import {NameContainer}   from 'lang/name/Name.container'
import {isInProduction}  from 'variables'

type PossibleGame = | '1' | 1 | '2' | 2 | '3DS' | 'all' | 'notSMM2' | 'notSMM1' | 'notSMM3DS'
type IsACompleteNameCallback = (language: EveryLanguages,) => boolean

/** The exclusive {@link Games.SUPER_MARIO_MAKER_1 SMM1} or {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS} (excluding the complete & optional languages) languages */
const SMM1_OR_SMM3DS_LANGUAGES: readonly EveryLanguages[] = [EveryLanguages.GERMAN, EveryLanguages.SPANISH, EveryLanguages.ITALIAN, EveryLanguages.DUTCH, EveryLanguages.PORTUGUESE, EveryLanguages.RUSSIAN, EveryLanguages.JAPANESE,]
/** The exclusive {@link Games.SUPER_MARIO_MAKER_2 SMM2} (excluding the complete & optional languages) languages */
const SMM2_LANGUAGES: readonly EveryLanguages[] = [EveryLanguages.GERMAN, EveryLanguages.SPANISH, EveryLanguages.ITALIAN, EveryLanguages.DUTCH, EveryLanguages.RUSSIAN, EveryLanguages.JAPANESE, EveryLanguages.CHINESE, EveryLanguages.KOREAN,]
const IS_A_COMPLETE_NAME_BASED_ON_GAME_IN_SMM1_OR_SMM3DS: IsACompleteNameCallback = language => SMM1_OR_SMM3DS_LANGUAGES.includes(language,)
const IS_A_COMPLETE_NAME_BASED_ON_GAME_IN_SMM2: IsACompleteNameCallback = language => SMM2_LANGUAGES.includes(language,)
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
    let isACompleteNameCallback: IsACompleteNameCallback
    initialization: { // eslint-disable-line no-labels
        if (isInProduction) { // We ignore validation in production
            isACompleteNameCallback = IS_NOT_A_COMPLETE_NAME
            break initialization // eslint-disable-line no-labels
        }
        switch (game) {
            case 'all':
            case 'notSMM1':
            case 'notSMM3DS':
                if (isACompleteName) {
                    isACompleteNameCallback = IS_A_COMPLETE_NAME
                    break initialization // eslint-disable-line no-labels
                }
                isACompleteNameCallback = IS_NOT_A_COMPLETE_NAME
                break initialization // eslint-disable-line no-labels
            case 'notSMM2':
            case 1:
            case '1':
            case '3DS':
                if (isACompleteName) {
                    isACompleteNameCallback = IS_A_COMPLETE_NAME_BASED_ON_GAME_IN_SMM1_OR_SMM3DS
                    break initialization // eslint-disable-line no-labels
                }
                isACompleteNameCallback = IS_NOT_A_COMPLETE_NAME
                break initialization // eslint-disable-line no-labels
            case 2:
            case '2':
                if (isACompleteName) {
                    isACompleteNameCallback = IS_A_COMPLETE_NAME_BASED_ON_GAME_IN_SMM2
                    break initialization // eslint-disable-line no-labels
                }
                isACompleteNameCallback = IS_NOT_A_COMPLETE_NAME
                break initialization // eslint-disable-line no-labels
        }
        throw new ReferenceError(`The game "${game}" is not a valid value (1, 2, 3DS, all, notSMM1, notSMM3DS or notSMM2).`,)
    }

    return new NameContainer(
        getFromCompletedLanguageFrom3Values(EveryLanguages.ENGLISH, content.english, content.americanEnglish, content.europeanEnglish,),
        getFromCompletedLanguageFrom3Values(EveryLanguages.FRENCH, content.french, content.canadianFrench, content.europeanFrench,),
        getFromIncompleteLanguageFrom1Value(EveryLanguages.GERMAN, content.german, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom3Values(EveryLanguages.SPANISH, content.spanish, content.americanSpanish, content.europeanSpanish, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(EveryLanguages.ITALIAN, content.italian, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(EveryLanguages.DUTCH, content.dutch, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom3Values(EveryLanguages.PORTUGUESE, content.portuguese, content.americanPortuguese, content.europeanPortuguese, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(EveryLanguages.RUSSIAN, content.russian, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(EveryLanguages.JAPANESE, content.japanese, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom3Values(EveryLanguages.CHINESE, content.chinese, content.simplifiedChinese, content.traditionalChinese, isACompleteNameCallback,),
        getFromIncompleteLanguageFrom1Value(EveryLanguages.KOREAN, content.korean, isACompleteNameCallback,),
        getFromOptionalLanguage(content.hebrew,),
        getFromOptionalLanguage(content.polish,),
        getFromOptionalLanguage(content.ukrainian,),
        getFromOptionalLanguage(content.greek,),
    )

}


// function getFromCompletedLanguageFrom1Value(language: EveryLanguages, value: NullOr<string>,): | string {
//     if (value == null)
//         throw new TypeError(`The value of ${language.englishName} cannot be null.`,)
//     return value
// }

function getFromCompletedLanguageFrom3Values(language: EveryLanguages, value1: NullOr<string>, value2: NullOr<string>, value3: NullOr<string>,): | string | readonly [string, string,] {
    if (value1 == null) {
        if (value2 == null) {
            if (value3 == null)
                throw new TypeError(`All 3 values of ${language.englishName} cannot be null.`,)
            throw new TypeError(`The second value of ${language.englishName} cannot be null.`,)
        }
        if (value3 == null)
            throw new TypeError(`The third value of ${language.englishName} cannot be null.`,)
        return [value2, value3,]
    }
    return value1
}


function getFromIncompleteLanguageFrom1Value(language: EveryLanguages, value: NullOr<string>, isACompleteName: IsACompleteNameCallback,): NullOr<string> {
    if (value == null) {
        if (isACompleteName(language,))
            throw new TypeError(`The value of ${language.englishName} cannot be null`,)
        return value
    }
    return value
}

function getFromIncompleteLanguageFrom3Values(language: EveryLanguages, value1: NullOr<string>, value2: NullOr<string>, value3: NullOr<string>, isACompleteName: IsACompleteNameCallback,): NullOr<| string | readonly [string, string,]> {
    if (value1 == null) {
        if (value2 == null) {
            if (value3 == null) {
                if (isACompleteName(language,))
                    throw new TypeError(`All 3 values of ${language.englishName} cannot be null`,)
                return null
            }
            throw new TypeError(`The second value of ${language.englishName} cannot be null`,)
        }
        if (value3 == null)
            throw new TypeError(`The third value of ${language.englishName} cannot be null.`,)
        return [value2, value3,]
    }
    return value1
}


function getFromOptionalLanguage(value: Nullable<string>,): NullOr<string> {
    if (value == null)
        return null
    return value
}
