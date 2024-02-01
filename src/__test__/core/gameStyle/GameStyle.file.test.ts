import file from 'resources/compiled/Game style.json'

import type {PossibleAcronym}                                                    from 'core/gameStyle/GameStyles.types'
import type {PossibleNightDesertWindDirection, PossibleNightDesertWindFrequency} from 'core/gameStyle/loader.types'

describe('Game style (file test)', () => {
    const possibleAcronyms = ['SMB', 'SMB3', 'SMW', 'NSMBU', 'SM3DW',] as const satisfies readonly PossibleAcronym[]
    const possibleNightWindDirection = ['←', '↔', '→',]                as const satisfies readonly PossibleNightDesertWindDirection[]
    const possibleNightWindFrequency = ['periodic', 'constant',]       as const satisfies readonly PossibleNightDesertWindFrequency[]

    file.forEach(it => describe(it.reference, () => {// eslint-disable-line jest/valid-title
        const isSM3DW = it.reference === 'SM3DW'

        describe('Type validations', () => {
            test('Reference', () => expect(it.reference,).toBeOneOf(possibleAcronyms,),)
            test('Is in SMM2', () => expect(it.isInSuperMarioMaker2,).toBeTrue(),)

            if (isSM3DW) {
                test('Is in SMM & SMM3DS', () => expect(it.isInSuperMarioMaker1And3DS,).toBeFalse(),)

                test('Is available from the start (in SMM)', () => expect(it.isAvailableFromTheStart_SMM1,).toBeNull(),)

                test('Night desert wind direction', () => expect(it.nightDesertWindDirection,).toBeNull(),)
                test('Night desert wind frequency', () => expect(it.nightDesertWindFrequency,).toBeNull(),)
            } else {
                /* eslint-disable jest/no-identical-title */
                test('Is in SMM & SMM3DS', () => expect(it.isInSuperMarioMaker1And3DS,).toBeTrue(),)

                test('Is available from the start (in SMM)', () => expect(it.isAvailableFromTheStart_SMM1,).toBeBoolean(),)

                test('Night desert wind direction', () => expect(it.nightDesertWindDirection,).toBeOneOf(possibleNightWindDirection,),)
                test('Night desert wind frequency', () => expect(it.nightDesertWindFrequency,).toBeOneOf(possibleNightWindFrequency,),)
                /* eslint-enable jest/no-identical-title */
            }

        },)
    },),)
},)
