import type {PossibleExcludedLanguages} from '__test__/helperMethods.types'
import type {LanguageContent}           from 'core/_template/LanguageContent'
import type {Nullable}                  from 'util/types/nullable'

import {EMPTY_ARRAY} from 'util/emptyVariables'

/**
 * Retrieve the english name from the content to get final value for the reference
 *
 * @param content The content to retrieve its english reference
 * @throws {ReferenceError} No english reference was found (by the {@link LanguageContent.english} or {@link LanguageContent.americanEnglish})
 */
export function getEnglishName(content: LanguageContent,): string {
    const englishValue = content.english ?? content.americanEnglish
    if (englishValue == null)
        throw new ReferenceError('No english value were found while attempting to retrieve its content')
    return englishValue
}


/**
 * Test only the English & French languages as a group of test.
 *
 * @param content The content to test only the English & French values
 * @see testLanguages
 */
export function testOnlyEnglishAndFrench({english, americanEnglish, europeanEnglish, french, canadianFrench, europeanFrench,}: LanguageContent,): void {
    describe('Not null language reference', () => {
        test('English (America)', () => expect(english ?? americanEnglish).not.toBeNull(),)
        test('English (Europe)', () => expect(english ?? europeanEnglish).not.toBeNull(),)
        test('French (Canada)', () => expect(french ?? canadianFrench).not.toBeNull(),)
        test('French (Europe)', () => expect(french ?? europeanFrench).not.toBeNull(),)
    },)
}

/**
 * Test every language (if not excluded) as a group of test
 *
 * @param content The content with at least every required languages
 * @param excludedLanguages The languages to not test
 * @see testOnlyEnglishAndFrench
 */
export function testLanguages({
                                  english, americanEnglish, europeanEnglish,
                                  french, canadianFrench, europeanFrench,
                                  german,
                                  spanish, americanSpanish, europeanSpanish,
                                  italian,
                                  dutch,
                                  portuguese, americanPortuguese, europeanPortuguese,
                                  russian,
                                  japanese,
                                  chinese, traditionalChinese, simplifiedChinese,
                                  korean,
                              }: LanguageContent, excludedLanguages?: Nullable<readonly PossibleExcludedLanguages[]>,) {
    const excludedLanguages2 = excludedLanguages ?? EMPTY_ARRAY
    describe('Not null language reference', () => {
        test('English (America)', () => expect(english ?? americanEnglish).not.toBeNull(),)
        test('English (Europe)', () => expect(english ?? europeanEnglish).not.toBeNull(),)
        test('French (Canada)', () => expect(french ?? canadianFrench).not.toBeNull(),)
        test('French (Europe)', () => expect(french ?? europeanFrench).not.toBeNull(),)
        if (!excludedLanguages2.includes('german'))
            test('German', () => expect(german).not.toBeNull(),)
        if (!excludedLanguages2.includes('spanish')) {
            if (!excludedLanguages2.includes('spanish (america)'))
                test('Spanish (America)', () => expect(spanish ?? americanSpanish).not.toBeNull(),)
            if (!excludedLanguages2.includes('spanish (europe)'))
                test('Spanish (Europe)', () => expect(spanish ?? europeanSpanish).not.toBeNull(),)
        }
        if (!excludedLanguages2.includes('italian'))
            test('Italian', () => expect(italian).not.toBeNull(),)
        if (!excludedLanguages2.includes('dutch'))
            test('Dutch', () => expect(dutch).not.toBeNull(),)
        if (!excludedLanguages2.includes('portuguese')) {
            if (!excludedLanguages2.includes('portuguese (america)'))
                test('Portuguese (America)', () => expect(portuguese ?? americanPortuguese).not.toBeNull(),)
            if (!excludedLanguages2.includes('portuguese (europe)'))
                test('Portuguese (Europe)', () => expect(portuguese ?? europeanPortuguese).not.toBeNull(),)
        }
        if (!excludedLanguages2.includes('russian'))
            test('Russian', () => expect(russian).not.toBeNull(),)
        if (!excludedLanguages2.includes('japanese'))
            test('Japanese', () => expect(japanese).not.toBeNull(),)
        if (!(excludedLanguages2.includes('chinese'))) {
            if (!excludedLanguages2.includes('traditional chinese'))
                test('Traditional chinese', () => expect(chinese ?? traditionalChinese).not.toBeNull(),)
            if (!excludedLanguages2.includes('simplified chinese'))
                test('Simplified chinese', () => expect(chinese ?? simplifiedChinese).not.toBeNull(),)
        }
        if (!excludedLanguages2.includes('korean'))
            test('Korean', () => expect(korean).not.toBeNull(),)
    },)
}


/**
 * Test the english (or american english) to be within the possible names received
 *
 * @param content The content with the english reference retrieved
 * @param possibleNames The possible names of the english reference
 */
export function testEnglish({english, americanEnglish,}: LanguageContent, possibleNames: readonly string[],) {
    test('English name (base or american)', () => expect(english ?? americanEnglish).toBeOneOf(possibleNames),)
}

/**
 * Test the english only to be within the possible names received
 *
 * @param content The content with the english reference retrieved
 * @param possibleNames The possible names of the english reference
 */
export function testOnlyEnglish({english,}: LanguageContent, possibleNames: readonly string[],) {
    test('English name (base only)', () => expect(english).toBeOneOf(possibleNames),)
}