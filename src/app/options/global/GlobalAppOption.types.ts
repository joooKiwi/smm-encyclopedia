import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../../util/enum/Enum.types'
import type {GlobalAppOption as RealEnum}                                                                                                                                                                                                                  from './GlobalAppOption'
import type {GlobalThemeOption}                                                                                                                                                                                                                            from './GlobalThemeOption'
import type {ImageAnimations}                                                                                                                                                                                                                              from './ImageAnimations'
import type {Images}                                                                                                                                                                                                                                       from './Images'
import type {Sounds}                                                                                                                                                                                                                                       from './Sounds'
import type {Texts}                                                                                                                                                                                                                                        from './Texts'

export type PossibleNonNullableValue = | Ordinals
                                       | PossibleStringValue
export type PossibleStringValue = | Names
export type PossibleValue = | PossibleNonNullableValue | string | number | null | undefined
export type PossibleAppOptionValue = | ImageAnimations | Images | Sounds | Texts | boolean | GlobalThemeOption

enum Enum {

    IMAGES,
    IMAGE_ANIMATIONS,
    SOUNDS,

    SMM1,
    SMM3DS,
    SMM2,

    SMB,
    SMB3,
    SMW,
    NSMBU,
    SM3DW,

    GROUND,
    UNDERGROUND,
    UNDERWATER,
    DESERT,
    SNOW,
    SKY,
    FOREST,
    GHOST_HOUSE,
    AIRSHIP,
    CASTLE,

    DAY,
    NIGHT,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names]

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends RealEnum = RealEnum, > = OriginalSimpleEnum<Names, T>

export type EnumByOrdinal<O extends Ordinals = Ordinals, E extends RealEnum = RealEnum, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>
export type EnumByNumber<O extends number = number, E extends RealEnum = RealEnum, > = OriginalEnumByNumber<EnumArray<E>, O>

export type EnumByName<N extends Names, E extends RealEnum = RealEnum, > = OriginalEnumByName<N, E>
export type EnumByPossibleString<S extends PossibleStringValue, E extends RealEnum = RealEnum, > = OriginalEnumByPossibleString<S, Names, E>
export type EnumByString<S extends string, E extends RealEnum = RealEnum, > = OriginalEnumByString<S, PossibleStringValue, Names, E>

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends RealEnum = RealEnum, > = readonly [
    SimpleEnum<T>['IMAGES'],
    SimpleEnum<T>['IMAGE_ANIMATIONS'],
    SimpleEnum<T>['SOUNDS'],

    SimpleEnum<T>['SMM1'],
    SimpleEnum<T>['SMM3DS'],
    SimpleEnum<T>['SMM2'],

    SimpleEnum<T>['SMB'],
    SimpleEnum<T>['SMB3'],
    SimpleEnum<T>['SMW'],
    SimpleEnum<T>['NSMBU'],
    SimpleEnum<T>['SM3DW'],

    SimpleEnum<T>['GROUND'],
    SimpleEnum<T>['UNDERGROUND'],
    SimpleEnum<T>['UNDERWATER'],
    SimpleEnum<T>['DESERT'],
    SimpleEnum<T>['SNOW'],
    SimpleEnum<T>['SKY'],
    SimpleEnum<T>['FOREST'],
    SimpleEnum<T>['GHOST_HOUSE'],
    SimpleEnum<T>['AIRSHIP'],
    SimpleEnum<T>['CASTLE'],

    SimpleEnum<T>['DAY'],
    SimpleEnum<T>['NIGHT'],

]

//endregion -------------------- Array types --------------------
