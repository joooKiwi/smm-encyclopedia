import type {PlayerSoundEffectTriggerProperty, PossibleTranslation} from './PlayerSoundEffectTriggerProperty';

import {assert} from '../../../util/utilitiesMethods';

/**
 * @multiton
 * @provider
 */
export class PlayerSoundEffectTriggerPropertyContainer
    implements PlayerSoundEffectTriggerProperty {

    //region -------------------- Predefined containers --------------------

    static readonly #JUMP_AFTER_LANDING =                    new PlayerSoundEffectTriggerPropertyContainer('After landing and a jump is made',                                                                                                                 true,  false, false, false, false, false, false, false, false,);
    static readonly #TURN_AROUND_AFTER_BEING_AT_FULL_SPEED = new PlayerSoundEffectTriggerPropertyContainer('After turning around after being at full speed',                                                                                                   false, true,  false, false, false, false, false, false, false,);
    static readonly #ON_CROUCH =                             new PlayerSoundEffectTriggerPropertyContainer('On crouch',                                                                                                                                        false, false, true,  false, false, false, false, false, false,);
    static readonly #AFTER_3_SECONDS_OF_NON_MOVEMENT =       new PlayerSoundEffectTriggerPropertyContainer('After 3 seconds of non movement (it repeat itself continuously)',                                                                                  false, false, false, true,  false, false, false, false, false,);

    static readonly #COLLECT_POWER_UP =                      new PlayerSoundEffectTriggerPropertyContainer('When a power-up is collected (power-up / Buzzy Shell / Spiny Shell)',                                                                              false, false, false, false, true,  false, false, false, false,);
    static readonly #GET_INTO_AN_ENTITY =                    new PlayerSoundEffectTriggerPropertyContainer('When getting into an entity (Clown car / Lakitu\'s Cloud / Boots) / Yoshi (SMM2 only) / Dry Bones Shell (SMM2 only) / Swinging Claw (SMM2 only))', false, false, false, false, false, true,  false, false, false,);

    static readonly #AT_SPAWN =                              new PlayerSoundEffectTriggerPropertyContainer('At spawn',                                                                                                                                         false, false, false, false, false, false, true,  false, false,);
    static readonly #TAKE_DAMAGE =                           new PlayerSoundEffectTriggerPropertyContainer('When taking damage',                                                                                                                               false, false, false, false, false, false, false, true,  false,);
    static readonly #LOST_A_LIFE =                           new PlayerSoundEffectTriggerPropertyContainer('When losing a life',                                                                                                                               false, false, false, false, false, false, false, false, true, );
    static readonly #TAKE_DAMAGE_OR_LOST_A_LIFE =            new PlayerSoundEffectTriggerPropertyContainer('When taking damage or losing a life',                                                                                                              false, false, false, false, false, false, false, true,  true, );

    //endregion -------------------- Predefined containers --------------------
    //region -------------------- Container attributes, constructor & methods --------------------

    readonly #translationKey: PossibleTranslation;

    readonly #doesTriggerOnPlayerWhenJumpingAfterLanding;
    readonly #doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed;
    readonly #doesTriggerOnPlayerWhenCrouching;
    readonly #doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly;

    readonly #doesTriggerOnPlayerWhenCollectingAPowerUp;
    readonly #doesTriggerOnPlayerWhenGettingIntoAEntity;

    readonly #doesTriggerOnPlayerAtSpawn;
    readonly #doesTriggerOnPlayerWhenTakingDamage;
    readonly #doesTriggerOnPlayerWhenLosingALife;

    private constructor(translationKey: PossibleTranslation,
                        onJumpAfterLanding: boolean, onTurnAroundAfterBeingAtFullSpeed: boolean, onCrouch: boolean, after3SecondsOfNonMovementRepeatedly: boolean,
                        onPowerUpCollected: boolean, whenGettingIntoAEntity: boolean,
                        atSpawn: boolean, onDamageTaken: boolean, whenLosingALife: boolean,) {
        this.#translationKey = translationKey;

        this.#doesTriggerOnPlayerWhenJumpingAfterLanding = onJumpAfterLanding;
        this.#doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed = onTurnAroundAfterBeingAtFullSpeed;
        this.#doesTriggerOnPlayerWhenCrouching = onCrouch;
        this.#doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly = after3SecondsOfNonMovementRepeatedly;

        this.#doesTriggerOnPlayerWhenCollectingAPowerUp = onPowerUpCollected;
        this.#doesTriggerOnPlayerWhenGettingIntoAEntity = whenGettingIntoAEntity;

        this.#doesTriggerOnPlayerAtSpawn = atSpawn;
        this.#doesTriggerOnPlayerWhenTakingDamage = onDamageTaken;
        this.#doesTriggerOnPlayerWhenLosingALife = whenLosingALife;
    }

    public get translationKey() {
        return this.#translationKey;
    }

    //region -------------------- Movement triggers --------------------

    public get doesTriggerOnPlayerWhenJumpingAfterLanding(): boolean {
        return this.#doesTriggerOnPlayerWhenJumpingAfterLanding;
    }

    public get doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed(): boolean {
        return this.#doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed;
    }

    public get doesTriggerOnPlayerWhenCrouching(): boolean {
        return this.#doesTriggerOnPlayerWhenCrouching;
    }

    public get doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly(): boolean {
        return this.#doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly;
    }

    //endregion -------------------- Movement triggers --------------------
    //region -------------------- Interaction triggers --------------------

    public get doesTriggerOnPlayerWhenCollectingAPowerUp(): boolean {
        return this.#doesTriggerOnPlayerWhenCollectingAPowerUp;
    }

    public get doesTriggerOnPlayerWhenGettingIntoAEntity(): boolean {
        return this.#doesTriggerOnPlayerWhenGettingIntoAEntity;
    }

    //endregion -------------------- Interaction triggers --------------------
    //region -------------------- Environment triggers --------------------

    public get doesTriggerOnPlayerAtSpawn(): boolean {
        return this.#doesTriggerOnPlayerAtSpawn;
    }

    public get doesTriggerOnPlayerWhenTakingDamage(): boolean {
        return this.#doesTriggerOnPlayerWhenTakingDamage;
    }

    public get doesTriggerOnPlayerWhenLosingALife(): boolean {
        return this.#doesTriggerOnPlayerWhenLosingALife;
    }

    //endregion -------------------- Environment triggers --------------------

    //endregion -------------------- Container attributes, constructor & methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    /**
     * <p>
     *  Return only one possible instance based on the boolean received.
     *  It cannot receive any dual true since only the first boolean will be considered.
     * </p>
     *
     * <p>
     *  Note that only the last arguments (<b>onDamageTaken</b> & <b>whenLosingALife</b>) can be both true
     *  to have a mix of both of them.
     * </p>
     *
     * @param onJumpAfterLanding
     * @param onTurnAroundAfterBeingAtFullSpeed
     * @param onCrouch
     * @param after3SecondsOfNonMovementRepeatedly
     * @param onPowerUpCollected
     * @param whenGettingIntoAEntity
     * @param atSpawn
     * @param onDamageTaken
     * @param whenLosingALife
     */
    public static get(onJumpAfterLanding: boolean, onTurnAroundAfterBeingAtFullSpeed: boolean, onCrouch: boolean, after3SecondsOfNonMovementRepeatedly: boolean,
                      onPowerUpCollected: boolean, whenGettingIntoAEntity: boolean,
                      atSpawn: boolean, onDamageTaken: boolean, whenLosingALife: boolean,): PlayerSoundEffectTriggerProperty {
        if (onJumpAfterLanding)
            return this.#JUMP_AFTER_LANDING;
        if (onTurnAroundAfterBeingAtFullSpeed)
            return this.#TURN_AROUND_AFTER_BEING_AT_FULL_SPEED;
        if (onCrouch)
            return this.#ON_CROUCH;
        if (after3SecondsOfNonMovementRepeatedly)
            return this.#AFTER_3_SECONDS_OF_NON_MOVEMENT;

        if (onPowerUpCollected)
            return this.#COLLECT_POWER_UP;
        if (whenGettingIntoAEntity)
            return this.#GET_INTO_AN_ENTITY;

        if (atSpawn)
            return this.#AT_SPAWN;
        if (onDamageTaken)
            return whenLosingALife ? this.#TAKE_DAMAGE_OR_LOST_A_LIFE : this.#TAKE_DAMAGE;
        if (whenLosingALife)
            return this.#LOST_A_LIFE;

        assert(false, 'There is no player sound effect trigger usable with no possible property.',);
    }

    //endregion -------------------- Provider / Multiton method --------------------

}
