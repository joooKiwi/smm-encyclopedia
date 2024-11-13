import file from 'resources/compiled/Sample course (SMM).json'

import type {Array} from '@joookiwi/type'

import type {PossibleExcludedLanguages}                                         from '__test__/helperMethods.types'
import type {PossibleAmountOfTime, PossibleFirstNumberInFirst10MarioChallenges} from 'core/sampleCourse/loader.types'

import {getEnglishName, testLanguages} from '__test__/helperMethods'
import {EveryTypes}                    from '__test__/EveryTypes'

describe('Sample course (file test)', () => {
    const types = EveryTypes.get
    const everyWorldNumber = types.everyPossibleWorldNumber_SampleCourse
    const possibleFirstNumberInFirst10MarioChallenge = [null, 1, 2, 3, 4, 5, 6, 7, 8,] as const satisfies Array<PossibleFirstNumberInFirst10MarioChallenges>
    const possibleGameStyle = types.everyPossibleAcronym_gameStyle_smm1
    const possibleTheme = types.everyPossibleName_courseTheme_smm1
    const possibleNullableTheme = [null, ...types.everyPossibleName_courseTheme_smm1,] as const
    const everyAmountOfTime = [50, 100, 300, 500,]                                     as const satisfies Array<PossibleAmountOfTime>
    const excludedLanguages = ['chinese', 'korean',]                                   as const satisfies Array<PossibleExcludedLanguages>

    file.forEach(it => describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        testLanguages(it, excludedLanguages,)

        describe('Type validation', () => {
            test('World number', () => expect(it.worldNumber,).toBeOneOf(everyWorldNumber,),)
            test('1st number in 1st 10 Mario Challenge', () => expect(it.courseNumberInFirst10MarioChallenge,).toBeOneOf(possibleFirstNumberInFirst10MarioChallenge,),)

            test('Game style', () => expect(it.gameStyle,).toBeOneOf(possibleGameStyle,),)
            test('Course theme (main area)', () => expect(it.courseTheme_mainArea,).toBeOneOf(possibleTheme,),)
            test('Course theme (sub area)', () => expect(it.courseTheme_subArea,).toBeOneOf(possibleNullableTheme,),)

            test('Amount of time', () => expect(it.amountOfTime,).toBeOneOf(everyAmountOfTime,),)
        },)
    },),)
},)
