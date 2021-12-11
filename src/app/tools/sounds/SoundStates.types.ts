import {SoundStates}                                                                                                                                                                                                                                  from './SoundStates';
import {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../../util/enum/Enum.types';

export type PossibleNonNullableValue = | SoundStates | Ordinals | PossibleStringValue;

export type PossibleStringValue = | Names | EnglishName;
export type PossibleValue = SoundStates | string | number | null | undefined;

enum Enum {
    STANDBY,
    PLAYING,
    PAUSED,
}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;
export type EnglishName = | 'playing' | 'paused' | 'standby';

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<E extends SoundStates = SoundStates, > = OriginalSimpleEnum<Names, E>;

export type EnumByOrdinal<O extends Ordinals, E extends SoundStates = SoundStates, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>;
export type EnumByNumber<O extends number, E extends SoundStates = SoundStates, > = OriginalEnumByNumber<EnumArray<E>, O>;

export type EnumByName<N extends Names, E extends SoundStates = SoundStates, > = OriginalEnumByName<N, E>;
export type EnumByPossibleString<S extends PossibleStringValue, E extends SoundStates = SoundStates, > = OriginalEnumByPossibleString<S, Names, E>;
export type EnumByString<S extends string, E extends SoundStates = SoundStates, > = OriginalEnumByString<S, PossibleStringValue, Names, E>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<E extends SoundStates = SoundStates, > = readonly [
    EnumByName<'STANDBY', E>,
    EnumByName<'PLAYING', E>,
    EnumByName<'PAUSED', E>,
];

//endregion -------------------- Array types --------------------
