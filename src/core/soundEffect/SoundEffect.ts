import type {GameProperty}              from 'core/entity/properties/game/GameProperty'
import type {PlayerSoundEffectTriggers} from 'core/soundEffect/property/PlayerSoundEffectTriggers'
import type {SoundEffectProperty}       from 'core/soundEffect/property/SoundEffectProperty'
import type {SoundEffectCategory}       from 'core/soundEffectCategory/SoundEffectCategory'
import type {NameTrait}                 from 'lang/name/NameTrait'
import type {NameTraitFromACategory}    from 'lang/name/NameTraitFromACategory'

export interface SoundEffect
    extends NameTrait<string>, NameTraitFromACategory<string, SoundEffectCategory>,
        SoundEffectProperty {

    //region -------------------- Properties --------------------

    get propertyContainer(): SoundEffectProperty

    //region -------------------- Game properties --------------------

    get gameContainer(): GameProperty

    get isInSuperMarioMaker1(): boolean

    get isInSuperMarioMakerFor3DS(): boolean

    get isInSuperMarioMaker2(): boolean

    //endregion -------------------- Game properties --------------------
    //region -------------------- Player sound effect trigger properties --------------------

    get playerSoundEffectTriggerContainer(): PlayerSoundEffectTriggers

    //region -------------------- Movement triggers --------------------

    get doesTriggerOnPlayerWhenJumpingAfterLanding(): boolean

    get doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed(): boolean

    get doesTriggerOnPlayerWhenCrouching(): boolean

    get doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly(): boolean

    //endregion -------------------- Movement triggers --------------------
    //region -------------------- Interaction triggers --------------------

    get doesTriggerOnPlayerWhenCollectingAPowerUp(): boolean

    get doesTriggerOnPlayerWhenGettingIntoAEntity(): boolean

    //endregion -------------------- Interaction triggers --------------------
    //region -------------------- Environment triggers --------------------

    get doesTriggerOnPlayerAtSpawn(): boolean

    get doesTriggerOnPlayerWhenTakingDamage(): boolean

    get doesTriggerOnPlayerWhenLosingALife(): boolean

    //endregion -------------------- Environment triggers --------------------

    //endregion -------------------- Player sound effect trigger properties --------------------

    //endregion -------------------- Properties --------------------

}
