import {MysteryMushroom, MysteryMushroomGames} from './MysteryMushroom';
import {MysteryMushroomProperty}               from './properties/MysteryMushroomProperty';
import {Name}                                  from '../../lang/name/Name';

export class MysteryMushroomContainer
    implements MysteryMushroom {

    //region -------------------- Attributes --------------------

    readonly #nameContainer;
    readonly #games;
    readonly #propertyContainer;

    //endregion -------------------- Attributes --------------------

    public constructor(name: Name, games: MysteryMushroomGames, property: MysteryMushroomProperty,) {
        this.#nameContainer = name;
        this.#games = games;
        this.#propertyContainer = property;
    }

    //region -------------------- Name properties --------------------

    public get nameContainer(): Name {
        return this.#nameContainer;
    }


    public get languageValue(): this['nameContainer']['languageValue'] {
        return this.nameContainer.languageValue;
    }


    public get originalEnglish(): this['nameContainer']['originalEnglish'] {
        return this.nameContainer.originalEnglish;
    }

    public get english(): this['nameContainer']['english'] {
        return this.nameContainer.english;
    }

    public get americanEnglish(): this['nameContainer']['americanEnglish'] {
        return this.nameContainer.americanEnglish;
    }

    public get europeanEnglish(): this['nameContainer']['europeanEnglish'] {
        return this.nameContainer.europeanEnglish;
    }


    public get originalFrench(): this['nameContainer']['originalFrench'] {
        return this.nameContainer.originalFrench;
    }

    public get french(): this['nameContainer']['french'] {
        return this.nameContainer.french;
    }

    public get canadianFrench(): this['nameContainer']['canadianFrench'] {
        return this.nameContainer.canadianFrench;
    }

    public get europeanFrench(): this['nameContainer']['europeanFrench'] {
        return this.nameContainer.europeanFrench;
    }


    public get german(): this['nameContainer']['german'] {
        return this.nameContainer.german;
    }


    public get originalSpanish(): this['nameContainer']['originalSpanish'] {
        return this.nameContainer.originalSpanish;
    }

    public get spanish(): this['nameContainer']['spanish'] {
        return this.nameContainer.spanish;
    }

    public get americanSpanish(): this['nameContainer']['americanSpanish'] {
        return this.nameContainer.americanSpanish;
    }

    public get europeanSpanish(): this['nameContainer']['europeanSpanish'] {
        return this.nameContainer.europeanSpanish;
    }


    public get italian(): this['nameContainer']['italian'] {
        return this.nameContainer.italian;
    }


    public get dutch(): this['nameContainer']['dutch'] {
        return this.nameContainer.dutch;
    }


    public get originalPortuguese(): this['nameContainer']['originalPortuguese'] {
        return this.nameContainer.originalPortuguese;
    }

    public get portuguese(): this['nameContainer']['portuguese'] {
        return this.nameContainer.portuguese;
    }

    public get americanPortuguese(): this['nameContainer']['americanPortuguese'] {
        return this.nameContainer.americanPortuguese;
    }

    public get europeanPortuguese(): this['nameContainer']['europeanPortuguese'] {
        return this.nameContainer.europeanPortuguese;
    }


    public get russian(): this['nameContainer']['russian'] {
        return this.nameContainer.russian;
    }


    public get japanese(): this['nameContainer']['japanese'] {
        return this.nameContainer.japanese;
    }


    public get originalChinese(): this['nameContainer']['originalChinese'] {
        return this.nameContainer.originalChinese;
    }

    public get chinese(): this['nameContainer']['chinese'] {
        return this.nameContainer.chinese;
    }

    public get traditionalChinese(): this['nameContainer']['traditionalChinese'] {
        return this.nameContainer.traditionalChinese;
    }

    public get simplifiedChinese(): this['nameContainer']['simplifiedChinese'] {
        return this.nameContainer.simplifiedChinese;
    }


    public get korean(): this['nameContainer']['korean'] {
        return this.nameContainer.korean;
    }


    public get isGreekUsed(): this['nameContainer']['isGreekUsed'] {
        return this.nameContainer.isGreekUsed;
    }

    public get greek(): this['nameContainer']['greek'] {
        return this.nameContainer.greek;
    }


    public get originalLanguages(): this['nameContainer']['originalLanguages'] {
        return this.nameContainer.originalLanguages;
    }

    //endregion -------------------- Name properties --------------------

    public get games() {
        return this.#games;
    }

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

    public toNameMap() {
        return this.nameContainer.toNameMap();
    }

}
