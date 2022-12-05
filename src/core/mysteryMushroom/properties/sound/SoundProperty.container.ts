import type {PossibleGamesReceived as GameInStarMode, PossibleValuesReceived as PossibleSpecialMusicInStarMode}                                                                                                                  from 'core/mysteryMushroom/properties/sound/SpecialMusicInStarMode'
import type {PossibleGamesReceived as GameOnSoundEffectOnDeath, PossibleTranslationKeys as TranslationKeyOnDeath, PossibleTypesReceived as TypeOfSoundEffectOnDeath, PossibleValuesReceived as PossibleSoundEffectOnDeath}       from 'core/mysteryMushroom/properties/sound/SoundEffectOnDeath'
import type {PossibleGamesReceived as GameOnSoundEffectOnGoalPole, PossibleTranslationKeys as TranslationKeyOnGoalPole, PossibleTypesReceived as TypeOfMusicOnGoalPole, PossibleValuesReceived as PossibleSoundEffectOnGoalPole} from 'core/mysteryMushroom/properties/sound/SoundEffectOnGoalPole'
import type {PossibleGamesReceived as GameOnSoundEffectOnGroundAfterJump, PossibleValuesReceived as PossibleSoundEffectOnGroundAfterJump}                                                                                        from 'core/mysteryMushroom/properties/sound/SoundEffectOnGroundAfterJump'
import type {PossibleGamesReceived as GameOnSoundEffectOnJump, PossibleValuesReceived as PossibleSoundEffectOnJump}                                                                                                              from 'core/mysteryMushroom/properties/sound/SoundEffectOnJump'
import type {PossibleGamesReceived as GameOnSoundEffectOnTaunt, PossibleValuesReceived as PossibleSoundEffectOnTaunt}                                                                                                            from 'core/mysteryMushroom/properties/sound/SoundEffectOnTaunt'
import type {PossibleGamesReceived as GameOnSoundEffectWhenCollected, PossibleValuesReceived as PossibleSoundEffectWhenCollected}                                                                                                from 'core/mysteryMushroom/properties/sound/SoundEffectWhenCollected'
import type {PossibleValuesReceived as PossibleSoundEffectOnMovement}                                                                                                                                                            from 'core/mysteryMushroom/properties/sound/SoundEffectOnMovement'
import type {PossibleValuesReceived as PossibleSoundEffectOnTurnAfterRun}                                                                                                                                                        from 'core/mysteryMushroom/properties/sound/SoundEffectOnTurnAfterRun'
import type {SoundProperty}                                                                                                                                                                                                      from 'core/mysteryMushroom/properties/sound/SoundProperty'

import {SoundEffectOnDeathContainer}           from 'core/mysteryMushroom/properties/sound/SoundEffectOnDeath.container'
import {SoundEffectOnGoalPoleContainer}        from 'core/mysteryMushroom/properties/sound/SoundEffectOnGoalPole.container'
import {SoundEffectOnGroundAfterJumpContainer} from 'core/mysteryMushroom/properties/sound/SoundEffectOnGroundAfterJump.container'
import {SoundEffectOnJumpContainer}            from 'core/mysteryMushroom/properties/sound/SoundEffectOnJump.container'
import {SoundEffectOnMovementContainer}        from 'core/mysteryMushroom/properties/sound/SoundEffectOnMovement.container'
import {SoundEffectOnTauntContainer}           from 'core/mysteryMushroom/properties/sound/SoundEffectOnTaunt.container'
import {SoundEffectOnTurnAfterRunContainer}    from 'core/mysteryMushroom/properties/sound/SoundEffectOnTurnAfterRun.container'
import {SoundEffectWhenCollectedContainer}     from 'core/mysteryMushroom/properties/sound/SoundEffectWhenCollected.container'
import {SpecialMusicInStarModeContainer}       from 'core/mysteryMushroom/properties/sound/SpecialMusicInStarMode.container'

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

    public constructor(valueWhenCollected: PossibleSoundEffectWhenCollected, gameWhenCollected: GameOnSoundEffectWhenCollected,
                       valueOnTaunt: PossibleSoundEffectOnTaunt, gameOnTaunt: GameOnSoundEffectOnTaunt,
                       valueOnMovement: PossibleSoundEffectOnMovement,
                       valueOnJump: PossibleSoundEffectOnJump, gameOnJump: GameOnSoundEffectOnJump, valueOnGroundAfterJump: PossibleSoundEffectOnGroundAfterJump, gameOnGroundAfterJump: GameOnSoundEffectOnGroundAfterJump,
                       valueOnTurnAfterRun: PossibleSoundEffectOnTurnAfterRun,
                       valueInStarMode: PossibleSpecialMusicInStarMode, gameInStarMode: GameInStarMode,
                       valueOnGoalPole: PossibleSoundEffectOnGoalPole, typeOnGoalPole: TypeOfMusicOnGoalPole, gameOnGoalPole: GameOnSoundEffectOnGoalPole, smallDefinitionOnGoalPole: TranslationKeyOnGoalPole,
                       valueOnDeath: PossibleSoundEffectOnDeath, typeOnDeath: TypeOfSoundEffectOnDeath, gameOnDeath: GameOnSoundEffectOnDeath, smallDefinitionOnDeath: TranslationKeyOnDeath,) {
        this.#soundEffectWhenCollectedContainer = SoundEffectWhenCollectedContainer.get(valueWhenCollected, gameWhenCollected,)
        this.#soundEffectOnTauntContainer = SoundEffectOnTauntContainer.get(valueOnTaunt, gameOnTaunt,)
        this.#soundEffectOnMovementContainer = SoundEffectOnMovementContainer.get(valueOnMovement,)
        this.#soundEffectOnJumpContainer = SoundEffectOnJumpContainer.get(valueOnJump, gameOnJump,)
        this.#soundEffectOnGroundAfterJumpContainer = SoundEffectOnGroundAfterJumpContainer.get(valueOnGroundAfterJump, gameOnGroundAfterJump,)
        this.#soundEffectOnTurnAfterRunContainer = SoundEffectOnTurnAfterRunContainer.get(valueOnTurnAfterRun,)
        this.#specialMusicInStarModeContainer = SpecialMusicInStarModeContainer.get(valueInStarMode, gameInStarMode,)
        this.#soundEffectOnGoalPoleContainer = SoundEffectOnGoalPoleContainer.get(valueOnGoalPole, typeOnGoalPole, gameOnGoalPole, smallDefinitionOnGoalPole,)
        this.#soundEffectOnDeathContainer = SoundEffectOnDeathContainer.get(valueOnDeath, typeOnDeath, gameOnDeath, smallDefinitionOnDeath,)
    }

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

}
