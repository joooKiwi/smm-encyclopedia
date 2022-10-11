import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../../util/enum/Enum.types'
import type {Arrows as RealEnum}                                                                                                                                                                                                                           from './Arrows'


export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue
export type PossibleStringValue = Names
export type PossibleValue = RealEnum | string | number | null | undefined

enum Enum {
    UP,
    DOWN,
    LEFT,
    RIGHT,
    VERTICAL_JOINED,
    VERTICAL_SEPARATED,
    HORIZONTAL_JOINED,
    HORIZONTAL_SEPARATED,
}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names]

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum
export type PossibleContainer = `arrow${| '' | 's'}-container`

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<E extends RealEnum = RealEnum, > = OriginalSimpleEnum<Names, E>

export type EnumByOrdinal<O extends Ordinals, E extends RealEnum = RealEnum, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>
export type EnumByNumber<O extends number, E extends RealEnum = RealEnum, > = OriginalEnumByNumber<EnumArray<E>, O>

export type EnumByName<N extends Names, E extends RealEnum = RealEnum, > = OriginalEnumByName<N, E>
export type EnumByPossibleString<S extends PossibleStringValue, E extends RealEnum = RealEnum, > = OriginalEnumByPossibleString<S, Names, E>
export type EnumByString<S extends string, E extends RealEnum = RealEnum, > = OriginalEnumByString<S, PossibleStringValue, Names, E>

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<E extends RealEnum = RealEnum, > = readonly [
    EnumByName<'UP', E>, EnumByName<'DOWN', E>,
    EnumByName<'LEFT', E>, EnumByName<'RIGHT', E>,
    EnumByName<'VERTICAL_JOINED', E>, EnumByName<'HORIZONTAL_JOINED', E>,
    EnumByName<'VERTICAL_SEPARATED', E>, EnumByName<'HORIZONTAL_SEPARATED', E>,
]

//endregion -------------------- Array types --------------------
