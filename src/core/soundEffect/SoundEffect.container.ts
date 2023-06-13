import type {GameProperty}              from 'core/entity/properties/game/GameProperty'
import type {SoundEffect}               from 'core/soundEffect/SoundEffect'
import type {PlayerSoundEffectTriggers} from 'core/soundEffect/property/PlayerSoundEffectTriggers'
import type {PossibleTranslationKey}    from 'core/soundEffect/property/PlayerSoundEffectTriggers.types'
import type {SoundEffectProperty}       from 'core/soundEffect/property/SoundEffectProperty'
import type {SoundEffectCategory}       from 'core/soundEffectCategory/SoundEffectCategory'
import type {Name}                      from 'lang/name/Name'

import {ClassContainingANameAndACategory} from 'lang/name/ClassContainingANameAndACategory'

export class SoundEffectContainer
    extends ClassContainingANameAndACategory<string, string, SoundEffectCategory>
    implements SoundEffect {

    //region -------------------- Fields --------------------

    readonly #propertyContainer

    //endregion -------------------- Fields --------------------

    public constructor(name: Name<string>, category: SoundEffectCategory, property: SoundEffectProperty,) {
        super(name, category,)
        this.#propertyContainer = property
    }

    //region -------------------- Getter methods --------------------

    //region -------------------- Properties --------------------

    public get propertyContainer(): SoundEffectProperty {
        return this.#propertyContainer
    }

    //region -------------------- Game properties --------------------

    public get gameContainer(): GameProperty {
        return this.propertyContainer.gameContainer
    }

    public get isInSuperMarioMaker1(): boolean {
        return this.gameContainer.isInSuperMarioMaker1
    }

    public get isInSuperMarioMakerFor3DS(): boolean {
        return this.gameContainer.isInSuperMarioMakerFor3DS
    }

    public get isInSuperMarioMaker2(): boolean {
        return this.gameContainer.isInSuperMarioMaker2
    }

    //endregion -------------------- Game properties --------------------
    //region -------------------- Player sound effect trigger properties --------------------

    public get playerSoundEffectTriggerContainer(): PlayerSoundEffectTriggers {
        return this.propertyContainer.playerSoundEffectTriggerContainer
    }

    public get translationKey(): PossibleTranslationKey {
        return this.playerSoundEffectTriggerContainer.translationKey
    }

    //region -------------------- Movement triggers --------------------

    public get doesTriggerOnPlayerWhenJumpingAfterLanding(): boolean {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenJumpingAfterLanding
    }

    public get doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed(): boolean {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed
    }

    public get doesTriggerOnPlayerWhenCrouching(): boolean {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenCrouching
    }

    public get doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly(): boolean {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly
    }

    //endregion -------------------- Movement triggers --------------------
    //region -------------------- Interaction triggers --------------------

    public get doesTriggerOnPlayerWhenCollectingAPowerUp(): boolean {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenCollectingAPowerUp
    }

    public get doesTriggerOnPlayerWhenGettingIntoAEntity(): boolean {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenGettingIntoAEntity
    }

    //endregion -------------------- Interaction triggers --------------------
    //region -------------------- Environment triggers --------------------

    public get doesTriggerOnPlayerAtSpawn(): boolean {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerAtSpawn
    }

    public get doesTriggerOnPlayerWhenTakingDamage(): boolean {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenTakingDamage
    }

    public get doesTriggerOnPlayerWhenLosingALife(): boolean {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenLosingALife
    }

    //endregion -------------------- Environment triggers --------------------

    //endregion -------------------- Player sound effect trigger properties --------------------

    //endregion -------------------- Properties --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap() {
        return this.propertyContainer.toGameMap()
    }

    //endregion -------------------- Convertor methods --------------------

}
