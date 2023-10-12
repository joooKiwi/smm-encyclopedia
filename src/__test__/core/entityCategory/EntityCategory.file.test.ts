import file from 'resources/compiled/Entity category.json'

import type {PossibleExcludedLanguages} from '__test__/helperMethods.types'

import {EveryTypes}                                     from '__test__/EveryTypes'
import {getEnglishName, testLanguages, testOnlyEnglish} from '__test__/helperMethods'

describe('Entity category (file test)', () => {
    const types = EveryTypes.get
    const everyNames = types.everyPossibleName_entityCategory
    const excludedNames: readonly PossibleExcludedLanguages[] = ['portuguese',]

    file.forEach(it => describe(getEnglishName(it), () => {// eslint-disable-line jest/valid-title
        testLanguages(it, excludedNames,)

        describe('Type validations', () => {
            testOnlyEnglish(it, everyNames,)
        },)
    },),)
},)
