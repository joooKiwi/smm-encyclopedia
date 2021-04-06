import {Converter} from "./converter/Converter";
import {ConverterPatterns} from "./converter/ConverterPatterns";
import {ConverterUtil} from "./converter/ConverterUtil";
import {GenericStringToAnyConverter} from "./converter/GenericStringToAnyConverter";
import {GenericStringToAnyNullableConverter} from "./converter/GenericStringToAnyNullableConverter";
import {StringToBooleanConverter} from "./converter/StringToBooleanConverter";
import {StringToNumberConverter} from "./converter/StringToNumberConverter";
import {StringToStringConverter} from "./converter/StringToStringConverter";
import {StringToNullableBooleanConverter} from "./converter/StringToNullableBooleanConverter";
import {StringToNullableNumberConverter} from "./converter/StringToNullableNumberConverter";
import {StringToNullableStringConverter} from "./converter/StringToNullableStringConverter";

type HeaderTypeOrConvertor = PossibleConversion
    | (PossibleConversion | string)[]
    | ((value: string) => Converter<string, any>);
export type PossibleConversion = 'boolean' | 'nullable boolean'
    | 'number' | 'nullable number'
    | 'string' | 'nullable string';

export default class CSVLoader<T extends Array<any>, U> {

    public static GENERIC_DEFAULT_CONVERSION: PossibleConversion = 'nullable string';
    public static readonly EVERY_DEFINED_POSSIBLE_CONVERSION: PossibleConversion[] = ['boolean', 'nullable boolean', 'number', 'nullable number', 'string', 'nullable string'];

    readonly #originalContent;
    readonly #headersToConvert;
    readonly #content;

    readonly #callbackToCreateObject;
    #callbackOnAdd?: (arrayContent: T, convertedContent: U) => void;
    #callbackOnConvertedValue?: (content: keyof T) => void;
    #defaultConversion?: PossibleConversion;

    public constructor(content: string[][], callbackToCreateObject: (arrayOfContent: T) => U) {
        this.#originalContent = content;
        this.#headersToConvert = new Map<string, HeaderTypeOrConvertor>();
        this.#content = [] as U[];
        this.#callbackToCreateObject = callbackToCreateObject;
    }


    // -------------------- getter and setter and direct use on private members methods --------------------

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

    protected get defaultConversion() {
        return this.#defaultConversion ?? CSVLoader.GENERIC_DEFAULT_CONVERSION;
    }

    protected set defaultConversion(value: PossibleConversion) {
        this.#defaultConversion = value;
    }


    // -------------------- convertor usage methods --------------------

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

    public convertToNullableString(...headers: string[]): this {
        return this.convertTo('nullable string', ...headers);
    }

    public convertToBooleanAnd(validValue: string, ...headers: string[]): this {
        return this.convertTo(['boolean', validValue,], ...headers);
    }

    public convertToNullableBooleanAnd(convertor: PossibleConversion, ...headers: string[]): this
    public convertToNullableBooleanAnd(validValue: string, ...headers: string[]): this
    public convertToNullableBooleanAnd(validValue: string | PossibleConversion, ...headers: string[]): this {
        return this.convertTo(['nullable boolean', validValue,], ...headers);
    }

    public convertToNumberAnd(convertor: PossibleConversion, ...headers: string[]): this
    public convertToNumberAnd(validValue: string, ...headers: string[]): this
    public convertToNumberAnd(validValue: string | PossibleConversion, ...headers: string[]): this {
        return this.convertTo(['number', validValue,], ...headers);
    }

    public convertToNullableNumberAnd(convertor: PossibleConversion, ...headers: string[]): this
    public convertToNullableNumberAnd(validValue: string, ...headers: string[]): this
    public convertToNullableNumberAnd(validValue: string | PossibleConversion, ...headers: string[]): this {
        return this.convertTo(['nullable number', validValue,], ...headers);
    }

    public convertToStringAnd(convertor: PossibleConversion, ...headers: string[]): this
    public convertToStringAnd(validValue: string, ...headers: string[]): this
    public convertToStringAnd(validValue: string | PossibleConversion, ...headers: string[]): this {
        return this.convertTo(['string', validValue,], ...headers);
    }

