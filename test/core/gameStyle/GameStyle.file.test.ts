import file from 'src/resources/compiled/Game style.json' with {type: 'json',}

import type {Array}             from '@joookiwi/type'
import {describe, expect, test} from 'vitest'

import type {PossibleAcronym}                                                    from 'src/core/gameStyle/GameStyles.types'
import type {PossibleNightDesertWindDirection, PossibleNightDesertWindFrequency} from 'src/core/gameStyle/loader.types'

describe('Game style (file test)', () => {
    const possibleAcronyms = ['SMB', 'SMB3', 'SMW', 'NSMBU', 'SM3DW',] as const satisfies Array<PossibleAcronym>
    const possibleNightWindDirection = ['←', '↔', '→',]                as const satisfies Array<PossibleNightDesertWindDirection>
    const possibleNightWindFrequency = ['periodic', 'constant',]       as const satisfies Array<PossibleNightDesertWindFrequency>

    file.forEach(it => {
    describe(it.reference, () => {// eslint-disable-line jest/valid-title
        const isSM3DW = it.reference === 'SM3DW'

        describe('Type validations', () => {
            test('Reference', () => expect(it.reference,).toBeOneOf(possibleAcronyms,),)
            test('Is in SMM2', () => expect(it.isInSuperMarioMaker2,).toBeTrue(),)

            if (isSM3DW) {
                test('Is in SMM & SMM3DS', () => expect(it.isInSuperMarioMaker1And3DS,).toBeFalse(),)

                test('Is available from the start (in Smm1)', () => expect(it.isAvailableFromTheStart_Smm1,).toBeNull(),)
                test('Is available from the start (in Smm3ds)', () => expect(it.isAvailableFromTheStart_Smm3ds,).toBeNull(),)

                test('Night desert wind direction', () => expect(it.nightDesertWindDirection,).toBeNull(),)
                test('Night desert wind frequency', () => expect(it.nightDesertWindFrequency,).toBeNull(),)
            } else {
                /* eslint-disable jest/no-identical-title */
                test('Is in SMM & SMM3DS', () => expect(it.isInSuperMarioMaker1And3DS,).toBeTrue(),)

                test('Is available from the start (in Smm1)', () => expect(it.isAvailableFromTheStart_Smm1,).toBeBoolean(),)
                test('Is available from the start (in Smm3ds)', () => expect(it.isAvailableFromTheStart_Smm3ds,).toBeTrue(),)

                test('Night desert wind direction', () => expect(it.nightDesertWindDirection,).toBeOneOf(possibleNightWindDirection,),)
                test('Night desert wind frequency', () => expect(it.nightDesertWindFrequency,).toBeOneOf(possibleNightWindFrequency,),)
                /* eslint-enable jest/no-identical-title */
            }

        },)
    },)},)
},)
