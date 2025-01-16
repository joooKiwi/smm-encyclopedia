import type {NullOr} from '@joookiwi/type'

import type {GameReferences}                                                                                                                                                                                                                                                        from 'core/gameReference/GameReferences'
import type {PossibleConditionToUnlockIt}                                                                                                                                                                                                                                           from 'core/mysteryMushroom/loader.types'
import type {AdditionalSoundOnDeath, AdditionalSoundOnGoalPole, MysteryMushroomGames, PossibleAmountOfSoundEffectOnJump, PossibleTranslationKeyOnDeath, PossibleTranslationKeyOnGoalPole, SoundEffectOnMovement, SpecialMusicInStarMode, TypeOfSoundOnDeath, TypeOfSoundOnGoalPole} from 'core/mysteryMushroom/MysteryMushroom.types'
import type {NameTrait}                                                                                                                                                                                                                                                             from 'lang/name/NameTrait'

/** @todo Add a "firstAppearanceInMarioMaker" field */
export interface MysteryMushroom
    extends NameTrait<string> {

    readonly games: MysteryMushroomGames

    readonly conditionToUnlockIt: PossibleConditionToUnlockIt
    readonly canBeUnlockedByAnAmiibo: boolean

    readonly haveASoundEffectWhenCollected: BooleanOrNotApplicable
    readonly gameOnSoundEffectWhenCollected: NullOr<GameReferences>

    readonly haveASoundEffectOnTaunt: BooleanOrNotApplicable
    readonly gameOnSoundEffectOnTaunt: NullOr<GameReferences>

    readonly haveASoundEffectOnMovement: BooleanOrNotApplicable
    readonly translationKeyOnSoundEffectOnMovement: NullOr<SoundEffectOnMovement>

    readonly haveASoundEffectOnJump: BooleanOrNotApplicable
    readonly amountOnSoundEffectOnJump: NullOr<PossibleAmountOfSoundEffectOnJump>
    readonly haveMultipleImagesOnJump: BooleanOrNotApplicable
    readonly gameOnSoundEffectOnJump: NullOr<GameReferences>

    readonly haveASoundEffectOnGroundAfterJump: BooleanOrNotApplicable
    readonly gameOnSoundEffectOnGroundAfterJump: NullOr<GameReferences>

    readonly haveASoundEffectOnTurnAfterRun: BooleanOrNotApplicable

    readonly haveASpecialMusicInStarMode: BooleanOrNotApplicable
    readonly translationKeyOnSpecialMusicInStarMode: NullOr<SpecialMusicInStarMode>
    readonly gameOnSpecialMusicInStarMode: NullOr<GameReferences>

    readonly haveASoundEffectOnGoalPole: BooleanOrNotApplicable
    readonly simpleTranslationKeyOnSoundEffectOnGoalPole: NullOr<AdditionalSoundOnGoalPole>
    readonly translationKeyOnSoundEffectOnGoalPole: PossibleTranslationKeyOnGoalPole
    readonly typeOfMusicOnGoalPole: NullOr<TypeOfSoundOnGoalPole>
    readonly gameOnSoundEffectOnGoalPole: NullOr<GameReferences>

    readonly haveASoundEffectOnDeath: BooleanOrNotApplicable
    readonly simpleTranslationKeyOnSoundEffectOnDeath: NullOr<AdditionalSoundOnDeath>
    readonly translationKeyOnSoundEffectOnDeath: PossibleTranslationKeyOnDeath
    readonly typeOfSoundEffectOnDeath: NullOr<TypeOfSoundOnDeath>
    readonly gameOnSoundEffectOnDeath: NullOr<GameReferences>

}
