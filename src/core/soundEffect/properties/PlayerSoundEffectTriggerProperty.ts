import type {ClassWithTranslationKey} from '../../../lang/ClassWithTranslationKey';

export interface PlayerSoundEffectTriggerProperty
    extends ClassWithTranslationKey<PossibleTranslation> {

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

export type PossibleTranslation =
    | 'After landing and a jump is made'
    | 'After turning around after being at full speed'
    | 'On crouch'
    | 'After 3 seconds of non movement (it repeat itself continuously)'

    | 'When a power-up is collected (power-up / Buzzy Shell / Spiny Shell)'
    | 'When getting into an entity (Clown car / Lakitu\'s Cloud / Boots) / Yoshi (SMM2 only) / Dry Bones Shell (SMM2 only) / Swinging Claw (SMM2 only))'

    |'At spawn'
    |'When taking damage'
    |'When losing a life'
    |'When taking damage or losing a life'
    ;
