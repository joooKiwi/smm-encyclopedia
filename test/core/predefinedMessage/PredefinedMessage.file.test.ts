import file from 'src/resources/compiled/Predefined message (SMM2).json' with {type: 'json',}

import type {Array} from '@joookiwi/type'
import {describe}   from 'vitest'

import type {PossibleExcludedLanguages} from 'test/helperMethods.types'

import {EveryTypes}                                     from 'test/EveryTypes'
import {getEnglishName, testLanguages, testOnlyEnglish} from 'test/helperMethods'

describe('Predefined message (file test)', () => {
    const types = EveryTypes.get
    const everyNames = types.everyPossibleName_predefinedMessage
    const excludedLanguages = ['portuguese',] as const satisfies Array<PossibleExcludedLanguages>

    file.forEach(it => {
    describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        testLanguages(it, excludedLanguages,)

        describe('Type validation', () => {
            testOnlyEnglish(it, everyNames,)
        },)
    },)},)
},)
