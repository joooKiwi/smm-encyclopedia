import {Converter} from "./converter/Converter";
import {GenericStringToAnyConverter} from "./converter/GenericStringToAnyConverter";
import {GenericStringToAnyNullableConverter} from "./converter/GenericStringToAnyNullableConverter";
import {PredefinedConversion, PredefinedConverter, PrimitiveConversion} from "./converter/PredefinedConverter";

type HeaderTypeOrConvertor = PredefinedConversion
    | (PredefinedConversion | string)[]
    | ((value: string) => Converter<string, any>);

export default class CSVLoader<T extends any[], U> {

    public static GENERIC_DEFAULT_CONVERSION: PredefinedConversion = 'emptyable string';

    readonly #originalContent;
    readonly #headersToConvert;
    readonly #content;

    readonly #callbackToCreateObject;
    #callbackOnAdd?: (arrayContent: T, convertedContent: U) => void;
    #callbackOnConvertedValue?: (content: keyof T) => void;
    #defaultConversion?: PredefinedConversion;

    public constructor(content: string[][], callbackToCreateObject: (arrayOfContent: T) => U) {
        this.#originalContent = content;
        this.#headersToConvert = new Map<string, HeaderTypeOrConvertor>();
        this.#content = [] as U[];
        this.#callbackToCreateObject = callbackToCreateObject;
    }

    //region -------------------- getter and setter and direct use on private members methods --------------------

    public get originalContent() {
        return this.#originalContent;
    }

    public get headersToConvert() {
        return this.#headersToConvert;
    }

    public get content() {
        if (this.#content.length === 0)
            this._initialiseContent();
        return this.#content;
    }

    protected addContent(arrayContent: T): this {
        const convertContent = this.callbackToCreateObject(arrayContent);
        this.callbackOnAdd?.(arrayContent, convertContent);
        this.#content.push(convertContent);
        return this;
    }

    protected get callbackOnAdd() {
        return this.#callbackOnAdd;
    }

    protected get callbackOnConvertedValue() {
        return this.#callbackOnConvertedValue;
    }

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

    public convertToNonEmptyString(...headers: string[]): this {
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

    public convertToNonEmptyStringAnd(convertor: PrimitiveConversion, ...headers: string[]): this
    public convertToNonEmptyStringAnd(validValue: string, ...headers: string[]): this
    public convertToNonEmptyStringAnd(validValueOrConvertor: string | PrimitiveConversion, ...headers: string[]): this {
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


    //region -------------------- trigger methods --------------------

    public onConvertedContent(callback: (content: keyof T) => void): this {
        this.#callbackOnConvertedValue = callback;
        return this;
    }

    public onAddContent(callback: (arrayContent: T, convertedContent: U) => void): this {
        this.#callbackOnAdd = callback;
        return this;
    }

    //endregion -------------------- trigger methods --------------------

    //region -------------------- initialisation methods --------------------

    protected _initialiseContent(): this {
        const headers = this.originalContent[0].map((header, index) => ({index: index, header: header, convertor: this._getConverterBasedOnHeader(header.toLowerCase())}));
        for (let i = 1; i < this.originalContent.length; i++)
            this.addContent(this.originalContent[i].map((content, index) => {
                const convertedValue = headers[index].convertor(content).convertedValue as keyof T;
                this.callbackOnConvertedValue?.(convertedValue);
                return convertedValue;
            }) as T)
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
