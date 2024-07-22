import file from 'resources/compiled/Character name.json'

import type {PossibleExcludedLanguages} from '__test__/helperMethods.types'

import {EveryTypes}                                                           from '__test__/EveryTypes'
import {getEnglishName, testEnglish, testLanguages, testOnlyEnglishAndFrench} from '__test__/helperMethods'

describe('Character name (file test)', () => {
    const types = EveryTypes.get
    const everyNames = types.everyPossibleName_characterName
    const everyUniqueNames = types.everyPossibleUniqueName_characterName
    const luigiToadOrToadette = / (Luigi)|(Toad)|(Toadette)/
    const excludedNames_smm1: readonly PossibleExcludedLanguages[] = ['chinese', 'korean',]
    const excludedNames_smm2: readonly PossibleExcludedLanguages[] = ['portuguese',]

    file.forEach(it => describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        const isAddedLuigiToadOrToadette = luigiToadOrToadette.test(it.uniqueName,)
        isAddedLuigiToadOrToadette
            ? testOnlyEnglishAndFrench(it,)//TODO add other languages on the added (Luigi, Toad & Toadette) for the non-English & english
            : testLanguages(it, it.isInSuperMarioMaker1 && !it.isInSuperMarioMakerFor3DS && !it.isInSuperMarioMaker2 ? excludedNames_smm1 : excludedNames_smm2,)
        //TODO add Undodog (SMM) in japanese, chinese & korean
        //TODO add Mary O. in japanese & chinese
        //TODO add Parakeet in japanese, chinese & korean

        describe('Type validations', () => {
            describe('Is in game', () => {
                test('SMM', () => expect(it.isInSuperMarioMaker1,).toBeBoolean(),)
                test('SMM3DS', () => expect(it.isInSuperMarioMakerFor3DS,).toBeBoolean(),)
                test('SMM2', () => expect(it.isInSuperMarioMaker2,).toBeBoolean(),)
            },)
            test('Has a name said in Mario Maker', () => expect(it.hasNameSaidInTheEditor,).toBeBoolean(),)
            test('Unique name', () => expect(it.uniqueName,).toBeOneOf(everyUniqueNames,),)
            testEnglish(it, everyNames,)
        },)
    },),)
},)
