import type {PossibleAmount as AmountOfSoundEffectOnJump, PossibleGames as GameOnSoundEffectOnJump, PossibleValues as PossibleSoundEffectOnJump, SoundEffectOnJump}                                                                                                                              from './SoundEffectOnJump';
import type {PossibleGames as GameInStarMode, PossibleTranslationKeys as TranslationKeyInStarMode, PossibleValues as SoundEffectInStarMode, SpecialMusicInStarMode}                                                                                                                              from './SpecialMusicInStarMode';
import type {PossibleGames as GameOnSoundEffectOnDeath, PossibleSimpleTranslationKeys as SimpleTranslationKeyOnDeath, PossibleTranslationKeys as TranslationKeyOnDeath, PossibleTypes as TypeOfSoundEffectOnDeath, PossibleValues as PossibleSoundEffectOnDeath, SoundEffectOnDeath}             from './SoundEffectOnDeath';
import type {PossibleGames as GameOnSoundEffectOnGoalPole, PossibleSimpleTranslationKeys as SimpleTranslationKeyOnGoalPole, PossibleTranslationKeys as TranslationKeyOnGoalPole, PossibleTypes as TypeOfMusicOnGoalPole, PossibleValues as PossibleSoundEffectOnGoalPole, SoundEffectOnGoalPole} from './SoundEffectOnGoalPole';
import type {PossibleGames as GameOnSoundEffectOnGroundAfterJump, PossibleValues as PossibleSoundEffectOnGroundAfterJump, SoundEffectOnGroundAfterJump}                                                                                                                                          from './SoundEffectOnGroundAfterJump';
import type {PossibleGames as GameOnSoundEffectWhenCollected, PossibleValues as PossibleSoundEffectWhenCollected, SoundEffectWhenCollected}                                                                                                                                                      from './SoundEffectWhenCollected';
import type {PossibleTranslationKeys as TranslationKeyOnSoundEffectOnMovement, PossibleValues as PossibleSoundEffectedOnMovement, SoundEffectOnMovement}                                                                                                                                         from './SoundEffectOnMovement';
import type {PossibleValues as PossibleSoundEffectOnTaunt, SoundEffectOnTaunt}                                                                                                                                                                                                                   from './SoundEffectOnTaunt';
import type {PossibleValues as PossibleSoundEffectOnTurnAfterRun, SoundEffectOnTurnAfterRun}                                                                                                                                                                                                     from './SoundEffectOnTurnAfterRun';

export interface SoundProperty {

    //region -------------------- When collected --------------------

    get soundEffectWhenCollectedContainer(): SoundEffectWhenCollected

    get haveASoundEffectWhenCollected(): PossibleSoundEffectWhenCollected

    get gameOnSoundEffectWhenCollected(): GameOnSoundEffectWhenCollected

    //endregion -------------------- When collected --------------------
    //region -------------------- Taunt --------------------

    get soundEffectOnTauntContainer(): SoundEffectOnTaunt

    get haveASoundEffectOnTaunt(): PossibleSoundEffectOnTaunt

    //endregion -------------------- Taunt --------------------
    //region -------------------- Movement --------------------

    get soundEffectOnMovementContainer(): SoundEffectOnMovement

    get haveASoundEffectOnMovement(): PossibleSoundEffectedOnMovement

    get translationKeyOnSoundEffectOnMovement(): TranslationKeyOnSoundEffectOnMovement

    //endregion -------------------- Movement --------------------
    //region -------------------- Jump --------------------

    get soundEffectOnJumpContainer(): SoundEffectOnJump

    get haveASoundEffectOnJump(): PossibleSoundEffectOnJump

    get amountOnSoundEffectOnJump(): AmountOfSoundEffectOnJump

    get haveMultipleImagesOnJump(): boolean

    get gameOnSoundEffectOnJump(): GameOnSoundEffectOnJump

    //endregion -------------------- Jump --------------------
    //region -------------------- Ground after jump --------------------

    get soundEffectOnGroundAfterJumpContainer(): SoundEffectOnGroundAfterJump

    get haveASoundEffectOnGroundAfterJump(): PossibleSoundEffectOnGroundAfterJump

    get gameOnSoundEffectOnGroundAfterJump(): GameOnSoundEffectOnGroundAfterJump

    //endregion -------------------- Ground after jump --------------------
    //region -------------------- Turn after run --------------------

    get soundEffectOnTurnAfterRunContainer(): SoundEffectOnTurnAfterRun

    get haveASoundEffectOnTurnAfterRun(): PossibleSoundEffectOnTurnAfterRun

    //endregion -------------------- Turn after run --------------------
    //region -------------------- Star mode --------------------

    get specialMusicInStarModeContainer(): SpecialMusicInStarMode

    get haveASpecialMusicInStarMode(): SoundEffectInStarMode

    get gameOnSpecialMusicInStarMode(): GameInStarMode

    get translationKeyOnSpecialMusicInStarMode(): TranslationKeyInStarMode

    //endregion -------------------- Star mode --------------------
    //region -------------------- Goal pole --------------------

    get soundEffectOnGoalPoleContainer(): SoundEffectOnGoalPole

    get haveASoundEffectOnGoalPole(): PossibleSoundEffectOnGoalPole

    get gameOnSoundEffectOnGoalPole(): GameOnSoundEffectOnGoalPole

    get translationKeyOnSoundEffectOnGoalPole(): TranslationKeyOnGoalPole

    get simpleTranslationKeyOnSoundEffectOnGoalPole(): SimpleTranslationKeyOnGoalPole

    get typeOfMusicOnGoalPole(): TypeOfMusicOnGoalPole

    //endregion -------------------- Goal pole --------------------
    //region -------------------- Death --------------------

    get soundEffectOnDeathContainer(): SoundEffectOnDeath

    get haveASoundEffectOnDeath(): PossibleSoundEffectOnDeath

    get gameOnSoundEffectOnDeath(): GameOnSoundEffectOnDeath

    get translationKeyOnSoundEffectOnDeath(): TranslationKeyOnDeath

    get simpleTranslationKeyOnSoundEffectOnDeath(): SimpleTranslationKeyOnDeath

    get typeOfSoundEffectOnDeath(): TypeOfSoundEffectOnDeath

    //endregion -------------------- Death --------------------

}
