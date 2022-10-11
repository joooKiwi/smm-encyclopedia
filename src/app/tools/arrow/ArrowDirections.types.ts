import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../../util/enum/Enum.types'
import type {ArrowDirections as RealEnum}                                                                                                                                                                                                                  from './ArrowDirections'

export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue
export type PossibleStringValue = | Names | PossibleName
export type PossibleValue = RealEnum | string | number | null | undefined

enum Enum {
    VERTICAL,
    HORIZONTAL,
}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names]

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum
export type PossibleName = | 'vertical' | 'horizontal'

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
    EnumByName<'VERTICAL', E>, EnumByName<'HORIZONTAL', E>,
]

//endregion -------------------- Array types --------------------
