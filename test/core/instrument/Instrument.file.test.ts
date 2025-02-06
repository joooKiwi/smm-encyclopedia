import file from 'src/resources/compiled/Instrument.json' with {type: 'json',}

import {describe, expect, test} from 'vitest'

import {EveryTypes}                                                from 'test/EveryTypes'
import {getEnglishName, testOnlyEnglish, testOnlyEnglishAndFrench} from 'test/helperMethods'

describe('Instrument (file test)', () => {
    const types = EveryTypes.get
    const everyNames = types.everyPossibleName_instrument
    const everyEntityNamesOrNull = [null, ...types.everyPossibleName_entity] as const

    file.forEach(it => describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        testOnlyEnglishAndFrench(it)

        describe('Type validations', () => {
            describe('Entity reference', () => {
                test('Entity reference 1', () => expect(it.entityReference1,).toBeOneOf(everyEntityNamesOrNull,),)
                test('Entity reference 2', () => expect(it.entityReference2,).toBeOneOf(everyEntityNamesOrNull,),)
                test('Entity reference 3', () => expect(it.entityReference3,).toBeOneOf(everyEntityNamesOrNull,),)
                test('Entity reference 4', () => expect(it.entityReference4,).toBeOneOf(everyEntityNamesOrNull,),)
                test('Indirect entity reference', () => expect(it.indirectEntityReference,).toBeOneOf(everyEntityNamesOrNull,),)
            },)
            describe('Is in …', () => {
                describe('Game', () => {
                    test('SMM', () => expect(it.isInSuperMarioMaker1,).toBeBoolean(),)
                    test('SMM3DS', () => expect(it.isInSuperMarioMakerFor3DS,).toBeBoolean(),)
                    test('SMM2', () => expect(it.isInSuperMarioMaker2,).toBeTrue(),)
                },)
                describe('Game style', () => {
                    test('SMB', () => expect(it.isInSmbGameStyle,).toBeBoolean(),)
                    test('SMB3', () => expect(it.isInSmb3GameStyle,).toBeBoolean(),)
                    test('SMW', () => expect(it.isInSmwGameStyle,).toBeBoolean(),)
                    test('NSMBU', () => expect(it.isInNsmbuGameStyle,).toBeBoolean(),)
                    test('SM3DW', () => expect(it.isInSm3dwGameStyle,).toBeFalse(),)
                },)
                describe('Time', () => {
                    test("Day", () => expect(it.isInDayTime,).toBeBoolean(),)
                    test("Night", () => expect(it.isInNightTime,).toBeBoolean(),)
                },)
            },)

            testOnlyEnglish(it, everyNames,)
        },)
    },),)
},)
