import {Converter}                                                      from './converter/Converter';
import {GenericStringToAnyConverter}                                    from './converter/GenericStringToAnyConverter';
import {GenericStringToAnyNullableConverter}                            from './converter/GenericStringToAnyNullableConverter';
import {PredefinedConversion, PredefinedConverter, PrimitiveConversion} from './converter/PredefinedConverter';

//region -------------------- CVSLoader types --------------------

export type CustomConversionCallback = (value: string) => Converter<string, any>;
export type HeaderTypeOrConvertor = PredefinedConversion
    | readonly (PredefinedConversion | string)[]
    | CustomConversionCallback;

//endregion -------------------- CVSLoader types --------------------

export class CSVLoader<T extends any[], U> {

    //region -------------------- Attributes --------------------

    public static GENERIC_DEFAULT_CONVERSION: PredefinedConversion = 'emptyable string';

    readonly #originalContent;
    readonly #headersToConvert;
    readonly #convertedContent;
    readonly #content;

    readonly #callbackToCreateObject;
    #callbackOnFinalObjectCreated?: (finalContent: U, convertedContent: T, originalContent: readonly string[],) => void;
    #callbackOnSingleContentConverted?: (content: keyof T, originalValue: string) => void;
    #callbackOnInitialisationEnd?: (finalContents: readonly U[], convertedContents: readonly T[], originalContents: readonly string[][],) => void;
    #defaultConversion?: PredefinedConversion;

    //endregion -------------------- Attributes --------------------

    public constructor(originalContent: string[][], callbackToCreateObject: (convertedContent: T) => U,) {
        this.#originalContent = originalContent;
        this.#headersToConvert = new Map<string, HeaderTypeOrConvertor>();
        this.#convertedContent = [] as T[];
        this.#content = [] as U[];
        this.#callbackToCreateObject = callbackToCreateObject;
    }

    //region -------------------- getter and setter and direct use on private members methods --------------------

    /**
     * The original content received via the constructor.
     */
    public get originalContent(): string[][] {
        return this.#originalContent;
    }

    /**
     * The converted content with the sames structure as the {@link originalContent},
     * but converted based on the {@link headersToConvert} on each associated <u>header index</u>.
     */
    public get convertedContent(): readonly T[] {
        return this.#convertedContent;
    }

    /**
     * A map of every headers to convert.
     * It exclude the other titles where they use the {@link GENERIC_DEFAULT_CONVERSION} instead.
     */
    public get headersToConvert(): ReadonlyMap<string, HeaderTypeOrConvertor> {
        return this.#headersToConvert;
    }

    protected get _headersToConvert(): Map<string, HeaderTypeOrConvertor> {
        return this.#headersToConvert;
    }

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

    /**
     * Get the content stored inside this {@link CSVLoader loader}.
     * It use the {@link load} method to retrieve the data only once.
     *
     * @see load
     */
    public get content(): readonly U[] {
        return this.load().#content;
    }

    protected addContent(originalContent: string[], arrayContent: T): this {
        const convertContent = this.callbackToCreateObject(arrayContent);
        this.callbackOnFinalObjectCreated?.(convertContent, arrayContent, originalContent,);
        this.#convertedContent.push(arrayContent);
        this.#content.push(convertContent);
        return this;
    }

    //region -------------------- triggers methods --------------------

