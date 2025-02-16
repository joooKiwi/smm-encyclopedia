import file from 'src/resources/compiled/Official course (SMM).json' with {type: 'json',}

import type {Array}             from '@joookiwi/type'
import {describe, expect, test} from 'vitest'

import type {PossibleRemovalDate, PossibleReward} from 'src/core/officialCourse/loader.types'
import type {PossibleExcludedLanguages}           from 'test/helperMethods.types'

import {UNKNOWN_REFERENCE}                                                        from 'src/util/commonVariables'
import {EveryTypes}                                                               from 'test/EveryTypes'
import {getEnglishName, testLanguages, testLanguagesDescription, testOnlyEnglish} from 'test/helperMethods'

describe('Official course (file test)', () => {
    const types = EveryTypes.get

    const everyReward = [null, ...types.everyPossibleReward_officialCourse,]                                 as const satisfies Array<PossibleReward>
    const possibleReleaseDate = types.everyPossibleReleaseDate_officialCourse
    const possibleRemovalDate = [null, UNKNOWN_REFERENCE, ...types.everyPossibleRemovalDate_officialCourse,] as const satisfies Array<PossibleRemovalDate>
    const possibleGameStyle = types.everyPossibleAcronym_gameStyle_smm1
    const everyNames = types.everyPossibleEnglishName_officialCourse
    const possibleTheme = types.everyPossibleName_courseTheme_smm1
    const possibleNullableTheme = [null, ...types.everyPossibleName_courseTheme_smm1,]                       as const
    const excludedLanguages = ['chinese', 'korean',]                                                         as const satisfies Array<PossibleExcludedLanguages>

    file.forEach(it => {
    describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title

        testLanguages(it, excludedLanguages,)
        testLanguagesDescription(it, excludedLanguages,)

        describe('Type validation', () => {
            test('Reward', () => expect(it.reward,).toBeOneOf(everyReward,),)
            test('Release date', () => expect(it.releaseDate,).toBeOneOf(possibleReleaseDate,),)
            test('Removal date', () => expect(it.removalDate,).toBeOneOf(possibleRemovalDate,),)

            test('Game style', () => expect(it.gameStyle,).toBeOneOf(possibleGameStyle,),)
            test('Course theme (main area)', () => expect(it.courseTheme_mainArea,).toBeOneOf(possibleTheme,),)
            test('Course theme (sub area)', () => expect(it.courseTheme_subArea,).toBeOneOf(possibleNullableTheme,),)

            testOnlyEnglish(it, everyNames,)
            test('American english', () => expect(it.americanEnglish,).toBeNull(),)
            test('European english', () => expect(it.europeanEnglish,).toBeNull(),)
            test('Dutch', () => expect(it.dutch,).toBe(UNKNOWN_REFERENCE,),)
            test('Portuguese', () => expect(it.portuguese,).toBe(UNKNOWN_REFERENCE,),)
            test('American portuguese', () => expect(it.americanPortuguese,).toBeNull(),)
            test('European portuguese', () => expect(it.europeanPortuguese,).toBeNull(),)
            test('Chinese', () => expect(it.chinese,).toBeNull(),)
            test('Traditional chinese', () => expect(it.traditionalChinese,).toBeNull(),)
            test('Simplified chinese', () => expect(it.simplifiedChinese,).toBeNull(),)
            test('Korean', () => expect(it.korean,).toBeNull(),)
            describe('Description', () => {
                test('American english', () => expect(it.americanEnglish_description,).toBeNull(),)
                test('European english', () => expect(it.europeanEnglish_description,).toBeNull(),)
                test('Dutch', () => expect(it.dutch_description,).toBe(UNKNOWN_REFERENCE,),)
                test('Italian', () => expect(it.italian_description,).toBe(UNKNOWN_REFERENCE,),)
                test('Portuguese', () => expect(it.portuguese_description,).toBe(UNKNOWN_REFERENCE,),)
                test('American portuguese', () => expect(it.americanPortuguese_description,).toBeNull(),)
                test('European portuguese', () => expect(it.europeanPortuguese_description,).toBeNull(),)
                test('Russian', () => expect(it.russian_description,).toBe(UNKNOWN_REFERENCE,),)
                test('Japanese', () => expect(it.japanese_description,).toBe(UNKNOWN_REFERENCE,),)
                test('Chinese', () => expect(it.chinese,).toBeNull(),)
                test('Traditional chinese', () => expect(it.traditionalChinese,).toBeNull(),)
                test('Simplified chinese', () => expect(it.simplifiedChinese,).toBeNull(),)
                test('Korean', () => expect(it.korean,).toBeNull(),)
            },)
        },)
    },)},)
},)
