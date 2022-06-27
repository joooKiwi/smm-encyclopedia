import type {BasePath}                                                                                                                                                                                                                                     from '../../variables';
import type {EntityCategories as RealEnum}                                                                                                                                                                                                                 from './EntityCategories';
import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';


export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleEnglishName;
export type PossibleValue = RealEnum | number | string | null | undefined;

enum Enum {

    TERRAIN,
    ITEM,
    ENEMY,
    GIZMO,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names]

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

export type PossibleEnglishName = | 'Terrain' | 'Item' | 'Enemy' | 'Gizmo';

export type PossibleImageNumber = | 0 | 1 | 2 | 3;
export type PossibleImageName = `CategoryIcon_0${PossibleImageNumber}`;
export type PossibleImagePath = `/${BasePath}/category/${PossibleImageName}^s.tiff`;

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
    SimpleEnum<T>['TERRAIN'],
    SimpleEnum<T>['ITEM'],
    SimpleEnum<T>['ENEMY'],
    SimpleEnum<T>['GIZMO'],
];

//endregion -------------------- Array types --------------------
