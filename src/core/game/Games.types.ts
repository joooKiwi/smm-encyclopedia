import type {Games}                                                                                                                                                                                                                                        from './Games';
import type {PossibleAcronym_Game, PossibleEnglishName_Game}                                                                                                                                                                                               from '../gameReference/GameReferences.types';
import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';

export type PossibleNonNullableValue = | Games | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleEnglishName | PossibleAcronym;
export type PossibleValue = | Games | number | string | null | undefined;

enum Enum {

    SUPER_MARIO_MAKER_1,
    SUPER_MARIO_MAKER_2,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

export type PossibleAcronym = PossibleAcronym_Game;
export type PossibleEnglishName = PossibleEnglishName_Game;
export type PossibleImagePath = `/game/${PossibleEnglishName}.svg`;

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<E extends Games = Games, > = OriginalSimpleEnum<Names, E>;

export type EnumByOrdinal<O extends Ordinals, E extends Games = Games, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>;
export type EnumByNumber<O extends number, E extends Games = Games, > = OriginalEnumByNumber<EnumArray<E>, O>;

export type EnumByName<N extends Names, E extends Games = Games, > = OriginalEnumByName<N, E>;
export type EnumByPossibleString<S extends PossibleStringValue, E extends Games = Games, > = OriginalEnumByPossibleString<S, Names, E>;
export type EnumByString<S extends string, E extends Games = Games, > = OriginalEnumByString<S, PossibleStringValue, Names, E>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends Games = Games, > = readonly [
    SimpleEnum<T>['SUPER_MARIO_MAKER_1'],
    SimpleEnum<T>['SUPER_MARIO_MAKER_2'],
];

//endregion -------------------- Array types --------------------
