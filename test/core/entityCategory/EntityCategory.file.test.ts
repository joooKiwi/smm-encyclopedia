import file from 'src/resources/compiled/Entity category.json' with {type: 'json',}

import type {Array} from '@joookiwi/type'
import {describe}   from 'vitest'

import type {PossibleExcludedLanguages} from 'test/helperMethods.types'

import {EveryTypes}                                     from 'test/EveryTypes'
import {getEnglishName, testLanguages, testOnlyEnglish} from 'test/helperMethods'

describe('Entity category (file test)', () => {
    const types = EveryTypes.get
    const everyNames = types.everyPossibleName_entityCategory
    const excludedNames = ['portuguese',] as const satisfies Array<PossibleExcludedLanguages>

    file.forEach(it => {
    describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        testLanguages(it, excludedNames,)

        describe('Type validations', () => {
            testOnlyEnglish(it, everyNames,)
        },)
    },)},)
},)
