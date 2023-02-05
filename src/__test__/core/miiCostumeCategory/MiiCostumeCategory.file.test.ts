import file from 'resources/compiled/Mii Costume category (SMM2).json'

import {EveryTypes}                                     from '__test__/EveryTypes'
import {getEnglishName, testLanguages, testOnlyEnglish} from '__test__/helperMethods'

describe('Mii costume category (file test)', () => {
    const types = EveryTypes.get,
        everyNames = types.everyPossibleName_MiiCostumeCategory

    file.forEach(it => describe(getEnglishName(it), () => {// eslint-disable-line jest/valid-title
        testLanguages(it,)

        describe('Type validations', () => {
            testOnlyEnglish(it, everyNames,)
        },)
    },),)
},)
