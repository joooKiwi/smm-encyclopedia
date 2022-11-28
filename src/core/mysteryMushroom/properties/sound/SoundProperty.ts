import type {GameReferences}                                                                                                                                                                                                                       from '../../../gameReference/GameReferences'
import type {NullOr}                                                                                                                                                                                                                               from '../../../../util/types'
import type {PossibleAmount as AmountOfSoundEffectOnJump, PossibleValues as PossibleSoundEffectOnJump, SoundEffectOnJump}                                                                                                                          from './SoundEffectOnJump'
import type {PossibleTranslationKeys as TranslationKeyInStarMode, PossibleValues as SoundEffectInStarMode, SpecialMusicInStarMode}                                                                                                                 from './SpecialMusicInStarMode'
import type {PossibleSimpleTranslationKeys as SimpleTranslationKeyOnDeath, PossibleTranslationKeys as TranslationKeyOnDeath, PossibleTypes as TypeOfSoundEffectOnDeath, PossibleValues as PossibleSoundEffectOnDeath, SoundEffectOnDeath}          from './SoundEffectOnDeath'
import type {PossibleSimpleTranslationKeys as SimpleTranslationKeyOnGoalPole, PossibleTranslationKeys as TranslationKeyOnGoalPole, PossibleTypes as TypeOfMusicOnGoalPole, PossibleValues as PossibleSoundEffectOnGoalPole, SoundEffectOnGoalPole} from './SoundEffectOnGoalPole'
import type {PossibleValues as PossibleSoundEffectOnGroundAfterJump, SoundEffectOnGroundAfterJump}                                                                                                                                                 from './SoundEffectOnGroundAfterJump'
import type {PossibleValues as PossibleSoundEffectWhenCollected, SoundEffectWhenCollected}                                                                                                                                                         from './SoundEffectWhenCollected'
import type {PossibleTranslationKeys as TranslationKeyOnSoundEffectOnMovement, PossibleValues as PossibleSoundEffectedOnMovement, SoundEffectOnMovement}                                                                                           from './SoundEffectOnMovement'
import type {PossibleValues as PossibleSoundEffectOnTaunt, SoundEffectOnTaunt}                                                                                                                                                                     from './SoundEffectOnTaunt'
import type {PossibleValues as PossibleSoundEffectOnTurnAfterRun, SoundEffectOnTurnAfterRun}                                                                                                                                                       from './SoundEffectOnTurnAfterRun'

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
