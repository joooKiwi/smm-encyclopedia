import {AbstractEmptyableStringConverter} from "./AbstractEmptyableStringConverter";
import {ConverterUtil} from "./ConverterUtil";
import {ConverterPatterns} from "./ConverterPatterns";

export class StringToNullableNumberConverter
    extends AbstractEmptyableStringConverter<number> {

    public constructor(originalValue: string) {
        super(originalValue);
    }


    protected _convertTheValue(validValue: string): number {
        return ConverterUtil.convertToNumber(validValue);
    }

    protected _isValueValid(nonEmptyValue: string): boolean {
        return ConverterPatterns.NUMBER_PATTERN.test(nonEmptyValue);
    }

    protected _newError(): TypeError {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a number`);
    }

}