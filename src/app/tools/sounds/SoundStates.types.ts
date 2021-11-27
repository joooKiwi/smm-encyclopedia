import {SoundStates}                      from './SoundStates';
import {SimpleEnum as OriginalSimpleEnum} from '../../../util/enum/Enum.types';

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

export type EnumByOrdinal<O extends Ordinals, E extends SoundStates = SoundStates, > = EnumArray<E>[O];
export type EnumByNumber<O extends number, E extends SoundStates = SoundStates, > = | NonNullable<EnumArray<E>[O]> | null;

export type EnumByName<N extends Names, E extends SoundStates = SoundStates, > = SimpleEnum<E>[N];
export type EnumByPossibleString<PS extends PossibleStringValue, E extends SoundStates = SoundStates, > = PS extends Names ? EnumByName<PS, E> : E;
export type EnumByString<S extends string, E extends SoundStates = SoundStates, > = S extends PossibleStringValue ? EnumByPossibleString<S, E> : | E | null;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<E extends SoundStates = SoundStates, > = readonly [
    EnumByName<'STANDBY', E>,
    EnumByName<'PLAYING', E>,
    EnumByName<'PAUSED', E>,
];

//endregion -------------------- Array types --------------------
