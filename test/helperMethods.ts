import type {StringArray}       from '@joookiwi/type'
import {describe, expect, test} from 'vitest'

import type {LanguageContent}            from 'src/core/_template/LanguageContent'
import type {DescriptionLanguageContent} from 'src/core/_template/DescriptionLanguageContent'
import type {PossibleExcludedLanguages}  from 'test/helperMethods.types'

import {Empty}             from 'src/util/emptyVariables'
import {ArrayAsCollection} from 'src/util/collection/ArrayAsCollection'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY

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
                              }: LanguageContent, excludedLanguages?: NullableArray<PossibleExcludedLanguages>,) {
    const excludedLanguages2 = new ArrayAsCollection(excludedLanguages ?? EMPTY_ARRAY,)
    describe('Not null language reference', () => {
        test('English (America)', () => expect(english ?? americanEnglish).not.toBeNull(),)
        test('English (Europe)', () => expect(english ?? europeanEnglish).not.toBeNull(),)
        test('French (Canada)', () => expect(french ?? canadianFrench).not.toBeNull(),)
        test('French (Europe)', () => expect(french ?? europeanFrench).not.toBeNull(),)
        if (!excludedLanguages2.has('german',))
            test('German', () => expect(german).not.toBeNull(),)
        if (!excludedLanguages2.has('spanish',)) {
            if (!excludedLanguages2.has('spanish (america)',))
                test('Spanish (America)', () => expect(spanish ?? americanSpanish).not.toBeNull(),)
            if (!excludedLanguages2.has('spanish (europe)',))
                test('Spanish (Europe)', () => expect(spanish ?? europeanSpanish).not.toBeNull(),)
        }
        if (!excludedLanguages2.has('italian',))
            test('Italian', () => expect(italian).not.toBeNull(),)
        if (!excludedLanguages2.has('dutch',))
            test('Dutch', () => expect(dutch).not.toBeNull(),)
        if (!excludedLanguages2.has('portuguese',)) {
            if (!excludedLanguages2.has('portuguese (america)',))
                test('Portuguese (America)', () => expect(portuguese ?? americanPortuguese).not.toBeNull(),)
            if (!excludedLanguages2.has('portuguese (europe)',))
                test('Portuguese (Europe)', () => expect(portuguese ?? europeanPortuguese).not.toBeNull(),)
        }
        if (!excludedLanguages2.has('russian',))
            test('Russian', () => expect(russian).not.toBeNull(),)
        if (!excludedLanguages2.has('japanese',))
            test('Japanese', () => expect(japanese).not.toBeNull(),)
        if (!(excludedLanguages2.has('chinese',))) {
            if (!excludedLanguages2.has('traditional chinese',))
                test('Traditional chinese', () => expect(chinese ?? traditionalChinese).not.toBeNull(),)
            if (!excludedLanguages2.has('simplified chinese',))
                test('Simplified chinese', () => expect(chinese ?? simplifiedChinese).not.toBeNull(),)
        }
        if (!excludedLanguages2.has('korean',))
            test('Korean', () => expect(korean).not.toBeNull(),)
    },)
}

/**
 * Test every language description (if not excluded) as a group of test
 *
 * @param content The content with at least every required languages
 * @param excludedLanguages The languages to not test
 * @see testLanguages
 */
export function testLanguagesDescription({
                                             english_description: english, americanEnglish_description: americanEnglish, europeanEnglish_description: europeanEnglish,
                                             french_description: french, canadianFrench_description: canadianFrench, europeanFrench_description: europeanFrench,
                                             german_description: german,
                                             spanish_description: spanish, americanSpanish_description: americanSpanish, europeanSpanish_description: europeanSpanish,
                                             italian_description: italian,
                                             dutch_description: dutch,
                                             portuguese_description: portuguese, americanPortuguese_description: americanPortuguese, europeanPortuguese_description: europeanPortuguese,
                                             russian_description: russian,
                                             japanese_description: japanese,
                                             chinese_description: chinese, traditionalChinese_description: traditionalChinese, simplifiedChinese_description: simplifiedChinese,
                                             korean_description: korean,
                                         }: DescriptionLanguageContent, excludedLanguages?: NullableArray<PossibleExcludedLanguages>,) {
    const excludedLanguages2 = new ArrayAsCollection(excludedLanguages ?? EMPTY_ARRAY,)
    describe('Not null language description reference', () => {
        test('English (America)', () => expect(english ?? americanEnglish).not.toBeNull(),)
        test('English (Europe)', () => expect(english ?? europeanEnglish).not.toBeNull(),)
        test('French (Canada)', () => expect(french ?? canadianFrench).not.toBeNull(),)
        test('French (Europe)', () => expect(french ?? europeanFrench).not.toBeNull(),)
        if (!excludedLanguages2.has('german',))
            test('German', () => expect(german).not.toBeNull(),)
        if (!excludedLanguages2.has('spanish',)) {
            if (!excludedLanguages2.has('spanish (america)',))
                test('Spanish (America)', () => expect(spanish ?? americanSpanish).not.toBeNull(),)
            if (!excludedLanguages2.has('spanish (europe)',))
                test('Spanish (Europe)', () => expect(spanish ?? europeanSpanish).not.toBeNull(),)
        }
        if (!excludedLanguages2.has('italian',))
            test('Italian', () => expect(italian).not.toBeNull(),)
        if (!excludedLanguages2.has('dutch',))
            test('Dutch', () => expect(dutch).not.toBeNull(),)
        if (!excludedLanguages2.has('portuguese',)) {
            if (!excludedLanguages2.has('portuguese (america)',))
                test('Portuguese (America)', () => expect(portuguese ?? americanPortuguese).not.toBeNull(),)
            if (!excludedLanguages2.has('portuguese (europe)',))
                test('Portuguese (Europe)', () => expect(portuguese ?? europeanPortuguese).not.toBeNull(),)
        }
        if (!excludedLanguages2.has('russian',))
            test('Russian', () => expect(russian).not.toBeNull(),)
        if (!excludedLanguages2.has('japanese',))
            test('Japanese', () => expect(japanese).not.toBeNull(),)
        if (!excludedLanguages2.has('chinese',)) {
            if (!excludedLanguages2.has('traditional chinese',))
                test('Traditional chinese', () => expect(chinese ?? traditionalChinese).not.toBeNull(),)
            if (!excludedLanguages2.has('simplified chinese',))
                test('Simplified chinese', () => expect(chinese ?? simplifiedChinese).not.toBeNull(),)
        }
        if (!excludedLanguages2.has('korean',))
            test('Korean', () => expect(korean).not.toBeNull(),)
    },)
}


/**
 * Test the english (or american english) to be within the possible names received
 *
 * @param content The content with the english reference retrieved
 * @param possibleNames The possible names of the english reference
 */
export function testEnglish({english, americanEnglish,}: LanguageContent, possibleNames: StringArray,) {
    test('English name (base or american)', () => expect(english ?? americanEnglish,).toBeOneOf(possibleNames,),)
}

/**
 * Test the english only to be within the possible names received
 *
 * @param content The content with the english reference retrieved
 * @param possibleNames The possible names of the english reference
 */
export function testOnlyEnglish({english,}: LanguageContent, possibleNames: StringArray,) {
    test('English name (base only)', () => expect(english,).toBeOneOf(possibleNames,),)
}
