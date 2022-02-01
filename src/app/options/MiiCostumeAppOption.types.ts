import type {MiiCostumeAppOption as EnumInstance}                                                                                                                                                                                                          from './MiiCostumeAppOption';
import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';

export type PossibleNonNullableValue = | EnumInstance | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names;
export type PossibleValue = | EnumInstance | string | number | null | undefined;

enum Enum {

    IMAGE,
    NAME,
    CONDITION_TO_UNLOCK_IT,
    CATEGORY,

    CATEGORY_AS_TEXT,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends EnumInstance = EnumInstance, > = OriginalSimpleEnum<Names, T>;

export type EnumByOrdinal<O extends Ordinals = Ordinals, E extends EnumInstance = EnumInstance, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>;
export type EnumByNumber<O extends number = number, E extends EnumInstance = EnumInstance, > = OriginalEnumByNumber<EnumArray<E>, O>;

export type EnumByName<N extends Names, E extends EnumInstance = EnumInstance, > = OriginalEnumByName<N, E>;
export type EnumByPossibleString<S extends PossibleStringValue, E extends EnumInstance = EnumInstance, > = OriginalEnumByPossibleString<S, Names, E>;
export type EnumByString<S extends string, E extends EnumInstance = EnumInstance, > = OriginalEnumByString<S, PossibleStringValue, Names, E>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends EnumInstance = EnumInstance, > = readonly [
    SimpleEnum<T>['IMAGE'],
    SimpleEnum<T>['NAME'],
    SimpleEnum<T>['CONDITION_TO_UNLOCK_IT'],
    SimpleEnum<T>['CATEGORY'],
    SimpleEnum<T>['CATEGORY_AS_TEXT'],
];

//endregion -------------------- Array types --------------------
