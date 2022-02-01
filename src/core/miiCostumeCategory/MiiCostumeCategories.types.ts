import {MiiCostumeCategories as EnumInstance}                                                                                                                                                                                                         from './MiiCostumeCategories';
import {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';

export type PossibleNonNullableValue = | EnumInstance | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleEnglishName | PossibleImageName;
export type PossibleValue = | EnumInstance | string | number | null | undefined;

enum Enum {

    TOP,
    HEADGEAR,
    COSTUME,
    BOTTOM,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names]

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

//region -------------------- English name --------------------

export type PossibleEnglishName = | 'Top' | 'Headgear' | 'Costume' | 'Bottom';

//endregion -------------------- English name --------------------
//region -------------------- Image name --------------------

export type PossibleImageNumber = | 0 | 1 | 2 | 3;
export type PossibleImageName = `DressIcon_0${PossibleImageNumber}`;

export type PossibleImagePath = `/Mii costume category/${PossibleImageName}^s.tiff`;

//endregion -------------------- Image name --------------------

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<E extends EnumInstance = EnumInstance, > = OriginalSimpleEnum<Names, E>;

export type EnumByOrdinal<O extends Ordinals, E extends EnumInstance = EnumInstance, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>;
export type EnumByNumber<O extends number, E extends EnumInstance = EnumInstance, > = OriginalEnumByNumber<EnumArray<E>, O>;

export type EnumByName<N extends Names, E extends EnumInstance = EnumInstance, > = OriginalEnumByName<N, E>;
export type EnumByPossibleString<S extends PossibleStringValue, E extends EnumInstance = EnumInstance, > = OriginalEnumByPossibleString<S, Names, E>;
export type EnumByString<S extends string, E extends EnumInstance = EnumInstance, > = OriginalEnumByString<S, PossibleStringValue, Names, E>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends EnumInstance = EnumInstance, > = readonly [
    SimpleEnum<T>['TOP'],
    SimpleEnum<T>['HEADGEAR'],
    SimpleEnum<T>['COSTUME'],
    SimpleEnum<T>['BOTTOM'],
];

//endregion -------------------- Array types --------------------