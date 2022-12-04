import type {GameReferences}                                                                                                                                                                                                                       from 'core/gameReference/GameReferences'
import type {PossibleAmount as AmountOfSoundEffectOnJump, PossibleValues as PossibleSoundEffectOnJump, SoundEffectOnJump}                                                                                                                          from 'core/mysteryMushroom/properties/sound/SoundEffectOnJump'
import type {PossibleTranslationKeys as TranslationKeyInStarMode, PossibleValues as SoundEffectInStarMode, SpecialMusicInStarMode}                                                                                                                 from 'core/mysteryMushroom/properties/sound/SpecialMusicInStarMode'
import type {PossibleSimpleTranslationKeys as SimpleTranslationKeyOnDeath, PossibleTranslationKeys as TranslationKeyOnDeath, PossibleTypes as TypeOfSoundEffectOnDeath, PossibleValues as PossibleSoundEffectOnDeath, SoundEffectOnDeath}          from 'core/mysteryMushroom/properties/sound/SoundEffectOnDeath'
import type {PossibleSimpleTranslationKeys as SimpleTranslationKeyOnGoalPole, PossibleTranslationKeys as TranslationKeyOnGoalPole, PossibleTypes as TypeOfMusicOnGoalPole, PossibleValues as PossibleSoundEffectOnGoalPole, SoundEffectOnGoalPole} from 'core/mysteryMushroom/properties/sound/SoundEffectOnGoalPole'
import type {PossibleValues as PossibleSoundEffectOnGroundAfterJump, SoundEffectOnGroundAfterJump}                                                                                                                                                 from 'core/mysteryMushroom/properties/sound/SoundEffectOnGroundAfterJump'
import type {PossibleValues as PossibleSoundEffectWhenCollected, SoundEffectWhenCollected}                                                                                                                                                         from 'core/mysteryMushroom/properties/sound/SoundEffectWhenCollected'
import type {PossibleTranslationKeys as TranslationKeyOnSoundEffectOnMovement, PossibleValues as PossibleSoundEffectedOnMovement, SoundEffectOnMovement}                                                                                           from 'core/mysteryMushroom/properties/sound/SoundEffectOnMovement'
import type {PossibleValues as PossibleSoundEffectOnTaunt, SoundEffectOnTaunt}                                                                                                                                                                     from 'core/mysteryMushroom/properties/sound/SoundEffectOnTaunt'
import type {PossibleValues as PossibleSoundEffectOnTurnAfterRun, SoundEffectOnTurnAfterRun}                                                                                                                                                       from 'core/mysteryMushroom/properties/sound/SoundEffectOnTurnAfterRun'
import type {NullOr}                                                                                                                                                                                                                               from 'util/types/nullable'

export interface SoundProperty {

    //region -------------------- When collected --------------------

    get soundEffectWhenCollectedContainer(): SoundEffectWhenCollected

    get haveASoundEffectWhenCollected(): PossibleSoundEffectWhenCollected

    get gameOnSoundEffectWhenCollected(): NullOr<GameReferences>

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

    get gameOnSoundEffectOnJump(): NullOr<GameReferences>

    //endregion -------------------- Jump --------------------
    //region -------------------- Ground after jump --------------------

    get soundEffectOnGroundAfterJumpContainer(): SoundEffectOnGroundAfterJump

    get haveASoundEffectOnGroundAfterJump(): PossibleSoundEffectOnGroundAfterJump

    get gameOnSoundEffectOnGroundAfterJump(): NullOr<GameReferences>

    //endregion -------------------- Ground after jump --------------------
    //region -------------------- Turn after run --------------------

    get soundEffectOnTurnAfterRunContainer(): SoundEffectOnTurnAfterRun

    get haveASoundEffectOnTurnAfterRun(): PossibleSoundEffectOnTurnAfterRun

    //endregion -------------------- Turn after run --------------------
    //region -------------------- Star mode --------------------

    get specialMusicInStarModeContainer(): SpecialMusicInStarMode

    get haveASpecialMusicInStarMode(): SoundEffectInStarMode

    get gameOnSpecialMusicInStarMode(): NullOr<GameReferences>

    get translationKeyOnSpecialMusicInStarMode(): TranslationKeyInStarMode

    //endregion -------------------- Star mode --------------------
    //region -------------------- Goal pole --------------------

    get soundEffectOnGoalPoleContainer(): SoundEffectOnGoalPole

    get haveASoundEffectOnGoalPole(): PossibleSoundEffectOnGoalPole

    get gameOnSoundEffectOnGoalPole(): NullOr<GameReferences>

    get translationKeyOnSoundEffectOnGoalPole(): TranslationKeyOnGoalPole

    get simpleTranslationKeyOnSoundEffectOnGoalPole(): SimpleTranslationKeyOnGoalPole

    get typeOfMusicOnGoalPole(): TypeOfMusicOnGoalPole

    //endregion -------------------- Goal pole --------------------
    //region -------------------- Death --------------------

    get soundEffectOnDeathContainer(): SoundEffectOnDeath

    get haveASoundEffectOnDeath(): PossibleSoundEffectOnDeath

    get gameOnSoundEffectOnDeath(): NullOr<GameReferences>

    get translationKeyOnSoundEffectOnDeath(): TranslationKeyOnDeath

    get simpleTranslationKeyOnSoundEffectOnDeath(): SimpleTranslationKeyOnDeath

    get typeOfSoundEffectOnDeath(): TypeOfSoundEffectOnDeath

    //endregion -------------------- Death --------------------

}
