import type {Converter}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   from './converter/Converter';
import type {ArrayHeaderTypeOrConvertor, ArrayOfHeaders, ArrayOfHeadersReceived, ArrayOrSimpleHeaderTypeConvertorExcluding, ArrayOrSimpleHeaderTypeOrConvertor, CallbackOnAfterFinalObjectCreated, CallbackOnAfterSingleContentConverted, CallbackOnBeforeFinalObjectCreated, CallbackOnBeforeSingleContentConverted, CallbackOnInitialisationEnd, CallbackOnInitialisationStart, ConversionCallbackToAny, ConversionCallbackToConverter, HeadersConverterHolder, SimpleHeader, SimpleHeaderReceived, ValidationCallback} from './CSVLoaderTypes';
import type {EmptyableString, NullablePredefinedConversion, PredefinedConversion, PrimitiveConversion}                                                                                                                                                                                                                                                                                                                                                                                                                    from './converter/PredefinedConverterTypes';

import {GenericStringToAnyConverter}         from './converter/GenericStringToAnyConverter';
import {GenericStringToAnyNullableConverter} from './converter/GenericStringToAnyNullableConverter';
import {PredefinedConverter}                 from './converter/PredefinedConverter';
import {StringToSingleStringConverter}       from './converter/StringToSingleStringConverter';

export class CSVLoader<A extends any[] = any[], T = any, H extends string = string, > {

    //region -------------------- Attributes --------------------

    public static GENERIC_DEFAULT_CONVERSION: PredefinedConversion = 'emptyable string';
    public static readonly CUSTOM_CALLBACK_NAME = 'custom callback';

    readonly #headers;
    readonly #originalContent;
    readonly #callbackToCreateObject;

    readonly #headersToConvert;
    readonly #headersFollowed;
    readonly #convertedContent;
    readonly #content;

    #callbackOnBeforeFinalObjectCreated: CallbackOnBeforeFinalObjectCreated<A>;
    #callbackOnAfterFinalObjectCreated: CallbackOnAfterFinalObjectCreated<A, T>;
    #callbackOnBeforeSingleContentConverted: CallbackOnBeforeSingleContentConverted;
    #callbackOnAfterSingleContentConverted: CallbackOnAfterSingleContentConverted<A>;
    #callbackOnInitialisationStart: CallbackOnInitialisationStart;
    #callbackOnInitialisationEnd: CallbackOnInitialisationEnd<A, T>;
    #defaultConversion?: PredefinedConversion;

    //endregion -------------------- Attributes --------------------

    public constructor(originalContent: string[][], callbackToCreateObject: (convertedContent: A,) => T,) {
        this.#headers = originalContent.shift()!;
        this.#originalContent = originalContent;
        this.#callbackToCreateObject = callbackToCreateObject;

        this.#headersToConvert = new Map<SimpleHeader<H>, ArrayOrSimpleHeaderTypeOrConvertor>();
        this.#headersFollowed = [] as SimpleHeader<H>[];
        this.#convertedContent = [] as A[];
        this.#content = [] as T[];

        this.#callbackOnBeforeFinalObjectCreated = null;
        this.#callbackOnAfterFinalObjectCreated = null;
        this.#callbackOnBeforeSingleContentConverted = null;
        this.#callbackOnAfterSingleContentConverted = null;
        this.#callbackOnInitialisationStart = null;
        this.#callbackOnInitialisationEnd = null;
    }

    //region -------------------- Getter and setter methods --------------------

    //region -------------------- Headers methods --------------------

