import {ArrayOfHeaders, ArrayOrSimpleHeaderTypeOrConvertor, ConversionCallbackToConverter, SimpleHeader, SimpleHeaderTypeOrConvertor} from './CSVLoaderTypes';
import {PredefinedConverter}                                                                                                          from './converter/PredefinedConverter';
import {GenericStringToAnyConverter}                                                                                                  from './converter/GenericStringToAnyConverter';
import {CSVLoader}                                                                                                                    from './CSVLoader';

export class HeaderContainer<H extends string, A extends ArrayOfHeaders = ArrayOfHeaders, > {

    readonly #header: SimpleHeader<H>;
    readonly #otherHeaders: A;

    readonly #headerTypeOrConvertorOriginalArray: SimpleHeaderTypeOrConvertor[];
    readonly #headerTypeOrConvertorArray: (| PredefinedConverter | SimpleHeader<A[number]> | string | ConversionCallbackToConverter)[];
    readonly #predefinedConvertor: PredefinedConverter[];
    readonly #followingHeaders: SimpleHeader<A[number]>[];
    readonly #singleValuesToValidate: string[];
    readonly #convertorCallbacks: ConversionCallbackToConverter[];

    public constructor(header: SimpleHeader<H>, otherHeaders: A,) {
        this.#header = header.toLowerCase() as SimpleHeader<H>;
        this.#otherHeaders = otherHeaders;
        this.#headerTypeOrConvertorOriginalArray = [];
        this.#headerTypeOrConvertorArray = [];
        this.#predefinedConvertor = [];
        this.#followingHeaders = [];
        this.#singleValuesToValidate = [];
        this.#convertorCallbacks = [];
    }

    //region -------------------- Getter methods --------------------

    public get header(): SimpleHeader<H> {
        return this.#header;
    }

    public get otherHeaders(): A {
        return this.#otherHeaders;
    }


    public get headerTypeOrConvertorOriginalArray(): readonly SimpleHeaderTypeOrConvertor[] {
        return this.#headerTypeOrConvertorOriginalArray;
    }

    public get headerTypeOrConvertorArray(): readonly (| PredefinedConverter | SimpleHeader<A[number]> | string | ConversionCallbackToConverter)[] {
        return this.#headerTypeOrConvertorArray;
    }


    public get predefinedConvertor(): readonly PredefinedConverter[] {
        return this.#predefinedConvertor;
    }

    public get followingHeaders(): readonly SimpleHeader<A[number]>[] {
        return this.#followingHeaders;
    }

    public get singleValuesToValidate(): readonly string[] {
        return this.#singleValuesToValidate;
    }

    public get convertorCallbacks(): readonly ConversionCallbackToConverter[] {
        return this.#convertorCallbacks;
    }

    public get amountOfValidator(): this['headerTypeOrConvertorArray']['length'] {
        return this.#headerTypeOrConvertorArray.length;
    }


    //endregion -------------------- Getter methods --------------------
    //region -------------------- Addition methods --------------------

    protected _addPredefinedConvertor(originalValue: string, predefinedConvertor: PredefinedConverter,): this {
        this.#headerTypeOrConvertorOriginalArray.push(originalValue);
        this.#headerTypeOrConvertorArray.push(predefinedConvertor);
        this.#predefinedConvertor.push(predefinedConvertor);
        return this;
    }

    protected _addFollowingHeader(originalValue: string, header: SimpleHeader<A[number]>,): this {
        this.#headerTypeOrConvertorOriginalArray.push(originalValue);
        this.#headerTypeOrConvertorArray.push(header);
        this.#followingHeaders.push(header);
        return this;
    }

    protected _addSingleValueToValidate(value: string,): this {
        this.#headerTypeOrConvertorOriginalArray.push(value);
        this.#headerTypeOrConvertorArray.push(value);
        this.#singleValuesToValidate.push(value);
        return this;
    }

    protected _addConvertorCallbacks(convertorCallback: ConversionCallbackToConverter,): this {
        this.#headerTypeOrConvertorOriginalArray.push(convertorCallback);
        this.#headerTypeOrConvertorArray.push(convertorCallback);
        this.#convertorCallbacks.push(convertorCallback);
        return this;
    }

    //endregion -------------------- Addition methods --------------------

    public addHeaderTypeOrConvertor(headerTypeOrConvertor: ArrayOrSimpleHeaderTypeOrConvertor,): this {
        switch (typeof headerTypeOrConvertor) {
            case 'string':
                const predefinedConvertor = PredefinedConverter.getValue(headerTypeOrConvertor);
                if (predefinedConvertor == null) {
                    if (this.otherHeaders.includes(headerTypeOrConvertor))
                        this._addFollowingHeader(headerTypeOrConvertor, headerTypeOrConvertor.toLowerCase() as SimpleHeader<A[number]>);
                    else
                        this._addSingleValueToValidate(headerTypeOrConvertor,);
                } else
                    this._addPredefinedConvertor(headerTypeOrConvertor, predefinedConvertor);
                break;
            case 'object':
                headerTypeOrConvertor.forEach(headerTypeOrConvertor => this.addHeaderTypeOrConvertor(headerTypeOrConvertor));
                break;
            default:
                this._addConvertorCallbacks(headerTypeOrConvertor,);
                break;
        }
        return this;
    }

    public createConversionCallbacks(): readonly ConversionCallbackToConverter[] {
        return this.headerTypeOrConvertorArray.map(headerTypeOrConvertor => this._createSingleConversionCallback(headerTypeOrConvertor));
    }

    protected _createSingleConversionCallback(headerTypeOrConvertor: | PredefinedConverter | SimpleHeader<A[number]> | string | ConversionCallbackToConverter,): ConversionCallbackToConverter {
        if (typeof headerTypeOrConvertor === 'string') {
            // if(this.followingHeaders.includes(predefinedConvertorOrHeaderOrValueOrConversionCallback))
            //     //TODO create header following callback;
            return value => PredefinedConverter.SINGLE_STRING.newConvertor(value, headerTypeOrConvertor,);
        }
        if (headerTypeOrConvertor instanceof PredefinedConverter)
            return value => headerTypeOrConvertor.newConvertor(value, null,);
        return value => new GenericStringToAnyConverter(value, CSVLoader.CUSTOM_CALLBACK_NAME, () => true, headerTypeOrConvertor,);
    }

}