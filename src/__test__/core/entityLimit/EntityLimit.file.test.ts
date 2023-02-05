import file from 'resources/compiled/Entity limit.json'

import {EveryTypes}                                                from '__test__/EveryTypes'
import {getEnglishName, testOnlyEnglish, testOnlyEnglishAndFrench} from '__test__/helperMethods'
import {NOT_APPLICABLE, UNKNOWN_CHARACTER}                         from 'util/commonVariables'

describe('Entity limit (file test)', () => {
    const types = EveryTypes.get,
        everyNames = types.everyPossibleName_limit,
        everyAlternativeNames = types.everyPossibleAlternativeName_limit,
        everyAlternativeNamesOrNull = [null, ...types.everyPossibleAlternativeName_limit,],
        everyAcronyms = [null, ...types.everyPossibleAcronym_limit,],
        everyAlternativeAcronyms = [null, ...types.everyPossibleAlternativeAcronym_limit,],
        everyTypes = types.everyPossibleName_limitType,
        everyLimitInSMM1And3DS = [null, UNKNOWN_CHARACTER, NOT_APPLICABLE, ...types.everyPossibleAmount_smm1And3ds_limit,],
        everyLimitInSMM2 = [null, UNKNOWN_CHARACTER, ...types.everyPossibleAmount_smm2_limit,],
        everyComment = [null, ...types.everyPossibleComment_limit,]

    file.forEach(it => describe(getEnglishName(it), () => {// eslint-disable-line jest/valid-title
        const isAlternativeLimit = it.type == null

        testOnlyEnglishAndFrench(it,)

        describe('Type validations', () => {
            if (isAlternativeLimit) {
                test('Alternative', () => expect(it.alternative).toBeNull())

                test('Type', () => expect(it.type).toBeNull())
                test('Acronym', () => expect(it.acronym).toBeOneOf(everyAlternativeAcronyms))

                test('Limit in SMM & SMM3DS', () => expect(it.limit_SMM1And3DS).toBeNull())
                test('Limit in SMM2', () => expect(it.limit_SMM2).toBeNull())
                test('Limit comment', () => expect(it.limit_comment).toBeNull())

                testOnlyEnglish(it, everyAlternativeNames,)
            } else {
                /* eslint-disable jest/no-identical-title */
                test('Alternative', () => expect(it.alternative).toBeOneOf(everyAlternativeNamesOrNull,))

                test('Type', () => expect(it.type).toBeOneOf(everyTypes))
                test('Acronym', () => expect(it.acronym).toBeOneOf(everyAcronyms))

                test('Limit in SMM & SMM3DS', () => expect(it.limit_SMM1And3DS).toBeOneOf(everyLimitInSMM1And3DS))
                test('Limit in SMM2', () => expect(it.limit_SMM2).toBeOneOf(everyLimitInSMM2))
                test('Limit comment', () => expect(it.limit_comment).toBeOneOf(everyComment))
                /* eslint-enable jest/no-identical-title */

                testOnlyEnglish(it, everyNames,)
            }
        },)
    },),)
},)
