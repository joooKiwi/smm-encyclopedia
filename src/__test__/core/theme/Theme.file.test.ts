import file from 'resources/compiled/Theme.json'

import type {PossibleExcludedLanguages} from '__test__/helperMethods.types'

import {EveryTypes}                                     from '__test__/EveryTypes'
import {getEnglishName, testLanguages, testOnlyEnglish} from '__test__/helperMethods'

describe('Theme (file test)', () => {
    const types = EveryTypes.get,
        everyNames_nightEffect = types.everyPossibleName_themeNightEffect,
        everyNames = types.everyPossibleName_theme,
        excludedLanguages_SMM1: readonly PossibleExcludedLanguages[] = ['portuguese',]

    file.forEach(it => describe(getEnglishName(it), () => {// eslint-disable-line jest/valid-title
        const isSMM1Exclusive = it.isInSuperMarioMaker2 && !it.isInSuperMarioMaker1And3DS,
            isWorldOnly = !it.isInCourseTheme && it.isInWorldTheme
        //TODO Complete the german, italian, dutch, spanish, portuguese & russian for the game reference:
        //  - (Pokémon Green Version)
        //  - Zelda II: The Adventure of Link
        testLanguages(it, isSMM1Exclusive ? excludedLanguages_SMM1 : null,)

        describe('Type validation', () => {
            test('Is in course theme', () => expect(it.isInCourseTheme).toBeBoolean(),)
            test('Is in world theme', () => expect(it.isInCourseTheme).toBeBoolean(),)
            test('Is in SMM & SMM3DS', () => expect(it.isInSuperMarioMaker1And3DS).toBeBoolean(),)
            test('Is in SMM2', () => expect(it.isInSuperMarioMaker2).toBeBoolean(),)
            test('Is available from the start (SMM1)', () => expect(it.isAvailableFromTheStart_SMM1).toBeBooleanOrNull(),)
            isWorldOnly
                ? test('Effect in the night theme', () => expect(it.effectInNightTheme).toBeNull())
                : test('Effect in the night theme', () => expect(it.effectInNightTheme).toBeOneOf(everyNames_nightEffect),)// eslint-disable-line jest/no-identical-title
            testOnlyEnglish(it, everyNames,)
        },)
    }))

},)