    public convertToNullableStringAnd(convertor: PossibleConversion, ...headers: string[]): this
    public convertToNullableStringAnd(validValue: string, ...headers: string[]): this
    public convertToNullableStringAnd(validValue: string | PossibleConversion, ...headers: string[]): this {
        return this.convertTo(['nullable string', validValue,], ...headers);
    }

    public convertTo(headerTypeOrConvertor: HeaderTypeOrConvertor, ...headers: string[]): this {
        headers.map(header => header.toLowerCase()).forEach(header => this.headersToConvert.set(header, headerTypeOrConvertor));
        return this;
    }


    // -------------------- default values methods --------------------

    public setDefaultConversion(defaultConversion: PossibleConversion): this {
        this.defaultConversion = defaultConversion;
        return this;
    }


    // -------------------- trigger methods --------------------

    public onConvertedContent(callback: (content: keyof T) => void): this {
        this.#callbackOnConvertedValue = callback;
        return this;
    }

    public onAddContent(callback: (arrayContent: T, convertedContent: U) => void): this {
        this.#callbackOnAdd = callback;
        return this;
    }


    // -------------------- initialisation methods --------------------

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

    protected _createAndGetConvertor(header: string, possibleConversion: PossibleConversion): (value: string) => Converter<string, any> {
        let convertor: (value: string) => Converter<string, any>;
        switch (possibleConversion) {
            case 'number':
                convertor = value => new StringToNumberConverter(value);
                break;
            case 'nullable number':
                convertor = value => new StringToNullableNumberConverter(value);
                break;
            case 'boolean':
                convertor = value => new StringToBooleanConverter(value);
                break;
            case 'nullable boolean':
                convertor = value => new StringToNullableBooleanConverter(value);
                break;
            case 'string':
                convertor = value => new StringToStringConverter(value);
                break;
            case 'nullable string':
                convertor = value => new StringToNullableStringConverter(value);
                break;
        }
        this.headersToConvert.set(header, convertor);
        return convertor;
    }

    protected _createAndGetMixedConvertor(header: string, conversionComponents: (PossibleConversion | string)[]): (value: string) => Converter<string, any> {
        const containNullable = conversionComponents.find(conversionComponent => conversionComponent.includes('nullable')) !== undefined;
        let validationComponentOnConverter: ((value: string) => boolean)[] = [];
        let conversionComponentOnConverter: ((value: string) => any)[] = [];

        const typeOnConverter = (containNullable ? 'nullable' : '')
            + ' ('
            + conversionComponents.map(conversionComponent => {
                let type: string;
                switch (conversionComponent) {
                    case 'number':
                    case 'nullable number':
                        type = 'number';
                        validationComponentOnConverter.push(value => ConverterPatterns.NUMBER_PATTERN.test(value));
                        conversionComponentOnConverter.push(value => ConverterUtil.convertToNumber(value));
                        break;
                    case 'boolean':
                    case 'nullable boolean':
                        type = 'boolean';
                        validationComponentOnConverter.push(value => ConverterPatterns.BOOLEAN_PATTERN.test(value));
                        conversionComponentOnConverter.push(value => ConverterUtil.convertToBoolean(value));
                        break;
                    case 'string':
                    case 'nullable string':
                        type = 'string';
                        validationComponentOnConverter.push(value => ConverterPatterns.STRING_PATTERN.test(value));
                        conversionComponentOnConverter.push(value => value);
                        break;
                    default:
                        type = '"' + conversionComponent + '"';
                        validationComponentOnConverter.push(value => value === conversionComponent);
                        conversionComponentOnConverter.push(value => value);
                }
                return type;
            }).join(', ')
            + ' )';
        const finalValidationComponentOnConverter = (value: string) => {
            for (let validationComponent of validationComponentOnConverter) {
                if (validationComponent(value))
                    return true;
            }
            return false;
        }
        const finalConversionComponentOnConverter = (value: string) => conversionComponentOnConverter[validationComponentOnConverter.findIndex(validationComponent => validationComponent(value))](value);

        return containNullable
            ? value => new GenericStringToAnyNullableConverter(value, typeOnConverter, value => finalValidationComponentOnConverter(value), value => finalConversionComponentOnConverter(value))
            : value => new GenericStringToAnyConverter(value, typeOnConverter, value => finalValidationComponentOnConverter(value), value => finalConversionComponentOnConverter(value))
    }

}
