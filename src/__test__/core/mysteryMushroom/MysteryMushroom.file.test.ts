import file from 'resources/compiled/Mystery Mushroom (SMM).json'

import type {PossibleExcludedLanguages}                                                                               from '__test__/helperMethods.types'
import type {PossibleValuesReceived as PossibleSpecialMusicInStarMode}                                                from 'core/mysteryMushroom/properties/sound/SpecialMusicInStarMode'
import type {PossibleTypesReceived as TypeOfSoundEffectOnDeath, PossibleValuesReceived as PossibleSoundEffectOnDeath} from 'core/mysteryMushroom/properties/sound/SoundEffectOnDeath'
import type {PossibleTypesReceived as TypeOfMusicOnGoalPole, PossibleValuesReceived as PossibleSoundEffectOnGoalPole} from 'core/mysteryMushroom/properties/sound/SoundEffectOnGoalPole'
import type {PossibleValuesReceived as PossibleSoundEffectOnJump}                                                     from 'core/mysteryMushroom/properties/sound/SoundEffectOnJump'
import type {PossibleValuesReceived as PossibleSoundEffectOnMovement}                                                 from 'core/mysteryMushroom/properties/sound/SoundEffectOnMovement'

import {EveryTypes}                                 from '__test__/EveryTypes'
import {getEnglishName, testEnglish, testLanguages} from '__test__/helperMethods'
import {UNKNOWN_REFERENCE}                          from 'util/commonVariables'

