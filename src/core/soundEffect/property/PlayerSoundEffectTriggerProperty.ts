import type {ClassWithTranslationKey} from '../../../lang/ClassWithTranslationKey'
import type {PossibleTranslationKey}  from './PlayerSoundEffectTriggers.types'

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
