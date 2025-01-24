import file from 'src/resources/compiled/Game reference.json' with {type: 'json',}

import type {Array}             from '@joookiwi/type'
import {describe, expect, test} from 'vitest'

import type {PossibleExcludedLanguages} from 'test/helperMethods.types'

import {EveryTypes}                                 from 'test/EveryTypes'
import {getEnglishName, testEnglish, testLanguages} from 'test/helperMethods'

describe('Game reference (file test)', () => {
    const types = EveryTypes.get
    const everyAcronyms = types.everyPossibleAcronym_gameReference
    const everyNames = types.everyPossibleName_gameReference
    const excludedLanguages = ['japanese', 'chinese', 'korean',] as const satisfies Array<PossibleExcludedLanguages>

    file.forEach(it => {
    describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        //TODO Complete the german, italian, dutch, spanish, portuguese & russian for the game reference:
        //  - (Pokémon Green Version)
        //  - Zelda II: The Adventure of Link
        testLanguages(it, excludedLanguages,)

        describe('Type validation', () => {
            test('Acronym', () => expect(it.acronym,).toBeOneOf(everyAcronyms,),)
            testEnglish(it, everyNames,)
        },)
    },)},)
},)
