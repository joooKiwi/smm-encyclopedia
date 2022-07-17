import type {MysteryMushroom, MysteryMushroomGames} from './MysteryMushroom';
import type {MysteryMushroomProperty}               from './properties/MysteryMushroomProperty';
import type {Name}                                  from '../../lang/name/Name';

import {ClassContainingAName} from '../../lang/name/ClassContainingAName';

export class MysteryMushroomContainer
    extends ClassContainingAName<string>
    implements MysteryMushroom {

    //region -------------------- Fields --------------------

    readonly #games;
    readonly #propertyContainer;

    //endregion -------------------- Fields --------------------

    public constructor(name: Name<string>, games: MysteryMushroomGames, property: MysteryMushroomProperty,) {
        super(name,);
        this.#games = games;
        this.#propertyContainer = property;
    }

    //region -------------------- Games --------------------

    public get games(): MysteryMushroomGames {
        return this.#games;
    }

    //endregion -------------------- Games --------------------
    //region -------------------- Properties --------------------

    public get propertyContainer() {
        return this.#propertyContainer;
    }

    //region -------------------- Unlock properties --------------------

    public get unlockPropertyContainer() {
        return this.propertyContainer.unlockPropertyContainer;
    }

    public get conditionToUnlockIt() {
        return this.unlockPropertyContainer.conditionToUnlockIt;
    }

    public get canBeUnlockedByAnAmiibo() {
        return this.unlockPropertyContainer.canBeUnlockedByAnAmiibo;
    }

    //endregion -------------------- Unlock properties --------------------
    //region -------------------- Sound properties --------------------

    public get soundPropertyContainer() {
        return this.propertyContainer.soundPropertyContainer;
    }

    //region -------------------- Sound effect (when collected) --------------------

    public get soundEffectWhenCollectedContainer() {
        return this.soundPropertyContainer.soundEffectWhenCollectedContainer;
    }

    public get haveASoundEffectWhenCollected() {
        return this.soundEffectWhenCollectedContainer.value;
    }

    public get gameOnSoundEffectWhenCollected() {
        return this.soundEffectWhenCollectedContainer.gameReference;
    }

    //endregion -------------------- Sound effect (when collected) --------------------
    //region -------------------- Sound effect (taunt) --------------------

    public get soundEffectOnTauntContainer() {
        return this.soundPropertyContainer.soundEffectOnTauntContainer;
    }

    public get haveASoundEffectOnTaunt() {
        return this.soundEffectOnTauntContainer.value;
    }

    //endregion -------------------- Sound effect (taunt) --------------------
    //region -------------------- Sound effect (movement) --------------------

    public get soundEffectOnMovementContainer() {
        return this.soundPropertyContainer.soundEffectOnMovementContainer;
    }

    public get haveASoundEffectOnMovement() {
        return this.soundEffectOnMovementContainer.value;
    }

    public get translationKeyOnSoundEffectOnMovement() {
        return this.soundEffectOnMovementContainer.translationKey;
    }

    //endregion -------------------- Sound effect (movement) --------------------
    //region -------------------- Sound effect (jump) --------------------

    public get soundEffectOnJumpContainer() {
        return this.soundPropertyContainer.soundEffectOnJumpContainer;
    }

    public get haveASoundEffectOnJump() {
        return this.soundEffectOnJumpContainer.value;
    }

    public get amountOnSoundEffectOnJump() {
        return this.soundEffectOnJumpContainer.amount;
    }

    public get haveMultipleImagesOnJump() {
        return this.soundEffectOnJumpContainer.haveMultipleImages;
    }

    public get gameOnSoundEffectOnJump() {
        return this.soundEffectOnJumpContainer.gameReference;
    }

    //endregion -------------------- Sound effect (jump) --------------------
    //region -------------------- Sound effect (ground after jump) --------------------

    public get soundEffectOnGroundAfterJumpContainer() {
        return this.soundPropertyContainer.soundEffectOnGroundAfterJumpContainer;
    }

    public get haveASoundEffectOnGroundAfterJump() {
        return this.soundEffectOnGroundAfterJumpContainer.value;
    }

    public get gameOnSoundEffectOnGroundAfterJump() {
        return this.soundEffectOnGroundAfterJumpContainer.gameReference;
    }

    //endregion -------------------- Sound effect (ground after jump) --------------------
    //region -------------------- Sound effect (turn after run) --------------------

    public get soundEffectOnTurnAfterRunContainer() {
        return this.soundPropertyContainer.soundEffectOnTurnAfterRunContainer;
    }

    public get haveASoundEffectOnTurnAfterRun() {
        return this.soundEffectOnTurnAfterRunContainer.value;
    }

    //endregion -------------------- Sound effect (turn after run) --------------------
    //region -------------------- Special music (star mode) --------------------

    public get specialMusicInStarModeContainer() {
        return this.soundPropertyContainer.specialMusicInStarModeContainer;
    }

    public get haveASpecialMusicInStarMode() {
        return this.specialMusicInStarModeContainer.value;
    }

    public get gameOnSpecialMusicInStarMode() {
        return this.specialMusicInStarModeContainer.gameReference;
    }

    public get translationKeyOnSpecialMusicInStarMode() {
        return this.specialMusicInStarModeContainer.translationKey;
    }

    //endregion -------------------- Special music (star mode) --------------------
    //region -------------------- Sound effect (goal pole) --------------------

    public get soundEffectOnGoalPoleContainer() {
        return this.soundPropertyContainer.soundEffectOnGoalPoleContainer;
    }

    public get haveASoundEffectOnGoalPole() {
        return this.soundEffectOnGoalPoleContainer.value;
    }

    public get gameOnSoundEffectOnGoalPole() {
        return this.soundEffectOnGoalPoleContainer.gameReference;
    }

    public get translationKeyOnSoundEffectOnGoalPole() {
        return this.soundEffectOnGoalPoleContainer.translationKey;
    }

    public get simpleTranslationKeyOnSoundEffectOnGoalPole() {
        return this.soundEffectOnGoalPoleContainer.simpleTranslationKey;
    }

    public get typeOfMusicOnGoalPole() {
        return this.soundEffectOnGoalPoleContainer.type;
    }

    //endregion -------------------- Sound effect (goal pole) --------------------
    //region -------------------- Sound effect (death) --------------------

    public get soundEffectOnDeathContainer() {
        return this.soundPropertyContainer.soundEffectOnDeathContainer;
    }

    public get haveASoundEffectOnDeath() {
        return this.soundEffectOnDeathContainer.value;
    }

    public get gameOnSoundEffectOnDeath() {
        return this.soundEffectOnDeathContainer.gameReference;
    }

    public get translationKeyOnSoundEffectOnDeath() {
        return this.soundEffectOnDeathContainer.translationKey;
    }

    public get simpleTranslationKeyOnSoundEffectOnDeath() {
        return this.soundEffectOnDeathContainer.simpleTranslationKey;
    }

    public get typeOfSoundEffectOnDeath() {
        return this.soundEffectOnDeathContainer.type;
    }

    //endregion -------------------- Sound effect (death) --------------------

    //endregion -------------------- Sound properties --------------------

    //endregion -------------------- Properties --------------------

}
