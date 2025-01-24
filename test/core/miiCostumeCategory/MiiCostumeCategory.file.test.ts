import file from 'src/resources/compiled/Mii Costume category (SMM2).json' with {type: 'json',}

import {describe} from 'vitest'

import {EveryTypes}                                     from 'test/EveryTypes'
import {getEnglishName, testLanguages, testOnlyEnglish} from 'test/helperMethods'

describe('Mii costume category (file test)', () => {
    const types = EveryTypes.get
    const everyNames = types.everyPossibleName_MiiCostumeCategory

    file.forEach(it => describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        testLanguages(it,)

        describe('Type validations', () => {
            testOnlyEnglish(it, everyNames,)
        },)
    },),)
},)