    /**
     * The headers on the {@link this.originalContent original content}.
     */
    public get headers(): readonly string[] {
        return this.#headers;
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
     * The converted content with the sames structure as the {@link originalContent},
     * but converted based on the {@link headersToConvert} on each associated <u>header index</u>.
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
    public get headersToConvert(): ReadonlyMap<SimpleHeader<H>, ArrayOrSimpleHeaderTypeOrConvertor> {
        return this._headersToConvert;
    }

    protected get _headersToConvert(): Map<SimpleHeader<H>, ArrayOrSimpleHeaderTypeOrConvertor> {
        return this.#headersToConvert;
    }

    //endregion -------------------- Headers to convert methods --------------------
    //region -------------------- Headers followed methods --------------------

    /**
     * An array of every headers followed for the conversion.
     */
    public get headersFollowed(): ArrayOfHeaders<H> {
        return this._headersFollowed;
    }

    public get _headersFollowed(): SimpleHeader<H>[] {
        return this.#headersFollowed;
    }

    //endregion -------------------- Headers followed methods --------------------
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

    protected get callbackToCreateObject() {
        return this.#callbackToCreateObject;
    }

    //endregion -------------------- Callback to create the object --------------------
    //region -------------------- Default conversion methods --------------------

    protected get defaultConversion() {
        return this.#defaultConversion ?? CSVLoader.GENERIC_DEFAULT_CONVERSION;
    }

    protected set defaultConversion(value: PredefinedConversion) {
        this.#defaultConversion = value;
    }

    /**
     * Set the default {@link PredefinedConversion} on the current {@link CSVLoader loader instance}.
     * If the current default conversion is not defined,
     * then the {@link GENERIC_DEFAULT_CONVERSION generic default conversion} is used.
     *
     * @param defaultConversion
     * @see GENERIC_DEFAULT_CONVERSION
     */
    public setDefaultConversion(defaultConversion: PredefinedConversion,): this {
        this.defaultConversion = defaultConversion;
        return this;
    }

    //endregion -------------------- Default conversion methods --------------------
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

    protected set callbackOnBeforeSingleContentConverted(callback: CallbackOnBeforeSingleContentConverted,) {
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
    public onBeforeSingleContentConverted(callback: CallbackOnBeforeSingleContentConverted,): this {
        this.#callbackOnBeforeSingleContentConverted = callback;
        return this;
    }

    //endregion -------------------- On before single content has been converted methods --------------------
    //region -------------------- On after single content has been converted methods --------------------

    protected get callbackOnAfterSingleContentConverted() {
        return this.#callbackOnAfterSingleContentConverted;
    }

    protected set callbackOnAfterSingleContentConverted(callback: CallbackOnAfterSingleContentConverted<A>,) {
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
    public onAfterSingleContentConverted(callback: CallbackOnAfterSingleContentConverted<A>,): this {
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
        const oldHeaderConversion = this._headersToConvert.get(header);
        const newHeaderConversion = oldHeaderConversion == null ? headerTypeOrConvertor : [oldHeaderConversion, headerTypeOrConvertor,].flat();
        this._headersToConvert.set(header, newHeaderConversion,);
        return this;
    }

    protected addHeaderFollowed(...headers: ArrayOfHeaders<H>): this {
        this._headersFollowed.concat(...headers);
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
    protected _addTypeToHeaderTypeOrConvertor<E extends string>(typeOrHeader: PredefinedConversion | SimpleHeader<H>, validValueOrConvertor: ArrayOrSimpleHeaderTypeConvertorExcluding<E>,): ArrayHeaderTypeOrConvertor {
        return [typeOrHeader, validValueOrConvertor,].flat();
    }

    //region -------------------- Boolean conversion methods --------------------

    public convertToBoolean(...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo('boolean', ...headers,);
    }

    public convertToNullableBoolean(...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo('nullable boolean', ...headers,);
    }


    public convertToBooleanAnd(validValueOrConvertor: ArrayOrSimpleHeaderTypeConvertorExcluding<| 'boolean' | 'nullable boolean'>, ...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(this._addTypeToHeaderTypeOrConvertor('boolean', validValueOrConvertor,), ...headers,);
    }

    public convertToNullableBooleanAnd(validValueOrConvertor: ArrayOrSimpleHeaderTypeConvertorExcluding<| 'boolean' | NullablePredefinedConversion | EmptyableString>, ...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(this._addTypeToHeaderTypeOrConvertor('nullable boolean', validValueOrConvertor,), ...headers,);
    }

    //endregion -------------------- Boolean conversion methods --------------------
    //region -------------------- Number conversion methods --------------------

    public convertToNumber(...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo('number', ...headers,);
    }

    public convertToNullableNumber(...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo('nullable number', ...headers,);
    }


    public convertToNumberAnd(validValueOrConvertor: ArrayOrSimpleHeaderTypeConvertorExcluding<| 'number' | 'nullable number'>, ...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(this._addTypeToHeaderTypeOrConvertor('number', validValueOrConvertor,), ...headers,);
    }

    public convertToNullableNumberAnd(validValueOrConvertor: ArrayOrSimpleHeaderTypeConvertorExcluding<| 'number' | NullablePredefinedConversion | EmptyableString>, ...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(this._addTypeToHeaderTypeOrConvertor('nullable number', validValueOrConvertor,), ...headers,);
    }

    //endregion -------------------- Number conversion methods --------------------
    //region -------------------- String conversion methods --------------------

    public convertToString(...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo('string', ...headers,);
    }

    public convertToEmptyableString(...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo('emptyable string', ...headers,);
    }

    public convertToNullableString(...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo('nullable string', ...headers,);
    }


    public convertToStringAnd(validValueOrConvertor: ArrayOrSimpleHeaderTypeConvertorExcluding<| 'string' | 'nullable string' | EmptyableString>, ...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(this._addTypeToHeaderTypeOrConvertor('string', validValueOrConvertor,), ...headers,);
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
     * @param validValueOrConvertor
     * @param headers
     * @see StringToEmptyableStringConverter
     * @see ConverterPatterns.EMPTYABLE_STRING_PATTERN
     * @see this.convertTo
     */
    public convertToEmptyableStringAnd(validValueOrConvertor: ArrayOrSimpleHeaderTypeConvertorExcluding<| 'string' | NullablePredefinedConversion | EmptyableString>, ...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(this._addTypeToHeaderTypeOrConvertor('emptyable string', validValueOrConvertor,), ...headers,);
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
     * @param validValueOrConvertor
     * @param headers
     * @see StringToNullableStringConverter
     * @see ConverterPatterns.NULLABLE_STRING_PATTERN
     * @see this.convertTo
     */
    public convertToNullableStringAnd(validValueOrConvertor: ArrayOrSimpleHeaderTypeConvertorExcluding<| 'string' | NullablePredefinedConversion | EmptyableString>, ...headers: ArrayOfHeadersReceived<H>): this {
        return this.convertTo(this._addTypeToHeaderTypeOrConvertor('nullable string', validValueOrConvertor,), ...headers,);
    }

    //endregion -------------------- String conversion methods --------------------
    //region -------------------- Header conversion methods --------------------

    protected _validateHeaderNotIncludedInArrayOfHeadersReceived(header: SimpleHeader<H>, headers: ArrayOfHeadersReceived<H>,): void | never {
        if (headers.includes(header))
            throw new EvalError(`Recursive error. A header referenced ("${header}") cannot be included within the possible headers (${headers.map(header => `"${header}"`).join(', ')})`);
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

    protected _convertOriginalContent(headerConverterHolder: HeadersConverterHolder, content: string,): keyof A {
        return headerConverterHolder.convertor(content).convertedValue as keyof A;
    }

    protected _initialiseContent(): this {
        this.callbackOnInitialisationStart?.(this.originalContent);
        //TODO verify every headers to include them as those followed.
        const headersConverterHolders: readonly HeadersConverterHolder[] = this.headers.map((header, index,) => ({
            index: index,
            header: header.toLowerCase() as SimpleHeader<H>,
            convertor: this._getConverterBasedOnHeader(header.toLowerCase() as SimpleHeader<H>),
        }));
        //TODO add temporary variable to hold the values in their proper order
        this.originalContent.forEach(
            originalContent => this.addContent(originalContent, originalContent
                .map((content, index,) => {
                    this.callbackOnBeforeSingleContentConverted?.(content);
                    const convertedValue = this._convertOriginalContent(headersConverterHolders[index], content,);
                    this.callbackOnAfterSingleContentConverted?.(convertedValue, content,);
                    return convertedValue;
                }) as A)
        );
        this.callbackOnInitialisationEnd?.(this.content, this.convertedContent, this.originalContent,);
        return this;
    }

    protected _getConverterBasedOnHeader(header: SimpleHeader<H>,): ConversionCallbackToConverter {
        const headerTypeOrConvertorFound = this.headersToConvert.get(header) ?? this.defaultConversion;
        return typeof headerTypeOrConvertorFound === 'string'
            ? this._createConvertor(headerTypeOrConvertorFound)
            : headerTypeOrConvertorFound instanceof Array
                ? this._createMixedConvertor(headerTypeOrConvertorFound)
                : headerTypeOrConvertorFound;
    }

    //region -------------------- Convertor creation methods --------------------

    //region -------------------- Single Convertor creation methods --------------------

    /**
     * Create the {@link Converter} based on the {@link PredefinedConversion}
     * and the create a new basic {@link Converter}.
     *
     * @param predefinedConversionHeaderOrString the predefined conversion to create, the header or a single string
     * @protected
     */
    protected _createConvertor(predefinedConversionHeaderOrString: | PredefinedConversion | H | string,): ConversionCallbackToConverter {
        const predefinedConvertor = PredefinedConverter.getValue(predefinedConversionHeaderOrString);
        if (predefinedConvertor != null)
            return value => predefinedConvertor.newConvertor(value);
        return value => new StringToSingleStringConverter(value, predefinedConversionHeaderOrString,);
    }

    //endregion -------------------- Single Convertor creation methods --------------------
    //region -------------------- Mixed Convertor creation methods --------------------

    protected _createContainValidations(conversionComponents: ArrayHeaderTypeOrConvertor,): [boolean, boolean] {
        const containNullable = conversionComponents.find(conversionComponent => typeof conversionComponent === 'string' && conversionComponent.includes('nullable')) != null;
        const containEmptyableString = conversionComponents.find(conversionComponent => conversionComponent === PredefinedConverter.EMPTYABLE_STRING.name) != null;
        return [containNullable, containEmptyableString,];
    }

    protected _createMixedConvertor(conversionComponents: ArrayHeaderTypeOrConvertor,): ConversionCallbackToConverter {
        const [containNullable, containEmptyableString,] = this._createContainValidations(conversionComponents);

        //region -------------------- Creation of the mixed convertor --------------------

        let validationComponentOnConverter = [] as ValidationCallback[];
        let conversionComponentOnConverter = [] as ConversionCallbackToAny[];

        const typeOnConverter = (containNullable ? 'nullable' : '')
            + ' ('
            + (containEmptyableString ? '"", ' : '')
            + conversionComponents.map(conversionComponent => {
                let type: string;
                if (typeof conversionComponent === 'string') {
                    const predefinedConvertor = PredefinedConverter.getValue(conversionComponent);
                    if (predefinedConvertor === null) {
                        type = '"' + conversionComponent + '"';
                        validationComponentOnConverter.push(value => value === conversionComponent);
                        conversionComponentOnConverter.push(value => value);
                    } else {
                        type = predefinedConvertor.nameAsNonNullable;
                        validationComponentOnConverter.push(predefinedConvertor.newValidationAsNonNullable());
                        conversionComponentOnConverter.push(value => predefinedConvertor.newConversionAsNonNullable(value));
                    }
                } else {
                    type = CSVLoader.CUSTOM_CALLBACK_NAME;
                    conversionComponentOnConverter.push(value => conversionComponent(value));
                }
                return type;
            })
                .join(', ')
            + ')';

        //endregion -------------------- Mixed Convertor creation methods --------------------

        //endregion -------------------- Creation of the mixed convertor --------------------
        //region -------------------- Return statement --------------------

        const finalValidationComponentOnConverter: ValidationCallback = value => {
            for (let validationComponent of validationComponentOnConverter) {
                if (validationComponent(value))
                    return true;
            }
            return false;
        };
        const finalConversionComponentOnConverter: ConversionCallbackToAny = value => conversionComponentOnConverter[validationComponentOnConverter.findIndex(validationComponent => validationComponent(value))](value);

        return containNullable
            ? value => new GenericStringToAnyNullableConverter(value, typeOnConverter,
                value => finalValidationComponentOnConverter(value),
                value => finalConversionComponentOnConverter(value))
            : value => new GenericStringToAnyConverter(value, typeOnConverter,
                value => (containEmptyableString ? value === '' : false) || finalValidationComponentOnConverter(value),
                value => containEmptyableString && value === '' ? null : finalConversionComponentOnConverter(value));

        //endregion -------------------- Return statement --------------------
    }

    //endregion -------------------- Convertor creation methods --------------------

    //endregion -------------------- Initialisation methods --------------------

}
