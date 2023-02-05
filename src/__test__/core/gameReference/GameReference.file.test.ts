import file from 'resources/compiled/Game reference.json'

import type {PossibleExcludedLanguages} from '__test__/helperMethods.types'

import {EveryTypes}                                 from '__test__/EveryTypes'
import {getEnglishName, testEnglish, testLanguages} from '__test__/helperMethods'

describe('Game reference (file test)', () => {
    const types = EveryTypes.get,
        everyAcronyms = types.everyPossibleAcronym_gameReference,
        everyNames = types.everyPossibleName_gameReference,
        excludedLanguages: readonly PossibleExcludedLanguages[] = ['japanese', 'chinese', 'korean',]

    file.forEach(it => describe(getEnglishName(it), () => {// eslint-disable-line jest/valid-title
        //TODO Complete the german, italian, dutch, spanish, portuguese & russian for the game reference:
        //  - (Pokémon Green Version)
        //  - Zelda II: The Adventure of Link
        testLanguages(it, excludedLanguages,)

        describe('Type validation', () => {
            test('Acronym', () => expect(it.acronym).toBeOneOf(everyAcronyms),)
            testEnglish(it, everyNames,)
        },)
    },))
},)