import {Converter} from "./Converter";
import {PredefinedConversion, PrimitiveConversion} from "../CSVLoader";
import {StringToBooleanConverter} from "./StringToBooleanConverter";
import {StringToNumberConverter} from "./StringToNumberConverter";
import {StringToNonEmptyStringConverter} from "./StringToNonEmptyStringConverter";
import {StringToNullableNumberConverter} from "./StringToNullableNumberConverter";
import {StringToNullableBooleanConverter} from "./StringToNullableBooleanConverter";
import {StringToNullableStringConverter} from "./StringToNullableStringConverter";
import {StringToStringConverter} from "./StringToStringConverter";
import {ConverterPatterns} from "./ConverterPatterns";
import {ConverterUtil} from "./ConverterUtil";

/**
 * @enum
 */
export abstract class PredefinedConverter {

    public static readonly NUMBER = new class extends PredefinedConverter {
        public newStringToConvertor(value: string): Converter<string, any> {
            return new StringToNumberConverter(value);
        }

        public newValidation(): (value: string) => boolean {
            return value => ConverterPatterns.NUMBER_PATTERN.test(value);
        }

        public newConversion(value: string): number {
            return ConverterUtil.convertToNumber(value);
        }
    }('number');
    public static readonly NULLABLE_NUMBER = new class extends PredefinedConverter {
        public newValidation(): (value: string) => boolean {
            return value => value === '' || ConverterPatterns.NUMBER_PATTERN.test(value);
        }

        public newStringToConvertor(value: string): Converter<string, any> {
            return new StringToNullableNumberConverter(value);
        }

        public newConversion(value: string): null | number {
            return value === '' ? null : PredefinedConverter.NUMBER.newConversion(value);
        }
    }('nullable number', 'number');
    public static readonly BOOLEAN = new class extends PredefinedConverter {
        public newStringToConvertor(value: string): Converter<string, any> {
            return new StringToBooleanConverter(value);
        }

        public newValidation(): (value: string) => boolean {
            return value => ConverterPatterns.BOOLEAN_PATTERN.test(value);
        }

        public newConversion(value: string): boolean {
            return ConverterUtil.convertToBoolean(value);
        }
    }('boolean');
    public static readonly NULLABLE_BOOLEAN = new class extends PredefinedConverter {
        public newStringToConvertor(value: string): Converter<string, any> {
            return new StringToNullableBooleanConverter(value);
        }

        public newValidation(): (value: string) => boolean {
            return value => value === '' || ConverterPatterns.BOOLEAN_PATTERN.test(value);
        }

        public newConversion(value: string): null | boolean {
            return value === '' ? null : PredefinedConverter.BOOLEAN.newConversion(value);
        }
    }('nullable boolean', 'boolean');
    public static readonly STRING = new class extends PredefinedConverter {
        public newStringToConvertor(value: string): Converter<string, any> {
            return new StringToStringConverter(value);
        }

        public newValidation(): (value: string) => boolean {
            return () => true;
        }

        public newConversion(value: string): string {
            return value;
        }
    }('string');
    public static readonly NON_EMPTY_STRING = new class extends PredefinedConverter {
        public newStringToConvertor(value: string): Converter<string, any> {
            return new StringToNonEmptyStringConverter(value);
        }

        public newValidation(): (value: string) => boolean {
            return value => ConverterPatterns.NON_EMPTY_STRING_PATTERN.test(value);
        }

        public newConversion(value: string): null | string {
            return ConverterUtil.convertToNonEmptyString(value);
        }
    }('non empty string', 'string');
    public static readonly NULLABLE_STRING = new class extends PredefinedConverter {
        public newStringToConvertor(value: string): Converter<string, any> {
            return new StringToNullableStringConverter(value);
        }

        public newValidation(): (value: string) => boolean {
            return value => ConverterPatterns.NULLABLE_STRING_PATTERN.test(value);
        }

        public newConversion(value: string): null | string {
            return ConverterUtil.convertToNullableString(value);
        }
    }('nullable string', 'string');


    private static VALUES?: PredefinedConverter[];
    readonly #name;
    readonly #nameAsNonNullable;
    readonly #parent: () => PredefinedConverter;
    readonly #callbackToCreateNewValidationAsNonNullable: () => (value: string) => boolean;
    readonly #callbackToCreateNewConversionAsNonNullable: () => (value: string) => any;

    private constructor(name: PrimitiveConversion)
    private constructor(name: PredefinedConversion, nameAsNonNullable: PrimitiveConversion)
    private constructor(name: PredefinedConversion, nameAsNonNullable?: PrimitiveConversion) {
        this.#name = name;
        this.#nameAsNonNullable = nameAsNonNullable ?? name;
        if (nameAsNonNullable === undefined) {
            this.#parent = () => this;
            this.#callbackToCreateNewValidationAsNonNullable = () => this.newValidation();
            this.#callbackToCreateNewConversionAsNonNullable = () => value => this.newConversion(value);
        } else {
            this.#parent = () => PredefinedConverter.getValue(this.name);
            this.#callbackToCreateNewValidationAsNonNullable = () => this.parent.newValidation();
            this.#callbackToCreateNewConversionAsNonNullable = () => value => this.parent.newConversion(value);
        }
    }


    public get name() {
        return this.#name;
    }

    public get nameAsNonNullable() {
        return this.#nameAsNonNullable;
    }

    public get parent(): PredefinedConverter | this {
        return this.#parent();
    }


    public abstract newStringToConvertor(value: string): Converter<string, any>;

    public abstract newValidation(): (value: string) => boolean;

    public newValidationAsNonNullable(): (value: string) => boolean {
        return this.#callbackToCreateNewValidationAsNonNullable();
    }

    public abstract newConversion(value: string): any;

    public newConversionAsNonNullable(value: string): any {
        return this.#callbackToCreateNewConversionAsNonNullable();
    }


    //region -------------------- enum methods --------------------

    public static getValue(value: PredefinedConversion): PredefinedConverter
    public static getValue(value: string): PredefinedConverter | null
    public static getValue(value: string | PredefinedConversion): PredefinedConverter | null {
        let lowerCaseValue = value.toLowerCase();
        return this.values.find(predefinedConverter => predefinedConverter.name === lowerCaseValue) ?? null;
    }

    public static get values(): readonly PredefinedConverter[] {
        return this.VALUES ?? (this.VALUES = [
            this.NUMBER, this.NULLABLE_NUMBER,
            this.BOOLEAN, this.NULLABLE_BOOLEAN,
            this.STRING, this.NON_EMPTY_STRING, this.NULLABLE_STRING,
        ]);
    }

    //endregion -------------------- enum methods --------------------

}