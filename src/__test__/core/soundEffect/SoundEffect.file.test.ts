import file from 'resources/compiled/Sound effect.json'

import type {Array} from '@joookiwi/type'

import type {PossibleExcludedLanguages} from '__test__/helperMethods.types'

import {EveryTypes}                                     from '__test__/EveryTypes'
import {getEnglishName, testLanguages, testOnlyEnglish} from '__test__/helperMethods'

describe('Sound effect (file test)', () => {
    const types = EveryTypes.get
    const everyNames = types.everyPossibleName_soundEffect
    const everyCategoryNames = [null, ...types.everyPossibleName_soundEffectCategory,] as const
    const excludedLanguages = ['portuguese',]                                          as const satisfies Array<PossibleExcludedLanguages>

    file.forEach(it => {
    describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        //TODO add the sound effect names for the sound effect with no category
        // (Bird's Chirping, Distortion, Telephone, Festive Music, Rave Music, Bird's Tweeting Noise & Chicken Clucking Noise)
        // in German, Spanish, Italian, Dutch, Portuguese, Russian, Japanese, Chine & Korean
        testLanguages(it, excludedLanguages,)

        describe('Type validation', () => {
            test('In in SMM & SMM3DS', () => expect(it.isInSuperMarioMaker1And3DS,).toBeBoolean(),)
            test('In in SMM2', () => expect(it.isInSuperMarioMaker2,).toBeBoolean(),)

            test('Does trigger on the player (on jump after landing)', () => expect(it.doesTrigger_player_jumpAfterLanding,).toBeBoolean(),)
            test('Does trigger on the player (on a turn after being at maximum speed)', () => expect(it.doesTrigger_player_turnAroundAfterBeingAtFullSpeed,).toBeBoolean(),)
            test('Does trigger on the player (on crouch)', () => expect(it.doesTrigger_player_crouch,).toBeBoolean(),)
            test('Does trigger on the player (after 3 seconds of non-movement repeatedly)', () => expect(it.doesTrigger_player_after3SecondsRepeatedly,).toBeBoolean(),)
            test('Does trigger on the player (while collecting a power-up)', () => expect(it.doesTrigger_player_collectPowerUp,).toBeBoolean(),)
            test('Does trigger on the player (get in an entity (Clown Car, Cloud, Boot, Yoshi, Dry Bones Shell or Swinging Claw))', () => expect(it.doesTrigger_player_getIntoAnEntity,).toBeBoolean(),)
            test('Does trigger on the player (at spawn)', () => expect(it.doesTrigger_player_spawn,).toBeBoolean(),)
            test('Does trigger on the player (when getting damage)', () => expect(it.doesTrigger_player_damage,).toBeBoolean(),)
            test('Does trigger on the player (when a life is lost)', () => expect(it.doesTrigger_player_lostALife,).toBeBoolean(),)

            testOnlyEnglish(it, everyNames,)
            test('Category', () => expect(it.category,).toBeOneOf(everyCategoryNames,),)
        },)
    },)},)

},)
