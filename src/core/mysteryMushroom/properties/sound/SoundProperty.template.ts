import type {PossibleGamesReceived as GameOnSoundEffectOnDeath, PossibleTranslationKeys as TranslationKeyOnDeath, PossibleTypesReceived as TypeOfSoundEffectOnDeath, PossibleValuesReceived as PossibleSoundEffectOnDeath}       from 'core/mysteryMushroom/properties/sound/SoundEffectOnDeath'
import type {PossibleGamesReceived as GameOnSoundEffectOnGoalPole, PossibleTranslationKeys as TranslationKeyOnGoalPole, PossibleTypesReceived as TypeOfMusicOnGoalPole, PossibleValuesReceived as PossibleSoundEffectOnGoalPole} from 'core/mysteryMushroom/properties/sound/SoundEffectOnGoalPole'
import type {PossibleGamesReceived as GameOnSoundEffectOnGroundAfterJump, PossibleValuesReceived as PossibleSoundEffectOnGroundAfterJump}                                                                                        from 'core/mysteryMushroom/properties/sound/SoundEffectOnGroundAfterJump'
import type {PossibleGamesReceived as GameOnSoundEffectOnJump, PossibleValuesReceived as PossibleSoundEffectOnJump}                                                                                                              from 'core/mysteryMushroom/properties/sound/SoundEffectOnJump'
import type {PossibleValuesReceived as PossibleSoundEffectOnMovement}                                                                                                                                                            from 'core/mysteryMushroom/properties/sound/SoundEffectOnMovement'
import type {PossibleGamesReceived as GameOnSoundEffectOnTaunt, PossibleValuesReceived as PossibleSoundEffectOnTaunt}                                                                                                            from 'core/mysteryMushroom/properties/sound/SoundEffectOnTaunt'
import type {PossibleValuesReceived as PossibleSoundEffectOnTurnAfterRun}                                                                                                                                                        from 'core/mysteryMushroom/properties/sound/SoundEffectOnTurnAfterRun'
import type {PossibleGamesReceived as GameOnSoundEffectWhenCollected, PossibleValuesReceived as PossibleSoundEffectWhenCollected}                                                                                                from 'core/mysteryMushroom/properties/sound/SoundEffectWhenCollected'
import type {PossibleGamesReceived as GameInStarMode, PossibleValuesReceived as PossibleSpecialMusicInStarMode}                                                                                                                  from 'core/mysteryMushroom/properties/sound/SpecialMusicInStarMode'

export interface SoundPropertyTemplate {

    soundEffect: {
        movement: PossibleSoundEffectOnMovement
    }
    hasSoundEffect: {
        collected: {
            value: PossibleSoundEffectWhenCollected
            game: GameOnSoundEffectWhenCollected
        }
        taunt: {
            value: PossibleSoundEffectOnTaunt
            game: GameOnSoundEffectOnTaunt
        }
        jump: {
            value: {
                value: PossibleSoundEffectOnJump
                game: GameOnSoundEffectOnJump
            }
            ground: {
                value: PossibleSoundEffectOnGroundAfterJump
                game: GameOnSoundEffectOnGroundAfterJump
            }
        }
        turn: PossibleSoundEffectOnTurnAfterRun
        goalPole: {
            value: PossibleSoundEffectOnGoalPole
            game: GameOnSoundEffectOnGoalPole
            smallDefinition: TranslationKeyOnGoalPole
            type: TypeOfMusicOnGoalPole
        }
        death: {
            value: PossibleSoundEffectOnDeath
            game: GameOnSoundEffectOnDeath
            smallDefinition: TranslationKeyOnDeath
            type: TypeOfSoundEffectOnDeath
        }
    }
    hasSpecialMusic: {
        starMode: {
            value: PossibleSpecialMusicInStarMode
            game: GameInStarMode
        }
    }

}
