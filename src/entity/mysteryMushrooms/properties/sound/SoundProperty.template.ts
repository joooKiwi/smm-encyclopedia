import type {PossibleGamesReceived as GameInStarMode, PossibleValuesReceived as PossibleSpecialMusicInStarMode}                                                                                                                  from './SpecialMusicInStarMode';
import type {PossibleGamesReceived as GameOnSoundEffectOnDeath, PossibleTranslationKeys as TranslationKeyOnDeath, PossibleTypesReceived as TypeOfSoundEffectOnDeath, PossibleValuesReceived as PossibleSoundEffectOnDeath}       from './SoundEffectOnDeath';
import type {PossibleGamesReceived as GameOnSoundEffectOnGoalPole, PossibleTranslationKeys as TranslationKeyOnGoalPole, PossibleTypesReceived as TypeOfMusicOnGoalPole, PossibleValuesReceived as PossibleSoundEffectOnGoalPole} from './SoundEffectOnGoalPole';
import type {PossibleGamesReceived as GameOnSoundEffectOnGroundAfterJump, PossibleValuesReceived as PossibleSoundEffectOnGroundAfterJump}                                                                                        from './SoundEffectOnGroundAfterJump';
import type {PossibleGamesReceived as GameOnSoundEffectOnJump, PossibleValuesReceived as PossibleSoundEffectOnJump}                                                                                                              from './SoundEffectOnJump';
import type {PossibleGamesReceived as GameOnSoundEffectOnTaunt, PossibleValuesReceived as PossibleSoundEffectOnTaunt}                                                                                                            from './SoundEffectOnTaunt';
import type {PossibleGamesReceived as GameOnSoundEffectWhenCollected, PossibleValuesReceived as PossibleSoundEffectWhenCollected}                                                                                                from './SoundEffectWhenCollected';
import type {PossibleValuesReceived as PossibleSoundEffectOnMovement}                                                                                                                                                            from './SoundEffectOnMovement';
import type {PossibleValuesReceived as PossibleSoundEffectOnTurnAfterRun}                                                                                                                                                        from './SoundEffectOnTurnAfterRun';

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
