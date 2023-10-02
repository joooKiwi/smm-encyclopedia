import type {SoundEffectOnDeath}           from 'core/mysteryMushroom/properties/sound/SoundEffectOnDeath'
import type {SoundEffectOnGoalPole}        from 'core/mysteryMushroom/properties/sound/SoundEffectOnGoalPole'
import type {SoundEffectOnGroundAfterJump} from 'core/mysteryMushroom/properties/sound/SoundEffectOnGroundAfterJump'
import type {SoundEffectOnJump}            from 'core/mysteryMushroom/properties/sound/SoundEffectOnJump'
import type {SoundEffectOnMovement}        from 'core/mysteryMushroom/properties/sound/SoundEffectOnMovement'
import type {SoundEffectOnTaunt}           from 'core/mysteryMushroom/properties/sound/SoundEffectOnTaunt'
import type {SoundEffectOnTurnAfterRun}    from 'core/mysteryMushroom/properties/sound/SoundEffectOnTurnAfterRun'
import type {SoundEffectWhenCollected}     from 'core/mysteryMushroom/properties/sound/SoundEffectWhenCollected'
import type {SoundProperty}                from 'core/mysteryMushroom/properties/sound/SoundProperty'
import type {SpecialMusicInStarMode}       from 'core/mysteryMushroom/properties/sound/SpecialMusicInStarMode'

/**
 * @todo Separate each "sound effect" or "special music" in their each class
 */
