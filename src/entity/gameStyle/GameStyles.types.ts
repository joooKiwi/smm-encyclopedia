import type {GameStyles}                                               from './GameStyles';
import type {PossibleAcronym_GameStyle, PossibleEnglishName_GameStyle} from '../../game/GameReferences.types';
import type {SimpleEnum as OriginalSimpleEnum}                         from '../../util/enum/Enum.types';

export type PossibleNonNullableValue = | GameStyles | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleAcronym | PossibleEnglishName;
export type PossibleValue = | GameStyles | string | number | null | undefined;

enum Enum {

    SUPER_MARIO_BROS,
    SUPER_MARIO_BROS_3,
    SUPER_MARIO_WORLD,
    NEW_SUPER_MARIO_BROS_U,
    SUPER_MARIO_3D_WORLD,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names]

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

export type PossibleAcronym = PossibleAcronym_GameStyle;
export type PossibleEnglishName = PossibleEnglishName_GameStyle;

export type StartingImagePath = `/game/styles/${PossibleEnglishName}`;
export type ImagePath = `${StartingImagePath}.png`;

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends GameStyles = GameStyles, > = OriginalSimpleEnum<Names, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends GameStyles = GameStyles, > = readonly [
    SimpleEnum<T>['SUPER_MARIO_BROS'],
    SimpleEnum<T>['SUPER_MARIO_BROS_3'],
    SimpleEnum<T>['SUPER_MARIO_WORLD'],
    SimpleEnum<T>['NEW_SUPER_MARIO_BROS_U'],
    SimpleEnum<T>['SUPER_MARIO_3D_WORLD'],
];

//endregion -------------------- Array types --------------------
