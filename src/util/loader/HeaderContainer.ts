import {ArrayOfHeaders, ArrayOrSimpleHeaderTypeOrConvertor, ConversionCallbackToConverter, SimpleHeader, SimpleHeaderReceived, SimpleHeaderTypeOrConvertor} from './CSVLoader.types';
import {PredefinedConverter}                                                                                                                                from './converter/PredefinedConverter';
import {GenericStringToAnyConverter}                                                                                                                        from './converter/GenericStringToAnyConverter';
import {CSVLoader}                                                                                                                                          from './CSVLoader';

export class HeaderContainer<H extends string, A extends ArrayOfHeaders = ArrayOfHeaders, > {

    readonly #header: SimpleHeader<H>;
    readonly #otherHeaders: A;

    readonly #originalValues: Set<SimpleHeaderTypeOrConvertor>;
    readonly #headerTypeOrConvertorSet: Set<(| PredefinedConverter | SimpleHeader<A[number]> | number | boolean | string | ConversionCallbackToConverter)>;
    readonly #predefinedConvertors: Set<PredefinedConverter>;
    readonly #followingHeaders: Set<SimpleHeader<A[number]>>;
    readonly #singleValuesToValidate: Set<| number | boolean | string>;
    readonly #convertorCallbacks: Set<ConversionCallbackToConverter>;

    public constructor(header: SimpleHeaderReceived<H>, otherHeaders: A,) {
        this.#header = header.toLowerCase() as SimpleHeader<H>;
        this.#otherHeaders = otherHeaders;
        this.#originalValues = new Set();
        this.#headerTypeOrConvertorSet = new Set();
        this.#predefinedConvertors = new Set();
        this.#followingHeaders = new Set();
        this.#singleValuesToValidate = new Set();
        this.#convertorCallbacks = new Set();
    }

    //region -------------------- Getter methods --------------------

    /**
     * The header computed for this instance.
     */
    public get header(): SimpleHeader<H> {
        return this.#header;
    }

    /**
     * Every headers used as a comparison on the {@link followingHeaders following headers method}.
     */
    public get otherHeaders(): A {
        return this.#otherHeaders;
    }


    /**
     * The values received in order of addition by {@link addHeaderTypeOrConvertor}.
     */
    public get originalValues(): ReadonlySet<SimpleHeaderTypeOrConvertor> {
        return this.#originalValues;
    }

    /**
     * The values received somewhat in order from the {@link originalValues},
     * but as a {@link PredefinedConverter predefined convertor}, {@link SimpleHeader header}, a direct value or a {@link ConversionCallbackToConverter callback}.
     *
     * @see _addPredefinedConvertor
     * @see _reorderPredefinedConvertorIfContainStringConvertor
     * @see _addFollowingHeader
     * @see _addSingleValueToValidate
     * @see _addConvertorCallbacks
     */
    public get headerTypeOrConvertorSet(): ReadonlySet<| PredefinedConverter | SimpleHeader<A[number]> | number | boolean | string | ConversionCallbackToConverter> {
        return this.#headerTypeOrConvertorSet;
    }


    /**
     * The predefined convertors to be used to convert to a conversion.
     *
     *  @see PredefinedConverter
     */
    public get predefinedConvertors(): ReadonlySet<PredefinedConverter> {
        return this.#predefinedConvertors;
    }

    /**
     * The headers to be followed as a type (while not doing validations)
     * or a reference (while doing validations)
     */
    public get followingHeaders(): ReadonlySet<SimpleHeader<A[number]>> {
        return this.#followingHeaders;
    }

    /**
     * The single values to be used while doing validations.
     */
    public get singleValuesToValidate(): ReadonlySet<| boolean | number | string> {
        return this.#singleValuesToValidate;
    }

    /**
     * A custom callback used to do some conversions.
     */
    public get convertorCallbacks(): ReadonlySet<ConversionCallbackToConverter> {
        return this.#convertorCallbacks;
    }

    /**
     * The total amount of validations to be used.
     *
     * @see predefinedConvertors
     * @see followingHeaders
     * @see singleValuesToValidate
     * @see convertorCallbacks
     */
    public get amountOfValidator(): this['headerTypeOrConvertorSet']['size'] {
        return this.headerTypeOrConvertorSet.size;
    }