describe('Mystery Mushroom (file test)', () => {
    const convertor = EveryTypes.get
    const everyConditionToUnlock = convertor.everyPossibleConditionToUnlockIt_mysteryMushroom
    const everyVersion = convertor.everyPossibleName_version_smm
    const everyGameReferenceAcronymWithPokemon = [...convertor.everyPossibleAcronym_gameReference, ...convertor.everyPossiblePokemonGeneration_gameReference,]                                           as const
    const everyGameReferenceAcronymWithPokemonAndNullAndUnknown = [null, UNKNOWN_REFERENCE, ...convertor.everyPossibleAcronym_gameReference, ...convertor.everyPossiblePokemonGeneration_gameReference,] as const
    const everyGameReferenceAcronymsWithNull = [null, ...convertor.everyPossibleAcronym_gameReference,]                                                                                                  as const
    const everySoundEffectOnGoalPoleSmallDefinition = [null, ...convertor.everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom,]                                                           as const
    const everySoundEffectOnDeathSmallDefinition = [null, ...convertor.everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom,]                                                                 as const
    const possibleSoundEffectOnJump = [true, false, 2, '3 images',]                                                                                                                                      as const satisfies readonly PossibleSoundEffectOnJump[]
    const possibleSoundEffectOnMovement = [null, 'Twinkle', 'Engine sound',]                                                                                                                             as const satisfies readonly PossibleSoundEffectOnMovement[]
    const possibleSpecialMusicInStarMode = [false, 'Flying Mario', 'Metal Mario', 'Super Star',]                                                                                                         as const satisfies readonly PossibleSpecialMusicInStarMode[]
    const possibleSoundEffectOnGoalPoleType = [null, 'Marimba', 'Rock',]                                                                                                                                 as const satisfies readonly TypeOfMusicOnGoalPole[]
    const possibleSoundEffectOnGoalPole = [null, true, false, '+ sound', '+ "Yatta"', '+ barks', '+ "Yeah"', '+ humming', '+ singing', '+ Car sound',]                                                   as const satisfies readonly PossibleSoundEffectOnGoalPole[]
    const possibleSoundEffectOnDeathType = [null, 'Marimba', 'Techno',]                                                                                                                                  as const satisfies readonly TypeOfSoundEffectOnDeath[]
    const possibleSoundEffectOnDeath = [null, true, false, '+ "Rooo…"', '+ "Oh no!"', '+ "Nooo!"', '+ "Woah!"', '+ "Yaha!"',]                                                                            as const satisfies readonly PossibleSoundEffectOnDeath[]
    const everyNames = convertor.everyPossibleUniqueEnglishName_mysteryMushroom
    const excludedLanguages: readonly PossibleExcludedLanguages[] = ['chinese', 'korean',]

    file.forEach(it => describe(getEnglishName(it), () => {// eslint-disable-line jest/valid-title
        const isMysteryMushroom = it.uniqueName === 'Mystery Mushroom'

        testLanguages(it, excludedLanguages,)

        describe('Type validation', () => {
            test('Condition to unlock it', () => expect(it.conditionToUnlockIt).toBeOneOf(everyConditionToUnlock))
            test('Can be unlocked by an Amiibo', () => expect(it.canBeUnlockedByAnAmiibo).toBeBoolean())
            test.skip('First appearance', () => expect(it.firstAppearanceInMarioMaker).toBeOneOf(everyVersion))//TODO add the first appearance for each mystery mushroom
            test('Reference', () => expect(it.reference).toBeOneOf(everyGameReferenceAcronymWithPokemon))

            test('Unique name', () => expect(it.uniqueName).toBeOneOf(everyNames))

            if (isMysteryMushroom) {
                test('Have a sound effect when collected (game)', () => expect(it.haveASoundEffectWhenCollected_game).toBeNull())
                test('Have a sound effect when collected', () => expect(it.haveASoundEffectWhenCollected).toBeNull())

                test('Have a sound effect on the taunt (game)', () => expect(it.haveASoundEffectOnTaunt_game).toBeNull())
                test('Have a sound effect on the taunt', () => expect(it.haveASoundEffectOnTaunt).toBeNull())

                test('Have a sound effect on a jump (game)', () => expect(it.haveASoundEffectOnJump_game).toBeNull())
                test('Have a sound effect on a jump', () => expect(it.haveASoundEffectOnJump).toBeNull())
                test('Have a sound effect on the ground after a jump (game)', () => expect(it.haveASoundEffectOnGroundAfterJump_game).toBeNull())
                test('Have a sound effect on the ground after a jump', () => expect(it.haveASoundEffectOnGroundAfterJump).toBeNull())

                test('Sound effect on movement', () => expect(it.soundEffectOnMovement).toBeNull())

                test('Have a sound effect when turning after running', () => expect(it.haveASoundEffectOnTurnAfterRun).toBeNull())

                test('Have a special music when in Star mode (game)', () => expect(it.haveASpecialMusicInStarMode_game).toBeNull())
                test('Have a special music when in Star mode', () => expect(it.haveASpecialMusicInStarMode).toBeNull())

                test('Have a sound effect when on the goal pole (type)', () => expect(it.haveASoundEffectWhenOnGoalPole_type).toBeNull())
                test('Have a sound effect when on the goal pole (game)', () => expect(it.haveASoundEffectWhenOnGoalPole_game).toBeNull())
                test('Have a sound effect when on the goal pole (small definition)', () => expect(it.haveASoundEffectWhenOnGoalPole_smallDefinition).toBeNull())
                test('Have a sound effect when on the goal pole', () => expect(it.haveASoundEffectWhenOnGoalPole).toBeNull())

                test('Have a sound effect on a death (type)', () => expect(it.haveASoundEffectOnDeath_type).toBeNull())
                test('Have a sound effect on a death (game)', () => expect(it.haveASoundEffectOnDeath_game).toBeNull())
                test('Have a sound effect on a death (small definition)', () => expect(it.haveASoundEffectOnDeath_smallDefinition).toBeNull())
                test('Have a sound effect on a death', () => expect(it.haveASoundEffectOnDeath).toBeNull())
            } else {
                /* eslint-disable jest/no-identical-title */
                test('Have a sound effect when collected (game)', () => expect(it.haveASoundEffectWhenCollected_game).toBeOneOf(everyGameReferenceAcronymsWithNull))
                test('Have a sound effect when collected', () => expect(it.haveASoundEffectWhenCollected).toBeBoolean())

                test('Have a sound effect on the taunt (game)', () => expect(it.haveASoundEffectOnTaunt_game).toBeOneOf(everyGameReferenceAcronymsWithNull))
                test('Have a sound effect on the taunt', () => expect(it.haveASoundEffectOnTaunt).toBeBoolean())

                test('Have a sound effect on a jump (game)', () => expect(it.haveASoundEffectOnJump_game).toBeOneOf(everyGameReferenceAcronymsWithNull))
                test('Have a sound effect on a jump', () => expect(it.haveASoundEffectOnJump).toBeOneOf(possibleSoundEffectOnJump))
                test('Have a sound effect on the ground after a jump (game)', () => expect(it.haveASoundEffectOnGroundAfterJump_game).toBeOneOf(everyGameReferenceAcronymsWithNull))
                test('Have a sound effect on the ground after a jump', () => expect(it.haveASoundEffectOnGroundAfterJump).toBeBoolean())

                test('Sound effect on movement', () => expect(it.soundEffectOnMovement).toBeOneOf(possibleSoundEffectOnMovement))

                test('Have a sound effect when turning after running', () => expect(it.haveASoundEffectOnTurnAfterRun).toBeBoolean())

                test('Have a special music when in Star mode (game)', () => expect(it.haveASpecialMusicInStarMode_game).toBeOneOf(everyGameReferenceAcronymsWithNull))
                test('Have a special music when in Star mode', () => expect(it.haveASpecialMusicInStarMode).toBeOneOf(possibleSpecialMusicInStarMode))

                test('Have a sound effect when on the goal pole (type)', () => expect(it.haveASoundEffectWhenOnGoalPole_type).toBeOneOf(possibleSoundEffectOnGoalPoleType))
                test('Have a sound effect when on the goal pole (game)', () => expect(it.haveASoundEffectWhenOnGoalPole_game).toBeOneOf(everyGameReferenceAcronymWithPokemonAndNullAndUnknown))
                test('Have a sound effect when on the goal pole (small definition)', () => expect(it.haveASoundEffectWhenOnGoalPole_smallDefinition).toBeOneOf(everySoundEffectOnGoalPoleSmallDefinition))
                test('Have a sound effect when on the goal pole', () => expect(it.haveASoundEffectWhenOnGoalPole).toBeOneOf(possibleSoundEffectOnGoalPole))

                test('Have a sound effect on a death (type)', () => expect(it.haveASoundEffectOnDeath_type).toBeOneOf(possibleSoundEffectOnDeathType))
                test('Have a sound effect on a death (game)', () => expect(it.haveASoundEffectOnDeath_game).toBeOneOf(everyGameReferenceAcronymWithPokemonAndNullAndUnknown))
                test('Have a sound effect on a death (small definition)', () => expect(it.haveASoundEffectOnDeath_smallDefinition).toBeOneOf(everySoundEffectOnDeathSmallDefinition))
                test('Have a sound effect on a death', () => expect(it.haveASoundEffectOnDeath).toBeOneOf(possibleSoundEffectOnDeath))
                /* eslint-enable jest/no-identical-title */
            }

            testEnglish(it, everyNames,)
        },)
    },),)
},)
