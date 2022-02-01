import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../../util/enum/Enum.types';
import type {Images as RealEnum}                                                                                                                                                                                                                           from './Images';


export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue | boolean;
export type PossibleStringValue = | Names;
export type PossibleValue = | RealEnum | string | number | boolean | null | undefined;

enum Enum {

    YES,
    NO,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

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
    SimpleEnum<T>['YES'],
    SimpleEnum<T>['NO'],
];

//endregion -------------------- Array types --------------------
