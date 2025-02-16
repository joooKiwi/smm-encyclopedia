import file from 'src/resources/compiled/Theme.json' with {type: 'json',}

import type {Array}             from '@joookiwi/type'
import {describe, expect, test} from 'vitest'

import type {PossibleExcludedLanguages} from 'test/helperMethods.types'

import {EveryTypes}                                     from 'test/EveryTypes'
import {getEnglishName, testLanguages, testOnlyEnglish} from 'test/helperMethods'

describe('Theme (file test)', () => {
    const types = EveryTypes.get
    const everyNames_nightEffect = types.everyPossibleName_themeNightEffect
    const everyNames = types.everyPossibleName_theme
    const excludedLanguages_SMM1 = ['portuguese',] as const satisfies Array<PossibleExcludedLanguages>

    file.forEach(it => {
    describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        const isSMM1Exclusive = it.isInSuperMarioMaker2 && !it.isInSuperMarioMaker1And3DS
        const isWorldOnly = !it.isInCourseTheme && it.isInWorldTheme
        //TODO Complete the german, italian, dutch, spanish, portuguese & russian for the game reference:
        //  - (Pokémon Green Version)
        //  - Zelda II: The Adventure of Link
        testLanguages(it, isSMM1Exclusive ? excludedLanguages_SMM1 : null,)

        describe('Type validation', () => {
            test('Is in course theme', () => expect(it.isInCourseTheme,).toBeBoolean(),)
            test('Is in world theme', () => expect(it.isInCourseTheme,).toBeBoolean(),)
            test('Is in SMM & SMM3DS', () => expect(it.isInSuperMarioMaker1And3DS,).toBeBoolean(),)
            test('Is in SMM2', () => expect(it.isInSuperMarioMaker2,).toBeTrue(),)
            test('Is available from the start (SMM1)', () => expect(it.isAvailableFromTheStart_SMM1,).toBeBooleanOrNull(),)
            if (isWorldOnly)
                test('Effect in the night theme', () => expect(it.effectInNightTheme,).toBeNull(),)
            else
                test('Effect in the night theme', () => expect(it.effectInNightTheme,).toBeOneOf(everyNames_nightEffect,),) 
            testOnlyEnglish(it, everyNames,)
        },)
    },)},)

},)
