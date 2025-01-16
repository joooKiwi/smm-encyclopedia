import type {PossibleTranslationKey}  from 'core/soundEffect/property/PlayerSoundEffectTriggers.types'
import type {ClassWithTranslationKey} from 'lang/ClassWithTranslationKey'

export interface PlayerSoundEffectTriggerProperty
    extends ClassWithTranslationKey<PossibleTranslationKey> {

    //region -------------------- Movement triggers --------------------

    readonly doesTriggerOnPlayerWhenJumpingAfterLanding: boolean
    readonly doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed: boolean
    readonly doesTriggerOnPlayerWhenCrouching: boolean
    readonly doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly: boolean

    //endregion -------------------- Movement triggers --------------------
    //region -------------------- Interaction triggers --------------------

    readonly doesTriggerOnPlayerWhenCollectingAPowerUp: boolean
    readonly doesTriggerOnPlayerWhenGettingIntoAEntity: boolean

    //endregion -------------------- Interaction triggers --------------------
    //region -------------------- Environment triggers --------------------

    readonly doesTriggerOnPlayerAtSpawn: boolean
    readonly doesTriggerOnPlayerWhenTakingDamage: boolean
    readonly doesTriggerOnPlayerWhenLosingALife: boolean

    //endregion -------------------- Environment triggers --------------------

}
