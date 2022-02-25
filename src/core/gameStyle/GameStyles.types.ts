import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';
import type {GameStyles as RealEnum}                                                                                                                                                                                                                       from './GameStyles';
import type {PossibleAcronym_GameStyle, PossibleEnglishName_GameStyle}                                                                                                                                                                                     from '../gameReference/GameReferences.types';


export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleAcronym | PossibleEnglishName;
export type PossibleValue = | RealEnum | string | number | null | undefined;

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

export type PossibleImagePath = `/game style/${PossibleGameAcronym}_Lyt_Logo_00.tiff`;

export type PossibleShortImagePath = | '1 - SMB' | '2 - SMB3' | '3 - SMW' | '4 - NSMBU' | '5 - SM3DW';
export type PossibleGameAcronym = | 'M1' | 'M3' | 'MW' | 'WU' | '3W';

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

export type EnumArray<T extends RealEnum = RealEnum, > = readonly [
    SimpleEnum<T>['SUPER_MARIO_BROS'],
    SimpleEnum<T>['SUPER_MARIO_BROS_3'],
    SimpleEnum<T>['SUPER_MARIO_WORLD'],
    SimpleEnum<T>['NEW_SUPER_MARIO_BROS_U'],
    SimpleEnum<T>['SUPER_MARIO_3D_WORLD'],
];
export type EnumArray_SMM1<T extends RealEnum = RealEnum, > = readonly [
    SimpleEnum<T>['SUPER_MARIO_BROS'],
    SimpleEnum<T>['SUPER_MARIO_BROS_3'],
    SimpleEnum<T>['SUPER_MARIO_WORLD'],
    SimpleEnum<T>['NEW_SUPER_MARIO_BROS_U'],
];

//endregion -------------------- Array types --------------------
