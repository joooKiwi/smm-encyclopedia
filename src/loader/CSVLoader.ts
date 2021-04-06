import {Converter} from "./converter/Converter";
import {StringToNumberConverter} from "./converter/StringToNumberConverter";
import {StringToStringConverter} from "./converter/StringToStringConverter";
import {StringToBooleanConverter} from "./converter/StringToBooleanConverter";
import {StringToNullableNumberConverter} from "./converter/StringToNullableNumberConverter";
import {StringToNullableBooleanConverter} from "./converter/StringToNullableBooleanConverter";
import {StringToNullableStringConverter} from "./converter/StringToNullableStringConverter";

type HeaderTypeOrConvertor = PossibleConversion | ((value: string) => Converter<string, any>);
export type PossibleConversion = 'boolean' | 'nullable boolean'
    | 'number' | 'nullable number'
    | 'string' | 'nullable string';

export default class CSVLoader<T extends Array<any>, U> {

    public static GENERIC_DEFAULT_CONVERSION: PossibleConversion = 'nullable string';

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


    public convertHeadersToBoolean(...headers: string[]): this {
        return this.convertHeadersTo('boolean', ...headers);
    }

    public convertHeadersToNullableBoolean(...headers: string[]): this {
        return this.convertHeadersTo('nullable boolean', ...headers);
    }

    public convertHeadersToNumber(...headers: string[]): this {
        return this.convertHeadersTo('number', ...headers);
    }

    public convertHeadersToNullableNumber(...headers: string[]): this {
        return this.convertHeadersTo('nullable number', ...headers);
    }

    public convertHeadersToString(...headers: string[]): this {
        return this.convertHeadersTo('string', ...headers);
    }

    public convertHeadersToNullableString(...headers: string[]): this {
        return this.convertHeadersTo('nullable string', ...headers);
    }

    public convertHeadersTo(headerTypeOrConvertor: HeaderTypeOrConvertor, ...headers: string[]): this {
        headers.map(header => header.toLowerCase()).forEach(header => this.headersToConvert.set(header, headerTypeOrConvertor));
        return this;
    }

    public setDefaultConversion(defaultConversion: PossibleConversion): this {
        this.defaultConversion = defaultConversion;
        return this;
    }


    public onConvertedContent(callback: (content: keyof T) => void): this {
        this.#callbackOnConvertedValue = callback;
        return this;
    }

    public onAddContent(callback: (arrayContent: T, convertedContent: U) => void): this {
        this.#callbackOnAdd = callback;
        return this;
    }


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
                convertor = value => new StringToNullableStringConverter(value);
                break;
            case 'nullable string':
                convertor = value => new StringToStringConverter(value);
                break;
        }
        this.headersToConvert.set(header, convertor);
        return convertor;
    }


    protected addContent(arrayContent: T): this {
        const convertContent = this.callbackToCreateObject(arrayContent);
        this.callbackOnAdd?.(arrayContent, convertContent);
        this.#content.push(convertContent);
        return this;
    }

}
