import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {BasicPredefinedConversion, Names, Ordinals, PredefinedConversion} from './PredefinedConverter.types'
import type {Converter}                                                        from './Converter'
import type {ConversionCallbackToAny, ValidationCallback}                      from '../CSVLoader.types'
import type {Nullable, NullOr}                                                 from '../../types'

import {assert}                           from '../../utilitiesMethods'
import {ConverterPatterns}                from './ConverterPatterns'
import {ConverterUtil}                    from './ConverterUtil'
import {StringToBooleanConverter}         from './StringToBooleanConverter'
import {StringToEmptyableStringConverter} from './StringToEmptyableStringConverter'
import {StringToNullableBooleanConverter} from './StringToNullableBooleanConverter'
import {StringToNullableNumberConverter}  from './StringToNullableNumberConverter'
import {StringToNullableStringConverter}  from './StringToNullableStringConverter'
import {StringToNumberConverter}          from './StringToNumberConverter'
import {StringToStringConverter}          from './StringToStringConverter'
import {StringToSingleNumberConverter}    from './StringToSingleNumberConverter'
import {StringToSingleStringConverter}    from './StringToSingleStringConverter'
import {StringToSingleBooleanConverter}   from './StringToSingleBooleanConverter'

export abstract class PredefinedConverter
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly NUMBER =           new class PredefinedConverter_Number extends PredefinedConverter {

        public newConvertor(value: string,) {
            return new StringToNumberConverter(value)
        }

        public newValidation(): ValidationCallback {
            return value => ConverterPatterns.NUMBER_PATTERN.test(value)
        }

        public newConversion(value: string,) {
            return ConverterUtil.convertToNumber(value)
        }

    }('number',)
    public static readonly NULLABLE_NUMBER =  new class PredefinedConverter_NullableNumber extends PredefinedConverter {

        public newConvertor(value: string,) {
            return new StringToNullableNumberConverter(value)
        }

        public newValidation(): ValidationCallback {
            return value => value === '' || ConverterPatterns.NUMBER_PATTERN.test(value)
        }

        public newConversion(value: string,) {
            return value === '' ? null : PredefinedConverter.NUMBER.newConversion(value)
        }

    }('nullable number', 'number',)

    public static readonly BOOLEAN =          new class PredefinedConverter_Boolean extends PredefinedConverter {

        public newConvertor(value: string,) {
            return new StringToBooleanConverter(value)
        }

        public newValidation(): ValidationCallback {
            return value => ConverterPatterns.BOOLEAN_PATTERN.test(value)
        }

        public newConversion(value: string,) {
            return ConverterUtil.convertToBoolean(value)
        }

    }('boolean',)
    public static readonly NULLABLE_BOOLEAN = new class PredefinedConverter_NullableBoolean extends PredefinedConverter {

        public newConvertor(value: string,) {
            return new StringToNullableBooleanConverter(value)
        }

        public newValidation(): ValidationCallback {
            return value => value === '' || ConverterPatterns.BOOLEAN_PATTERN.test(value)
        }

        public newConversion(value: string,) {
            return value === '' ? null : PredefinedConverter.BOOLEAN.newConversion(value)
        }

    }('nullable boolean', 'boolean',)

    public static readonly STRING =           new class PredefinedConverter_String extends PredefinedConverter {

        public newConvertor(value: string,) {
            return new StringToStringConverter(value)
        }

        public newValidation() {
            return () => true
        }

        public newConversion(value: string,) {
            return value
        }

    }('string',)
    public static readonly EMPTYABLE_STRING = new class PredefinedConverter_EmptyableString extends PredefinedConverter {

        public newConvertor(value: string,) {
            return new StringToEmptyableStringConverter(value)
        }

        public newValidation(): ValidationCallback {
            return value => ConverterPatterns.EMPTYABLE_STRING_PATTERN.test(value)
        }

        public newConversion(value: string,) {
            return ConverterUtil.convertToEmptyableString(value)
        }

    }('emptyable string', 'string',)
    public static readonly NULLABLE_STRING =  new class PredefinedConverter_NullableString extends PredefinedConverter {

        public newConvertor(value: string,) {
            return new StringToNullableStringConverter(value)
        }

        public newValidation(): ValidationCallback {
            return value => ConverterPatterns.NULLABLE_STRING_PATTERN.test(value)
        }

        public newConversion(value: string,) {
            return ConverterUtil.convertToNullableString(value)
        }

    }('nullable string', 'string',)

    public static readonly SINGLE_NUMBER =    new class PredefinedConverter_SingleNumber extends PredefinedConverter {

        public newConvertor(value: string, validatingValue: number,): Converter<string, number>
        public newConvertor(value: string, validatingValue: any[],): never
        public newConvertor(value: string, validatingValue: any,): | Converter<string, number> | never
        public newConvertor(value: string, validatingValue: | any | any[],) {
            assert(typeof validatingValue == 'number', 'The validating value cannot be a different value than a number',)
            return new StringToSingleNumberConverter(value, validatingValue,)
        }

        public newValidation(validatingValue: number,): ValidationCallback
        public newValidation(validatingValue: any[],): never
        public newValidation(validatingValue: any,): | ValidationCallback | never
        public newValidation(validatingValue: | any | any[],): | ValidationCallback | never {
            assert(typeof validatingValue == 'number', 'The validating value cannot be a different value than a number',)
            return value => Number(value) === validatingValue
        }

        public newConversion(value: string,): string {
            return value
        }

    }('single number',)
    public static readonly SINGLE_STRING =    new class PredefinedConverter_SingleString extends PredefinedConverter {

        public newConvertor(value: string, validatingValue: boolean,): Converter<string, string>
        public newConvertor(value: string, validatingValue: any[],): never
        public newConvertor(value: string, validatingValue: any,): | Converter<string, string> | never
        public newConvertor(value: string, validatingValue: | any | any[],) {
            assert(typeof validatingValue == 'string', 'The validating value cannot be a different value than a string',)
            return new StringToSingleStringConverter(value, validatingValue,)
        }

        public newValidation(validatingValue: boolean,): ValidationCallback
        public newValidation(validatingValue: any[],): never
        public newValidation(validatingValue: any,): | ValidationCallback | never
        public newValidation(validatingValue: | any | any[],): | ValidationCallback | never {
            assert(typeof validatingValue == 'string', 'The validating value cannot be a different value than a string',)
            return value => value === validatingValue
        }

        public newConversion(value: string,): string {
            return value
        }

    }('single string',)
    public static readonly SINGLE_BOOLEAN =   new class PredefinedConverter_SingleBoolean extends PredefinedConverter {

        public newConvertor(value: string, validatingValue: string,): Converter<string, boolean>
        public newConvertor(value: string, validatingValue: any[],): never
        public newConvertor(value: string, validatingValue: any,): | Converter<string, boolean> | never
        public newConvertor(value: string, validatingValue: | any | any[],) {
            assert(typeof validatingValue == 'boolean', 'The validating value cannot be a different value than a boolean',)
            return new StringToSingleBooleanConverter(value, validatingValue,)
        }

        public newValidation(validatingValue: string,): ValidationCallback
        public newValidation(validatingValue: any[],): never
        public newValidation(validatingValue: any,): | ValidationCallback | never
        public newValidation(validatingValue: | any | any[],): | ValidationCallback | never {
            assert(typeof validatingValue == 'boolean', 'The validating value cannot be a different value than a boolean',)
            return value => Boolean(value) === validatingValue
        }

        public newConversion(value: string,): string {
            return value
        }

    }('single boolean',)
    //TODO add string to emptyable single string converter
    //TODO add string to array of string converter
    //TODO add string to array of nullable string converter
    //TODO add string to array of emptyable string converter
    //TODO add string to array of boolean converter
    //TODO add string to array of nullable boolean converter
    //TODO add string to array of number converter
    //TODO add string to array of nullable number converter

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: PredefinedConverter

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #simpleName
    readonly #simpleNameAsNonNullable
    #parent?: PredefinedConverter
    readonly #parentCallback: () => PredefinedConverter
    readonly #callbackToCreateNewValidationAsNonNullable: (validatingValue: | any | any[],) => ValidationCallback
    readonly #callbackToCreateNewConversionAsNonNullable: () => ConversionCallbackToAny

    //endregion -------------------- Fields --------------------

    private constructor(simpleName: BasicPredefinedConversion,)
    private constructor(simpleName: PredefinedConversion, simpleNameAsNonNullable: BasicPredefinedConversion,)
    private constructor(simpleName: PredefinedConversion, simpleNameAsNonNullable?: BasicPredefinedConversion,) {
        super()
        this.#simpleName = simpleName
        this.#simpleNameAsNonNullable = (simpleNameAsNonNullable ?? simpleName) as BasicPredefinedConversion
        if (simpleNameAsNonNullable == null) {
            this.#parentCallback = () => this
            this.#callbackToCreateNewValidationAsNonNullable = validatingValue => this.newValidation(validatingValue)
            this.#callbackToCreateNewConversionAsNonNullable = () => value => this.newConversion(value)
        } else {
            this.#parentCallback = () => PredefinedConverter.getValueByName(this.simpleName)
            this.#callbackToCreateNewValidationAsNonNullable = validatingValue => this.parent.newValidation(validatingValue)
            this.#callbackToCreateNewConversionAsNonNullable = () => value => this.parent.newConversion(value)
        }
    }

    //region -------------------- Getter methods --------------------

    public get simpleName(): PredefinedConversion {
        return this.#simpleName
    }

    public get simpleNameAsNonNullable(): BasicPredefinedConversion {
        return this.#simpleNameAsNonNullable
    }

    public get parent(): | PredefinedConverter | this {
        return this.#parent ??= this.#parentCallback()
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract newConvertor(value: string, singleValue: | any | any[],): Converter<string, any>

    public abstract newValidation(validatingValue: | any | any[],): ValidationCallback

    public newValidationAsNonNullable(validatingValue: | any | any[],): ValidationCallback {
        return this.#callbackToCreateNewValidationAsNonNullable(validatingValue)
    }

    public abstract newConversion(value: string,): any

    public newConversionAsNonNullable(value: string,): any {
        return this.#callbackToCreateNewConversionAsNonNullable()(value)
    }


    public static hasValueByName(value: string,): value is PredefinedConversion
    public static hasValueByName(value: string,): boolean {
        return this.#findValueByName(value) != null
    }

    // public static getValueByName<T extends string, >(value: Nullable<| PredefinedConverter | T>,): PredefinedConverterByName<T>
    public static getValueByName(value: Nullable<| PredefinedConverter | string>,): PredefinedConverter {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof this)
            return value
        const valueFound = this.#findValueByName(value)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound
    }

    static #findValueByName(value: string,): NullOr<PredefinedConverter> {
        return this.values.find(it => it.simpleName === value.toLowerCase())
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return PredefinedConverter
    }

    public static getValue(value: PossibleValueByEnumerable<PredefinedConverter>,): PredefinedConverter {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<PredefinedConverter> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
