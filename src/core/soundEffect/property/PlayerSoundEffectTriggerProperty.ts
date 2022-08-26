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
    | 'After land + jump'
    | 'Turn after full speed'
    | 'Crouch'
    | 'After 3 seconds → no movement (continuous)'

    | 'Power-up collected'
    | 'Get in entity'

    | 'Spawn'
    | 'Take damage'
    | 'Lose life'
    | 'Take damage | Lose life';