    protected get callbackOnFinalObjectCreated() {
        return this.#callbackOnFinalObjectCreated;
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
    public onFinalObjectCreated(callback: (finalContent: U, convertedContent: T, originalContent: readonly string[],) => void): this {
        this.#callbackOnFinalObjectCreated = callback;
        return this;
    }

    protected get callbackOnSingleContentConverted() {
        return this.#callbackOnSingleContentConverted;
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
    public onSingleContentConverted(callback: (content: keyof T, originalValue: string) => void): this {
        this.#callbackOnSingleContentConverted = callback;
        return this;
    }

    protected get callbackOnInitialisationEnd() {
        return this.#callbackOnInitialisationEnd;
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
    public onInitialisationEnd(callback: (finalContents: readonly U[], convertedContents: readonly T[], originalContents: readonly string[][],) => void): this {
        this.#callbackOnInitialisationEnd = callback;
        return this;
    }

    //endregion -------------------- triggers methods --------------------

    protected get callbackToCreateObject() {
        return this.#callbackToCreateObject;
    }

    //region -------------------- default values methods --------------------

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
    public setDefaultConversion(defaultConversion: PredefinedConversion): this {
        this.defaultConversion = defaultConversion;
        return this;
    }

    //endregion -------------------- default values methods --------------------

    //endregion -------------------- getter and setter and direct use on private members methods --------------------
    //region -------------------- convertor usage methods --------------------

    public convertToBoolean(...headers: string[]): this {
        return this.convertTo('boolean', ...headers);
    }

    public convertToNullableBoolean(...headers: string[]): this {
        return this.convertTo('nullable boolean', ...headers);
    }

    public convertToNumber(...headers: string[]): this {
        return this.convertTo('number', ...headers);
    }

    public convertToNullableNumber(...headers: string[]): this {
        return this.convertTo('nullable number', ...headers);
    }

    public convertToString(...headers: string[]): this {
        return this.convertTo('string', ...headers);
    }

    public convertToEmptyableString(...headers: string[]): this {
        return this.convertTo('emptyable string', ...headers);
    }

    public convertToNullableString(...headers: string[]): this {
        return this.convertTo('nullable string', ...headers);
    }


    public convertToBooleanAnd(validValueOrConvertor: string | Exclude<PredefinedConversion, 'boolean'>, ...headers: string[]): this {
        return this.convertTo(['boolean', validValueOrConvertor,], ...headers);
    }

    public convertToNullableBooleanAnd(validValueOrConvertor: string | Exclude<PrimitiveConversion, 'boolean'>, ...headers: string[]): this {
        return this.convertTo(['nullable boolean', validValueOrConvertor,], ...headers);
    }

    public convertToNumberAnd(validValueOrConvertor: string | Exclude<PredefinedConversion, 'number'>, ...headers: string[]): this {
        return this.convertTo(['number', validValueOrConvertor,], ...headers);
    }

    public convertToNullableNumberAnd(validValueOrConvertor: string | Exclude<PrimitiveConversion, 'number'>, ...headers: string[]): this {
        return this.convertTo(['nullable number', validValueOrConvertor,], ...headers);
    }

    public convertToStringAnd(validValueOrConvertor: string | Exclude<PredefinedConversion, 'string'>, ...headers: string[]): this {
        return this.convertTo(['string', validValueOrConvertor,], ...headers);
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
     */
    public convertToEmptyableStringAnd(validValueOrConvertor: string | Exclude<PrimitiveConversion, 'string'>, ...headers: string[]): this {
        return this.convertTo(['emptyable string', validValueOrConvertor,], ...headers);
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
     */
    public convertToNullableStringAnd(validValueOrConvertor: string | Exclude<PrimitiveConversion, 'string'>, ...headers: string[]): this {
        return this.convertTo(['nullable string', validValueOrConvertor,], ...headers);
    }

    /**
     * Add a conversion on each headers received with <u>only one</u> of:
     * <ul>
     *     <li>a predefined conversion type ({@link PredefinedConversion})</li>
     *     <li>a custom convertor ({@link CustomConversionCallback})</li>
     *     <li>an {@link Array array} of any string and / or the {@link PredefinedConversion predefined conversion type}</li>
     * </ul>
     *
     * @param headerTypeOrConvertor <u>the predefined conversion</u>, <u>custom convertor</u> or <u>the array of string and / or predefined conversion</u>
     * @param headers the headers to have the validation
     */
    public convertTo(headerTypeOrConvertor: HeaderTypeOrConvertor, ...headers: string[]): this {
        headers.map(header => header.toLowerCase()).forEach(header => this._headersToConvert.set(header, headerTypeOrConvertor));
        return this;
    }

    //endregion -------------------- convertor usage methods --------------------
    //region -------------------- initialisation methods --------------------

    protected _initialiseContent(): this {
        const headers = this.originalContent[0].map((header, index) => ({index: index, header: header, convertor: this._getConverterBasedOnHeader(header.toLowerCase())}));
        for (let i = 1; i < this.originalContent.length; i++) {
            const originalContent = this.originalContent[i];
            this.addContent(originalContent, originalContent.map((content, index) => {
                const convertedValue = headers[index].convertor(content).convertedValue as keyof T;
                this.callbackOnSingleContentConverted?.(convertedValue, content);
                return convertedValue;
            }) as T);
        }
        this.callbackOnInitialisationEnd?.(this.content, this.convertedContent, this.originalContent);
        return this;
    }

    protected _getConverterBasedOnHeader(header: string): (value: string) => Converter<string, any> {
        const headerTypeOrConvertorFound = this.headersToConvert.get(header) ?? this.defaultConversion;
        return typeof headerTypeOrConvertorFound == 'string'
            ? this._createAndGetConvertor(header, headerTypeOrConvertorFound)
            : headerTypeOrConvertorFound instanceof Array
                ? this._createAndGetMixedConvertor(header, headerTypeOrConvertorFound)
                : headerTypeOrConvertorFound;
    }

    protected _createAndGetConvertor(header: string, predefinedConversion: PredefinedConversion): (value: string) => Converter<string, any> {
        let convertor: (value: string) => Converter<string, any> =
            value => PredefinedConverter.getValue(predefinedConversion).newStringToConvertor(value);
        this._headersToConvert.set(header, convertor);
        return convertor;
    }

    protected _createAndGetMixedConvertor(header: string, conversionComponents: readonly (PredefinedConversion | string)[]): (value: string) => Converter<string, any> {
        const containNullable = conversionComponents.find(conversionComponent => conversionComponent.includes('nullable')) !== undefined;
        const containNonEmptyString = conversionComponents.find(conversionComponent => conversionComponent === 'emptyable string') !== undefined;
        let validationComponentOnConverter: ((value: string) => boolean)[] = [];
        let conversionComponentOnConverter: ((value: string) => any)[] = [];

        const typeOnConverter = (containNullable ? 'nullable' : '')
            + ' ('
            + (containNonEmptyString ? '"", ' : '')
            + conversionComponents.map(conversionComponent => {
                let type: string;
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
                return type;
            }).join(', ')
            + ')';


        const finalValidationComponentOnConverter = (value: string) => {
            for (let validationComponent of validationComponentOnConverter) {
                if (validationComponent(value))
                    return true;
            }
            return false;
        };
        const finalConversionComponentOnConverter = (value: string) => conversionComponentOnConverter[validationComponentOnConverter.findIndex(validationComponent => validationComponent(value))](value);

        return containNullable
            ? value => new GenericStringToAnyNullableConverter(value, typeOnConverter,
                value => finalValidationComponentOnConverter(value),
                value => finalConversionComponentOnConverter(value))
            : value => new GenericStringToAnyConverter(value, typeOnConverter,
                value => (containNonEmptyString ? value === '' : false) || finalValidationComponentOnConverter(value),
                value => containNonEmptyString && value === '' ? null : finalConversionComponentOnConverter(value));
    }

    //endregion -------------------- initialisation methods --------------------

}
