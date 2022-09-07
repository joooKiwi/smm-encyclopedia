import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../../util/enum/Enum.types';
import type {PlayerSoundEffectTriggers as RealEnum}                                                                                                                                                                                                        from './PlayerSoundEffectTriggers';

export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleTranslationKey;
export type PossibleValue = | RealEnum | number | string | null | undefined;

enum Enum {

    JUMP_AFTER_LANDING,
    TURN_AROUND_AFTER_BEING_AT_FULL_SPEED,
    ON_CROUCH,
    AFTER_3_SECONDS_OF_NON_MOVEMENT,

    COLLECT_POWER_UP,
    GET_INTO_AN_ENTITY,

    AT_SPAWN,
    TAKE_DAMAGE,
    LOSE_A_LIFE,
    TAKE_DAMAGE_OR_LOSE_A_LIFE,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

export type PossibleTranslationKey =
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

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends RealEnum = RealEnum, > = OriginalSimpleEnum<Names, T>;

export type EnumByOrdinal<O extends Ordinals, E extends RealEnum = RealEnum, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>;
export type EnumByNumber<O extends number, E extends RealEnum = RealEnum, > = OriginalEnumByNumber<EnumArray<E>, O>;

export type EnumByName<N extends Names, E extends RealEnum = RealEnum, > = OriginalEnumByName<N, E>;
export type EnumByPossibleString<S extends PossibleStringValue, E extends RealEnum = RealEnum, > = OriginalEnumByPossibleString<S, Names, E>;
export type EnumByString<S extends string, E extends RealEnum = RealEnum, > = OriginalEnumByString<S, PossibleStringValue, Names, E>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends RealEnum = RealEnum, > = readonly [
    SimpleEnum<T>['JUMP_AFTER_LANDING'],
    SimpleEnum<T>['TURN_AROUND_AFTER_BEING_AT_FULL_SPEED'],
    SimpleEnum<T>['ON_CROUCH'],
    SimpleEnum<T>['AFTER_3_SECONDS_OF_NON_MOVEMENT'],

    SimpleEnum<T>['COLLECT_POWER_UP'],
    SimpleEnum<T>['GET_INTO_AN_ENTITY'],

    SimpleEnum<T>['AT_SPAWN'],
    SimpleEnum<T>['TAKE_DAMAGE'],
    SimpleEnum<T>['LOSE_A_LIFE'],
    SimpleEnum<T>['TAKE_DAMAGE_OR_LOSE_A_LIFE'],
];

//endregion -------------------- Array types --------------------
