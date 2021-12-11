import type {GameStyles}                                                                                                                                                                                                                                   from './GameStyles';
import type {PossibleAcronym_GameStyle, PossibleEnglishName_GameStyle}                                                                                                                                                                                     from '../gameReference/GameReferences.types';
import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';

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
export type PossibleImagePath = `${StartingImagePath}.png`;

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<E extends GameStyles = GameStyles, > = OriginalSimpleEnum<Names, E>;

export type EnumByOrdinal<O extends Ordinals, E extends GameStyles = GameStyles, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>;
export type EnumByNumber<O extends number, E extends GameStyles = GameStyles, > = OriginalEnumByNumber<EnumArray<E>, O>;

export type EnumByName<N extends Names, E extends GameStyles = GameStyles, > = OriginalEnumByName<N, E>;
export type EnumByPossibleString<S extends PossibleStringValue, E extends GameStyles = GameStyles, > = OriginalEnumByPossibleString<S, Names, E>;
export type EnumByString<S extends string, E extends GameStyles = GameStyles, > = OriginalEnumByString<S, PossibleStringValue, Names, E>;

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
