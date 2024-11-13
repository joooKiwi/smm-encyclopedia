import file from 'resources/compiled/Sound effect category.json'

import type {Array} from '@joookiwi/type'

import type {PossibleExcludedLanguages} from '__test__/helperMethods.types'

import {EveryTypes}                                     from '__test__/EveryTypes'
import {getEnglishName, testLanguages, testOnlyEnglish} from '__test__/helperMethods'

describe('Sound effect category (file test)', () => {
    const types = EveryTypes.get
    const everyNames = types.everyPossibleName_soundEffectCategory
    const excludedLanguages = ['portuguese',] as const satisfies Array<PossibleExcludedLanguages>

    file.forEach(it => {
    describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        testLanguages(it, excludedLanguages,)

        describe('Type validations', () => {
            testOnlyEnglish(it, everyNames,)//TODO add german value on the Feelings, Stingers & Music
        },)
    },)},)
},)
