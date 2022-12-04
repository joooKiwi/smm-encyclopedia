import type {CSVLoader}                                            from 'util/loader/CSVLoader'
import type {Converter}                                            from 'util/loader/converter/Converter'
import type {PredefinedConversion, SinglePrimitiveValueConversion} from 'util/loader/converter/PredefinedConverter.types'
import type {NullOr}                                               from 'util/types/nullable'

export type ConversionCallbackToConverter = (value: string,) => Converter<string, any>

export type PossiblePredefinedConversionWithoutValues = Exclude<PredefinedConversion, `${| 'nullable ' | ''}${SinglePrimitiveValueConversion}`>
export type SimpleHeaderTypeOrConvertor = | PossiblePredefinedConversionWithoutValues | number | boolean | string | ConversionCallbackToConverter
export type ArrayHeaderTypeOrConvertor = readonly SimpleHeaderTypeOrConvertor[]
export type ArrayOrSimpleHeaderTypeOrConvertor = | SimpleHeaderTypeOrConvertor | ArrayHeaderTypeOrConvertor
export type ArrayOrSimpleHeaderTypeConvertorExcluding<T> = | Exclude<SimpleHeaderTypeOrConvertor, T> | readonly Exclude<SimpleHeaderTypeOrConvertor, T>[]

//region -------------------- Headers types --------------------

export type ArrayOfHeaders<H extends string = string, > = readonly SimpleHeader<H>[]
export type ArrayOfHeadersReceived<H extends string = string, > = readonly SimpleHeaderReceived<H>[]
export type SimpleHeader<H extends string = string, > = Lowercase<H>
export type SimpleHeaderReceived<H extends string = string, > = | H | Lowercase<H> | Uppercase<H> | Capitalize<H> | Uncapitalize<H>

export interface HeadersConverterHolder<H extends string = string, > {

    get index(): number

    get originalHeader(): H

    get header(): SimpleHeader<H>

    get convertor(): ConversionCallbackToConverter

}

//endregion -------------------- Headers types --------------------
//region -------------------- Mixed convertor types --------------------

export type ArrayOfValidationsArrayOfValidations = readonly [containNullable: boolean, containEmptyableString: boolean,]
export type ArrayOfMixedConvertorInstance = readonly [conversionCallbacksToConverter: readonly ConversionCallbackToConverter[], mixedTypeOnConvertor: string,]

//endregion -------------------- Mixed convertor types --------------------
//region -------------------- Callback types --------------------

export type CallbackOnLoader<L extends CSVLoader<A, T, H>, A extends any[] = any[], T = any, H extends string = string> = (loader: L,) => void

export type CallbackToCreateObject<A extends any[] = any[], T = any, > = (convertedValue: A,) => T
export type ValidationCallback = (value: string,) => boolean
export type ConversionCallbackToAny = (value: string,) => any

export type CustomValidationCallback = (value: string, conversionCallbacksToConverter: readonly ConversionCallbackToConverter[],) => boolean
export type CustomConversionCallbackToAnyCallback = (value: string, conversionCallbacksToConverter: readonly ConversionCallbackToConverter[],) => any
export type CustomConversionCallbackToAnyCallbackWithError = (value: string, mixedTypeOnConverter: string, conversionCallbacksToConverter: readonly ConversionCallbackToConverter[],) => any

export type CallbackOnBeforeFinalObjectCreated<A extends any[] = any[], > = NullOr<(convertedContent: A, originalContent: readonly string[],) => void>
export type CallbackOnAfterFinalObjectCreated<A extends any[] = any[], T = any, > = NullOr<(finalContent: T, convertedContent: A, originalContent: readonly string[],) => void>

export type CallbackOnBeforeSingleContentConverted<H extends string = string, > = NullOr<(originalValue: string, header: H,) => void>
export type CallbackOnAfterSingleContentConverted<H extends string = string, A extends any[] = any[], > = NullOr<(content: keyof A, originalValue: string, header: H,) => void>

export type CallbackOnInitialisationStart = NullOr<(originalContents: readonly string[][],) => void>
export type CallbackOnInitialisationEnd<A extends any[] = any[], T = any, > = NullOr<(finalContents: readonly T[], convertedContents: readonly A[], originalContents: readonly string[][],) => void>

//endregion -------------------- Callback types --------------------