    //endregion -------------------- Getter methods --------------------
    //region -------------------- Addition methods --------------------

    protected _addPredefinedConvertor(originalValue: string, predefinedConvertor: PredefinedConverter,): this {
        this.#originalValues.add(originalValue);
        this.#headerTypeOrConvertorSet.add(predefinedConvertor);
        this.#predefinedConvertors.add(predefinedConvertor);
        return this.predefinedConvertors.has(PredefinedConverter.STRING) || this.predefinedConvertors.has(PredefinedConverter.NULLABLE_STRING) || this.predefinedConvertors.has(PredefinedConverter.EMPTYABLE_STRING)
            ? this._reorderPredefinedConvertorIfContainStringConvertor()
            : this;
    }

    protected _reorderPredefinedConvertorIfContainStringConvertor(): this {
        if (this.predefinedConvertors.size === 1)
            return this;

        const temporaryPredefinedConvertors = Array.from(this.predefinedConvertors);
        const predefinedStringConvertor = temporaryPredefinedConvertors.find(predefinedConvertor => predefinedConvertor === PredefinedConverter.STRING || predefinedConvertor === PredefinedConverter.NULLABLE_STRING || predefinedConvertor === PredefinedConverter.EMPTYABLE_STRING);
        if (predefinedStringConvertor == null)
            return this;
        const predefinedStringConvertorIndex = temporaryPredefinedConvertors.findIndex(predefinedConvertor => predefinedConvertor === predefinedStringConvertor);
        if (predefinedStringConvertorIndex === this.predefinedConvertors.size - 1)
            return this;

        this.#predefinedConvertors.delete(predefinedStringConvertor);
        this.#predefinedConvertors.add(predefinedStringConvertor);

        return this;
    }

    protected _addFollowingHeader(originalValue: string, header: SimpleHeader<A[number]>,): this {
        this.#originalValues.add(originalValue);
        this.#headerTypeOrConvertorSet.add(header);
        this.#followingHeaders.add(header);
        return this;
    }

    protected _addSingleValueToValidate(value: | string | number | boolean,): this {
        this.#originalValues.add(value);
        this.#headerTypeOrConvertorSet.add(value);
        this.#singleValuesToValidate.add(value);
        return this;
    }

    protected _addConvertorCallbacks(convertorCallback: ConversionCallbackToConverter,): this {
        this.#originalValues.add(convertorCallback);
        this.#headerTypeOrConvertorSet.add(convertorCallback);
        this.#convertorCallbacks.add(convertorCallback);
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
            case 'boolean':
            case 'number':
                this._addSingleValueToValidate(headerTypeOrConvertor,);
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
        return Array.from(this.headerTypeOrConvertorSet).map(headerTypeOrConvertor => this._createSingleConversionCallback(headerTypeOrConvertor));
    }

    protected _createSingleConversionCallback(headerTypeOrConvertor: | PredefinedConverter | SimpleHeader<A[number]> | number | boolean | string | ConversionCallbackToConverter,): ConversionCallbackToConverter {
        switch (typeof headerTypeOrConvertor) {
            case 'string':
                // if(this.followingHeaders.includes(predefinedConvertorOrHeaderOrValueOrConversionCallback))
                //     //TODO create header following callback;
                return value => PredefinedConverter.SINGLE_STRING.newConvertor(value, headerTypeOrConvertor,);
            case 'boolean':
                return value => PredefinedConverter.SINGLE_BOOLEAN.newConvertor(value, headerTypeOrConvertor,);
            case 'number':
                return value => PredefinedConverter.SINGLE_NUMBER.newConvertor(value, headerTypeOrConvertor,);
        }
        if (headerTypeOrConvertor instanceof PredefinedConverter)
            return value => headerTypeOrConvertor.newConvertor(value, null,);
        return value => new GenericStringToAnyConverter(value, CSVLoader.CUSTOM_CALLBACK_NAME, CSVLoader.TRUE_CALLBACK, headerTypeOrConvertor,);
    }

}