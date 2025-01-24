import file from 'src/resources/compiled/Course tag (SMM2).json' with {type: 'json'}

import type {Array}             from '@joookiwi/type'
import {describe, expect, test} from 'vitest'

import type {PossibleFirstAppearanceInMarioMaker} from 'src/core/courseTag/loader.types'
import type {PossibleExcludedLanguages}           from 'test/helperMethods.types'

import {EveryTypes}                                                               from 'test/EveryTypes'
import {getEnglishName, testLanguages, testOnlyEnglish, testOnlyEnglishAndFrench} from 'test/helperMethods'

describe('Course tag (file test)', () => {
    const types = EveryTypes.get
    const everyNames = types.everyPossibleName_courseTag
    const everyMakerCentralName = [null, ...types.everyPossibleMakerCentralName_courseTag,] as const
    const possibleFirstAppearance = [null, 'v1.0.0', 'v3.0.0',]                             as const satisfies Array<PossibleFirstAppearanceInMarioMaker>
    const excludedNames = ['portuguese',]                                                   as const satisfies Array<PossibleExcludedLanguages>

    file.forEach(it => {
    describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        it.isAnOfficialTag
            ? testLanguages(it, excludedNames,)
            : testOnlyEnglishAndFrench(it)

        describe('Type validations', () => {
            test('Is an official tag', () => expect(it.isAnOfficialTag,).toBeBoolean(),)
            test('Maker Central name', () => expect(it.makerCentralName,).toBeOneOf(everyMakerCentralName,),)
            test('First appearance', () => expect(it.firstAppearanceInMarioMaker,).toBeOneOf(possibleFirstAppearance,),)

            testOnlyEnglish(it, everyNames,)
        },)
    },)},)
},)
