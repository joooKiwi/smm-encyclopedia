import type {PredefinedConverter}              from './PredefinedConverter'
import type {SimpleEnum as OriginalSimpleEnum} from '../../enum/Enum.types'

export type PossibleNonNullableValue = | PredefinedConverter | Ordinals | PossibleStringValue
export type PossibleStringValue = | Names | PredefinedConversion
export type PossibleValue = PredefinedConverter | number | string | null | undefined

enum Enum {
    NUMBER, NULLABLE_NUMBER,
    BOOLEAN, NULLABLE_BOOLEAN,
    STRING, EMPTYABLE_STRING, NULLABLE_STRING,
    SINGLE_NUMBER, SINGLE_BOOLEAN, SINGLE_STRING,
    //HEADER, NULLABLE_HEADER,
}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names]

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum

//region -------------------- Predefined converter texts --------------------

export type PrimitiveConversion = | 'boolean' | 'number' | 'string'
// export type HeaderConversion = 'header'
export type SinglePrimitiveValueConversion = `single ${PrimitiveConversion}`
export type BasicPredefinedConversion = | PrimitiveConversion | SinglePrimitiveValueConversion// | HeaderConversion
export type NullablePredefinedConversion = `nullable ${BasicPredefinedConversion}`
export type EmptyableString = 'emptyable string'
export type PredefinedConversion = | NullablePredefinedConversion | BasicPredefinedConversion | EmptyableString

//endregion -------------------- Predefined converter texts --------------------

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends PredefinedConverter = PredefinedConverter, > = OriginalSimpleEnum<Names, T>

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends PredefinedConverter = PredefinedConverter, > = readonly [
    SimpleEnum<T>['NUMBER'], SimpleEnum<T>['NULLABLE_NUMBER'],
    SimpleEnum<T>['BOOLEAN'], SimpleEnum<T>['NULLABLE_BOOLEAN'],
    SimpleEnum<T>['STRING'], SimpleEnum<T>['EMPTYABLE_STRING'], SimpleEnum<T>['NULLABLE_STRING'],
    SimpleEnum<T>['SINGLE_NUMBER'], SimpleEnum<T>['SINGLE_BOOLEAN'], SimpleEnum<T>['SINGLE_STRING'],
    // SimplePredefinedConverter<T>['HEADER'], SimplePredefinedConverter<T>['NULLABLE_HEADER'],
]

//endregion -------------------- Array types --------------------
