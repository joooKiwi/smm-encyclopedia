import file from 'resources/compiled/Instrument.json'

import {EveryTypes}                                                from '__test__/EveryTypes'
import {getEnglishName, testOnlyEnglish, testOnlyEnglishAndFrench} from '__test__/helperMethods'

describe('Instrument (file test)', () => {
    const types = EveryTypes.get
    const everyNames = types.everyPossibleName_instrument

    file.forEach(it => describe(getEnglishName(it), () => {// eslint-disable-line jest/valid-title
        testOnlyEnglishAndFrench(it)

        describe('Type validations', () => {
            testOnlyEnglish(it, everyNames,)
        },)
    },),)
},)
