import file from 'src/resources/compiled/Mii Costume (SMM2).json' with {type: 'json',}

import type {Array}             from '@joookiwi/type'
import {describe, expect, test} from 'vitest'

import type {PossibleMarioMakerVersion} from 'src/core/miiCostume/loader.types'
import type {PossibleExcludedLanguages} from 'test/helperMethods.types'

import {EveryTypes}                                 from 'test/EveryTypes'
import {getEnglishName, testEnglish, testLanguages} from 'test/helperMethods'

describe('Mii costume (file test)', () => {
    const types = EveryTypes.get
    const everyNames = types.everyPossibleName_MiiCostume
    const everyOfficialNotifications = [null, ...types.everyPossibleNameWithAmount_officialNotification,] as const
    const possibleVersion = [null, '2.0.0', '3.0.0',]                                                     as const satisfies Array<PossibleMarioMakerVersion>
    const everyCategories = types.everyPossibleName_MiiCostumeCategory
    const excludedLanguages = ['portuguese',]                                                             as const satisfies Array<PossibleExcludedLanguages>

    file.forEach(it => {
    describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        testLanguages(it, excludedLanguages,)

        describe('Type validations', () => {
            test('Notification when it is unlocked', () => expect(it.notificationIfUnlocked,).toBeOneOf(everyOfficialNotifications,),)
            test('Version', () => expect(it.MM2_version,).toBeOneOf(possibleVersion,),)

            test('Category', () => expect(it.category,).toBeOneOf(everyCategories,),)
            testEnglish(it, everyNames,)
        },)
    },)},)
},)
