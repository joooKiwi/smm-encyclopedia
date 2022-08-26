import type {ClassWithTranslationKey}                                                                                                                                                                       from '../../../lang/ClassWithTranslationKey';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleTranslationKey, PossibleValue} from './PlayerSoundEffectTriggers.types';
import type {PlayerSoundEffectTriggerProperty}                                                                                                                                                              from './PlayerSoundEffectTriggerProperty';
import type {StaticReference}                                                                                                                                                                               from '../../../util/enum/Enum.types';

import {assert} from '../../../util/utilitiesMethods';
import {Enum}   from '../../../util/enum/Enum';

export class PlayerSoundEffectTriggers
    extends Enum<Ordinals, Names>
    implements ClassWithTranslationKey<PossibleTranslationKey>,
        PlayerSoundEffectTriggerProperty {

    //region -------------------- Enum instances --------------------

    public static readonly JUMP_AFTER_LANDING =                    new class PlayerSoundEffectTriggers_ extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenJumpingAfterLanding(): boolean {
            return true;
        }

    }('After land + jump',);
    public static readonly TURN_AROUND_AFTER_BEING_AT_FULL_SPEED = new class PlayerSoundEffectTriggers_ extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed(): boolean {
            return true;
        }

    }('Turn after full speed',);
    public static readonly ON_CROUCH =                             new class PlayerSoundEffectTriggers_ extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenCrouching(): boolean {
            return true;
        }

    }('Crouch',);
    public static readonly AFTER_3_SECONDS_OF_NON_MOVEMENT =       new class PlayerSoundEffectTriggers_ extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly(): boolean {
            return true;
        }

    }('After 3 seconds → no movement (continuous)',);

    public static readonly COLLECT_POWER_UP =                      new class PlayerSoundEffectTriggers_ extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenCollectingAPowerUp(): boolean {
            return true;
        }

    }('Power-up collected',);
    public static readonly GET_INTO_AN_ENTITY =                    new class PlayerSoundEffectTriggers_ extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenGettingIntoAEntity(): boolean {
            return true;
        }

    }('Get in entity',);

    public static readonly AT_SPAWN =                              new class PlayerSoundEffectTriggers_ extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerAtSpawn(): boolean {
            return true;
        }

    }('Spawn',);
    public static readonly TAKE_DAMAGE =                           new class PlayerSoundEffectTriggers_ extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenTakingDamage(): boolean {
            return true;
        }

    }('Take damage',);
    public static readonly LOSE_A_LIFE =                           new class PlayerSoundEffectTriggers_ extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenLosingALife(): boolean {
            return true;
        }

    }('Lose life',);
    public static readonly TAKE_DAMAGE_OR_LOSE_A_LIFE =            new class PlayerSoundEffectTriggers_ extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenTakingDamage(): boolean {
            return true;
        }

        public override get doesTriggerOnPlayerWhenLosingALife(): boolean {
            return true;
        }

    }('Take damage | Lose life',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: PlayerSoundEffectTriggers;

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #translationKey;

    //endregion -------------------- Fields --------------------

    private constructor(translationKey: PossibleTranslationKey,) {
        super();
        this.#translationKey = translationKey;
    }

    //region -------------------- Getter methods --------------------

    public get translationKey(): PossibleTranslationKey {
        return this.#translationKey;
    }

    //region -------------------- Triggers --------------------

    //region -------------------- Movement triggers --------------------

    public get doesTriggerOnPlayerWhenJumpingAfterLanding(): boolean {
        return false;
    }

    public get doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed(): boolean {
        return false;
    }

    public get doesTriggerOnPlayerWhenCrouching(): boolean {
        return false;
    }

    public get doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly(): boolean {
        return false;
    }

    //endregion -------------------- Movement triggers --------------------
    //region -------------------- Interaction triggers --------------------

    public get doesTriggerOnPlayerWhenCollectingAPowerUp(): boolean {
        return false;
    }

    public get doesTriggerOnPlayerWhenGettingIntoAEntity(): boolean {
        return false;
    }

    //endregion -------------------- Interaction triggers --------------------
    //region -------------------- Environment triggers --------------------

    public get doesTriggerOnPlayerAtSpawn(): boolean {
        return false;
    }

    public get doesTriggerOnPlayerWhenTakingDamage(): boolean {
        return false;
    }

    public get doesTriggerOnPlayerWhenLosingALife(): boolean {
        return false;
    }

    //endregion -------------------- Environment triggers --------------------

    //endregion -------------------- Triggers --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    /**
     * Return only one possible instance based on the boolean received.
     * It cannot receive any dual true since only the first boolean will be considered.
     *
     * Note that only the last arguments (<b>onDamageTaken</b> & <b>whenLosingALife</b>) can be both true
     * to have a mix of both of them.
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
    public static getValueByTrigger(onJumpAfterLanding: boolean, onTurnAroundAfterBeingAtFullSpeed: boolean, onCrouch: boolean, after3SecondsOfNonMovementRepeatedly: boolean,
                                    onPowerUpCollected: boolean, whenGettingIntoAEntity: boolean,
                                    atSpawn: boolean, onDamageTaken: boolean, whenLosingALife: boolean,): PlayerSoundEffectTriggers {
        if (onJumpAfterLanding)
            return this.JUMP_AFTER_LANDING;
        if (onTurnAroundAfterBeingAtFullSpeed)
            return this.TURN_AROUND_AFTER_BEING_AT_FULL_SPEED;
        if (onCrouch)
            return this.ON_CROUCH;
        if (after3SecondsOfNonMovementRepeatedly)
            return this.AFTER_3_SECONDS_OF_NON_MOVEMENT;

        if (onPowerUpCollected)
            return this.COLLECT_POWER_UP;
        if (whenGettingIntoAEntity)
            return this.GET_INTO_AN_ENTITY;

        if (atSpawn)
            return this.AT_SPAWN;
        if (onDamageTaken)
            return whenLosingALife ? this.TAKE_DAMAGE_OR_LOSE_A_LIFE : this.TAKE_DAMAGE;
        if (whenLosingALife)
            return this.LOSE_A_LIFE;

        assert(false, 'There is no player sound effect trigger usable with no possible property.',);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<PlayerSoundEffectTriggers> {
        return PlayerSoundEffectTriggers;
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.translationKey === value)
            ?? null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends PlayerSoundEffectTriggers = PlayerSoundEffectTriggers, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): PlayerSoundEffectTriggers
    public static getValue(value: PossibleValue,): | PlayerSoundEffectTriggers | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
