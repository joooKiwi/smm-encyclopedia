import {AbstractStringConverter} from "./AbstractStringConverter";
import {ConverterPatterns} from "./ConverterPatterns";
import {ConverterUtil} from "./ConverterUtil";

export class StringToBooleanConverter
    extends AbstractStringConverter<boolean> {

    public constructor(originalValue: string) {
        super(originalValue.toLowerCase());
    }


    protected _convertTheValue(validValue: string): boolean {
        return ConverterUtil.convertToBoolean(validValue);
    }

    public isValueValid(value: string): boolean {
        return ConverterPatterns.BOOLEAN_PATTERN.test(value);
    }

    protected _newError(): TypeError {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a boolean`);
    }

}