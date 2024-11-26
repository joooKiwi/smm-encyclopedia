import file from 'resources/compiled/Entity limit.json' assert { type: 'json', }

import {EveryTypes}                                                from '__test__/EveryTypes'
import {getEnglishName, testOnlyEnglish, testOnlyEnglishAndFrench} from '__test__/helperMethods'
import {NOT_APPLICABLE, UNKNOWN_CHARACTER}                         from 'util/commonVariables'

describe('Limit (file test)', () => {
    const types = EveryTypes.get
    const everyNames = types.everyPossibleName_limit
    const everyAlternativeNames = types.everyPossibleAlternativeName_limit
    const everyAlternativeNamesOrNull = [null, ...types.everyPossibleAlternativeName_limit,] as const
    const everyAcronyms = [null, ...types.everyPossibleAcronym_limit,] as const
    const everyAlternativeAcronyms = [null, ...types.everyPossibleAlternativeAcronym_limit,] as const
    const everyTypes = types.everyPossibleName_limitType
    const everyLimitInSMM1And3DS = [null, NOT_APPLICABLE, ...types.everyPossibleAmount_smm1And3ds_limit,] as const
    const everyLimitInSMM2 = [null, ...types.everyPossibleAmount_smm2_limit,] as const
    const everyComment = [null, ...types.everyPossibleComment_limit,] as const
    const everyDescription = types.everyPossibleDescription_limit

    file.forEach(it => describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        const isAlternativeLimit = it.type == null

        testOnlyEnglishAndFrench(it,)

        describe('Type validations', () => {
            if (isAlternativeLimit) {
                test('Alternative', () => expect(it.alternative,).toBeNull(),)

                test('Type', () => expect(it.type,).toBeNull(),)
                test('Acronym', () => expect(it.acronym,).toBeOneOf(everyAlternativeAcronyms,),)

                describe('Limit in SMM & SMM3DW', () => {
                    test('value', () => expect(it.limit_SMM1And3DS,).toBeNull(),)
                    test('isUnknown', () => expect(it.limit_SMM1And3DS_isUnknown,).toBeNull(),)
                },)
                describe('Limit in SMM2', () => {
                    test('value', () => expect(it.limit_SMM2,).toBeNull(),)
                    test('isUnknown', () => expect(it.limit_SMM2_isUnknown,).toBeNull(),)
                },)
                test('Note', () => expect(it.limit_note,).toBeNull(),)
                test('Description', () => expect(it.description,).toBeNull(),)

                testOnlyEnglish(it, everyAlternativeNames,)
            } else {
                /* eslint-disable jest/no-identical-title */
                test('Alternative', () => expect(it.alternative,).toBeOneOf(everyAlternativeNamesOrNull,),)

                test('Type', () => expect(it.type,).toBeOneOf(everyTypes,),)
                test('Acronym', () => expect(it.acronym,).toBeOneOf(everyAcronyms,),)

                describe('Limit in SMM & SMM3DW', () => {
                    test('value', () => expect(it.limit_SMM1And3DS,).toBeOneOf(everyLimitInSMM1And3DS,),)
                    test('isUnknown', () => expect(it.limit_SMM1And3DS_isUnknown,).toBeBoolean(),)
                },)
                describe('Limit in SMM2', () => {
                    test('value', () => expect(it.limit_SMM2,).toBeOneOf(everyLimitInSMM2,),)
                    test('isUnknown', () => expect(it.limit_SMM2_isUnknown,).toBeBoolean(),)
                },)
                test('Note', () => expect(it.limit_note,).toBeOneOf(everyComment,),)
                test('Description', () => expect(it.description,).toBeOneOf(everyDescription,),)
                /* eslint-enable jest/no-identical-title */

                testOnlyEnglish(it, everyNames,)
            }
        },)
    },),)
},)
