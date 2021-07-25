import type {Converter}  from './Converter';
import type {SimpleEnum} from '../../enum/EnumTypes';

import {ConverterPatterns}                from './ConverterPatterns';
import {ConverterUtil}                    from './ConverterUtil';
import {StringToBooleanConverter}         from './StringToBooleanConverter';
import {StringToEmptyableStringConverter} from './StringToEmptyableStringConverter';
import {StringToNullableNumberConverter}  from './StringToNullableNumberConverter';
import {StringToNullableBooleanConverter} from './StringToNullableBooleanConverter';
import {StringToNullableStringConverter}  from './StringToNullableStringConverter';
import {StringToNumberConverter}          from './StringToNumberConverter';
import {StringToStringConverter}          from './StringToStringConverter';

//region -------------------- converter texts --------------------

export type PrimitiveConversion = | 'boolean' | 'number' | 'string';
export type NullablePredefinedConversion = `nullable ${PrimitiveConversion}`;
export type PredefinedConversion = | NullablePredefinedConversion | PrimitiveConversion | 'emptyable string';

//endregion -------------------- converter texts --------------------

//region -------------------- Enum types --------------------

export type PredefinedConverterOrdinals = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type PredefinedConverterNames = `${| 'NULLABLE_' | ''}${| 'NUMBER' | 'BOOLEAN' | 'STRING'}` | 'EMPTYABLE_STRING';
export type SimplePredefinedConverter<T = PredefinedConverter, > = SimpleEnum<PredefinedConverterNames, T>;
export type PredefinedConverterArray<T = PredefinedConverter, > = readonly [
    SimplePredefinedConverter<T>['NUMBER'], SimplePredefinedConverter<T>['NULLABLE_NUMBER'],
    SimplePredefinedConverter<T>['BOOLEAN'], SimplePredefinedConverter<T>['NULLABLE_BOOLEAN'],
    SimplePredefinedConverter<T>['STRING'], SimplePredefinedConverter<T>['EMPTYABLE_STRING'], SimplePredefinedConverter<T>['NULLABLE_STRING'],
];

//endregion -------------------- Enum types --------------------

/**
 * @enum
 */
export abstract class PredefinedConverter {

    //region -------------------- enum instances --------------------

    public static readonly NUMBER =           new class PredefinedConverter_Number extends PredefinedConverter {

        public newStringToConvertor(value: string,): Converter<string, any> {
            return new StringToNumberConverter(value);
        }

        public newValidation(): (value: string,) => boolean {
            return value => ConverterPatterns.NUMBER_PATTERN.test(value);
        }

        public newConversion(value: string,): number {
            return ConverterUtil.convertToNumber(value);
        }

    }         ('number',);
    public static readonly NULLABLE_NUMBER =  new class PredefinedConverter_NullableNumber extends PredefinedConverter {

        public newValidation(): (value: string,) => boolean {
            return value => value === '' || ConverterPatterns.NUMBER_PATTERN.test(value);
        }

        public newStringToConvertor(value: string,): Converter<string, any> {
            return new StringToNullableNumberConverter(value);
        }

        public newConversion(value: string,): | number | null {
            return value === '' ? null : PredefinedConverter.NUMBER.newConversion(value);
        }

    } ('nullable number', 'number',);
    public static readonly BOOLEAN =          new class PredefinedConverter_Boolean extends PredefinedConverter {

        public newStringToConvertor(value: string,): Converter<string, any> {
            return new StringToBooleanConverter(value);
        }

        public newValidation(): (value: string,) => boolean {
            return value => ConverterPatterns.BOOLEAN_PATTERN.test(value);
        }

        public newConversion(value: string,): boolean {
            return ConverterUtil.convertToBoolean(value);
        }

    }        ('boolean',);
    public static readonly NULLABLE_BOOLEAN = new class PredefinedConverter_NullableBoolean extends PredefinedConverter {

        public newStringToConvertor(value: string,): Converter<string, any> {
            return new StringToNullableBooleanConverter(value);
        }

        public newValidation(): (value: string,) => boolean {
            return value => value === '' || ConverterPatterns.BOOLEAN_PATTERN.test(value);
        }

        public newConversion(value: string,): | boolean | null {
            return value === '' ? null : PredefinedConverter.BOOLEAN.newConversion(value);
        }

    }('nullable boolean', 'boolean',);
    public static readonly STRING =           new class PredefinedConverter_String extends PredefinedConverter {

        public newStringToConvertor(value: string,): Converter<string, any> {
            return new StringToStringConverter(value);
        }

        public newValidation(): (value: string,) => boolean {
            return () => true;
        }

        public newConversion(value: string,): string {
            return value;
        }

    }         ('string',);
    public static readonly EMPTYABLE_STRING = new class PredefinedConverter_EmptyableString extends PredefinedConverter {

        public newStringToConvertor(value: string,): Converter<string, any> {
            return new StringToEmptyableStringConverter(value);
        }

        public newValidation(): (value: string,) => boolean {
            return value => ConverterPatterns.EMPTYABLE_STRING_PATTERN.test(value);
        }

        public newConversion(value: string,): | string | null {
            return ConverterUtil.convertToEmptyableString(value);
        }

    }('emptyable string', 'string',);
    public static readonly NULLABLE_STRING =  new class PredefinedConverter_NullableString extends PredefinedConverter {

        public newStringToConvertor(value: string,): Converter<string, any> {
            return new StringToNullableStringConverter(value);
        }

        public newValidation(): (value: string,) => boolean {
            return value => ConverterPatterns.NULLABLE_STRING_PATTERN.test(value);
        }

        public newConversion(value: string,): | string | null {
            return ConverterUtil.convertToNullableString(value);
        }

    } ('nullable string', 'string',);

