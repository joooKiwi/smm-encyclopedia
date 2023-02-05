import file from 'resources/compiled/Predefined message (SMM2).json'

import type {PossibleExcludedLanguages} from '__test__/helperMethods.types'

import {EveryTypes}                                     from '__test__/EveryTypes'
import {getEnglishName, testLanguages, testOnlyEnglish} from '__test__/helperMethods'

describe('Predefined message (file test)', () => {
    const types = EveryTypes.get,
        everyNames = types.everyPossibleName_predefinedMessage,
        excludedLanguages: readonly PossibleExcludedLanguages[] = ['portuguese',]

    file.forEach(it => describe(getEnglishName(it), () => {// eslint-disable-line jest/valid-title
        testLanguages(it, excludedLanguages,)

        describe('Type validation', () => {
            testOnlyEnglish(it, everyNames,)
        },)
    },),)
},)