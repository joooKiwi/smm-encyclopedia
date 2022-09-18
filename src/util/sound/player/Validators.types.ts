import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../enum/Enum.types';
import type {Validators as RealEnum}                                                                                                                                                                                                                       from './Validators';


export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | EnglishName;
export type PossibleValue = RealEnum | string | number | null | undefined;

enum Enum {
    ALL_YES,
    ALL_NO,
    ON_PLAY_ONLY,
    ON_CREATE_ONLY,
}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;
export type EnglishName = | `all ${| 'yes' | 'no'}` | `on ${| 'play' | 'create'} only`;

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<E extends RealEnum = RealEnum, > = OriginalSimpleEnum<Names, E>;

export type EnumByOrdinal<O extends Ordinals, E extends RealEnum = RealEnum, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>;
export type EnumByNumber<O extends number, E extends RealEnum = RealEnum, > = OriginalEnumByNumber<EnumArray<E>, O>;

export type EnumByName<N extends Names, E extends RealEnum = RealEnum, > = OriginalEnumByName<N, E>;
export type EnumByPossibleString<S extends PossibleStringValue, E extends RealEnum = RealEnum, > = OriginalEnumByPossibleString<S, Names, E>;
export type EnumByString<S extends string, E extends RealEnum = RealEnum, > = OriginalEnumByString<S, PossibleStringValue, Names, E>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<E extends RealEnum = RealEnum, > = readonly [
    EnumByName<'ALL_YES', E>,
    EnumByName<'ALL_NO', E>,
    EnumByName<'ON_PLAY_ONLY', E>,
    EnumByName<'ON_CREATE_ONLY', E>,
];

//endregion -------------------- Array types --------------------
//region -------------------- Other types --------------------

export type IsSourceFoundCallback = (value?: boolean,) => void;

//endregion -------------------- Other types --------------------
