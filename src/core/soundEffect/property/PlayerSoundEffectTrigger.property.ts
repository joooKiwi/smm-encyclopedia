import type {PossibleTranslationKey}  from 'core/soundEffect/property/PlayerSoundEffectTriggers.types'
import type {ClassWithTranslationKey} from 'lang/ClassWithTranslationKey'

export interface PlayerSoundEffectTriggerProperty
    extends ClassWithTranslationKey<PossibleTranslationKey> {

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

}
