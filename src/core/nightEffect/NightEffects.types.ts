import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';
import type {NightEffects as RealEnum}                                                                                                                                                                                                                     from './NightEffects';

export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleEnglishName;
export type PossibleValue = | RealEnum | number | string | null | undefined;

enum Enum {

    SPECIAL_EFFECT_ON_ENTITIES,
    SCREEN_UPSIDE_DOWN,
    DARK,
    WIND,
    SLIPPERY,
    LOW_GRAVITY,
    POISON_LIQUID,
    ENTITIES_IN_WATER, CHARACTERS_IN_WATER,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

export type PossibleEnglishName = | 'Special effect on entities' | 'Screen upside down' | 'Dark' | 'Wind' | 'Slippery'
                                  | 'Low gravity' | 'Poison liquid' | `${| 'Entities' | 'Characters'} in water`;

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
    SimpleEnum<T>['SPECIAL_EFFECT_ON_ENTITIES'],
    SimpleEnum<T>['SCREEN_UPSIDE_DOWN'],
    SimpleEnum<T>['DARK'],
    SimpleEnum<T>['WIND'],
    SimpleEnum<T>['SLIPPERY'],
    SimpleEnum<T>['LOW_GRAVITY'],
    SimpleEnum<T>['POISON_LIQUID'],
    SimpleEnum<T>['ENTITIES_IN_WATER'], SimpleEnum<T>['CHARACTERS_IN_WATER'],
];

//endregion -------------------- Array types --------------------
