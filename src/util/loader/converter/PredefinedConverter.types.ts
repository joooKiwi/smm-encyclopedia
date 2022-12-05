import type {PredefinedConverter} from 'util/loader/converter/PredefinedConverter'

enum Enum {
    NUMBER, NULLABLE_NUMBER,
    BOOLEAN, NULLABLE_BOOLEAN,
    STRING, EMPTYABLE_STRING, NULLABLE_STRING,
    SINGLE_NUMBER, SINGLE_BOOLEAN, SINGLE_STRING,
    //HEADER, NULLABLE_HEADER,
}

export type Ordinals = typeof Enum[Names]
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

export type PredefinedConverterByName<T extends string, > = T extends PredefinedConversion ? PredefinedConverter : never
export type HasPredefinedConverterByName<T extends string, > = T extends PredefinedConversion ? true : false
