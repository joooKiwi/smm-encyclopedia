import file from 'resources/compiled/Mii Costume (SMM2).json'

import type {PossibleExcludedLanguages} from '__test__/helperMethods.types'
import type {PossibleMarioMakerVersion} from 'core/miiCostume/loader.types'

import {EveryTypes}                                 from '__test__/EveryTypes'
import {getEnglishName, testEnglish, testLanguages} from '__test__/helperMethods'

describe('Mii costume (file test)', () => {
    const types = EveryTypes.get
    const everyNames = types.everyPossibleName_MiiCostume
    const everyOfficialNotifications = [null, ...types.everyPossibleNameWithAmount_officialNotification,] as const
    const possibleVersion = [null, '2.0.0', '3.0.0',] as const satisfies readonly PossibleMarioMakerVersion[]
    const everyCategories = types.everyPossibleName_MiiCostumeCategory
    const excludedLanguages: readonly PossibleExcludedLanguages[] = ['portuguese',]

    file.forEach(it => describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        testLanguages(it, excludedLanguages,)

        describe('Type validations', () => {
            test('Notification when it is unlocked', () => expect(it.notificationIfUnlocked,).toBeOneOf(everyOfficialNotifications,),)
            test('Version', () => expect(it.MM2_version,).toBeOneOf(possibleVersion,),)

            test('Category', () => expect(it.category,).toBeOneOf(everyCategories,),)
            testEnglish(it, everyNames,)
        },)
    },),)
},)
