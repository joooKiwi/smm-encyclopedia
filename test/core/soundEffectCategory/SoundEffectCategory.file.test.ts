import file from 'src/resources/compiled/Sound effect category.json' with {type: 'json',}

import type {Array} from '@joookiwi/type'
import {describe}   from 'vitest'

import type {PossibleExcludedLanguages} from 'test/helperMethods.types'

import {EveryTypes}                                     from 'test/EveryTypes'
import {getEnglishName, testLanguages, testOnlyEnglish} from 'test/helperMethods'

describe('Sound effect category (file test)', () => {
    const types = EveryTypes.get
    const everyNames = types.everyPossibleName_soundEffectCategory
    const excludedLanguages = ['portuguese',] as const satisfies Array<PossibleExcludedLanguages>

    file.forEach(it => {
    describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        testLanguages(it, excludedLanguages,)

        describe('Type validations', () => {
            testOnlyEnglish(it, everyNames,)
        },)
    },)},)
},)
