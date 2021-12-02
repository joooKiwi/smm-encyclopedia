import type {MysteryMushroomProperty} from './properties/MysteryMushroomProperty';
import type {NameTrait}               from '../../lang/name/NameTrait';
import type {GameReferences}          from '../gameReference/GameReferences';

export interface MysteryMushroom
    extends NameTrait,
        MysteryMushroomProperty {

    get games(): MysteryMushroomGames

    //region -------------------- Properties --------------------

    get propertyContainer(): MysteryMushroomProperty

    //region -------------------- Unlock properties --------------------

    get unlockPropertyContainer(): this['propertyContainer']['unlockPropertyContainer']

    get conditionToUnlockIt(): this['unlockPropertyContainer']['conditionToUnlockIt']

    get canBeUnlockedByAnAmiibo(): this['unlockPropertyContainer']['canBeUnlockedByAnAmiibo']

    //endregion -------------------- Unlock properties --------------------
    //region -------------------- Different sprite properties --------------------

    get differentSpritePropertyContainer(): this['propertyContainer']['differentSpritePropertyContainer']

    get haveADifferentJapaneseSprite(): this['differentSpritePropertyContainer']['haveADifferentJapaneseSprite']

    get haveADifferentLeftSprite(): this['differentSpritePropertyContainer']['haveADifferentLeftSprite']

    //endregion -------------------- Different sprite properties --------------------
    //region -------------------- Sound properties --------------------

    get soundPropertyContainer(): this['propertyContainer']['soundPropertyContainer']

    //region -------------------- Sound effect (when collected) --------------------

    get soundEffectWhenCollectedContainer(): this['soundPropertyContainer']['soundEffectWhenCollectedContainer']

    get haveASoundEffectWhenCollected(): this['soundEffectWhenCollectedContainer']['value']

    get gameOnSoundEffectWhenCollected(): this['soundEffectWhenCollectedContainer']['gameReference']

    //endregion -------------------- Sound effect (when collected) --------------------
    //region -------------------- Sound effect (taunt) --------------------

    get soundEffectOnTauntContainer(): this['soundPropertyContainer']['soundEffectOnTauntContainer']

    get haveASoundEffectOnTaunt(): this['soundEffectOnTauntContainer']['value']

    //endregion -------------------- Sound effect (taunt) --------------------
    //region -------------------- Sound effect (movement) --------------------

    get soundEffectOnMovementContainer(): this['soundPropertyContainer']['soundEffectOnMovementContainer']

    get haveASoundEffectOnMovement(): this['soundEffectOnMovementContainer']['value']

    get translationKeyOnSoundEffectOnMovement(): this['soundEffectOnMovementContainer']['translationKey']

    //endregion -------------------- Sound effect (movement) --------------------
    //region -------------------- Sound effect (jump) --------------------

    get soundEffectOnJumpContainer(): this['soundPropertyContainer']['soundEffectOnJumpContainer']

    get haveASoundEffectOnJump(): this['soundEffectOnJumpContainer']['value']

    get amountOnSoundEffectOnJump(): this['soundEffectOnJumpContainer']['amount']

    get haveMultipleImagesOnJump(): this['soundEffectOnJumpContainer']['haveMultipleImages']

    get gameOnSoundEffectOnJump(): this['soundEffectOnJumpContainer']['gameReference']

    //endregion -------------------- Sound effect (jump) --------------------
    //region -------------------- Sound effect (ground after jump) --------------------

    get soundEffectOnGroundAfterJumpContainer(): this['soundPropertyContainer']['soundEffectOnGroundAfterJumpContainer']

    get haveASoundEffectOnGroundAfterJump(): this['soundEffectOnGroundAfterJumpContainer']['value']

    get gameOnSoundEffectOnGroundAfterJump(): this['soundEffectOnGroundAfterJumpContainer']['gameReference']

    //endregion -------------------- Sound effect (ground after jump) --------------------
    //region -------------------- Sound effect (turn after run) --------------------

    get soundEffectOnTurnAfterRunContainer(): this['soundPropertyContainer']['soundEffectOnTurnAfterRunContainer']

    get haveASoundEffectOnTurnAfterRun(): this['soundEffectOnTurnAfterRunContainer']['value']

    //endregion -------------------- Sound effect (turn after run) --------------------
    //region -------------------- Special music (star mode) --------------------

    get specialMusicInStarModeContainer(): this['soundPropertyContainer']['specialMusicInStarModeContainer']

    get haveASpecialMusicInStarMode(): this['specialMusicInStarModeContainer']['value']

    get gameOnSpecialMusicInStarMode(): this['specialMusicInStarModeContainer']['gameReference']

    get translationKeyOnSpecialMusicInStarMode(): this['specialMusicInStarModeContainer']['translationKey']

    //endregion -------------------- Special music (star mode) --------------------
    //region -------------------- Sound effect (goal pole) --------------------

    get soundEffectOnGoalPoleContainer(): this['soundPropertyContainer']['soundEffectOnGoalPoleContainer']

    get haveASoundEffectOnGoalPole(): this['soundEffectOnGoalPoleContainer']['value']

    get gameOnSoundEffectOnGoalPole(): this['soundEffectOnGoalPoleContainer']['gameReference']

    get translationKeyOnSoundEffectOnGoalPole(): this['soundEffectOnGoalPoleContainer']['translationKey']

    get simpleTranslationKeyOnSoundEffectOnGoalPole(): this['soundEffectOnGoalPoleContainer']['simpleTranslationKey']

    get typeOfMusicOnGoalPole(): this['soundEffectOnGoalPoleContainer']['type']

    //endregion -------------------- Sound effect (goal pole) --------------------
    //region -------------------- Sound effect (death) --------------------

    get soundEffectOnDeathContainer(): this['soundPropertyContainer']['soundEffectOnDeathContainer']

    get haveASoundEffectOnDeath(): this['soundEffectOnDeathContainer']['value']

    get gameOnSoundEffectOnDeath(): this['soundEffectOnDeathContainer']['gameReference']

    get translationKeyOnSoundEffectOnDeath(): this['soundEffectOnDeathContainer']['translationKey']

    get simpleTranslationKeyOnSoundEffectOnDeath(): this['soundEffectOnDeathContainer']['simpleTranslationKey']

    get typeOfSoundEffectOnDeath(): this['soundEffectOnDeathContainer']['type']

    //endregion -------------------- Sound effect (death) --------------------

    //endregion -------------------- Sound properties --------------------

    //endregion -------------------- Properties --------------------

}

export type MysteryMushroomGames = readonly [GameReferences,]
                                   | readonly [GameReferences, GameReferences,]
                                   | readonly [GameReferences, GameReferences, GameReferences, GameReferences,];