export class SoundPropertyContainer
    implements SoundProperty {

    //region -------------------- Fields --------------------

    readonly #soundEffectWhenCollectedContainer
    readonly #soundEffectOnTauntContainer
    readonly #soundEffectOnMovementContainer
    readonly #soundEffectOnJumpContainer
    readonly #soundEffectOnGroundAfterJumpContainer
    readonly #soundEffectOnTurnAfterRunContainer
    readonly #specialMusicInStarModeContainer
    readonly #soundEffectOnGoalPoleContainer
    readonly #soundEffectOnDeathContainer

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(soundEffectWhenCollected: SoundEffectWhenCollected,
                       soundEffectOnTaunt: SoundEffectOnTaunt,
                       soundEffectOnMovement: SoundEffectOnMovement,
                       soundEffectOnJump: SoundEffectOnJump,
                       soundEffectOnGroundAfterJump: SoundEffectOnGroundAfterJump,
                       soundEffectOnTurnAfterRun: SoundEffectOnTurnAfterRun,
                       specialMusicInStarMode: SpecialMusicInStarMode,
                       soundEffectOnGoalPole: SoundEffectOnGoalPole,
                       soundEffectOnDeath: SoundEffectOnDeath,) {
        this.#soundEffectWhenCollectedContainer = soundEffectWhenCollected
        this.#soundEffectOnTauntContainer = soundEffectOnTaunt
        this.#soundEffectOnMovementContainer = soundEffectOnMovement
        this.#soundEffectOnJumpContainer = soundEffectOnJump
        this.#soundEffectOnGroundAfterJumpContainer = soundEffectOnGroundAfterJump
        this.#soundEffectOnTurnAfterRunContainer = soundEffectOnTurnAfterRun
        this.#specialMusicInStarModeContainer = specialMusicInStarMode
        this.#soundEffectOnGoalPoleContainer = soundEffectOnGoalPole
        this.#soundEffectOnDeathContainer = soundEffectOnDeath
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- When collected --------------------

    public get soundEffectWhenCollectedContainer() {
        return this.#soundEffectWhenCollectedContainer
    }

    public get haveASoundEffectWhenCollected() {
        return this.soundEffectWhenCollectedContainer.value
    }

    public get gameOnSoundEffectWhenCollected() {
        return this.soundEffectWhenCollectedContainer.gameReference
    }

    //endregion -------------------- When collected --------------------
    //region -------------------- Taunt --------------------

    public get soundEffectOnTauntContainer() {
        return this.#soundEffectOnTauntContainer
    }

    public get haveASoundEffectOnTaunt() {
        return this.soundEffectOnTauntContainer.value
    }

    //endregion -------------------- Taunt --------------------
    //region -------------------- Movement --------------------

    public get soundEffectOnMovementContainer() {
        return this.#soundEffectOnMovementContainer
    }

    public get haveASoundEffectOnMovement() {
        return this.soundEffectOnMovementContainer.value
    }

    public get translationKeyOnSoundEffectOnMovement() {
        return this.soundEffectOnMovementContainer.translationKey
    }

    //endregion -------------------- Movement --------------------
    //region -------------------- Jump --------------------

    public get soundEffectOnJumpContainer() {
        return this.#soundEffectOnJumpContainer
    }

    public get haveASoundEffectOnJump() {
        return this.soundEffectOnJumpContainer.value
    }

    public get amountOnSoundEffectOnJump() {
        return this.soundEffectOnJumpContainer.amount
    }

    public get haveMultipleImagesOnJump() {
        return this.soundEffectOnJumpContainer.haveMultipleImages
    }

    public get gameOnSoundEffectOnJump() {
        return this.soundEffectOnJumpContainer.gameReference
    }

    //endregion -------------------- Jump --------------------
    //region -------------------- Ground after jump --------------------

    public get soundEffectOnGroundAfterJumpContainer() {
        return this.#soundEffectOnGroundAfterJumpContainer
    }

    public get haveASoundEffectOnGroundAfterJump() {
        return this.soundEffectOnGroundAfterJumpContainer.value
    }

    public get gameOnSoundEffectOnGroundAfterJump() {
        return this.soundEffectOnGroundAfterJumpContainer.gameReference
    }

    //endregion -------------------- Ground after jump --------------------
    //region -------------------- Turn after run --------------------

    public get soundEffectOnTurnAfterRunContainer() {
        return this.#soundEffectOnTurnAfterRunContainer
    }

    public get haveASoundEffectOnTurnAfterRun() {
        return this.soundEffectOnTurnAfterRunContainer.value
    }

    //endregion -------------------- Turn after run --------------------
    //region -------------------- Star mode --------------------

    public get specialMusicInStarModeContainer() {
        return this.#specialMusicInStarModeContainer
    }

    public get haveASpecialMusicInStarMode() {
        return this.specialMusicInStarModeContainer.value
    }

    public get gameOnSpecialMusicInStarMode() {
        return this.specialMusicInStarModeContainer.gameReference
    }

    public get translationKeyOnSpecialMusicInStarMode() {
        return this.specialMusicInStarModeContainer.translationKey
    }

    //endregion -------------------- Star mode --------------------
    //region -------------------- Goal pole --------------------

    public get soundEffectOnGoalPoleContainer() {
        return this.#soundEffectOnGoalPoleContainer
    }

    public get haveASoundEffectOnGoalPole() {
        return this.soundEffectOnGoalPoleContainer.value
    }

    public get gameOnSoundEffectOnGoalPole() {
        return this.soundEffectOnGoalPoleContainer.gameReference
    }

    public get translationKeyOnSoundEffectOnGoalPole() {
        return this.soundEffectOnGoalPoleContainer.translationKey
    }

    public get simpleTranslationKeyOnSoundEffectOnGoalPole() {
        return this.soundEffectOnGoalPoleContainer.simpleTranslationKey
    }

    public get typeOfMusicOnGoalPole() {
        return this.soundEffectOnGoalPoleContainer.type
    }

    //endregion -------------------- Goal pole --------------------
    //region -------------------- Death --------------------

    public get soundEffectOnDeathContainer() {
        return this.#soundEffectOnDeathContainer
    }

    public get haveASoundEffectOnDeath() {
        return this.soundEffectOnDeathContainer.value
    }

    public get gameOnSoundEffectOnDeath() {
        return this.soundEffectOnDeathContainer.gameReference
    }

    public get translationKeyOnSoundEffectOnDeath() {
        return this.soundEffectOnDeathContainer.translationKey
    }

    public get simpleTranslationKeyOnSoundEffectOnDeath() {
        return this.soundEffectOnDeathContainer.simpleTranslationKey
    }

    public get typeOfSoundEffectOnDeath() {
        return this.soundEffectOnDeathContainer.type
    }

    //endregion -------------------- Death --------------------

    //endregion -------------------- Getter methods --------------------

}
