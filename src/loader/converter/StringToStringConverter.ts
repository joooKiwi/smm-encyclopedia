import {AbstractStringConverter} from "./AbstractStringConverter";
import {ConverterPatterns} from "./ConverterPatterns";

export class StringToStringConverter
    extends AbstractStringConverter<string> {


    public constructor(originalValue: string) {
        super(originalValue.toLowerCase());
    }

    protected _convertTheValue(validValue: string): string {
        return validValue;

    }

    public isValueValid(value: string): boolean {
        return ConverterPatterns.NON_EMPTY_STRING_PATTERN.test(value);
    }

    protected _newError(): TypeError {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a string`);
    }


}