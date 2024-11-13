import file from 'resources/compiled/Predefined message (SMM2).json'

import type {Array} from '@joookiwi/type'

import type {PossibleExcludedLanguages} from '__test__/helperMethods.types'

import {EveryTypes}                                     from '__test__/EveryTypes'
import {getEnglishName, testLanguages, testOnlyEnglish} from '__test__/helperMethods'

describe('Predefined message (file test)', () => {
    const types = EveryTypes.get
    const everyNames = types.everyPossibleName_predefinedMessage
    const excludedLanguages = ['portuguese',] as const satisfies Array<PossibleExcludedLanguages>

    file.forEach(it => describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        testLanguages(it, excludedLanguages,)

        describe('Type validation', () => {
            testOnlyEnglish(it, everyNames,)
        },)
    },),)
},)
