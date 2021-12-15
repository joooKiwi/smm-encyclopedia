import type {ArrayHeaderTypeOrConvertor, ArrayOfHeadersReceived, ArrayOfMixedConvertorInstance, ArrayOfValidationsArrayOfValidations, ArrayOrSimpleHeaderTypeConvertorExcluding, ArrayOrSimpleHeaderTypeOrConvertor, CallbackOnAfterFinalObjectCreated, CallbackOnAfterSingleContentConverted, CallbackOnBeforeFinalObjectCreated, CallbackOnBeforeSingleContentConverted, CallbackOnInitialisationEnd, CallbackOnInitialisationStart, CallbackOnLoader, CallbackToCreateObject, ConversionCallbackToConverter, CustomConversionCallbackToAnyCallback, CustomConversionCallbackToAnyCallbackWithError, CustomValidationCallback, HeadersConverterHolder, PossiblePredefinedConversionWithoutValues, SimpleHeader, SimpleHeaderReceived} from './CSVLoader.types';
import type {EmptyableString, NullablePredefinedConversion, PredefinedConversion}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       from './converter/PredefinedConverter.types';

import {assert}                              from '../utilitiesMethods';
import {GenericStringToAnyConverter}         from './converter/GenericStringToAnyConverter';
import {GenericStringToAnyNullableConverter} from './converter/GenericStringToAnyNullableConverter';
import {HeaderContainer}                     from './HeaderContainer';
import {PredefinedConverter}                 from './converter/PredefinedConverter';

export class CSVLoader<A extends any[] = any[], T = any, H extends string = string, > {

    //region -------------------- Attributes --------------------

    //region -------------------- Static attributes --------------------

    /**
     * Any {@link PossiblePredefinedConversionWithoutValues} in new instance when it will be constructed.
     */
    public static GENERIC_DEFAULT_CONVERSION: PossiblePredefinedConversionWithoutValues = 'emptyable string';
    public static readonly NULLABLE_STRING = 'nullable';
    public static readonly COMMA_AND_SPACE_STRING = ', ';
    /**
     * Whenever a new instance will throw an error or ignore every possible errors.
     *
     * @note It is recommended in <u>development</u> and <u>testing</u> to have it enable, but not in <u>production</u>.
     */
    public static GENERIC_DOES_THROW_ERROR: boolean = true;
    /**
     * Whenever a new instance will have
     * the original content received in the constructor is a reference
     * or a copy of the original content.
     */
    public static GENERIC_HAS_ORIGINAL_CONTENT_AS_REFERENCE: boolean = false;

    //endregion -------------------- Static attributes --------------------
    //region -------------------- Static custom callback attributes --------------------

    /**
     * The custom callback name used in the {@link HeaderContainer}.
     */
    public static readonly CUSTOM_CALLBACK_NAME = 'custom callback';
    public static readonly TRUE_CALLBACK = () => true as const;
    public static readonly CUSTOM_VALIDATION_CALLBACK: CustomValidationCallback = (value, conversionCallbacksToConverter,) => {
        for (const conversionCallbackToConverter of conversionCallbacksToConverter) {
            if (conversionCallbackToConverter(value).isValueValid(value))
                return true;
        }
        return false;
    };
    public static readonly CUSTOM_VALIDATION_CALLBACK_WITH_EMPTYABLE_STRING: CustomValidationCallback = (value, conversionCallbacksToConverter,) =>
        value === '' || CSVLoader.CUSTOM_VALIDATION_CALLBACK(value, conversionCallbacksToConverter,);

