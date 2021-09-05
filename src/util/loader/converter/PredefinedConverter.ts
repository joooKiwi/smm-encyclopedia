import type {Converter}                                                                                                                        from './Converter';
import type {BasicPredefinedConversion, PredefinedConversion, PredefinedConverterArray, PredefinedConverterNames, PredefinedConverterOrdinals} from './PredefinedConverter.types';
import type {ConversionCallbackToAny, ValidationCallback}                                                                                      from '../CSVLoader.types';

import {ConverterPatterns}                from './ConverterPatterns';
import {ConverterUtil}                    from './ConverterUtil';
import {Enum}                             from '../../enum/Enum';
import {StringToBooleanConverter}         from './StringToBooleanConverter';
import {StringToEmptyableStringConverter} from './StringToEmptyableStringConverter';
import {StringToNullableBooleanConverter} from './StringToNullableBooleanConverter';
import {StringToNullableNumberConverter}  from './StringToNullableNumberConverter';
import {StringToNullableStringConverter}  from './StringToNullableStringConverter';
import {StringToNumberConverter}          from './StringToNumberConverter';
import {StringToStringConverter}          from './StringToStringConverter';
import {StringToSingleStringConverter}    from './StringToSingleStringConverter';

export abstract class PredefinedConverter
    extends Enum<PredefinedConverterOrdinals, PredefinedConverterNames> {

    //region -------------------- Enum instances --------------------

    public static readonly NUMBER =           new class PredefinedConverter_Number extends PredefinedConverter {

        public newConvertor(value: string,): Converter<string, number> {
            return new StringToNumberConverter(value);
        }

        public newValidation(): ValidationCallback {
            return value => ConverterPatterns.NUMBER_PATTERN.test(value);
        }

        public newConversion(value: string,): number {
            return ConverterUtil.convertToNumber(value);
        }

    }         ('number',                     );
    public static readonly NULLABLE_NUMBER =  new class PredefinedConverter_NullableNumber extends PredefinedConverter {

        public newConvertor(value: string,): Converter<string, | number | null> {
            return new StringToNullableNumberConverter(value);
        }

        public newValidation(): ValidationCallback {
            return value => value === '' || ConverterPatterns.NUMBER_PATTERN.test(value);
        }

        public newConversion(value: string,): | number | null {
            return value === '' ? null : PredefinedConverter.NUMBER.newConversion(value);
        }

    } ('nullable number',  'number', );
    public static readonly BOOLEAN =          new class PredefinedConverter_Boolean extends PredefinedConverter {

        public newConvertor(value: string,): Converter<string, boolean> {
            return new StringToBooleanConverter(value);
        }

        public newValidation(): ValidationCallback {
            return value => ConverterPatterns.BOOLEAN_PATTERN.test(value);
        }

        public newConversion(value: string,): boolean {
            return ConverterUtil.convertToBoolean(value);
        }

    }        ('boolean',                    );
    public static readonly NULLABLE_BOOLEAN = new class PredefinedConverter_NullableBoolean extends PredefinedConverter {

        public newConvertor(value: string,): Converter<string, | boolean | null> {
            return new StringToNullableBooleanConverter(value);
        }

        public newValidation(): ValidationCallback {
            return value => value === '' || ConverterPatterns.BOOLEAN_PATTERN.test(value);
        }

        public newConversion(value: string,): | boolean | null {
            return value === '' ? null : PredefinedConverter.BOOLEAN.newConversion(value);
        }

    }('nullable boolean', 'boolean',);
    public static readonly STRING =           new class PredefinedConverter_String extends PredefinedConverter {

        public newConvertor(value: string,): Converter<string, string> {
            return new StringToStringConverter(value);
        }

        public newValidation(): ValidationCallback {
            return () => true;
        }

        public newConversion(value: string,): string {
            return value;
        }

    }         ('string',                     );
    public static readonly EMPTYABLE_STRING = new class PredefinedConverter_EmptyableString extends PredefinedConverter {

        public newConvertor(value: string,): Converter<string, | string | null> {
            return new StringToEmptyableStringConverter(value);
        }

        public newValidation(): ValidationCallback {
            return value => ConverterPatterns.EMPTYABLE_STRING_PATTERN.test(value);
        }

        public newConversion(value: string,): | string | null {
            return ConverterUtil.convertToEmptyableString(value);
        }

    }('emptyable string', 'string', );
    public static readonly NULLABLE_STRING =  new class PredefinedConverter_NullableString extends PredefinedConverter {

        public newConvertor(value: string,): Converter<string, | string | null> {
            return new StringToNullableStringConverter(value);
        }

        public newValidation(): (value: string,) => boolean {
            return value => ConverterPatterns.NULLABLE_STRING_PATTERN.test(value);
        }

        public newConversion(value: string,): | string | null {
            return ConverterUtil.convertToNullableString(value);
        }

    } ('nullable string',  'string', );
    public static readonly SINGLE_STRING =   new class PredefinedConverter_SingleString extends PredefinedConverter {

        public newConvertor(value: string, validatingValue: string,): Converter<string, string>
        public newConvertor(value: string, validatingValue: any[],): never
        public newConvertor(value: string, validatingValue: any,): | Converter<string, string> | never
        public newConvertor(value: string, validatingValue: | any | any[],): | Converter<string, string> | never {
            if (typeof validatingValue !== 'string')
                throw new TypeError('The validating value cannot be a different value than a string');
            return new StringToSingleStringConverter(value, validatingValue,);
        }

        public newValidation(validatingValue: string,): ValidationCallback
        public newValidation(validatingValue: any[],): never
        public newValidation(validatingValue: any,): | ValidationCallback | never
        public newValidation(validatingValue: | any | any[],): | ValidationCallback | never {
            if (typeof validatingValue !== 'string')
                throw new TypeError('The validating value cannot be a different value than a string');
            return value => value === validatingValue;
        }

        public newConversion(value: string,): string {
            return value;
        }

    }    ('single string',              );
    //TODO add string to emptyable single string converter
    //TODO add string to array of string converter
    //TODO add string to array of nullable string converter
    //TODO add string to array of emptyable string converter
    //TODO add string to array of boolean converter
    //TODO add string to array of nullable boolean converter
    //TODO add string to array of number converter
    //TODO add string to array of nullable number converter

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: PredefinedConverterArray;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #name;
    readonly #nameAsNonNullable;
    #parent?: PredefinedConverter;
    readonly #parentCallback: () => PredefinedConverter;
    readonly #callbackToCreateNewValidationAsNonNullable: (validatingValue: | any | any[],) => ValidationCallback;
    readonly #callbackToCreateNewConversionAsNonNullable: () => ConversionCallbackToAny;

    //endregion -------------------- Attributes --------------------

    private constructor(name: BasicPredefinedConversion,)
    private constructor(name: PredefinedConversion, nameAsNonNullable: BasicPredefinedConversion,)
    private constructor(name: PredefinedConversion, nameAsNonNullable?: BasicPredefinedConversion,) {
        super(PredefinedConverter);
        this.#name = name;
        this.#nameAsNonNullable = (nameAsNonNullable ?? name) as BasicPredefinedConversion;
        if (nameAsNonNullable === undefined) {
            this.#parentCallback = () => this;
            this.#callbackToCreateNewValidationAsNonNullable = validatingValue => this.newValidation(validatingValue);
            this.#callbackToCreateNewConversionAsNonNullable = () => value => this.newConversion(value);
        } else {
            this.#parentCallback = () => PredefinedConverter.getValue(this.name);
            this.#callbackToCreateNewValidationAsNonNullable = validatingValue => this.parent.newValidation(validatingValue);
            this.#callbackToCreateNewConversionAsNonNullable = () => value => this.parent.newConversion(value);
        }
    }

    //region -------------------- Getter methods --------------------

    public get name(): PredefinedConversion {
        return this.#name;
    }

    public get nameAsNonNullable(): BasicPredefinedConversion {
        return this.#nameAsNonNullable;
    }

    public get parent(): | PredefinedConverter | this {
        return this.#parent ??= this.#parentCallback();
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract newConvertor(value: string, singleValue: | any | any[],): Converter<string, any>;

    public abstract newValidation(validatingValue: | any | any[],): ValidationCallback;

    public newValidationAsNonNullable(validatingValue: | any | any[],): ValidationCallback {
        return this.#callbackToCreateNewValidationAsNonNullable(validatingValue);
    }

    public abstract newConversion(value: string,): any;

    public newConversionAsNonNullable(value: string,): any {
        return this.#callbackToCreateNewConversionAsNonNullable()(value);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends PredefinedConverterOrdinals = PredefinedConverterOrdinals, >(ordinal: O,): PredefinedConverterArray[O]
    public static getValue<O extends number = number, >(ordinal: O,): NonNullable<PredefinedConverterArray[O]> | null
    public static getValue(name: | PredefinedConversion | PredefinedConverterNames,): PredefinedConverter
    public static getValue(name: string,): | PredefinedConverter | null
    public static getValue(value: | PredefinedConverter | string | number | null | undefined,): PredefinedConverter | null
    public static getValue(value: | PredefinedConverter | string | number | null | undefined,): PredefinedConverter | null {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                ?? this.values.find(predefinedConverter => predefinedConverter.name === value.toLowerCase())
                ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
                    : null;
    }

    public static get values(): PredefinedConverterArray {
        return this.#VALUES ??= [
            this.NUMBER, this.NULLABLE_NUMBER,
            this.BOOLEAN, this.NULLABLE_BOOLEAN,
            this.STRING, this.EMPTYABLE_STRING, this.NULLABLE_STRING,
        ];
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
