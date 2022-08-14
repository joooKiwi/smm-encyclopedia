import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';
import type {MysteryMushroomAppOption as RealEnum}                                                                                                                                                                                                         from './MysteryMushroomAppOption';


export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names;
export type PossibleValue = | RealEnum | string | number | null | undefined;

enum Enum {

    CONDITION_TO_UNLOCK_IT,
    GAME,
    NAME,

    IMAGES_AND_SOUNDS,
    POWER_UP_COLLECTED,
    WAITING,
    TAUNT,
    PRESSING_DOWN,
    WALK,
    RUNNING,
    SWIMMING,
    JUMP, FALLING_AFTER_JUMP, ON_GROUND_AFTER_JUMP,
    TURNING,
    CLIMBING,
    GOAL_POLE,
    LOST_A_LIFE,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

export type PossibleMysteryMushroomType =
    | 'power-up collected'
    | 'waiting'
    | 'taunt'
    | 'pressing ↓'
    | 'walk'
    | 'running'
    | 'swimming'
    | `${| '' | `${| 'falling' | 'ground'} after `}jump`
    | 'turning'
    | 'climbing'
    | 'goal pole'
    | 'lost a life'
    | null;

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends RealEnum = RealEnum, > = OriginalSimpleEnum<Names, T>;

export type EnumByOrdinal<O extends Ordinals = Ordinals, E extends RealEnum = RealEnum, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>;
export type EnumByNumber<O extends number = number, E extends RealEnum = RealEnum, > = OriginalEnumByNumber<EnumArray<E>, O>;

export type EnumByName<N extends Names, E extends RealEnum = RealEnum, > = OriginalEnumByName<N, E>;
export type EnumByPossibleString<S extends PossibleStringValue, E extends RealEnum = RealEnum, > = OriginalEnumByPossibleString<S, Names, E>;
export type EnumByString<S extends string, E extends RealEnum = RealEnum, > = OriginalEnumByString<S, PossibleStringValue, Names, E>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends RealEnum = RealEnum, > = readonly [
    SimpleEnum<T>['CONDITION_TO_UNLOCK_IT'],
    SimpleEnum<T>['GAME'],
    SimpleEnum<T>['NAME'],

    SimpleEnum<T>['IMAGES_AND_SOUNDS'],
    SimpleEnum<T>['POWER_UP_COLLECTED'],
    SimpleEnum<T>['WAITING'],
    SimpleEnum<T>['TAUNT'],
    SimpleEnum<T>['PRESSING_DOWN'],
    SimpleEnum<T>['WALK'],
    SimpleEnum<T>['RUNNING'],
    SimpleEnum<T>['SWIMMING'],
    SimpleEnum<T>['JUMP'], SimpleEnum<T>['FALLING_AFTER_JUMP'], SimpleEnum<T>['ON_GROUND_AFTER_JUMP'],
    SimpleEnum<T>['TURNING'],
    SimpleEnum<T>['CLIMBING'],
    SimpleEnum<T>['GOAL_POLE'],
    SimpleEnum<T>['LOST_A_LIFE'],
];

//endregion -------------------- Array types --------------------
