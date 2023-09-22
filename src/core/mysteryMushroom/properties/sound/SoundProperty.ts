import type {GameReferences}                                                                                                                                                                      from 'core/gameReference/GameReferences'
import type {PossibleAmount as AmountOfSoundEffectOnJump, SoundEffectOnJump}                                                                                                                      from 'core/mysteryMushroom/properties/sound/SoundEffectOnJump'
import type {PossibleTranslationKeys as TranslationKeyInStarMode, SpecialMusicInStarMode}                                                                                                         from 'core/mysteryMushroom/properties/sound/SpecialMusicInStarMode'
import type {PossibleSimpleTranslationKeys as SimpleTranslationKeyOnDeath, PossibleTranslationKeys as TranslationKeyOnDeath, PossibleTypes as TypeOfSoundEffectOnDeath, SoundEffectOnDeath}       from 'core/mysteryMushroom/properties/sound/SoundEffectOnDeath'
import type {PossibleSimpleTranslationKeys as SimpleTranslationKeyOnGoalPole, PossibleTranslationKeys as TranslationKeyOnGoalPole, PossibleTypes as TypeOfMusicOnGoalPole, SoundEffectOnGoalPole} from 'core/mysteryMushroom/properties/sound/SoundEffectOnGoalPole'
import type {SoundEffectOnGroundAfterJump}                                                                                                                                                        from 'core/mysteryMushroom/properties/sound/SoundEffectOnGroundAfterJump'
import type {SoundEffectWhenCollected}                                                                                                                                                            from 'core/mysteryMushroom/properties/sound/SoundEffectWhenCollected'
import type {PossibleTranslationKeys as TranslationKeyOnSoundEffectOnMovement, SoundEffectOnMovement}                                                                                             from 'core/mysteryMushroom/properties/sound/SoundEffectOnMovement'
import type {SoundEffectOnTaunt}                                                                                                                                                                  from 'core/mysteryMushroom/properties/sound/SoundEffectOnTaunt'
import type {SoundEffectOnTurnAfterRun}                                                                                                                                                           from 'core/mysteryMushroom/properties/sound/SoundEffectOnTurnAfterRun'

export interface SoundProperty {

    //region -------------------- When collected --------------------

    get soundEffectWhenCollectedContainer(): SoundEffectWhenCollected

    get haveASoundEffectWhenCollected(): BooleanOrNotApplicable

    get gameOnSoundEffectWhenCollected(): NullOr<GameReferences>

    //endregion -------------------- When collected --------------------
    //region -------------------- Taunt --------------------

    get soundEffectOnTauntContainer(): SoundEffectOnTaunt

    get haveASoundEffectOnTaunt(): BooleanOrNotApplicable

    //endregion -------------------- Taunt --------------------
    //region -------------------- Movement --------------------

    get soundEffectOnMovementContainer(): SoundEffectOnMovement

    get haveASoundEffectOnMovement(): BooleanOrNotApplicable

    get translationKeyOnSoundEffectOnMovement(): TranslationKeyOnSoundEffectOnMovement

    //endregion -------------------- Movement --------------------
    //region -------------------- Jump --------------------

    get soundEffectOnJumpContainer(): SoundEffectOnJump

    get haveASoundEffectOnJump(): BooleanOrNotApplicable

    get amountOnSoundEffectOnJump(): AmountOfSoundEffectOnJump

    get haveMultipleImagesOnJump(): boolean

    get gameOnSoundEffectOnJump(): NullOr<GameReferences>

    //endregion -------------------- Jump --------------------
    //region -------------------- Ground after jump --------------------

    get soundEffectOnGroundAfterJumpContainer(): SoundEffectOnGroundAfterJump

    get haveASoundEffectOnGroundAfterJump(): BooleanOrNotApplicable

    get gameOnSoundEffectOnGroundAfterJump(): NullOr<GameReferences>

    //endregion -------------------- Ground after jump --------------------
    //region -------------------- Turn after run --------------------

    get soundEffectOnTurnAfterRunContainer(): SoundEffectOnTurnAfterRun

    get haveASoundEffectOnTurnAfterRun(): BooleanOrNotApplicable

    //endregion -------------------- Turn after run --------------------
    //region -------------------- Star mode --------------------

    get specialMusicInStarModeContainer(): SpecialMusicInStarMode

    get haveASpecialMusicInStarMode(): BooleanOrNotApplicable

    get gameOnSpecialMusicInStarMode(): NullOr<GameReferences>

    get translationKeyOnSpecialMusicInStarMode(): TranslationKeyInStarMode

    //endregion -------------------- Star mode --------------------
    //region -------------------- Goal pole --------------------

    get soundEffectOnGoalPoleContainer(): SoundEffectOnGoalPole

    get haveASoundEffectOnGoalPole(): BooleanOrNotApplicable

    get gameOnSoundEffectOnGoalPole(): NullOr<GameReferences>

    get translationKeyOnSoundEffectOnGoalPole(): TranslationKeyOnGoalPole

    get simpleTranslationKeyOnSoundEffectOnGoalPole(): SimpleTranslationKeyOnGoalPole

    get typeOfMusicOnGoalPole(): TypeOfMusicOnGoalPole

    //endregion -------------------- Goal pole --------------------
    //region -------------------- Death --------------------

    get soundEffectOnDeathContainer(): SoundEffectOnDeath

    get haveASoundEffectOnDeath(): BooleanOrNotApplicable

    get gameOnSoundEffectOnDeath(): NullOr<GameReferences>

    get translationKeyOnSoundEffectOnDeath(): TranslationKeyOnDeath

    get simpleTranslationKeyOnSoundEffectOnDeath(): SimpleTranslationKeyOnDeath

    get typeOfSoundEffectOnDeath(): TypeOfSoundEffectOnDeath

    //endregion -------------------- Death --------------------

}
