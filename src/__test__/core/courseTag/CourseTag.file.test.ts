import file from 'resources/compiled/Course tag (SMM2).json'

import type {PossibleExcludedLanguages}                      from '__test__/helperMethods.types'
import type {PossibleName_SMM2 as PossibleName_Version_SMM2} from 'core/version/Versions.types'
import type {NullOr}                                         from 'util/types/nullable'

import {EveryTypes}                                                               from '__test__/EveryTypes'
import {getEnglishName, testLanguages, testOnlyEnglish, testOnlyEnglishAndFrench} from '__test__/helperMethods'

describe('Course tag (file test)', () => {
    const types = EveryTypes.get,
        everyNames = types.everyPossibleName_courseTag,
        everyMakerCentralName = [null, ...types.everyPossibleMakerCentralName_courseTag,],
        possibleFirstAppearance: readonly NullOr<PossibleName_Version_SMM2>[] = [null, 'v1.0.0', 'v3.0.0',],
        excludedNames: readonly PossibleExcludedLanguages[] = ['portuguese',]

    file.forEach(it => describe(getEnglishName(it), () => {// eslint-disable-line jest/valid-title
        it.isAnOfficialTag
            ? testLanguages(it, excludedNames,)
            : testOnlyEnglishAndFrench(it)

        describe('Type validations', () => {
            test('Is an official tag', () => expect(it.isAnOfficialTag).toBeBoolean())
            test('Maker Central name', () => expect(it.makerCentralName).toBeOneOf(everyMakerCentralName))
            test('First appearance', () => expect(it.firstAppearanceInMarioMaker).toBeOneOf(possibleFirstAppearance))

            testOnlyEnglish(it, everyNames,)
        },)
    },),)
},)
