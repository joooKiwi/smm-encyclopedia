import type {Converter}            from './converter/Converter';
import type {PredefinedConversion} from './converter/PredefinedConverterTypes';

export type ConversionCallbackToConverter = (value: string,) => Converter<string, any>;

export type SimpleHeaderTypeOrConvertor = | PredefinedConversion | string | ConversionCallbackToConverter;
export type ArrayHeaderTypeOrConvertor = readonly SimpleHeaderTypeOrConvertor[];
export type ArrayOrSimpleHeaderTypeOrConvertor = | SimpleHeaderTypeOrConvertor | ArrayHeaderTypeOrConvertor;
export type ArrayOrSimpleHeaderTypeConvertorExcluding<T> = | Exclude<SimpleHeaderTypeOrConvertor, T> | readonly Exclude<SimpleHeaderTypeOrConvertor, T>[]

//region -------------------- Headers types --------------------

export type ArrayOfHeaders<H extends string = string, > = readonly SimpleHeader<H>[];
export type ArrayOfHeadersReceived<H extends string = string, > = readonly SimpleHeaderReceived<H>[];
export type SimpleHeader<H extends string = string, > = Lowercase<H>;
export type SimpleHeaderReceived<H extends string = string, > = | H | Lowercase<H> | Uppercase<H> | Capitalize<H> | Uncapitalize<H>;

export interface HeadersConverterHolder<H extends string = string, > {

    get index(): number

    get header(): SimpleHeader<H>

    get convertor(): ConversionCallbackToConverter

}

//endregion -------------------- Headers types --------------------
//region -------------------- Mixed convertor types --------------------

export type ArrayOfValidationsArrayOfValidations = [containNullable: boolean, containEmptyableString: boolean,];
export type ArrayOfMixedConvertorInstance = [validationComponentOnConvertor: readonly ValidationCallback[], conversionComponentOnConvertor: readonly ConversionCallbackToAny[], typeOnConvertor: string,];

//endregion -------------------- Mixed convertor types --------------------
//region -------------------- Callback types --------------------

export type ValidationCallback = (value: string,) => boolean;
export type ConversionCallbackToAny = (value: string,) => any;

export type CallbackOnBeforeFinalObjectCreated<A extends any[] = any[], > = | ((convertedContent: A, originalContent: readonly string[],) => void) | null;
export type CallbackOnAfterFinalObjectCreated<A extends any[] = any[], T = any, > = | ((finalContent: T, convertedContent: A, originalContent: readonly string[],) => void) | null;

export type CallbackOnBeforeSingleContentConverted = | ((originalValue: string,) => void) | null;
export type CallbackOnAfterSingleContentConverted<A extends any[] = any[], > = | ((content: keyof A, originalValue: string,) => void) | null;

export type CallbackOnInitialisationStart = | ((originalContents: readonly string[][],) => void) | null;
export type CallbackOnInitialisationEnd<A extends any[] = any[], T = any, > = | ((finalContents: readonly T[], convertedContents: readonly A[], originalContents: readonly string[][],) => void) | null;

//endregion -------------------- Callback types --------------------
