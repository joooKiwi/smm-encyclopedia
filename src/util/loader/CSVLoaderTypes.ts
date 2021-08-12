import type {Converter}            from './converter/Converter';
import type {PredefinedConversion} from './converter/PredefinedConverterTypes';

export type CustomConversionCallback = (value: string,) => Converter<string, any>;
export type HeaderTypeOrConvertor = | PredefinedConversion
                                    | readonly (PredefinedConversion | string)[]
                                    | CustomConversionCallback;
export type HeaderType<H extends string = string, > = readonly H[];

//region -------------------- Callback types --------------------

export type CallbackOnBeforeFinalObjectCreated<A extends any[] = any[], > = | ((convertedContent: A, originalContent: readonly string[],) => void) | null;
export type CallbackOnAfterFinalObjectCreated<A extends any[] = any[], T = any, > = | ((finalContent: T, convertedContent: A, originalContent: readonly string[],) => void) | null;

export type CallbackOnBeforeSingleContentConverted = | ((originalValue: string,) => void) | null;
export type CallbackOnAfterSingleContentConverted<A extends any[] = any[], > = | ((content: keyof A, originalValue: string,) => void) | null;

export type CallbackOnInitialisationStart = | ((originalContents: readonly string[][],) => void) | null;
export type CallbackOnInitialisationEnd<A extends any[] = any[], T = any, > = | ((finalContents: readonly T[], convertedContents: readonly A[], originalContents: readonly string[][],) => void) | null;

//endregion -------------------- Callback types --------------------