    //endregion -------------------- enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: PredefinedConverterArray;
    static #LAST_ORDINAL: PredefinedConverterOrdinals = 0;
    readonly #ordinal: PredefinedConverterOrdinals;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #name;
    readonly #nameAsNonNullable;
    #parent?: PredefinedConverter;
    readonly #parentCallback: () => PredefinedConverter;
    readonly #callbackToCreateNewValidationAsNonNullable: () => (value: string) => boolean;
    readonly #callbackToCreateNewConversionAsNonNullable: () => (value: string) => any;

    //endregion -------------------- Attributes --------------------

    private constructor(name: PrimitiveConversion)
    private constructor(name: PredefinedConversion, nameAsNonNullable: PrimitiveConversion)
    private constructor(name: PredefinedConversion, nameAsNonNullable?: PrimitiveConversion) {
        this.#ordinal = PredefinedConverter.#LAST_ORDINAL++ as PredefinedConverterOrdinals;
        this.#name = name;
        this.#nameAsNonNullable = nameAsNonNullable ?? name;
        if (nameAsNonNullable === undefined) {
            this.#parentCallback = () => this;
            this.#callbackToCreateNewValidationAsNonNullable = () => this.newValidation();
            this.#callbackToCreateNewConversionAsNonNullable = () => value => this.newConversion(value);
        } else {
            this.#parentCallback = () => PredefinedConverter.getValue(this.name);
            this.#callbackToCreateNewValidationAsNonNullable = () => this.parent.newValidation();
            this.#callbackToCreateNewConversionAsNonNullable = () => value => this.parent.newConversion(value);
        }
    }

    //region -------------------- Methods --------------------

    public get name() {
        return this.#name;
    }

    public get nameAsNonNullable() {
        return this.#nameAsNonNullable;
    }

    public get parent(): | PredefinedConverter | this {
        return this.#parent ?? (this.#parent = this.#parentCallback());
    }


    public abstract newStringToConvertor(value: string,): Converter<string, any>;

    public abstract newValidation(): (value: string,) => boolean;

    public newValidationAsNonNullable(): (value: string,) => boolean {
        return this.#callbackToCreateNewValidationAsNonNullable();
    }

    public abstract newConversion(value: string,): any;

    public newConversionAsNonNullable(value: string,): any {
        return this.#callbackToCreateNewConversionAsNonNullable()(value);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- enum methods --------------------

    public get ordinal(): PredefinedConverterOrdinals {
        return this.#ordinal;
    }

    public static getValue(value: PredefinedConversion,): PredefinedConverter
    public static getValue(value: string,): | PredefinedConverter | null
    public static getValue(value: | string | PredefinedConversion,): PredefinedConverter | null {
        let lowerCaseValue = value.toLowerCase();
        return this.values.find(predefinedConverter => predefinedConverter.name === lowerCaseValue) ?? null;
    }

    public static get values(): PredefinedConverterArray {
        return this.#VALUES ?? (this.#VALUES = [
            this.NUMBER, this.NULLABLE_NUMBER,
            this.BOOLEAN, this.NULLABLE_BOOLEAN,
            this.STRING, this.EMPTYABLE_STRING, this.NULLABLE_STRING,
        ]);
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- enum methods --------------------

}