    static readonly #CONVERSION_CALLBACK_LOOP = (value: string, conversionCallbacksToConverter: readonly ConversionCallbackToConverter[],) => {
        for (const conversionCallbackToConverter of conversionCallbacksToConverter) {
            if (conversionCallbackToConverter(value).isValueValid(value))
                return conversionCallbackToConverter(value).convertTheValue(value);
        }
    };
    public static readonly CUSTOM_CONVERSION_CALLBACK: CustomConversionCallbackToAnyCallback = (value, conversionCallbacksToConverter,) =>
        CSVLoader.#CONVERSION_CALLBACK_LOOP(value, conversionCallbacksToConverter,);
    public static readonly CUSTOM_CONVERSION_CALLBACK_WITH_EMPTYABLE_STRING: CustomConversionCallbackToAnyCallback = (value, conversionCallbacksToConverter,) =>
        value === '' ? null : CSVLoader.CUSTOM_CONVERSION_CALLBACK(value, conversionCallbacksToConverter,);
    public static readonly CUSTOM_CONVERSION_CALLBACK_WITH_ERRORS: CustomConversionCallbackToAnyCallbackWithError = (value, mixedTypeOnConverter, conversionCallbacksToConverter,) => {
        const returnValue = CSVLoader.#CONVERSION_CALLBACK_LOOP(value, conversionCallbacksToConverter,);
        assert(returnValue != null, `The value could not be converted to the possible values: ${mixedTypeOnConverter}.`,);
        return returnValue;
    };
    public static readonly CUSTOM_CONVERSION_CALLBACK_WITH_EMPTYABLE_STRING_WITH_ERRORS: CustomConversionCallbackToAnyCallbackWithError = (value, mixedTypeOnConverter, conversionCallbacksToConverter,) =>
        value === '' ? null : CSVLoader.CUSTOM_CONVERSION_CALLBACK_WITH_ERRORS(value, mixedTypeOnConverter, conversionCallbacksToConverter,);

    //endregion -------------------- Static custom callback attributes --------------------
    //region -------------------- Instance attributes --------------------

    readonly #hasOriginalContentAsReference: boolean;
    #doesThrowError?: boolean;
    #defaultConversion?: PossiblePredefinedConversionWithoutValues;

    readonly #originalHeaders: readonly H[];
    readonly #headers: ReadonlySet<SimpleHeader<H>>;
    readonly #originalContent: string[][];
    readonly #callbackToCreateObject: CallbackToCreateObject<A, T>;

    readonly #headerContainerMap: Map<SimpleHeader<H>, HeaderContainer<H, this['headersAsArray']>>;
    readonly #convertedContent: A[];
    readonly #content: T[];

    #callbackOnBeforeFinalObjectCreated: CallbackOnBeforeFinalObjectCreated<A>;
    #callbackOnAfterFinalObjectCreated: CallbackOnAfterFinalObjectCreated<A, T>;
    #callbackOnBeforeSingleContentConverted: CallbackOnBeforeSingleContentConverted<H>;
    #callbackOnAfterSingleContentConverted: CallbackOnAfterSingleContentConverted<H, A>;
    #callbackOnInitialisationStart: CallbackOnInitialisationStart;
    #callbackOnInitialisationEnd: CallbackOnInitialisationEnd<A, T>;

    //endregion -------------------- Instance attributes --------------------

    //endregion -------------------- Attributes --------------------

    public constructor(originalContent: string[][], callbackToCreateObject: CallbackToCreateObject<A, T>, hasOriginalContentAsReference: boolean = CSVLoader.GENERIC_HAS_ORIGINAL_CONTENT_AS_REFERENCE,) {
        this.#hasOriginalContentAsReference = hasOriginalContentAsReference;
        if (!this.hasOriginalContentAsReference)
            originalContent = [...originalContent.map(originalValue => [...originalValue])];

        this.#originalHeaders = originalContent.shift()! as unknown as H[];
        this.#headers = new Set(this.originalHeaders.map(originalHeader => originalHeader.toLowerCase() as SimpleHeader<H>));
        this.__assert(this.originalHeaders.length === this.headers.size, `There is one or more duplicate header in the csv file. (${this.headers.size}/${this.originalHeaders.length})\n[${this.originalHeaders.join(CSVLoader.COMMA_AND_SPACE_STRING)}]`,);
        this.#originalContent = originalContent;
        this.#callbackToCreateObject = callbackToCreateObject;

        this.#headerContainerMap = new Map();
        this.#convertedContent = [];
        this.#content = [];

        this.#callbackOnBeforeFinalObjectCreated = null;
        this.#callbackOnAfterFinalObjectCreated = null;
        this.#callbackOnBeforeSingleContentConverted = null;
        this.#callbackOnAfterSingleContentConverted = null;
        this.#callbackOnInitialisationStart = null;
        this.#callbackOnInitialisationEnd = null;
    }

    //region -------------------- Assertion methods --------------------

    private __assert(condition: boolean, message: string,): asserts condition {
        if (this.doesThrowError)
            assert(condition, message,);
    }

    //endregion -------------------- Assertion methods --------------------
    //region -------------------- Getter and setter methods --------------------

    //region -------------------- Has original content as reference methods --------------------

    public get hasOriginalContentAsReference(): boolean {
        return this.#hasOriginalContentAsReference;
    }

    //endregion -------------------- Has original content as reference methods --------------------
    //region -------------------- Default values methods --------------------

    //region -------------------- Default does throw error methods --------------------

    protected get doesThrowError(): boolean {
        return this.#doesThrowError ?? CSVLoader.GENERIC_DOES_THROW_ERROR;
    }

    protected set doesThrowError(value: boolean,) {
        this.setDoesThrowError(value);
    }

    public setDoesThrowError(doesThrowError: boolean,): this {
        this.#doesThrowError = doesThrowError;
        return this;
    }

    //endregion -------------------- Default does throw error methods --------------------
    //region -------------------- Default conversion methods --------------------

    protected get defaultConversion(): PossiblePredefinedConversionWithoutValues {
        return this.#defaultConversion ?? CSVLoader.GENERIC_DEFAULT_CONVERSION;
    }

    protected set defaultConversion(value: PossiblePredefinedConversionWithoutValues,) {
        this.setDefaultConversion(value);
    }

    /**
     * Set the default {@link PredefinedConversion} on the current {@link CSVLoader loader instance}.
     * If the current default conversion is not defined,
     * then the {@link GENERIC_DEFAULT_CONVERSION generic default conversion} is used.
     *
     * @param defaultConversion
     * @see GENERIC_DEFAULT_CONVERSION
     */
    public setDefaultConversion(defaultConversion: PossiblePredefinedConversionWithoutValues,): this {
        this.#defaultConversion = defaultConversion;
        return this;
    }

    //endregion -------------------- Default conversion methods --------------------

    //endregion -------------------- Default values methods --------------------

    //region -------------------- Headers methods --------------------

    /**
     * The original headers on the {@link this.originalContent original content}.
     */
    public get originalHeaders(): readonly H[] {
        return this.#originalHeaders;
    }

    /**
     * The headers on the {@link this.originalContent original content}
     * used by the Loader to interact with every comparisons.
     */
    public get headers(): ReadonlySet<SimpleHeader<H>> {
        return this.#headers;
    }

    public get headersAsArray(): readonly SimpleHeader<H>[] {
        return Array.from(this.headers);
    }

    //endregion -------------------- Headers methods --------------------
    //region -------------------- Original content methods --------------------

    /**
     * The original content received via the constructor.
     */
    public get originalContent(): readonly string[][] {
        return this.#originalContent;
    }

    //endregion -------------------- Original content methods --------------------
    //region -------------------- Converted content methods --------------------

    /**
     * The converted content with the sames structure as the {@link this.originalContent},
     * but converted based on the {@link this.headerContainerMap} on each associated <u>header index</u>.
     */
    public get convertedContent(): readonly A[] {
        return this._convertedContent;
    }

    protected get _convertedContent(): A[] {
        return this.#convertedContent;
    }

    //endregion -------------------- Converted content methods --------------------
    //region -------------------- Headers to convert methods --------------------

    /**
     * A map of every headers to convert.
     * For the titles not included in it, it use the {@link GENERIC_DEFAULT_CONVERSION} for the conversion.
     */
    public get headerContainerMap(): ReadonlyMap<SimpleHeader<H>, HeaderContainer<H, this['headersAsArray']>> {
        return this._headerContainerMap;
    }

    protected get _headerContainerMap(): Map<SimpleHeader<H>, HeaderContainer<H, this['headersAsArray']>> {
        return this.#headerContainerMap;
    }

    //endregion -------------------- Headers to convert methods --------------------
    //region -------------------- Content methods --------------------

    /**
     * Get the content stored inside this {@link CSVLoader loader}.
     * It use the {@link load} method to retrieve the data only once.
     *
     * @see load
     */
    public get content(): readonly T[] {
        return this.load().#content;
    }

    protected get _content(): T[] {
        return this.#content;
    }

    //endregion -------------------- Content methods --------------------
    //region -------------------- Callback to create the object --------------------

    protected get callbackToCreateObject(): CallbackToCreateObject<A, T> {
        return this.#callbackToCreateObject;
    }

    //endregion -------------------- Callback to create the object --------------------

    //region -------------------- Triggers methods --------------------

    //region -------------------- On before final object created methods --------------------

    protected get callbackOnBeforeFinalObjectCreated() {
        return this.#callbackOnBeforeFinalObjectCreated;
    }

    protected set callbackOnBeforeFinalObjectCreated(callback: CallbackOnBeforeFinalObjectCreated<A>,) {
        this.onBeforeFinalObjectCreated(callback);
    }

    /**
     * <p>
     *  A trigger called before inserting the content
     *  and before the {@link callbackToCreateObject callback received in the construction}
     *  on the {@link addContent addition of content} in the initialisation process.
     * </p>
     *
     * <p>
     *  It receive as a parameter:
     *  <ol>
     *    <li>The content converted</li>
     *    <li>The original content</li>
     *  </ol>
     * </p>
     *
     * @param callback the callback to set
     */
    public onBeforeFinalObjectCreated(callback: CallbackOnBeforeFinalObjectCreated<A>,): this {
        this.#callbackOnBeforeFinalObjectCreated = callback;
        return this;
    }

    //endregion -------------------- On before final object created methods --------------------
    //region -------------------- On after final object created methods --------------------

    protected get callbackOnAfterFinalObjectCreated() {
        return this.#callbackOnAfterFinalObjectCreated;
    }

    protected set callbackOnAfterFinalObjectCreated(callback: CallbackOnAfterFinalObjectCreated<A, T>,) {
        this.onAfterFinalObjectCreated(callback);
    }

    /**
     * <p>
     *  A trigger called before inserting the content
     *  and after the {@link callbackToCreateObject callback received in the construction}
     *  on the {@link addContent addition of content} in the initialisation process.
     * </p>
     *
     * <p>
     *  It receive as a parameter:
     *  <ol>
     *    <li>The final content</li>
     *    <li>The content converted</li>
     *    <li>The original content</li>
     *  </ol>
     * </p>
     *
     * @param callback the callback to set
     */
    public onAfterFinalObjectCreated(callback: CallbackOnAfterFinalObjectCreated<A, T>,): this {
        this.#callbackOnAfterFinalObjectCreated = callback;
        return this;
    }

    //endregion -------------------- On after final object created methods --------------------

    //region -------------------- On before single content has been converted methods --------------------

    protected get callbackOnBeforeSingleContentConverted() {
        return this.#callbackOnBeforeSingleContentConverted;
    }

    protected set callbackOnBeforeSingleContentConverted(callback: CallbackOnBeforeSingleContentConverted<H>,) {
        this.onBeforeSingleContentConverted(callback);
    }

    /**
     * <p>
     *  A trigger called before each individual conversion
     *  on the {@link _initialiseContent initialisation method}.
     * </p>
     *
     * <p>
     *  It receive as a parameter:
     *  <ol>
     *    <li>A single original content</li>
     *  </ol>
     * </p>
     *
     * @param callback the callback to set
     */
    public onBeforeSingleContentConverted(callback: CallbackOnBeforeSingleContentConverted<H>,): this {
        this.#callbackOnBeforeSingleContentConverted = callback;
        return this;
    }

    //endregion -------------------- On before single content has been converted methods --------------------
    //region -------------------- On after single content has been converted methods --------------------

    protected get callbackOnAfterSingleContentConverted() {
        return this.#callbackOnAfterSingleContentConverted;
    }

    protected set callbackOnAfterSingleContentConverted(callback: CallbackOnAfterSingleContentConverted<H, A>,) {
        this.onAfterSingleContentConverted(callback);
    }

    /**
     * <p>
     *  A trigger called after each individual conversion
     *  on the {@link _initialiseContent initialisation method}.
     * </p>
     *
     * <p>
     *  It receive as a parameter:
     *  <ol>
     *    <li>A single converted content</li>
     *    <li>A single original content</li>
     *  </ol>
     * </p>
     *
     * @param callback the callback to set
     */
    public onAfterSingleContentConverted(callback: CallbackOnAfterSingleContentConverted<H, A>,): this {
        this.#callbackOnAfterSingleContentConverted = callback;
        return this;
    }

    //endregion -------------------- On after single content has been converted methods --------------------

    //region -------------------- On initialisation start methods --------------------

    protected get callbackOnInitialisationStart() {
        return this.#callbackOnInitialisationStart;
    }

    protected set callbackOnInitialisationStart(callback: CallbackOnInitialisationStart,) {
        this.onInitialisationStart(callback);
    }

    /**
     * <p>
     *   A trigger called at the start of
     *   the {@link _initialiseContent initialisation method}.
     * </p>
     *
     * <p>
     *  It receive as a parameter:
     *  <ol>
     *    <li>The original content</li>
     *  </ol>
     * </p>
     *
     * @param callback the callback to set
     */
    public onInitialisationStart(callback: CallbackOnInitialisationStart,): this {
        this.#callbackOnInitialisationStart = callback;
        return this;
    }

    //endregion -------------------- On initialisation start methods --------------------
    //region -------------------- On initialisation end methods --------------------

    protected get callbackOnInitialisationEnd() {
        return this.#callbackOnInitialisationEnd;
    }

    protected set callbackOnInitialisationEnd(callback: CallbackOnInitialisationEnd<A, T>,) {
        this.onInitialisationEnd(callback);
    }

    /**
     * <p>
     *   A trigger called at the end of
     *   the {@link _initialiseContent initialisation method}.
     * </p>
     *
     * <p>
     *  It receive as a parameter:
     *  <ol>
     *    <li>The final array of content</li>
     *    <li>The array of converted content</li>
     *    <li>The original content</li>
     *  </ol>
     * </p>
     *
     * @param callback the callback to set
     */
    public onInitialisationEnd(callback: CallbackOnInitialisationEnd<A, T>,): this {
        this.#callbackOnInitialisationEnd = callback;
        return this;
    }

    //endregion -------------------- On initialisation end methods --------------------

    //endregion -------------------- Triggers methods --------------------

    //endregion -------------------- Getter and setter methods --------------------
    //region -------------------- Direct use on private members methods --------------------

    /**
     * Load the content only once, and then do nothing.
     *
     * @see _initialiseContent
     */
    public load(): this {
        if (this.#content.length === 0)
            this._initialiseContent();
        return this;
    }

    protected addHeaderToConvert(header: SimpleHeader<H>, headerTypeOrConvertor: ArrayOrSimpleHeaderTypeOrConvertor): this {
        if (!this._headerContainerMap.has(header))
            this._headerContainerMap.set(header, new HeaderContainer(header, this.headersAsArray,));
        this._headerContainerMap.get(header)!.addHeaderTypeOrConvertor(headerTypeOrConvertor);
        return this;
    }

    protected addContent(originalContent: string[], arrayContent: A,): this {
        this.callbackOnBeforeFinalObjectCreated?.(arrayContent, originalContent,);
        const convertContent = this.callbackToCreateObject(arrayContent);
        this.callbackOnAfterFinalObjectCreated?.(convertContent, arrayContent, originalContent,);
        this._convertedContent.push(arrayContent);
        this._content.push(convertContent);
        return this;
    }

    //endregion -------------------- Direct use on private members methods --------------------
    //region -------------------- Callback usage methods --------------------

    /**
     * Execute any callbacks on the current {@link CSVLoader}.
     *
     * @note The callbacks will be executed on the method call.
     * @param callbacks the callbacks to execute on the {@link CSVLoader} instance (this instance).
     */
    public executeCallbackOnLoader(...callbacks: CallbackOnLoader<this, A, T, H>[]): this {
        callbacks.forEach(callback => callback(this));
        return this;
    }

    //endregion -------------------- Callback usage methods --------------------
    //region -------------------- Convertor usage methods --------------------

    /**
     * <p>
     *  Add the type to the possible header type or simple convertor array.
     * </p>
     *
     * <p>
     *  If the valid value or the convertor is an array:
     *  <ul>
     *   <li>it will add the type in the front of the array</li>
     *   <li>it return a simple double tuple with the type and the valid value or convertor</li>
     *  </ul>
     * </p>
     *
     * @param typeOrHeader the type to add in front of the header type or the header name
     * @param validValueOrConvertor an array or a simple header or convertor
     * @protected
     */
    protected _addTypeToHeaderTypeOrConvertor<T extends | number | boolean | string>(typeOrHeader: PredefinedConversion | SimpleHeader<H>, validValueOrConvertor: ArrayOrSimpleHeaderTypeConvertorExcluding<T>,): ArrayHeaderTypeOrConvertor {
        return [typeOrHeader, validValueOrConvertor,].flat();
    }

    //region -------------------- Boolean conversion methods --------------------

    public convertToBoolean(...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(PredefinedConverter.BOOLEAN.simpleName, ...headers,);
    }

    public convertToNullableBoolean(...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(PredefinedConverter.NULLABLE_BOOLEAN.simpleName, ...headers,);
    }


    public convertToBooleanAnd(headerTypeOrConvertor: ArrayOrSimpleHeaderTypeConvertorExcluding<| 'boolean' | 'nullable boolean' | boolean>, ...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(this._addTypeToHeaderTypeOrConvertor(PredefinedConverter.BOOLEAN.simpleName, headerTypeOrConvertor,), ...headers,);
    }

    public convertToNullableBooleanAnd(headerTypeOrConvertor: ArrayOrSimpleHeaderTypeConvertorExcluding<| 'boolean' | boolean | NullablePredefinedConversion | EmptyableString>, ...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(this._addTypeToHeaderTypeOrConvertor(PredefinedConverter.NULLABLE_BOOLEAN.simpleName, headerTypeOrConvertor,), ...headers,);
    }

    //endregion -------------------- Boolean conversion methods --------------------
    //region -------------------- Number conversion methods --------------------

    public convertToNumber(...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(PredefinedConverter.NUMBER.simpleName, ...headers,);
    }

    public convertToNullableNumber(...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(PredefinedConverter.NULLABLE_NUMBER.simpleName, ...headers,);
    }


    public convertToNumberAnd(headerTypeOrConvertor: ArrayOrSimpleHeaderTypeConvertorExcluding<| 'number' | 'nullable number' | number>, ...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(this._addTypeToHeaderTypeOrConvertor(PredefinedConverter.NUMBER.simpleName, headerTypeOrConvertor,), ...headers,);
    }

    public convertToNullableNumberAnd(headerTypeOrConvertor: ArrayOrSimpleHeaderTypeConvertorExcluding<| 'number' | number | NullablePredefinedConversion | EmptyableString>, ...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(this._addTypeToHeaderTypeOrConvertor(PredefinedConverter.NULLABLE_NUMBER.simpleName, headerTypeOrConvertor,), ...headers,);
    }

    //endregion -------------------- Number conversion methods --------------------
    //region -------------------- String conversion methods --------------------

    public convertToString(...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(PredefinedConverter.STRING.simpleName, ...headers,);
    }

    public convertToEmptyableString(...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(PredefinedConverter.EMPTYABLE_STRING.simpleName, ...headers,);
    }

    public convertToNullableString(...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(PredefinedConverter.NULLABLE_STRING.simpleName, ...headers,);
    }


    public convertToStringAnd(headerTypeOrConvertor: ArrayOrSimpleHeaderTypeConvertorExcluding<| 'string' | 'nullable string' | EmptyableString>, ...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(this._addTypeToHeaderTypeOrConvertor(PredefinedConverter.STRING.simpleName, headerTypeOrConvertor,), ...headers,);
    }

    /**
     * <p>
     *  Convert the headers received into the valid values (any {@link String}),
     *  the specific value received
     *  or from a predefined conversion ({@link PrimitiveConversion} excluding the 'string' since it is already referenced).
     * </p>
     *
     * <p>
     *  It can either be an empty string (''), <u>not</u> the <u><b>null</b></u> or <u><b>undefined</b></u> values,
     *  any possible predefined value (if a 'boolean' or 'number').
     *  It also validate if the value can be at least it is the value received (if it's any string).
     * </p>
     *
     * @param headerTypeOrConvertor
     * @param headers
     * @see StringToEmptyableStringConverter
     * @see ConverterPatterns.EMPTYABLE_STRING_PATTERN
     * @see this.convertTo
     */
    public convertToEmptyableStringAnd(headerTypeOrConvertor: ArrayOrSimpleHeaderTypeConvertorExcluding<| 'string' | NullablePredefinedConversion | EmptyableString>, ...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(this._addTypeToHeaderTypeOrConvertor(PredefinedConverter.EMPTYABLE_STRING.simpleName, headerTypeOrConvertor,), ...headers,);
    }

    /**
     * <p>
     *  Convert the headers received into the valid values (any {@link String}),
     *  the specific value received
     *  or from a predefined conversion ({@link PrimitiveConversion} excluding the 'string' since it is already referenced).
     * </p>
     *
     * <p>
     *  It can either be a <u><b>null</b></u> or <u><b>undefined</b></u> ignoring the case or
     *  any possible predefined value (if a 'boolean' or 'number').
     *  It also validate if the value can be at least it is the value received (if it's any string).
     * </p>
     *
     * @param headerTypeOrConvertor
     * @param headers
     * @see StringToNullableStringConverter
     * @see ConverterPatterns.NULLABLE_STRING_PATTERN
     * @see this.convertTo
     */
    public convertToNullableStringAnd(headerTypeOrConvertor: ArrayOrSimpleHeaderTypeConvertorExcluding<| 'string' | NullablePredefinedConversion | EmptyableString>, ...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(this._addTypeToHeaderTypeOrConvertor(PredefinedConverter.NULLABLE_STRING.simpleName, headerTypeOrConvertor,), ...headers,);
    }

    //endregion -------------------- String conversion methods --------------------
    //region -------------------- Header conversion methods --------------------

    protected _validateHeaderNotIncludedInArrayOfHeadersReceived(header: SimpleHeader<H>, headers: ArrayOfHeadersReceived<H>,): void | never {
        this.__assert(!headers.includes(header), `Recursive error. A header referenced ("${header}") cannot be included within the possible headers (${headers.map(header => `"${header}"`).join(CSVLoader.COMMA_AND_SPACE_STRING)})`,);
    }

    public convertToHeader(header: SimpleHeaderReceived<H>, ...headers: ArrayOfHeadersReceived<H>): this | never {
        this._validateHeaderNotIncludedInArrayOfHeadersReceived(header.toLowerCase() as SimpleHeader<H>, headers,);
        return this.convertTo(header, ...headers,);
    }

    public convertToHeaderAnd(header: SimpleHeaderReceived<H>, validValueOrConvertor: ArrayOrSimpleHeaderTypeConvertorExcluding<H>, ...headers: ArrayOfHeadersReceived<H>): this | never {
        this._validateHeaderNotIncludedInArrayOfHeadersReceived(header.toLowerCase() as SimpleHeader<H>, headers,);
        return this.convertTo(this._addTypeToHeaderTypeOrConvertor(header.toLowerCase() as SimpleHeader<H>, validValueOrConvertor,), ...headers,);
    }

    //endregion -------------------- Header conversion methods --------------------

    /**
     * Add a conversion on each headers received with <u>only one</u> of:
     * <ul>
     *     <li>a predefined conversion type ({@link PredefinedConversion})</li>
     *     <li>a custom convertor ({@link ConversionCallbackToConverter})</li>
     *     <li>an {@link Array array} of any string and / or the {@link PredefinedConversion predefined conversion type}</li>
     * </ul>
     *
     * @param headerTypeOrConvertor <u>the predefined conversion</u>, <u>custom convertor</u> or <u>the array of string and / or predefined conversion</u>
     * @param headers the headers to have the validation
     */
    public convertTo(headerTypeOrConvertor: ArrayOrSimpleHeaderTypeOrConvertor, ...headers: ArrayOfHeadersReceived<H>): this {
        headers.map(header => header.toLowerCase() as SimpleHeader<H>).forEach(header => this.addHeaderToConvert(header, headerTypeOrConvertor,));
        return this;
    }

    //endregion -------------------- Convertor usage methods --------------------
    //region -------------------- Initialisation methods --------------------

    protected _convertOriginalContent(headerConverterHolder: HeadersConverterHolder<H>, content: string,): keyof A {
        return headerConverterHolder.convertor(content).convertedValue as keyof A;
    }

    protected _initialiseContent(): this {
        this.callbackOnInitialisationStart?.(this.originalContent);
        //TODO verify every headers to include them as those followed.
        const headersConverterHolders: readonly HeadersConverterHolder<H>[] = this.headersAsArray.map((header, index,) => ({
            index: index,
            originalHeader: this.originalHeaders[index],
            header: header.toLowerCase() as SimpleHeader<H>,
            convertor: this._getConverterBasedOnHeader(header.toLowerCase() as SimpleHeader<H>),
        }));
        //TODO add temporary variable to hold the values in their proper order
        this.originalContent.forEach(
            originalContent => this.addContent(originalContent, originalContent
                .map((content, index,) => {
                    const headerConverterHolder = headersConverterHolders[index];
                    this.callbackOnBeforeSingleContentConverted?.(content, headerConverterHolder.originalHeader,);
                    const convertedValue = this._convertOriginalContent(headerConverterHolder, content,);
                    this.callbackOnAfterSingleContentConverted?.(convertedValue, content, headerConverterHolder.originalHeader,);
                    return convertedValue;
                }) as A)
        );
        this.callbackOnInitialisationEnd?.(this.content, this.convertedContent, this.originalContent,);
        return this;
    }

    protected _getConverterBasedOnHeader(header: SimpleHeader<H>,): ConversionCallbackToConverter {
        const headerContainer = this.headerContainerMap.get(header);
        if (headerContainer == null)
            return value => PredefinedConverter.getValue(this.defaultConversion).newConvertor(value, null,);
        if (headerContainer.amountOfValidator === 1)
            return this._createSingleConvertor(headerContainer);
        return this._createMixedConvertor(headerContainer);
    }

    //region -------------------- Convertor creation methods --------------------

    //region -------------------- Single Convertor creation methods --------------------

    /**
     * Create the {@link Converter} based on the {@link PredefinedConversion}
     * and the create a new basic {@link Converter}.
     *
     * @param headerContainer the header container
     * @protected
     */
    protected _createSingleConvertor(headerContainer: HeaderContainer<H, this['headersAsArray']>,): ConversionCallbackToConverter {
        return headerContainer.createConversionCallbacks()[0];
    }

    //endregion -------------------- Single Convertor creation methods --------------------
    //region -------------------- Mixed Convertor creation methods --------------------

    protected _createContainValidations(headerContainer: HeaderContainer<H, this['headersAsArray']>,): ArrayOfValidationsArrayOfValidations {
        return [
            Array.from(headerContainer.predefinedConvertors).find(predefinedConvertor => predefinedConvertor.simpleName.includes(CSVLoader.NULLABLE_STRING)) != null,
            headerContainer.predefinedConvertors.has(PredefinedConverter.EMPTYABLE_STRING) != null,
        ];
    }

    protected _createMixedConvertorInstance(headerContainer: HeaderContainer<H, this['headersAsArray']>, validations: ArrayOfValidationsArrayOfValidations,): ArrayOfMixedConvertorInstance {
        return [
            headerContainer.createConversionCallbacks(),
            this._createMixedConvertorInstanceTypes(headerContainer, validations,),
        ];
    }

    protected _createMixedConvertorInstanceTypes(headerContainer: HeaderContainer<H, this['headersAsArray']>, [containNullable, containEmptyableString,]: ArrayOfValidationsArrayOfValidations,): string {
        return (containNullable ? CSVLoader.NULLABLE_STRING : '')
            + ' ('
            + (containEmptyableString ? '"", ' : '')
            + (headerContainer.predefinedConvertors.size === 0 ? '' : `predefined convertor: (${Array.from(headerContainer.predefinedConvertors).map(predefinedConvertor => predefinedConvertor.simpleNameAsNonNullable).join(CSVLoader.COMMA_AND_SPACE_STRING)})`)
            + (headerContainer.followingHeaders.size === 0 ? '' : `headers: (${Array.from(headerContainer.followingHeaders).join(CSVLoader.COMMA_AND_SPACE_STRING)})`)
            + (headerContainer.singleValuesToValidate.size === 0 ? '' : `values: (${Array.from(headerContainer.singleValuesToValidate).map(singleValue => `"${singleValue}"`).join(CSVLoader.COMMA_AND_SPACE_STRING)})`)
            + (headerContainer.convertorCallbacks.size === 0 ? '' : `${CSVLoader.CUSTOM_CALLBACK_NAME} x${headerContainer.convertorCallbacks.size}`)
            + ')';
    }

    protected _interpretConvertorInstance([containNullable, containEmptyableString,]: ArrayOfValidationsArrayOfValidations, [conversionCallbacksToConverter, mixedTypeOnConverter,]: ArrayOfMixedConvertorInstance,): ConversionCallbackToConverter {
        if (!this.doesThrowError)
            return containNullable
                ? value => new GenericStringToAnyNullableConverter(value, mixedTypeOnConverter, CSVLoader.TRUE_CALLBACK,
                    value => CSVLoader.CUSTOM_VALIDATION_CALLBACK(value, conversionCallbacksToConverter,),)
                : containEmptyableString
                    ? value => new GenericStringToAnyConverter(value, mixedTypeOnConverter, CSVLoader.TRUE_CALLBACK,
                        value => CSVLoader.CUSTOM_CONVERSION_CALLBACK_WITH_EMPTYABLE_STRING(value, conversionCallbacksToConverter,),)
                    : value => new GenericStringToAnyConverter(value, mixedTypeOnConverter, CSVLoader.TRUE_CALLBACK,
                        value => CSVLoader.CUSTOM_CONVERSION_CALLBACK(value, conversionCallbacksToConverter,),);

        return containNullable
            ? value => new GenericStringToAnyNullableConverter(value, mixedTypeOnConverter,
                value => CSVLoader.CUSTOM_VALIDATION_CALLBACK(value, conversionCallbacksToConverter,),
                value => CSVLoader.CUSTOM_CONVERSION_CALLBACK_WITH_ERRORS(value, mixedTypeOnConverter, conversionCallbacksToConverter,),)
            : containEmptyableString
                ? value => new GenericStringToAnyConverter(value, mixedTypeOnConverter,
                    value => CSVLoader.CUSTOM_VALIDATION_CALLBACK_WITH_EMPTYABLE_STRING(value, conversionCallbacksToConverter,),
                    value => CSVLoader.CUSTOM_CONVERSION_CALLBACK_WITH_EMPTYABLE_STRING_WITH_ERRORS(value, mixedTypeOnConverter, conversionCallbacksToConverter,),)
                : value => new GenericStringToAnyConverter(value, mixedTypeOnConverter,
                    value => CSVLoader.CUSTOM_VALIDATION_CALLBACK(value, conversionCallbacksToConverter,),
                    value => CSVLoader.CUSTOM_CONVERSION_CALLBACK_WITH_ERRORS(value, mixedTypeOnConverter, conversionCallbacksToConverter,),);
    }

    protected _createMixedConvertor(headerContainer: HeaderContainer<H, this['headersAsArray']>,): ConversionCallbackToConverter {
        const validations = this._createContainValidations(headerContainer);
        const mixedConvertorInstance = this._createMixedConvertorInstance(headerContainer, validations,);

        return this._interpretConvertorInstance(validations, mixedConvertorInstance);
    }

    //endregion -------------------- Mixed Convertor creation methods --------------------

    //endregion -------------------- Convertor creation methods --------------------

    //endregion -------------------- Initialisation methods --------------------

}
