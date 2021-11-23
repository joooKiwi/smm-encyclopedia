import type {Games}                                          from './Games';
import type {PossibleAcronym_Game, PossibleEnglishName_Game} from '../../game/GameReferences.types';
import type {SimpleEnum as OriginalSimpleEnum}               from '../../util/enum/Enum.types';

export type PossibleNonNullableValue = | Games | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleEnglishName;
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
export type PossibleImagePath = `/game/logos/${PossibleEnglishName}.svg`;

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends Games = Games, > = OriginalSimpleEnum<Names, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends Games = Games, > = readonly [
    SimpleEnum<T>['SUPER_MARIO_MAKER_1'],
    SimpleEnum<T>['SUPER_MARIO_MAKER_2'],
];

//endregion -------------------- Array types --------------------
