import file from 'resources/compiled/Mystery Mushroom (SMM).json'

import type {Array, NullOr} from '@joookiwi/type'

import type {PossibleExcludedLanguages}                                                                                                                           from '__test__/helperMethods.types'
import type {AdditionalSoundOnDeath, AdditionalSoundOnGoalPole, PossibleAmountOfSoundEffectOnJump, SoundEffectOnMovement, SpecialMusicInStarMode, TypeOfSoundOnDeath, TypeOfSoundOnGoalPole} from 'core/mysteryMushroom/MysteryMushroom.types'

import {EveryTypes}                                 from '__test__/EveryTypes'
import {getEnglishName, testEnglish, testLanguages} from '__test__/helperMethods'
import {NOT_APPLICABLE, UNKNOWN_REFERENCE}          from 'util/commonVariables'

describe('Mystery Mushroom (file test)', () => {
    const types = EveryTypes.get
    const everyConditionToUnlock = types.everyPossibleConditionToUnlockIt_mysteryMushroom
    const everyVersionOrDate = [...types.everyPossibleName_version_smm, ...types.everyPossibleReleaseDate_officialCourse,]                                                                       as const
    const everyGameReferenceAcronymWithPokemon = [...types.everyPossibleAcronym_gameReference, ...types.everyPossiblePokemonGeneration_gameReference,]                                           as const
    const everyGameReferenceAcronymWithPokemonAndNullAndUnknown = [null, UNKNOWN_REFERENCE, ...types.everyPossibleAcronym_gameReference, ...types.everyPossiblePokemonGeneration_gameReference,] as const
    const everyGameReferenceAcronymsWithNull = [null, ...types.everyPossibleAcronym_gameReference,]                                                                                              as const
    const everySoundEffectOnGoalPoleSmallDefinition = [null, UNKNOWN_REFERENCE, ...types.everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom,]                                    as const
    const everySoundEffectOnDeathSmallDefinition = [null, UNKNOWN_REFERENCE, ...types.everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom,]                                          as const
    const possibleAmountOfSoundEffectOnJump = [0, 1, 2, 3,]                                                                                                                                      as const satisfies Array<PossibleAmountOfSoundEffectOnJump>
    const possibleSoundEffectOnMovement = [null, 'Twinkle', 'Engine sound',]                                                                                                                     as const satisfies Array<NullOr<SoundEffectOnMovement>>
    const possibleSpecialMusicInStarMode = [null, 'Flying Mario', 'Metal Mario', 'Super Star',]                                                                                                  as const satisfies Array<NullOr<SpecialMusicInStarMode>>
    const possibleSoundEffectOnGoalPoleType = [null, 'Marimba', 'Rock',]                                                                                                                         as const satisfies Array<NullOr<TypeOfSoundOnGoalPole>>
    const possibleSoundEffectOnGoalPole = [null, '+ sound', '+ "Yatta"', '+ barks', '+ "Yeah"', '+ humming', '+ singing', '+ Car sound',]                                                        as const satisfies Array<NullOr<AdditionalSoundOnGoalPole>>
    const possibleSoundEffectOnDeathType = [null, 'Marimba', 'Techno',]                                                                                                                          as const satisfies Array<NullOr<TypeOfSoundOnDeath>>
    const possibleSoundEffectOnDeath = [null, '+ "Rooo…"', '+ "Oh no!"', '+ "Nooo!"', '+ "Woah!"', '+ "Yaha!"',]                                                                                 as const satisfies Array<NullOr<AdditionalSoundOnDeath>>
    const everyNames = types.everyPossibleUniqueEnglishName_mysteryMushroom
    const excludedLanguages = ['chinese', 'korean',]                                                                                                                                             as const satisfies Array<PossibleExcludedLanguages>

    file.forEach(it => describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        const isMysteryMushroom = it.uniqueName === 'Mystery Mushroom'

        testLanguages(it, excludedLanguages,)

        describe('Type validation', () => {
            test('Condition to unlock it', () => expect(it.conditionToUnlockIt,).toBeOneOf(everyConditionToUnlock,),)
            test('Can be unlocked by an Amiibo', () => expect(it.canBeUnlockedByAnAmiibo,).toBeBoolean(),)
            if (it.firstAppearanceInMarioMaker == null) //TODO make the test work for a non-null value instead of ignoring it
                test.skip('First appearance (skipped)',() => { throw new Error('This test should not work in normal circumstance!',) },)
            else
                test('First appearance', () => expect(it.firstAppearanceInMarioMaker,).toBeOneOf(everyVersionOrDate,),)
            test('Reference', () => expect(it.reference).toBeOneOf(everyGameReferenceAcronymWithPokemon,),)

            test('Unique name', () => expect(it.uniqueName).toBeOneOf(everyNames,),)

            if (isMysteryMushroom) {
                test('Have a sound effect when collected (game)', () => expect(it.haveASoundEffectWhenCollected_game,).toBeNull(),)
                test('Have a sound effect when collected', () => expect(it.haveASoundEffectWhenCollected,).toBe(NOT_APPLICABLE,),)

                test('Have a sound effect on the taunt (game)', () => expect(it.haveASoundEffectOnTaunt_game,).toBeNull(),)
                test('Have a sound effect on the taunt', () => expect(it.haveASoundEffectOnTaunt,).toBe(NOT_APPLICABLE,),)

                test('Have a sound effect on a jump (game)', () => expect(it.haveASoundEffectOnJump_game,).toBeNull(),)
                test('Have a sound effect on a jump (amount)', () => expect(it.haveASoundEffectOnJump_amount,).toBeNull(),)
                test('Have a sound effect on a jump (multiple image)', () => expect(it.haveASoundEffectOnJump_multipleImage,).toBe(NOT_APPLICABLE,),)
                test('Have a sound effect on a jump', () => expect(it.haveASoundEffectOnJump,).toBe(NOT_APPLICABLE,),)

                test('Have a sound effect on the ground after a jump (game)', () => expect(it.haveASoundEffectOnGroundAfterJump_game,).toBeNull(),)
                test('Have a sound effect on the ground after a jump', () => expect(it.haveASoundEffectOnGroundAfterJump,).toBe(NOT_APPLICABLE,),)

                test('Sound effect on movement (sound)', () => expect(it.soundEffectOnMovement_sound,).toBeNull(),)
                test('Sound effect on movement', () => expect(it.soundEffectOnMovement,).toBe(NOT_APPLICABLE,),)

                test('Have a sound effect when turning after running', () => expect(it.haveASoundEffectOnTurnAfterRun,).toBe(NOT_APPLICABLE,),)

                test('Have a special music when in Star mode (game)', () => expect(it.haveASpecialMusicInStarMode_game,).toBeNull(),)
                test('Have a special music when in Star mode (music)', () => expect(it.haveASpecialMusicInStarMode_music,).toBeNull(),)
                test('Have a special music when in Star mode', () => expect(it.haveASpecialMusicInStarMode,).toBe(NOT_APPLICABLE,),)

                test('Have a sound effect when on the goal pole (type)', () => expect(it.haveASoundEffectWhenOnGoalPole_type,).toBeNull(),)
                test('Have a sound effect when on the goal pole (game)', () => expect(it.haveASoundEffectWhenOnGoalPole_game,).toBeNull(),)
                test('Have a sound effect when on the goal pole (small definition)', () => expect(it.haveASoundEffectWhenOnGoalPole_smallDefinition,).toBeNull(),)
                test('Have a sound effect when on the goal pole (plus)', () => expect(it.haveASoundEffectWhenOnGoalPole_plus,).toBeNull(),)
                test('Have a sound effect when on the goal pole', () => expect(it.haveASoundEffectWhenOnGoalPole,).toBe(NOT_APPLICABLE,),)

                test('Have a sound effect on a death (type)', () => expect(it.haveASoundEffectOnDeath_type,).toBeNull(),)
                test('Have a sound effect on a death (game)', () => expect(it.haveASoundEffectOnDeath_game,).toBeNull(),)
                test('Have a sound effect on a death (small definition)', () => expect(it.haveASoundEffectOnDeath_smallDefinition,).toBeNull(),)
                test('Have a sound effect on a death (plus)', () => expect(it.haveASoundEffectOnDeath_plus,).toBeNull(),)
                test('Have a sound effect on a death', () => expect(it.haveASoundEffectOnDeath,).toBe(NOT_APPLICABLE,),)
            } else {
                /* eslint-disable jest/no-identical-title */
                test('Have a sound effect when collected (game)', () => expect(it.haveASoundEffectWhenCollected_game,).toBeOneOf(everyGameReferenceAcronymsWithNull,),)
                test('Have a sound effect when collected', () => expect(it.haveASoundEffectWhenCollected,).toBeBoolean(),)

                test('Have a sound effect on the taunt (game)', () => expect(it.haveASoundEffectOnTaunt_game,).toBeOneOf(everyGameReferenceAcronymsWithNull,),)
                test('Have a sound effect on the taunt', () => expect(it.haveASoundEffectOnTaunt,).toBeBoolean(),)

                test('Have a sound effect on a jump (game)', () => expect(it.haveASoundEffectOnJump_game,).toBeOneOf(everyGameReferenceAcronymsWithNull,),)
                test('Have a sound effect on a jump (amount)', () => expect(it.haveASoundEffectOnJump_amount,).toBeOneOf(possibleAmountOfSoundEffectOnJump,),)
                test('Have a sound effect on a jump (multiple image)', () => expect(it.haveASoundEffectOnJump_multipleImage,).toBeBoolean(),)
                test('Have a sound effect on a jump', () => expect(it.haveASoundEffectOnJump,).toBeBoolean(),)

                test('Have a sound effect on the ground after a jump (game)', () => expect(it.haveASoundEffectOnGroundAfterJump_game,).toBeOneOf(everyGameReferenceAcronymsWithNull,),)
                test('Have a sound effect on the ground after a jump', () => expect(it.haveASoundEffectOnGroundAfterJump,).toBeBoolean(),)

                test('Sound effect on movement (sound)', () => expect(it.soundEffectOnMovement_sound,).toBeOneOf(possibleSoundEffectOnMovement,),)
                test('Sound effect on movement', () => expect(it.soundEffectOnMovement,).toBeBoolean(),)

                test('Have a sound effect when turning after running', () => expect(it.haveASoundEffectOnTurnAfterRun,).toBeBoolean(),)

                test('Have a special music when in Star mode (game)', () => expect(it.haveASpecialMusicInStarMode_game,).toBeOneOf(everyGameReferenceAcronymsWithNull,),)
                test('Have a special music when in Star mode (music)', () => expect(it.haveASpecialMusicInStarMode_music,).toBeOneOf(possibleSpecialMusicInStarMode,),)
                test('Have a special music when in Star mode', () => expect(it.haveASpecialMusicInStarMode,).toBeBoolean(),)

                test('Have a sound effect when on the goal pole (type)', () => expect(it.haveASoundEffectWhenOnGoalPole_type,).toBeOneOf(possibleSoundEffectOnGoalPoleType,),)
                test('Have a sound effect when on the goal pole (game)', () => expect(it.haveASoundEffectWhenOnGoalPole_game,).toBeOneOf(everyGameReferenceAcronymWithPokemonAndNullAndUnknown,),)
                test('Have a sound effect when on the goal pole (small definition)', () => expect(it.haveASoundEffectWhenOnGoalPole_smallDefinition,).toBeOneOf(everySoundEffectOnGoalPoleSmallDefinition,),)
                test('Have a sound effect when on the goal pole (plus)', () => expect(it.haveASoundEffectWhenOnGoalPole_plus,).toBeOneOf(possibleSoundEffectOnGoalPole,),)
                test('Have a sound effect when on the goal pole', () => expect(it.haveASoundEffectWhenOnGoalPole,).toBeBoolean(),)

                test('Have a sound effect on a death (type)', () => expect(it.haveASoundEffectOnDeath_type,).toBeOneOf(possibleSoundEffectOnDeathType,),)
                test('Have a sound effect on a death (game)', () => expect(it.haveASoundEffectOnDeath_game,).toBeOneOf(everyGameReferenceAcronymWithPokemonAndNullAndUnknown,),)
                test('Have a sound effect on a death (small definition)', () => expect(it.haveASoundEffectOnDeath_smallDefinition,).toBeOneOf(everySoundEffectOnDeathSmallDefinition,),)
                test('Have a sound effect on a death (plus)', () => expect(it.haveASoundEffectOnDeath_plus,).toBeOneOf(possibleSoundEffectOnDeath,),)
                test('Have a sound effect on a death', () => expect(it.haveASoundEffectOnDeath,).toBeBoolean(),)
                /* eslint-enable jest/no-identical-title */
            }

            testEnglish(it, everyNames,)
        },)
    },),)
},)
