import type {NullOr, NullOrString} from '@joookiwi/type'

import type {GameReferences}                                                                                                                                                                                                                                                        from 'core/gameReference/GameReferences'
import type {MysteryMushroom}                                                                                                                                                                                                                                                       from 'core/mysteryMushroom/MysteryMushroom'
import type {PossibleConditionToUnlockIt}                                                                                                                                                                                                                                           from 'core/mysteryMushroom/loader.types'
import type {AdditionalSoundOnDeath, AdditionalSoundOnGoalPole, MysteryMushroomGames, PossibleAmountOfSoundEffectOnJump, PossibleTranslationKeyOnDeath, PossibleTranslationKeyOnGoalPole, SoundEffectOnMovement, SpecialMusicInStarMode, TypeOfSoundOnDeath, TypeOfSoundOnGoalPole} from 'core/mysteryMushroom/MysteryMushroom.types'
import type {Name}                                                                                                                                                                                                                                                                  from 'lang/name/Name'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'

export class MysteryMushroomContainer
    extends ClassContainingAName<string>
    implements MysteryMushroom {

    //region -------------------- Fields --------------------

    readonly #games

    readonly #conditionToUnlockIt
    readonly #canBeUnlockedByAnAmiibo

    readonly #haveASoundEffectWhenCollected
    readonly #gameOnSoundEffectWhenCollected

    readonly #haveASoundEffectOnTaunt
    readonly #gameOnSoundEffectOnTaunt

    readonly #haveASoundEffectOnMovement
    readonly #translationKeyOnSoundEffectOnMovement

    readonly #haveASoundEffectOnJump
    readonly #amountOnSoundEffectOnJump
    readonly #haveMultipleImagesOnJump
    readonly #gameOnSoundEffectOnJump

    readonly #haveASoundEffectOnGroundAfterJump
    readonly #gameOnSoundEffectOnGroundAfterJump

    readonly #haveASoundEffectOnTurnAfterRun

    readonly #haveASpecialMusicInStarMode
    readonly #translationKeyOnSpecialMusicInStarMode
    readonly #gameOnSpecialMusicInStarMode

    readonly #haveASoundEffectOnGoalPole
    readonly #simpleTranslationKeyOnSoundEffectOnGoalPole
    readonly #translationKeyOnSoundEffectOnGoalPole
    readonly #typeOfMusicOnGoalPole
    readonly #gameOnSoundEffectOnGoalPole

    readonly #haveASoundEffectOnDeath
    readonly #simpleTranslationKeyOnSoundEffectOnDeath
    readonly #translationKeyOnSoundEffectOnDeath
    readonly #typeOfSoundEffectOnDeath
    readonly #gameOnSoundEffectOnDeath

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>,
                       games: MysteryMushroomGames,
                       conditionToUnlockIt: PossibleConditionToUnlockIt, canBeUnlockedByAnAmiibo: boolean,
                       haveASoundEffectWhenCollected: BooleanOrNotApplicable, gameOnSoundEffectWhenCollected: NullOr<GameReferences>,
                       haveASoundEffectOnTaunt: BooleanOrNotApplicable, gameOnSoundEffectOnTaunt: NullOr<GameReferences>,
                       haveASoundEffectOnMovement: BooleanOrNotApplicable, translationKeyOnSoundEffectOnMovement: NullOrString<SoundEffectOnMovement>,
                       haveASoundEffectOnJump: BooleanOrNotApplicable, amountOnSoundEffectOnJump: NullOr<PossibleAmountOfSoundEffectOnJump>, haveMultipleImagesOnJump: BooleanOrNotApplicable, gameOnSoundEffectOnJump: NullOr<GameReferences>,
                       haveASoundEffectOnGroundAfterJump: BooleanOrNotApplicable, gameOnSoundEffectOnGroundAfterJump: NullOr<GameReferences>,
                       haveASoundEffectOnTurnAfterRun: BooleanOrNotApplicable,
                       haveASpecialMusicInStarMode: BooleanOrNotApplicable, translationKeyOnSpecialMusicInStarMode: NullOrString<SpecialMusicInStarMode>, gameOnSpecialMusicInStarMode: NullOr<GameReferences>,
                       haveASoundEffectOnGoalPole: BooleanOrNotApplicable, simpleTranslationKeyOnSoundEffectOnGoalPole: NullOrString<AdditionalSoundOnGoalPole>, translationKeyOnSoundEffectOnGoalPole: PossibleTranslationKeyOnGoalPole, typeOfMusicOnGoalPole: NullOrString<TypeOfSoundOnGoalPole>, gameOnSoundEffectOnGoalPole: NullOr<GameReferences>,
                       haveASoundEffectOnDeath: BooleanOrNotApplicable, simpleTranslationKeyOnSoundEffectOnDeath: NullOrString<AdditionalSoundOnDeath>, translationKeyOnSoundEffectOnDeath: PossibleTranslationKeyOnDeath, typeOfSoundEffectOnDeath: NullOrString<TypeOfSoundOnDeath>, gameOnSoundEffectOnDeath: NullOr<GameReferences>,) {
        super(name,)
        this.#games = games
        this.#conditionToUnlockIt = conditionToUnlockIt
        this.#canBeUnlockedByAnAmiibo = canBeUnlockedByAnAmiibo
        this.#haveASoundEffectWhenCollected = haveASoundEffectWhenCollected
        this.#gameOnSoundEffectWhenCollected = gameOnSoundEffectWhenCollected
        this.#haveASoundEffectOnTaunt = haveASoundEffectOnTaunt
        this.#gameOnSoundEffectOnTaunt = gameOnSoundEffectOnTaunt
        this.#haveASoundEffectOnMovement = haveASoundEffectOnMovement
        this.#translationKeyOnSoundEffectOnMovement = translationKeyOnSoundEffectOnMovement
        this.#haveASoundEffectOnJump = haveASoundEffectOnJump
        this.#amountOnSoundEffectOnJump = amountOnSoundEffectOnJump
        this.#haveMultipleImagesOnJump = haveMultipleImagesOnJump
        this.#gameOnSoundEffectOnJump = gameOnSoundEffectOnJump
        this.#haveASoundEffectOnGroundAfterJump = haveASoundEffectOnGroundAfterJump
        this.#gameOnSoundEffectOnGroundAfterJump = gameOnSoundEffectOnGroundAfterJump
        this.#haveASoundEffectOnTurnAfterRun = haveASoundEffectOnTurnAfterRun
        this.#haveASpecialMusicInStarMode = haveASpecialMusicInStarMode
        this.#translationKeyOnSpecialMusicInStarMode = translationKeyOnSpecialMusicInStarMode
        this.#gameOnSpecialMusicInStarMode = gameOnSpecialMusicInStarMode
        this.#haveASoundEffectOnGoalPole = haveASoundEffectOnGoalPole
        this.#simpleTranslationKeyOnSoundEffectOnGoalPole = simpleTranslationKeyOnSoundEffectOnGoalPole
        this.#translationKeyOnSoundEffectOnGoalPole = translationKeyOnSoundEffectOnGoalPole
        this.#typeOfMusicOnGoalPole = typeOfMusicOnGoalPole
        this.#gameOnSoundEffectOnGoalPole = gameOnSoundEffectOnGoalPole
        this.#haveASoundEffectOnDeath = haveASoundEffectOnDeath
        this.#simpleTranslationKeyOnSoundEffectOnDeath = simpleTranslationKeyOnSoundEffectOnDeath
        this.#translationKeyOnSoundEffectOnDeath = translationKeyOnSoundEffectOnDeath
        this.#typeOfSoundEffectOnDeath = typeOfSoundEffectOnDeath
        this.#gameOnSoundEffectOnDeath = gameOnSoundEffectOnDeath
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get games(): MysteryMushroomGames {
        return this.#games
    }

    //region -------------------- Unlock properties --------------------

    public get conditionToUnlockIt() {
        return this.#conditionToUnlockIt
    }

    public get canBeUnlockedByAnAmiibo() {
        return this.#canBeUnlockedByAnAmiibo
    }

    //endregion -------------------- Unlock properties --------------------
    //region -------------------- Sound effect (when collected) --------------------

    public get haveASoundEffectWhenCollected() {
        return this.#haveASoundEffectWhenCollected
    }

    public get gameOnSoundEffectWhenCollected() {
        return this.#gameOnSoundEffectWhenCollected
    }

    //endregion -------------------- Sound effect (when collected) --------------------
    //region -------------------- Sound effect (taunt) --------------------

    public get haveASoundEffectOnTaunt() {
        return this.#haveASoundEffectOnTaunt
    }

    public get gameOnSoundEffectOnTaunt() {
        return this.#gameOnSoundEffectOnTaunt
    }

    //endregion -------------------- Sound effect (taunt) --------------------
    //region -------------------- Sound effect (movement) --------------------

    public get haveASoundEffectOnMovement() {
        return this.#haveASoundEffectOnMovement
    }

    public get translationKeyOnSoundEffectOnMovement() {
        return this.#translationKeyOnSoundEffectOnMovement
    }

    //endregion -------------------- Sound effect (movement) --------------------
    //region -------------------- Sound effect (jump) --------------------

    public get haveASoundEffectOnJump() {
        return this.#haveASoundEffectOnJump
    }

    public get amountOnSoundEffectOnJump() {
        return this.#amountOnSoundEffectOnJump
    }

    public get haveMultipleImagesOnJump() {
        return this.#haveMultipleImagesOnJump
    }

    public get gameOnSoundEffectOnJump() {
        return this.#gameOnSoundEffectOnJump
    }

    //endregion -------------------- Sound effect (jump) --------------------
    //region -------------------- Sound effect (ground after jump) --------------------

    public get haveASoundEffectOnGroundAfterJump() {
        return this.#haveASoundEffectOnGroundAfterJump
    }

    public get gameOnSoundEffectOnGroundAfterJump() {
        return this.#gameOnSoundEffectOnGroundAfterJump
    }

    //endregion -------------------- Sound effect (ground after jump) --------------------
    //region -------------------- Sound effect (turn after run) --------------------

    public get haveASoundEffectOnTurnAfterRun() {
        return this.#haveASoundEffectOnTurnAfterRun
    }

    //endregion -------------------- Sound effect (turn after run) --------------------
    //region -------------------- Special music (star mode) --------------------

    public get haveASpecialMusicInStarMode() {
        return this.#haveASpecialMusicInStarMode
    }

    public get translationKeyOnSpecialMusicInStarMode() {
        return this.#translationKeyOnSpecialMusicInStarMode
    }

    public get gameOnSpecialMusicInStarMode() {
        return this.#gameOnSpecialMusicInStarMode
    }

    //endregion -------------------- Special music (star mode) --------------------
    //region -------------------- Sound effect (goal pole) --------------------

    public get haveASoundEffectOnGoalPole() {
        return this.#haveASoundEffectOnGoalPole
    }

    public get simpleTranslationKeyOnSoundEffectOnGoalPole() {
        return this.#simpleTranslationKeyOnSoundEffectOnGoalPole
    }

    public get translationKeyOnSoundEffectOnGoalPole() {
        return this.#translationKeyOnSoundEffectOnGoalPole
    }

    public get typeOfMusicOnGoalPole() {
        return this.#typeOfMusicOnGoalPole
    }

    public get gameOnSoundEffectOnGoalPole() {
        return this.#gameOnSoundEffectOnGoalPole
    }

    //endregion -------------------- Sound effect (goal pole) --------------------
    //region -------------------- Sound effect (death) --------------------

    public get haveASoundEffectOnDeath() {
        return this.#haveASoundEffectOnDeath
    }

    public get simpleTranslationKeyOnSoundEffectOnDeath() {
        return this.#simpleTranslationKeyOnSoundEffectOnDeath
    }

    public get translationKeyOnSoundEffectOnDeath() {
        return this.#translationKeyOnSoundEffectOnDeath
    }

    public get typeOfSoundEffectOnDeath() {
        return this.#typeOfSoundEffectOnDeath
    }

    public get gameOnSoundEffectOnDeath() {
        return this.#gameOnSoundEffectOnDeath
    }

    //endregion -------------------- Sound effect (death) --------------------

    //endregion -------------------- Getter methods --------------------

}
