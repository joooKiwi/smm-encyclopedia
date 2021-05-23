import {Converter}                                                      from "./converter/Converter";
import {GenericStringToAnyConverter}                                    from "./converter/GenericStringToAnyConverter";
import {GenericStringToAnyNullableConverter}                            from "./converter/GenericStringToAnyNullableConverter";
import {PredefinedConversion, PredefinedConverter, PrimitiveConversion} from "./converter/PredefinedConverter";

type HeaderTypeOrConvertor = PredefinedConversion
    | (PredefinedConversion | string)[]
    | ((value: string) => Converter<string, any>);

export class CSVLoader<T extends any[], U> {

    public static GENERIC_DEFAULT_CONVERSION: PredefinedConversion = 'emptyable string';

    readonly #originalContent;
    readonly #headersToConvert;
    readonly #convertedContent;
    readonly #content;

    readonly #callbackToCreateObject;
    #callbackOnFinalObjectCreated?: (finalContent: U, convertedContent: T, originalContent: string[],) => void;
    #callbackOnSingleContentConverted?: (content: keyof T, originalValue: string) => void;
    #callbackOnInitialisationEnd?: (finalContents: U[], convertedContents: T[], originalContents: string[][],) => void;
    #defaultConversion?: PredefinedConversion;

    public constructor(originalContent: string[][], callbackToCreateObject: (convertedContent: T) => U) {
        this.#originalContent = originalContent;
        this.#headersToConvert = new Map<string, HeaderTypeOrConvertor>();
        this.#convertedContent = [] as T[];
        this.#content = [] as U[];
        this.#callbackToCreateObject = callbackToCreateObject;
    }

    //region -------------------- getter and setter and direct use on private members methods --------------------

    public get originalContent() {
        return this.#originalContent;
    }

    public get convertedContent() {
        return this.#convertedContent;
    }

    public get headersToConvert() {
        return this.#headersToConvert;
    }

    public load(): this {
        if (this.#content.length === 0)
            this._initialiseContent();
        return this;
    }

    public get content() {
        this.load();
        return this.#content;
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

    public onFinalObjectCreated(callback: (finalContent: U, convertedContent: T, originalContent: string[],) => void): this {
        this.#callbackOnFinalObjectCreated = callback;
        return this;
    }

    protected get callbackOnSingleContentConverted() {
        return this.#callbackOnSingleContentConverted;
    }

    public onSingleContentConverted(callback: (content: keyof T, originalValue: string) => void): this {
        this.#callbackOnSingleContentConverted = callback;
        return this;
    }

    protected get callbackOnInitialisationEnd() {
        return this.#callbackOnInitialisationEnd;
    }

    public onInitialisationEnd(callback: (finalContents: U[], convertedContents: T[], originalContents: string[][],) => void): this {
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

    public convertToBooleanAnd(convertor: PredefinedConversion, ...headers: string[]): this
    public convertToBooleanAnd(validValue: string, ...headers: string[]): this
    public convertToBooleanAnd(validValueOrConvertor: string | PredefinedConversion, ...headers: string[]): this {
        return this.convertTo(['boolean', validValueOrConvertor,], ...headers);
    }

    public convertToNullableBooleanAnd(convertor: PrimitiveConversion, ...headers: string[]): this
    public convertToNullableBooleanAnd(validValue: string, ...headers: string[]): this
    public convertToNullableBooleanAnd(validValueOrConvertor: string | PrimitiveConversion, ...headers: string[]): this {
        return this.convertTo(['nullable boolean', validValueOrConvertor,], ...headers);
    }


    public convertToNumberAnd(convertor: PredefinedConversion, ...headers: string[]): this
    public convertToNumberAnd(validValue: string, ...headers: string[]): this
    public convertToNumberAnd(validValueOrConvertor: string | PredefinedConversion, ...headers: string[]): this {
        return this.convertTo(['number', validValueOrConvertor,], ...headers);
    }

    public convertToNullableNumberAnd(convertor: PrimitiveConversion, ...headers: string[]): this
    public convertToNullableNumberAnd(validValue: string, ...headers: string[]): this
    public convertToNullableNumberAnd(validValueOrConvertor: string | PrimitiveConversion, ...headers: string[]): this {
        return this.convertTo(['nullable number', validValueOrConvertor,], ...headers);
    }

    public convertToStringAnd(convertor: PredefinedConversion, ...headers: string[]): this
    public convertToStringAnd(validValue: string, ...headers: string[]): this
    public convertToStringAnd(validValueOrConvertor: string | PredefinedConversion, ...headers: string[]): this {
        return this.convertTo(['string', validValueOrConvertor,], ...headers);
    }

    public convertToEmptyableStringAnd(convertor: PrimitiveConversion, ...headers: string[]): this
    public convertToEmptyableStringAnd(validValue: string, ...headers: string[]): this
    public convertToEmptyableStringAnd(validValueOrConvertor: string | PrimitiveConversion, ...headers: string[]): this {
        return this.convertTo(['emptyable string', validValueOrConvertor,], ...headers);
    }

    public convertToNullableStringAnd(convertor: PrimitiveConversion, ...headers: string[]): this
    public convertToNullableStringAnd(validValue: string, ...headers: string[]): this
    public convertToNullableStringAnd(validValueOrConvertor: string | PrimitiveConversion, ...headers: string[]): this {
        return this.convertTo(['nullable string', validValueOrConvertor,], ...headers);
    }

    public convertTo(headerTypeOrConvertor: HeaderTypeOrConvertor, ...headers: string[]): this {
        headers.map(header => header.toLowerCase()).forEach(header => this.headersToConvert.set(header, headerTypeOrConvertor));
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
            }) as T)
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
        this.headersToConvert.set(header, convertor);
        return convertor;
    }

    protected _createAndGetMixedConvertor(header: string, conversionComponents: (PredefinedConversion | string)[]): (value: string) => Converter<string, any> {
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
        }
        const finalConversionComponentOnConverter = (value: string) => conversionComponentOnConverter[validationComponentOnConverter.findIndex(validationComponent => validationComponent(value))](value);

        return containNullable
            ? value => new GenericStringToAnyNullableConverter(value, typeOnConverter,
                value => finalValidationComponentOnConverter(value),
                value => finalConversionComponentOnConverter(value))
            : value => new GenericStringToAnyConverter(value, typeOnConverter,
                value => (containNonEmptyString ? value === '' : false) || finalValidationComponentOnConverter(value),
                value => containNonEmptyString && value === '' ? null : finalConversionComponentOnConverter(value))
    }

    //endregion -------------------- initialisation methods --------------------

}
