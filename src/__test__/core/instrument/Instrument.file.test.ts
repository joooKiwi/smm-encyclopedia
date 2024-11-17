import file from 'resources/compiled/Instrument.json'

import {EveryTypes}                                                from '__test__/EveryTypes'
import {getEnglishName, testOnlyEnglish, testOnlyEnglishAndFrench} from '__test__/helperMethods'

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
                describe('Time', () => {
                    test("Day", () => expect(it.isInDayTime,).toBeBoolean(),)
                    test("Night", () => expect(it.isInNightTime,).toBeBoolean(),)
                },)
            },)

            testOnlyEnglish(it, everyNames,)
        },)
    },),)
},)
