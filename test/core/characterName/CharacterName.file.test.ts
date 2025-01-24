import file from 'src/resources/compiled/Character name.json' with {type: 'json',}

import type {Array}             from '@joookiwi/type'
import {describe, expect, test} from 'vitest'

import type {PossibleExcludedLanguages} from 'test/helperMethods.types'

import {EveryTypes}                                                           from 'test/EveryTypes'
import {getEnglishName, testEnglish, testLanguages, testOnlyEnglishAndFrench} from 'test/helperMethods'

describe('Character name (file test)', () => {
    const types = EveryTypes.get
    const everyNames = types.everyPossibleName_characterName
    const everyUniqueNames = types.everyPossibleUniqueName_characterName
    const luigiToadOrToadette = / (Luigi)|(Toad)|(Toadette)/
    const excludedNames_smm1 = ['chinese', 'korean',] as const satisfies Array<PossibleExcludedLanguages>
    const excludedNames_smm2 = ['portuguese',]        as const satisfies Array<PossibleExcludedLanguages>

    file.forEach(it => {
    describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        const isAddedLuigiToadOrToadette = luigiToadOrToadette.test(it.uniqueName,)
        if (isAddedLuigiToadOrToadette)
            testOnlyEnglishAndFrench(it,)//TODO add other languages on the added (Luigi, Toad & Toadette) for the non-English & english
        else
            testLanguages(it, it.isInSuperMarioMaker1 && !it.isInSuperMarioMakerFor3DS && !it.isInSuperMarioMaker2 ? excludedNames_smm1 : excludedNames_smm2,)
        //TODO add Undodog (SMM) in japanese, chinese & korean
        //TODO add Mary O. in japanese & chinese
        //TODO add Parakeet in japanese, chinese & korean

        describe('Type validations', () => {
            describe('Is in …', () => {
                describe('Game', () => {
                    test('SMM', () => expect(it.isInSuperMarioMaker1,).toBeBoolean(),)
                    test('SMM3DS', () => expect(it.isInSuperMarioMakerFor3DS,).toBeBoolean(),)
                    test('SMM2', () => expect(it.isInSuperMarioMaker2,).toBeBoolean(),)
                },)
                describe('Time', () => {
                    test("Day", () => expect(it.isInDayTime,).toBeBoolean(),)
                    test("Night", () => expect(it.isInNightTime,).toBeBoolean(),)
                },)
            },)
            test('Has a name said in Mario Maker', () => expect(it.hasNameSaidInTheEditor,).toBeBoolean(),)
            test('Unique name', () => expect(it.uniqueName,).toBeOneOf(everyUniqueNames,),)
            testEnglish(it, everyNames,)
        },)
    },)},)
},)
