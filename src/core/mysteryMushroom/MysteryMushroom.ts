import type {GameReferences}                                                                                                                                                                                                                                                        from 'core/gameReference/GameReferences'
import type {PossibleConditionToUnlockIt}                                                                                                                                                                                                                                           from 'core/mysteryMushroom/loader.types'
import type {AdditionalSoundOnDeath, AdditionalSoundOnGoalPole, MysteryMushroomGames, PossibleAmountOfSoundEffectOnJump, PossibleTranslationKeyOnDeath, PossibleTranslationKeyOnGoalPole, SoundEffectOnMovement, SpecialMusicInStarMode, TypeOfSoundOnDeath, TypeOfSoundOnGoalPole} from 'core/mysteryMushroom/MysteryMushroom.types'
import type {NameTrait}                                                                                                                                                                                                                                                             from 'lang/name/NameTrait'

/** @todo Add a "firstAppearanceInMarioMaker" field */
export interface MysteryMushroom
    extends NameTrait<string> {

    get games(): MysteryMushroomGames

    //region -------------------- Unlock properties --------------------

    get conditionToUnlockIt(): PossibleConditionToUnlockIt

    get canBeUnlockedByAnAmiibo(): boolean

    //endregion -------------------- Unlock properties --------------------
    //region -------------------- Sound effect (when collected) --------------------

    get haveASoundEffectWhenCollected(): BooleanOrNotApplicable

    get gameOnSoundEffectWhenCollected(): NullOr<GameReferences>

    //endregion -------------------- Sound effect (when collected) --------------------
    //region -------------------- Sound effect (taunt) --------------------

    get haveASoundEffectOnTaunt(): BooleanOrNotApplicable

    get gameOnSoundEffectOnTaunt(): NullOr<GameReferences>

    //endregion -------------------- Sound effect (taunt) --------------------
    //region -------------------- Sound effect (movement) --------------------

    get haveASoundEffectOnMovement(): BooleanOrNotApplicable

    get translationKeyOnSoundEffectOnMovement(): NullOr<SoundEffectOnMovement>

    //endregion -------------------- Sound effect (movement) --------------------
    //region -------------------- Sound effect (jump) --------------------

    get haveASoundEffectOnJump(): BooleanOrNotApplicable

    get amountOnSoundEffectOnJump(): NullOr<PossibleAmountOfSoundEffectOnJump>

    get haveMultipleImagesOnJump(): boolean

    get gameOnSoundEffectOnJump(): NullOr<GameReferences>

    //endregion -------------------- Sound effect (jump) --------------------
    //region -------------------- Sound effect (ground after jump) --------------------

    get haveASoundEffectOnGroundAfterJump(): BooleanOrNotApplicable

    get gameOnSoundEffectOnGroundAfterJump(): NullOr<GameReferences>

    //endregion -------------------- Sound effect (ground after jump) --------------------
    //region -------------------- Sound effect (turn after run) --------------------

    get haveASoundEffectOnTurnAfterRun(): BooleanOrNotApplicable

    //endregion -------------------- Sound effect (turn after run) --------------------
    //region -------------------- Special music (star mode) --------------------

    get haveASpecialMusicInStarMode(): BooleanOrNotApplicable

    get translationKeyOnSpecialMusicInStarMode(): NullOr<SpecialMusicInStarMode>

    get gameOnSpecialMusicInStarMode(): NullOr<GameReferences>

    //endregion -------------------- Special music (star mode) --------------------
    //region -------------------- Sound effect (goal pole) --------------------

    get haveASoundEffectOnGoalPole(): BooleanOrNotApplicable

    get simpleTranslationKeyOnSoundEffectOnGoalPole(): NullOr<AdditionalSoundOnGoalPole>

    get translationKeyOnSoundEffectOnGoalPole(): PossibleTranslationKeyOnGoalPole

    get typeOfMusicOnGoalPole(): NullOr<TypeOfSoundOnGoalPole>

    get gameOnSoundEffectOnGoalPole(): NullOr<GameReferences>

    //endregion -------------------- Sound effect (goal pole) --------------------
    //region -------------------- Sound effect (death) --------------------

    get haveASoundEffectOnDeath(): BooleanOrNotApplicable

    get simpleTranslationKeyOnSoundEffectOnDeath(): NullOr<AdditionalSoundOnDeath>

    get translationKeyOnSoundEffectOnDeath(): PossibleTranslationKeyOnDeath

    get typeOfSoundEffectOnDeath(): NullOr<TypeOfSoundOnDeath>

    get gameOnSoundEffectOnDeath(): NullOr<GameReferences>

    //endregion -------------------- Sound effect (death) --------------------

}
