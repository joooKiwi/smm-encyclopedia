import type {SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';
import type {Games}                            from './Games';

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

export type Names = | 'SUPER_MARIO_MAKER_1' | 'SUPER_MARIO_MAKER_2';

export type PossibleEnglishName = `Super Mario Maker${| '' | ' 2'}`;
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
